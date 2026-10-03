<!--
	Location: src/lib/svelte/components/page/TableOfContents.svelte
	Use: Renders sticky in-page navigation from structured page-section data.
-->
<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageTableOfContentsSection } from '$lib/typescript/data/_index_';

	let {
		sections,
		isOpen: controlledIsOpen,
		onOpenChange
	}: {
		sections: readonly PageTableOfContentsSection[];
		isOpen?: boolean;
		onOpenChange?: (isOpen: boolean) => void;
	} = $props();
	let activeSectionId = $state('');
	let internalIsOpen = $state(true);
	let isOpen = $derived(controlledIsOpen ?? internalIsOpen);
	let pendingPulseId = '';
	let requestSectionUpdate: (() => void) | undefined;

	function setOpen(value: boolean): void {
		if (onOpenChange) onOpenChange(value);
		else internalIsOpen = value;
	}

	const sectionIcons: Record<string, string> = {
		'core-traits': '/icons/white/attribute/test.svg',
		'starting-equipment': '/icons/white/entity/pack.svg',
		progression: '/icons/white/entity/book.svg',
		'class-features': '/icons/white/util/build.svg',
		subclasses: '/icons/white/game/party.svg',
		faq: '/icons/white/util/bubble.svg'
	};

	function getSectionIcon(section: PageTableOfContentsSection) {
		return section.icon ?? sectionIcons[section.id];
	}

	function navigateToSection(event: MouseEvent, sectionId: string) {
		event.preventDefault();
		const sectionElement = document.getElementById(sectionId);
		if (!sectionElement) return;

		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			pendingPulseId = '';
			return sectionElement.scrollIntoView({ behavior: 'auto', block: 'start' });
		}

		document.querySelectorAll('.section-target-pulse').forEach((element) => {
			element.classList.remove('section-target-pulse');
		});
		pendingPulseId = sectionId;
		requestSectionUpdate?.();

		sectionElement.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}

	function getPulseTarget(anchor: HTMLElement): HTMLElement {
		return anchor.closest<HTMLElement>('[data-toc-pulse-target]') ?? anchor;
	}

	function flattenSections(
		items: readonly PageTableOfContentsSection[]
	): readonly PageTableOfContentsSection[] {
		return items.flatMap((section) => [
			...(section.isGroup ? [] : [section]),
			...flattenSections(section.children ?? [])
		]);
	}

	let flatSections = $derived(flattenSections(sections));

	onMount(() => {
		const tocBreakpoint = window.matchMedia('(min-width: 1700px)');
		const syncOpenStateWithViewport = () => {
			if (!tocBreakpoint.matches) setOpen(false);
		};

		syncOpenStateWithViewport();
		document.body.classList.add('toc-ready');
		tocBreakpoint.addEventListener('change', syncOpenStateWithViewport);

		let sectionElements: HTMLElement[] = [];
		let frame = 0;
		let pendingStableFrames = 0;
		const arrivalTolerance = 48;

		const getActivationOffset = () => {
			const navbarHeight = parseFloat(
				getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')
			) || 64;
			return navbarHeight + 24;
		};

		const refreshSections = () => {
			const elements = flatSections
				.map((section) => document.getElementById(section.id))
				.filter((element): element is HTMLElement => element !== null);
			const uniqueElements = [...new Set(elements)];

			sectionElements = uniqueElements.sort((first, second) => {
				if (first === second) return 0;
				const position = first.compareDocumentPosition(second);
				return position & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
			});
		};

		const updateActiveSection = () => {
			frame = 0;
			if (!sectionElements.length) return;

			const activationLine = getActivationOffset();
			let active = sectionElements[0];

			for (const sectionElement of sectionElements) {
				if (sectionElement.getBoundingClientRect().top <= activationLine) {
					active = sectionElement;
				} else {
					break;
				}
			}

			if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
				active = sectionElements[sectionElements.length - 1];
			}

			activeSectionId = active.id;

			if (pendingPulseId) {
				const anchor = document.getElementById(pendingPulseId);
				if (!anchor) {
					pendingPulseId = '';
					pendingStableFrames = 0;
				} else {
					const style = getComputedStyle(anchor);
					const scrollMarginTop = parseFloat(style.scrollMarginTop) || 0;
					const targetTop = anchor.getBoundingClientRect().top;
					const expectedTop = scrollMarginTop;
					const atDocumentEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
					const nearExpectedPosition = Math.abs(targetTop - expectedTop) <= arrivalTolerance;
					const reachedAtDocumentEnd = atDocumentEnd && anchor.getBoundingClientRect().bottom <= window.innerHeight + arrivalTolerance;

					if (nearExpectedPosition || reachedAtDocumentEnd) {
						pendingStableFrames += 1;
					} else {
						pendingStableFrames = 0;
					}

					if (pendingStableFrames >= 2) {
						pendingPulseId = '';
						pendingStableFrames = 0;
						const target = getPulseTarget(anchor);
						target.classList.remove('section-target-pulse');
						void target.offsetWidth;
						target.classList.add('section-target-pulse');
						target.addEventListener(
							'animationend',
							() => target.classList.remove('section-target-pulse'),
							{ once: true }
						);
					}
				}
			}
		};

		const requestUpdate = () => {
			if (!frame) frame = requestAnimationFrame(updateActiveSection);
		};
		const handleResize = () => {
			refreshSections();
			requestUpdate();
		};
		const cancelPendingNavigation = () => {
			pendingPulseId = '';
			pendingStableFrames = 0;
		};
		const layoutElement = document.querySelector('.page-layout');
		const layoutObserver = layoutElement
			? new ResizeObserver(() => {
				refreshSections();
				requestUpdate();
			})
			: undefined;
		requestSectionUpdate = requestUpdate;

		refreshSections();
		requestUpdate();
		window.addEventListener('scroll', requestUpdate, { passive: true });
		window.addEventListener('resize', handleResize);
		window.addEventListener('wheel', cancelPendingNavigation, { passive: true });
		window.addEventListener('touchstart', cancelPendingNavigation, { passive: true });
		layoutObserver?.observe(layoutElement!);

		return () => {
			tocBreakpoint.removeEventListener('change', syncOpenStateWithViewport);
			if (frame) cancelAnimationFrame(frame);
			window.removeEventListener('scroll', requestUpdate);
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('wheel', cancelPendingNavigation);
			window.removeEventListener('touchstart', cancelPendingNavigation);
		layoutObserver?.disconnect();
			requestSectionUpdate = undefined;
		};
	});
