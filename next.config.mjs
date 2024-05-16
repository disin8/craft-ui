import createMDX from 'fumadocs-mdx/config'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // redirects: async () => {
  //   return [
  //     {
  //       source: '/docs',
  //       destination: '/docs/installation',
  //       permanent: false,
  //     },
  //   ]
  // },
}

export default withMDX(config)
