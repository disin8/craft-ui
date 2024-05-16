import { DocsLayout } from 'fumadocs-ui/layout'
import type { ReactNode } from 'react'
import { layoutOptions } from '../layout.config'

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...layoutOptions}>
      {children}
    </DocsLayout>
  )
}
