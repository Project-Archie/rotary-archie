// BASE must match BASE in scripts/stage_site.py. A custom domain changes both (site -> the domain, base -> '/').
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

export default defineConfig({
  site: 'https://project-archie.github.io',
  base: '/rotary-archie',
  integrations: [
    starlight({
      title: 'Project Archie',
      description: 'A community-built reference guide that plugs into your own AI assistant and answers Rotary policy questions with citations to the governing documents.',
      logo: { src: './src/assets/archie.png', alt: 'Archie' },
      favicon: '/favicon.png',
      social: [{ icon: 'github', label: 'Archie on GitHub', href: 'https://github.com/Project-Archie/rotary-archie' }],
      customCss: ['@fontsource/open-sans/400.css', '@fontsource/open-sans/700.css', './src/styles/archie.css'],
      components: { Footer: './src/components/Footer.astro' },
      // the home page is a hand-built Astro page (src/pages/index.astro), which the validator cannot see
      plugins: [starlightLinksValidator({ exclude: ['/rotary-archie/'] })],
      sidebar: [
        'start-here',
        { label: 'Get Archie', items: ['get/claude', 'get/chatgpt', 'get/grok', 'get/cli', 'get/no-assistant', 'get/test', 'get/update'] },
        { label: 'Use Archie', items: ['use/prompts', 'use/prompts/basic', 'use/prompts/intermediate', 'use/prompts/strategic', 'use/answers', 'use/memory'] },
        'customize',
        'companions',
        { label: 'About', items: ['about', 'about/sources', 'about/changelog'] },
      ],
    }),
  ],
});
