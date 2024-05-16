import { createMDXSource } from 'fumadocs-mdx'
import { loader } from 'fumadocs-core/source'
import { map } from '@/.map'

export const { getPage, getPages, pageTree } = loader({
  baseUrl: '/components',
  rootDir: 'components',
  source: createMDXSource(map),
})
