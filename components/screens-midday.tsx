'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Screen from 'public/images/1.jpeg'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { useMediaQuery } from '@/hooks/use-media-query'

let interval: any

interface Card {
  id: number
  content: React.ReactNode
  name: string
}

export function CardStack({
  items,
  scaleFactor,
}: {
  items: Card[]
  offset?: number
  scaleFactor?: number
}) {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const CARD_OFFSET = isDesktop ? 10 : 5
  const SCALE_FACTOR = scaleFactor || 0.06
  const [cards, setCards] = useState<Card[]>([items.at(0)])

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]
        newArray.unshift(newArray.pop()!)
        return newArray
      })
    }, 5000)
  }

  useEffect(() => {
    startFlipping()
    setCards(items)

    return () => clearInterval(interval)
  }, [])

  const onChangeCardByIndex = (index: number) => {
    const item = cards.at(index)
    setCards([item, ...cards.slice(0, index), ...cards.slice(index + 1)])
  }

  const onChangeCard = (item) => {
    const index = cards.findIndex(card => card.id === item.id)
    setCards([item, ...cards.slice(0, index), ...cards.slice(index + 1)])
  }

  return (
    <div
      className="relative h-[220px] md:h-[670px] w-[331px] md:w-[1031px] z-10"
      onMouseEnter={() => clearInterval(interval)}
    >
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute h-[220px] md:h-[670px] w-[331px] md:w-[1031px] flex flex-col justify-between"
            style={{
              transformOrigin: 'top center',
              display: index > 2 ? 'none' : 'block',
            }}
            whileHover={{
              top: index > 0 && index > 0 && index * -CARD_OFFSET - 30,
              transition: { duration: 0.3 },
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
            onMouseEnter={() => clearInterval(interval)}
          >
            <div className="rounded-md md:rounded-2xl border border-border overflow-hidden">
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="w-[35px] h-[20px] z-20 absolute top-[60px] left-[8px]"
                      onClick={() =>
                        onChangeCard(cards.find(c => c.id === 1))}
                    >
                      <span className="sr-only">Overview</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="py-1 px-3 rounded-sm"
                    sideOffset={8}
                  >
                    <p className="text-xs">Overview</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="w-[35px] h-[20px] z-20 absolute top-[95px] left-[8px]"
                      onClick={() =>
                        onChangeCard(cards.find(c => c.id === 5))}
                    >
                      <span className="sr-only">Transactions</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="py-1 px-3 rounded-sm"
                    sideOffset={8}
                  >
                    <p className="text-xs">Transactions</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="w-[35px] h-[20px] z-20 absolute top-[125px] left-[8px]"
                      onClick={() =>
                        onChangeCard(cards.find(c => c.id === 3))}
                    >
                      <span className="sr-only">Inbox</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="py-1 px-3 rounded-sm"
                    sideOffset={8}
                  >
                    <p className="text-xs">Inbox</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="w-[35px] h-[20px] z-20 absolute top-[160px] left-[8px]"
                      onClick={() =>
                        onChangeCard(cards.find(c => c.id === 2))}
                    >
                      <span className="sr-only">Tracker</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="py-1 px-3 rounded-sm"
                    sideOffset={8}
                  >
                    <p className="text-xs">Tracker</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="w-[35px] h-[20px] z-20 absolute top-[230px] left-[8px]"
                      onClick={() =>
                        onChangeCard(cards.find(c => c.id === 4))}
                    >
                      <span className="sr-only">Vault</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="py-1 px-3 rounded-sm"
                    sideOffset={8}
                  >
                    <p className="text-xs">Vault</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <div onClick={() => onChangeCardByIndex(index)}>
                {card.content}
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function ScreensMidday() {
  return (
    <div>
      <CardStack
        items={[
          {
            id: 1,
            name: 'Overview',
            content: (
              <Image
                quality={100}
                alt="Dashboard - Overview"
                src={Screen}
                width={1031}
                height={670}
                priority
              />
            ),
          },
          {
            id: 2,
            name: 'Tracker',
            content: (
              <Image
                quality={100}
                alt="Dashboard - Overview"
                src={Screen}
                width={1031}
                height={670}
                priority
              />
            ),
          },
          {
            id: 3,
            name: 'Inbox',
            content: (
              <Image
                quality={100}
                alt="Dashboard - Overview"
                src={Screen}
                width={1031}
                height={670}
                priority
              />
            ),
          },
          {
            id: 4,
            name: 'Vault',
            content: (
              <Image
                quality={100}
                alt="Dashboard - Overview"
                src={Screen}
                width={1031}
                height={670}
                priority
              />
            ),
          },
          {
            id: 5,
            name: 'Dashboard - Transactions',
            content: (
              <Image
                quality={100}
                alt="Dashboard - Overview"
                src={Screen}
                width={1031}
                height={670}
                priority
              />
            ),
          },
        ]}
      />
    </div>
  )
}
