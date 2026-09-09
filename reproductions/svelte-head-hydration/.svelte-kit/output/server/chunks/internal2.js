//#region ../../node_modules/.pnpm/@sveltejs+kit@2.70.1_@svelt_f3531010e8d3bdf1f650d63f27fe6fd8/node_modules/@sveltejs/kit/src/runtime/app/paths/internal/server.js
var base = "";
var assets = base;
var app_dir = "_app";
var initial = {
	base,
	assets
};
initial.base;
/**
* @param {{ base: string, assets: string }} paths
*/
function override(paths) {
	base = paths.base;
	assets = paths.assets;
}
function reset() {
	base = initial.base;
	assets = initial.assets;
}
/** @param {string} path */
function set_assets(path) {
	assets = initial.assets = path;
}
//#endregion
//#region ../../node_modules/.pnpm/@sveltejs+kit@2.70.1_@svelt_f3531010e8d3bdf1f650d63f27fe6fd8/node_modules/@sveltejs/kit/src/runtime/app/env/internal.js
var version = "1788961994558";
var prerendering = false;
function set_building() {}
function set_prerendering() {
	prerendering = true;
}
//#endregion
export { app_dir as a, override as c, version as i, reset as l, set_building as n, assets as o, set_prerendering as r, base as s, prerendering as t, set_assets as u };
