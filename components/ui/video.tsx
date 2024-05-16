'use client'
import { useCallback, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import 'intersection-observer'

export default function Video({
  src,
  caption,
}: {
  src: string
  caption?: string
}) {
  const [inViewRef, inView] = useInView({
    threshold: 0.3,
  })
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const setRefs = useCallback(
    (node: HTMLVideoElement | null) => {
      // Ref's from useRef needs to have the node assigned to `current`
      videoRef.current = node
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node)

      if (node) {
        node.addEventListener('error', function () {
          console.error('Video loading error:', this.error)
        })
      }
    },
    [inViewRef, videoRef.current],
  )

  useEffect(() => {
    if (!videoRef || !videoRef.current)
      return

    if (inView && videoRef.current.paused)
      videoRef.current.play()
    else if (!inView && !videoRef.current.paused)
      videoRef.current.pause()
  }, [inView])

  return (
    <figure>
      <video loop muted preload="none" autoPlay playsInline ref={setRefs}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video element.
      </video>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
