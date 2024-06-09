import { origin } from '@/lib/utils'

export interface IFeatureListItem {
  video: string
  name: string
  description: string
  href: string
}

export type IFeatureList = IFeatureListItem[]

export const featuresList: IFeatureList = [
  {
    video: `${origin}/videos/globe.mp4`,
    name: 'Globe',
    description: 'An interactive Globe component built with WebGL',
    href: 'components/globe',
  },
  {
    video: `${origin}/videos/anim-numbers.mp4`,
    name: 'Animated Number',
    description: 'An animated number using framer-motion',
    href: 'components/animated-number',
  },
  {
    video: `${origin}/videos/anim-tabs.mp4`,
    name: 'Animated Tabs',
    description: 'Animated tabs using framer-motion',
    href: 'components/animated-tabs',
  },
  {
    video: `${origin}/videos/bg-blobs.mp4`,
    name: 'Background Blobs',
    description: 'An animated blobs on your background',
    href: 'components/background-blobs',
  },
  {
    video: `${origin}/videos/card-stack.mp4`,
    name: 'Card Stack',
    description: 'Multiple card stack with interacitvity',
    href: 'components/card-stack',
  },
  {
    video: `${origin}/videos/marquee.mp4`,
    name: 'Marquee',
    description: 'An infinite scrolling component that can be used to display text, images, or videos',
    href: 'components/marquee',
  },
  {
    video: `${origin}/videos/pitch.mp4`,
    name: 'Pitch',
    description: 'Pitch your product',
    href: 'components/pitch',
  },
  {
    video: `${origin}/videos/spot-light.mp4`,
    name: 'Spot light',
    description: 'Spot light for any card component',
    href: 'components/spot-light',
  },
]

export const buttonsList: IFeatureList = [
  {
    video: `${origin}/videos/fancy-button.mp4`,
    name: 'Fancy Glow Button',
    description: 'Fancy glow effect with hover.',
    href: 'components/buttons/fancy-glow',
  },
  {
    video: `${origin}/videos/hold-to-confirm.mp4`,
    name: 'Hold to confirm',
    description: 'A button with hold to confirm effect',
    href: 'components/hold-to-confirm',
  },
]
