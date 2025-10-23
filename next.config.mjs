// next.config.mjs
import nextra from 'nextra'

const withNextra = nextra({
  latex: true, // Увімкнути підтримку LaTeX
}) // <-- без theme/themeConfig у v4

export default withNextra({
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  }
})
