import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		})
	},
	vitePlugin: {
		compilerOptions: {
			// Force runes mode for the project, except for libraries.
			runes: ({ filename }) =>
				filename.split(/[/\\\\]/).includes('node_modules') ? undefined : true
		}
	}
};
