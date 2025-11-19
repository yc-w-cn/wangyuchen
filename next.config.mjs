import { readFileSync } from 'fs';

import createMDX from '@next/mdx';
import dayjs from 'dayjs';

const isDevelopment = process.env.NODE_ENV === 'development';

const packageInfo = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url)),
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isDevelopment ? 'standalone' : 'export',

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: false,

  reactStrictMode: true,

  reactCompiler: true,

  // 配置 `pageExtensions` 以包含 markdown 和 MDX 文件
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],

  env: {
    NAME: packageInfo.name,
    BUILD_TIME: dayjs().format('YYYY-MM-DD HH:mm'),
    VERSION: packageInfo.version,
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  // Optionally provide remark and rehype plugins
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
