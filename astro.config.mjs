import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
	output: 'server',
	site: 'http://testing-astro-ssr-test-xrmouw-f0ce2e-159-195-28-226.traefik.me/',
	adapter: node({
		mode: "standalone"
	  }),
	server:{
		port: 3000,
		host: true
	},
	vite:{
		ssr: {
			noExternal: ['path-to-regexp'],
		  },
		preview: {
			port: 3000,
			host: true
		}
	}
});
