'use client'

import { useState } from 'react'
import { DemoContainer } from './demos'
import { DragLabel } from '@/components/shared/drag-label'
import { AnimatedNumber } from '@/components/animated-number'
import { Input } from '@/components/ui/input'
import { useDebounce } from '@/hooks/use-debounce'

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
