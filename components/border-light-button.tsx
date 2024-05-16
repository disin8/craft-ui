import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

interface BorderLightButtonProps {
  borderLightColor?: string
  borderLightSize?: string
  borderRadius?: string
  borderLightDuration?: string
  background?: string
  className?: string
  children?: React.ReactNode
  [key: string]: any // ...props
}

function BorderLightButton({
  borderLightColor = '#ffffff',
  borderLightSize = '0.1em',
  borderLightDuration = '2s',
  borderRadius = '16px',
  background = '#EF4444',
  className,
  children,
  ...props
}: BorderLightButtonProps) {
  return (
    <button
      style={
        {
          '--spread': '90deg',
          '--radius': borderRadius,
          '--speed': borderLightDuration,
          '--light-size': borderLightSize,
          '--bg': background,
        } as CSSProperties
      }
      className={cn(
        'group relative overflow-hidden whitespace-nowrap px-3 py-2 [background:var(--bg)] [border-radius:var(--radius)] ',
        'transition-all duration-200',
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-visible [container-type:size]">
        <div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none] ">
          <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
        </div>
      </div>

      <div className="absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--light-size)]" />

      <div className="pointer-events-none relative z-10 flex text-sm">
        {children}
      </div>
    </button>
  )
}

export default BorderLightButton
