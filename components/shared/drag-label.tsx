'use client'
import type { Dispatch, SetStateAction } from 'react'
import { useCallback, useEffect, useState } from 'react'

export function DragLabel({ value, setValue }: { value: number, setValue: Dispatch<SetStateAction<number>> }) {
  const [snapshot, setSnapshot] = useState(value)
  const [startVal, setStartVal] = useState(0)

  const onStart = useCallback(
    (event: any) => {
      setStartVal(event.clientX)
      setSnapshot(value)
    },
    [value],
  )

  useEffect(() => {
    const onUpdate = (event: MouseEvent) => {
      if (startVal)
        setValue(snapshot + event.clientX - startVal)
    }

    const onEnd = () => {
      setStartVal(0)
    }

    document.addEventListener('mousemove', onUpdate)
    document.addEventListener('mouseup', onEnd)
    return () => {
      document.removeEventListener('mousemove', onUpdate)
      document.removeEventListener('mouseup', onEnd)
    }
  }, [startVal, setValue, snapshot])

  return (
    <span
      onMouseDown={onStart}
      className="select-none cursor-ew-resize p-2 text-zinc-500"
    >
      Drag
    </span>
  )
}
