import type { DocsLayoutProps } from 'fumadocs-ui/layout'
import { FileCode } from 'lucide-react'
import { pageTree } from './source'
import { Brand } from '@/components/brand'

export const layoutOptions: Omit<DocsLayoutProps, 'children'> = {
  tree: pageTree,
  nav: { transparentMode: 'top', title: <Brand />, githubUrl: 'https://github.com/disin8/craft-ui' },
  links: [
    {
      text: 'Components',
      url: '/components',
      icon: <FileCode />,
    },
    {
      text: 'Blocks',
      url: '/blocks',
      icon: <FileCode />,
    },
  ],
}
