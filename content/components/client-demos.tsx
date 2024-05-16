'use client'

import { useRef, useState } from 'react'
import { DemoContainer } from './demos'
import { DragLabel } from '@/components/shared/drag-label'
import { AnimatedNumber } from '@/components/animated-number'
import { Input } from '@/components/ui/input'
import { useDebounce } from '@/hooks/use-debounce'
import { EnergyRay } from '@/components/enery-ray'

export function AnimatedNumberDemo() {
  const [value, setValue] = useState(100)
  const animate = useDebounce(value, 500)

  return (
    <DemoContainer>
      <div className="flex w-full max-w-sm items-center flex-col gap-3">
        <AnimatedNumber value={animate} className="text-6xl" />
        <div className="flex gap-2">
          <DragLabel value={value} setValue={setValue} />

          <Input value={value} onChange={e => setValue(+e.target.value)} />
        </div>
      </div>
    </DemoContainer>
  )
}

export function EnergyRayDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)

  return (
    <DemoContainer>
      <div
        className="relative w-full overflow-hidden bg-background p-10"
        ref={containerRef}
      >
        <div className="flex flex-row justify-between">
          <div ref={div1Ref}>
          </div>
          <div ref={div2Ref}>
          </div>
          <div ref={div3Ref}>
          </div>
        </div>

        <EnergyRay
          duration={4}
          curvature={75}
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div2Ref}
        />
        <EnergyRay
          duration={4}
          curvature={-75}
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div3Ref}
        />
      </div>
    </DemoContainer>
  )
}
