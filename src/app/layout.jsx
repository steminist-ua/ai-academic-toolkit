// src/app/layout.jsx
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'katex/dist/katex.min.css'
import 'nextra-theme-docs/style.css'
import SidebarProfile from '../components/SidebarProfile'
import '../styles/sidebar-footer.css'
import { withBasePath } from '../utils/basePath'

const iconPath = withBasePath('/icon_policy.png')

export const metadata = {
  title: 'Політика академічного використання ШІ',
  description: 'Документація політики використання ШІ в навчальному процесі',
  icons: {
    icon: [
      { url: iconPath, type: 'image/png', rel: 'icon' },
      { url: iconPath, rel: 'shortcut icon' }
    ],
    apple: iconPath
  }
}

const banner = (
  <Banner storageKey="ai-policy-banner">
    Nextra 4 · Документація політики ШІ
  </Banner>
)

const search = <Search placeholder="Пошук по документації…" />

const navbar = (
  <Navbar logo={<b>AI Policy</b>}>
     <a
  href="https://steminist-ua.github.io/ai-academic-toolkit/raid-g/"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    marginLeft: '16px',
    fontSize: '14px',
    fontWeight: '600',
    color: 'white',
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    border: 'none',
    borderRadius: '8px',
    textDecoration: 'none',
    boxShadow: '0 2px 8px rgba(99, 102, 241, 0.25)',
    transition: 'all 0.2s ease',
  }}
>
  📝 RAID-G: Генератор декларацій
</a>
  </Navbar>
)

const footer = (
  <Footer>
    MIT {new Date().getFullYear()} © STEMINIST UA
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="uk" dir="ltr" suppressHydrationWarning>
      <Head />
      <body suppressHydrationWarning>
        <Layout
          // banner={banner}
          navbar={navbar}
          footer={footer}
          sidebar={{ toggleButton: false }}
          feedback={{ content: null }}
          editLink={null}
          toc={{ title: 'На цій сторінці', extraContent: <SidebarProfile /> }}
          search={search}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/steminist-ua/ai-academic-toolkit/blob/master"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
