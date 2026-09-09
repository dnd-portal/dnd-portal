export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.FDLbxNYR.js",app:"_app/immutable/entry/app.BSgKNw55.js",imports:["_app/immutable/entry/start.FDLbxNYR.js","_app/immutable/chunks/DQJimtpw.js","_app/immutable/chunks/BUWaG0La.js","_app/immutable/entry/app.BSgKNw55.js","_app/immutable/chunks/BUWaG0La.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
