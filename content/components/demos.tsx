import { AnimatedTabs } from '@/components/animated-tabs'
import { BackgroundBlobs } from '@/components/background-blobs'
import CardStack from '@/components/card-stack'
import { DotPattern } from '@/components/dot-pattern'
import { FancyGlowingButton } from '@/components/fancy-glowing-button'
import { Globe } from '@/components/globe'
import { GridPattern } from '@/components/grid-pattern'
import { HoldToConfirm } from '@/components/hold-to-confirm'
import Marquee from '@/components/marquee'
import { PitchCarusel } from '@/components/pitch'
import { SpotLight } from '@/components/spot-light'
import { TextReveal } from '@/components/text-opacity-onscroll'
import { TweetComponent } from '@/components/tweet'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function DemoFallback() {
  return (
    <section className="flex h-[100px] animate-pulse items-center justify-center rounded-xl border border-dashed text-zinc-500 sm:h-[104px]">
      Demo loading...
    </section>
  )
}

type DemoContainerProps = React.ComponentProps<'section'>

export function DemoContainer({ children, className, ...props }: DemoContainerProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden min-h-96 not-prose flex flex-wrap items-center justify-center gap-2 rounded-xl border border-dashed p-2',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}

export function BlobBackgroundDemo() {
  return (
    <DemoContainer>
      <BackgroundBlobs />
      <div className="w-96 h-36 rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-gray-200 dark:ring-gray-800 ring-0 shadow backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 backdrop-saturate-200">
        <div className="h-full flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Backgorund Blobs
          </p>
        </div>
      </div>
    </DemoContainer>
  )
}

export function FancyGlowingButtonDemo() {
  return (
    <DemoContainer>
      <div className="z-10 flex min-h-[16rem] items-center justify-center">
        <FancyGlowingButton
          borderRadius="2rem"
          className="px-12 py-6 rounded-3xl text-white"
        />
      </div>
    </DemoContainer>
  )
}

export function GlobeDemo() {
  return (
    <DemoContainer>
      <Globe />
    </DemoContainer>
  )
}

export function CardStackDemo() {
  return (
    <DemoContainer>
      <CardStack items={[
        { id: '1', handle: 'boop', text: 'boop' },
        { id: '2', text: 'anonymous' },
        { id: '3', handle: 'craft', text: 'craft-ui' },
      ]}
      />
    </DemoContainer>
  )
}

export function MarqueeDemo() {
  const tweets = ['20', '234', '1683920951807971329']
  return (
    <DemoContainer>
      <Marquee className="[--duration:20s]">
        {tweets.map(id => (
          <TweetComponent id={id} />
        ))}
      </Marquee>
    </DemoContainer>
  )
}
export function MarqueeVerticalDemo() {
  const tweets = ['20', '1770162462647845038', '1683920951807971329']
  return (
    <DemoContainer className="max-h-96">
      <Marquee vertical pauseOnHover className="[--duration:20s]">
        {tweets.map(id => (
          <TweetComponent id={id} />
        ))}
      </Marquee>
    </DemoContainer>
  )
}

export function TweetDemo() {
  return (
    <DemoContainer>
      <TweetComponent id="1683920951807971329" />
    </DemoContainer>
  )
}

export function AnimatedTabsDemo() {
  return (
    <DemoContainer>
      <AnimatedTabs />
    </DemoContainer>
  )
}

export function DotPatternDemo() {
  return (
    <DemoContainer>
      <DotPattern />
    </DemoContainer>
  )
}

export function GridPatternDemo() {
  return (
    <DemoContainer>
      <GridPattern />
    </DemoContainer>
  )
}

export function SpotLightDemo() {
  return (
    <DemoContainer>
      <SpotLight>
        <TweetComponent id="20" />
      </SpotLight>
    </DemoContainer>
  )
}

export function HoldToConfirmDemo() {
  return (
    <DemoContainer>
      <HoldToConfirm text="Hold" />
    </DemoContainer>
  )
}

export function HoldToConfirmDemo2() {
  return (
    <DemoContainer>
      <Button asChild className="w-56" variant="secondary" size="lg">
        <HoldToConfirm text="Hold" />
      </Button>
    </DemoContainer>
  )
}

export function PitchDemo() {
  return (
    <DemoContainer>
      <GridPattern width={200} height={200} className="opacity-50" />
      <PitchCarusel />
    </DemoContainer>
  )
}

export function TextOpacityOnScrollDemo() {
  return (
    <DemoContainer>
      Scroll
      <div className="pt-[600px] pb-8 text-sm">
        <TextReveal className="text-4xl" byChars paragraph='Not to knock them, on the contrary, they have their use cases and cool. Some are even "marketed" as such and are still very handy for simple caching system.' />
      </div>
    </DemoContainer>
  )
}
