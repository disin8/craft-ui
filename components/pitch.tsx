'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useHotkeys } from 'react-hotkeys-hook'
import { ChevronLeft, ChevronRight, Share } from 'lucide-react'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '@/components/ui/carousel'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

function CarouselToolbar() {
  const api = useCarousel()

  useHotkeys('arrowRight', () => api.scrollNext(), [api])
  useHotkeys('arrowLeft', () => api.scrollPrev(), [api])

  return (
    <div className="absolute flex justify-center left-0 -bottom-36 w-full">
      <AnimatePresence>
        <motion.div animate={{ y: 0 }} initial={{ y: 100 }}>
          <TooltipProvider delayDuration={20}>
            <div className="flex backdrop-filter backdrop-blur-lg dark:bg-[#1A1A1A]/80 h-10 px-4 py-2 border border-[#2C2C2C] items-center rounded-2xl space-x-4">
              <Tooltip>
                <TooltipTrigger>
                  <Share
                    size={18}
                    className="text-[#878787] -mt-[1px]"
                  />
                </TooltipTrigger>
                <TooltipContent
                  className="py-1 px-3 rounded-sm"
                  sideOffset={25}
                >
                  <span className="text-xs">Share</span>
                </TooltipContent>
              </Tooltip>

              <div className="flex items-center border-l-[1px] border-border pl-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      disabled={!api?.canScrollPrev}
                      className={cn(!api?.canScrollPrev && 'opacity-50')}
                      onClick={() => {
                        api.scrollPrev()
                      }}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    className="py-1 px-3 rounded-sm"
                    sideOffset={25}
                  >
                    <span className="text-xs">Previous slide</span>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      disabled={!api?.canScrollNext}
                      className={cn(!api?.canScrollNext && 'opacity-50')}
                      onClick={() => {
                        api.scrollNext()
                      }}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    className="py-1 px-3 rounded-sm"
                    sideOffset={25}
                  >
                    <span className="text-xs">Next slide</span>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </TooltipProvider>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export function PitchCarusel() {
  const called = useRef(false)
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!called.current)
      called.current = true
  }, [called.current])

  useEffect(() => {
    if (!api)
      return

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Carousel className="w-full min-h-full relative" setApi={setApi}>
      <CarouselContent>
        <CarouselItem>
          <div className="flex flex-col items-center justify-center container">
            Slide 1
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex flex-col items-center justify-center container">
            Slide
            {' '}
            {current}
          </div>
        </CarouselItem>
      </CarouselContent>

      <CarouselToolbar />
    </Carousel>
  )
}
