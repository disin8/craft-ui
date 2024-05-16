import { cn } from '@/lib/utils'

interface FancyGlowingButtonProps {
  backgroundColor?: string
  borderRadius?: string
  red?: string
  pink?: string
  purple?: string
  blue?: string
  green?: string
  yellow?: string
  orange?: string
  className?: string
}

export function FancyGlowingButton({
  backgroundColor = '#000',
  borderRadius = '3rem',
  red = '#FF6565',
  pink = '#FF64F9',
  purple = '#6B5FFF',
  blue = '#4D8AFF',
  green = '#5BFF89',
  yellow = '#FFEE55',
  orange = '#FF6D1B',
  className,
}: FancyGlowingButtonProps) {
  return (
    <button
      style={
        {
          '--borderRadius': borderRadius,
          '--backgroundColor': backgroundColor,
          '--red': red,
          '--pink': pink,
          '--purple': purple,
          '--blue': blue,
          '--green': green,
          '--yellow': yellow,
          '--orange': orange,
        } as React.CSSProperties
      }
      className={cn(
        '[border:calc(0.08*var(--borderRadius))_solid_transparent] ',
        'relative flex items-center',

        // background

        'bg-origin-border [background-clip:padding-box,border-box,border-box] bg-[length:200%]',
        '[background-image:linear-gradient(var(--backgroundColor),var(--backgroundColor)),linear-gradient(var(--backgroundColor)_50%,rgba(0,0,0,0.3)_80%,rgba(18,18,19,0)),linear-gradient(90deg,var(--orange),var(--yellow),var(--green),var(--blue),var(--purple),var(--pink),var(--red))]',

        // animation

        'animate-fancy hover:animate-fancy-hover before:hover:animate-fancy-hover',

        // pseudo styles
        `before:left-0 before:m-auto before:right-0 before:absolute before:animate-fancy  before:content-[''] before:w-[75%] before:h-[30%] before:bottom-[-20%] before:-z-[5] before:bg-[length:200%] before:[filter:blur(calc(0.8*var(--borderRadius)))]`,
        'before:[background-image:linear-gradient(90deg,var(--orange),var(--yellow),var(--green),var(--blue),var(--purple),var(--pink),var(--red))]',
        className,
      )}
    >
      Glow
    </button>
  )
}
