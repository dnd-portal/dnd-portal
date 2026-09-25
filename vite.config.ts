import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		cssTarget: [
			'chrome87',
			'edge88',
			'firefox78',
			'safari14'
		],
		chunkSizeWarningLimit: 1000
	},

	plugins: [sveltekit()]
});
