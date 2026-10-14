import { editions, type EditionId } from '../editions';

export function getClassEditionRoute(classSlug: string, edition: EditionId): string {
	const config = editions[edition];
	return config.current || !config.routeSuffix
		? `/classes/${classSlug}/`
		: `/classes/${classSlug}-${config.routeSuffix}/`;
}
