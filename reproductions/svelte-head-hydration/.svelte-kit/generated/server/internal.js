
import root from '../root.js';
import { set_building, set_prerendering } from '$app/env/internal';
import { set_assets } from '$app/paths/internal/server';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env } from '../../../../../node_modules/.pnpm/@sveltejs+kit@2.70.1_@svelt_f3531010e8d3bdf1f650d63f27fe6fd8/node_modules/@sveltejs/kit/src/runtime/shared-server.js';
import error from '../shared/error-template.js';

export const options = {
	app_template_contains_nonce: false,
	async: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	csrf_trusted_origins: [],
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	service_worker_options: undefined,
	server_error_boundaries: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<script>\n\t\t\twindow.__headReproRemovals = [];\n\t\t\tnew MutationObserver((mutations) => {\n\t\t\t\tfor (const mutation of mutations) {\n\t\t\t\t\tfor (const node of mutation.removedNodes) {\n\t\t\t\t\t\tif (node.nodeType === Node.ELEMENT_NODE && (node.matches('link[rel=\"stylesheet\"]') || node.querySelector('link[rel=\"stylesheet\"]'))) {\n\t\t\t\t\t\t\twindow.__headReproRemovals.push({ node: node.outerHTML, stack: new Error().stack });\n\t\t\t\t\t\t\tconsole.error('Removed stylesheet:', node.outerHTML);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}).observe(document.head, { childList: true, subtree: true });\n\t\t</script>\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n</html>\n",
		error
	},
	version_hash: "1smcykw"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation };
