// next.config.mjs
import nextra from 'nextra'

const withNextra = nextra({
  latex: true, // Увімкнути підтримку LaTeX
}) // <-- без theme/themeConfig у v4

const isProd = process.env.NODE_ENV === 'production'
const repoBase = '/ai-academic-toolkit'

export default withNextra({
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  assetPrefix: isProd ? `${repoBase}/` : undefined,
  basePath: isProd ? repoBase : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoBase : ''
  },
  images: {
    unoptimized: true
  }
})
