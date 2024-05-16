import type { DocsLayoutProps } from 'fumadocs-ui/layout'
import { FileCode } from 'lucide-react'
import { pageTree } from './source'

export const layoutOptions: Omit<DocsLayoutProps, 'children'> = {
  tree: pageTree,
  nav: { transparentMode: 'top', title: 'craft UI', githubUrl: 'https://github.com/fuma-nama/fumadocs' },
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