</script>

{#if sections.length >= 3}
	<nav
		class="table-of-contents"
		class:table-of-contents--closed={!isOpen}
		aria-label="On this page"
		aria-hidden={!isOpen}
		inert={!isOpen}
	>
			<header class="table-of-contents__header">
				<p class="table-of-contents__title">On this page</p>
				<button class="table-of-contents__close" type="button" aria-label="Hide on this page navigation" onclick={() => setOpen(false)}>
					<img src="/icons/white/util/cross.svg" alt="" aria-hidden="true" />
				</button>
			</header>

			<div class="table-of-contents__body">
			<ol class="table-of-contents__list">
			{#each sections as section}
				<li>
					{#if section.isGroup}
						<div class="table-of-contents__group-label">{section.title}</div>
					{:else}
					<a
						href={`#${section.id}`}
						onclick={(event) => navigateToSection(event, section.id)}
						aria-current={activeSectionId === section.id ? 'location' : undefined}
					>
						{#if getSectionIcon(section)}
							<img class="table-of-contents__icon" src={getSectionIcon(section)} alt="" aria-hidden="true" />
						{/if}
						{section.title}
					</a>
					{/if}

					{#if section.children?.length}
						<ol class="table-of-contents__list table-of-contents__list--nested">
							{#each section.children as child}
								<li>
									{#if child.isGroup}
										<div class="table-of-contents__group-label">{child.title}</div>
										<ol class="table-of-contents__list table-of-contents__list--features">
											{#each child.children ?? [] as feature}
												<li>
									<a href={`#${feature.id}`} onclick={(event) => navigateToSection(event, feature.id)} aria-current={activeSectionId === feature.id ? 'location' : undefined}>
														{#if getSectionIcon(feature)}
															<img class="table-of-contents__icon table-of-contents__icon--nested" src={getSectionIcon(feature)} alt="" aria-hidden="true" />
														{/if}
														{feature.title}
													</a>
												</li>
											{/each}
										</ol>
									{:else}
										<a href={`#${child.id}`} onclick={(event) => navigateToSection(event, child.id)} aria-current={activeSectionId === child.id ? 'location' : undefined}>
											{#if getSectionIcon(child)}
												<img class="table-of-contents__icon table-of-contents__icon--nested" src={getSectionIcon(child)} alt="" aria-hidden="true" />
											{/if}
											{child.title}
										</a>
									{/if}
								</li>
							{/each}
						</ol>
					{/if}
				</li>
			{/each}
			</ol>
			</div>

	</nav>
	<button
		class="table-of-contents__reopen"
		type="button"
		aria-label="Show on this page navigation"
		aria-hidden={isOpen}
		inert={isOpen}
		onclick={() => setOpen(true)}
	>
		On this page
	</button>
{/if}
