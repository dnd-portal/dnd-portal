import { n as head } from "../../chunks/server.js";
//#region src/routes/+page.svelte
function _page($$renderer) {
	head("1uha8ag", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Svelte head hydration reproduction</title>`);
		});
	});
	$$renderer.push(`<main><h1>Svelte head hydration reproduction</h1> <p>This page intentionally mismatches a conditional head node between SSR and the browser.</p></main>`);
}
//#endregion
export { _page as default };
