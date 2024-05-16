import { Layout } from 'fumadocs-ui/layout'
import { layoutOptions } from './layout.config'
import { Hero } from '@/components/home/hero'

export default function HomePage() {
  return (
    <main className="h-screen">
      <Layout {...layoutOptions}>
        <Hero />
      </Layout>
    </main>
  )
}
