'use client'
import { useState } from 'react'
import { Maximize2Icon, Minimize2Icon } from 'lucide-react'

export interface ICard {
  id: string
  text: string
  handle?: string
}

export default function CardStack({ items }: { items: ICard[] }) {
  const [zoom, setZoom] = useState<number>(-1)

  return (
    <div className="overflow-hidden pt-40 w-full" onClick={() => setZoom(-1)}>
      <h3 className="text-2xl font-semibold text-center md:mb-8 mb-16">
        Card Stack
      </h3>
      <div className="w-full h-[512px] relative flex items-end justify-center group/item">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              onClick={(e) => {
                e.stopPropagation()
              }}
              style={{
                top:
                  zoom === items.indexOf(item)
                    ? 0
                    : items.indexOf(item) * 64,
                scale:
                  zoom === items.indexOf(item)
                    ? '1'
                    : `0.9${4 * items.indexOf(item)}`,
                zIndex:
                  zoom === items.indexOf(item)
                    ? 20
                    : items.indexOf(item),
                opacity:
                  zoom !== -1 && zoom !== items.indexOf(item)
                    ? 0
                    : 1,
              }}
              className={
                `rounded-3xl group/singleletter md:w-2/3 w-full mx-auto p-6 border border-zinc-200 bg-zinc-50 absolute shadow-2xl shadow-black/5 transition-all dark:border-zinc-800 dark:bg-zinc-950 ${zoom === items.indexOf(item)
                  ? 'bg-white dark:bg-zinc-900'
                  : 'md:hover:-translate-y-8 hover:bg-white hover:shadow-black/10 dark:hover:bg-zinc-900 dark:hover:shadow-none'}`
              }
            >
              {items.indexOf(item) !== zoom
                ? (
                  <Maximize2Icon
                    onClick={() => {
                      setZoom(items.indexOf(item))
                    }}
                    className="absolute z-10 top-4 border right-4 w-9 h-9 p-1 text-white bg-black hover:bg-zinc-800 border-zinc-800 hover:border-zinc-600 transition-colors rounded-full cursor-pointer dark:text-black dark:bg-white dark:hover:bg-zinc-200 dark:border-zinc-200 dark:hover:border-zinc-400"
                  />
                  )
                : (
                  <Minimize2Icon
                    onClick={() => {
                      setZoom(-1)
                    }}
                    className="absolute z-10 top-4 border right-4 w-9 h-9 p-1 text-white bg-black hover:bg-zinc-800 border-zinc-800 hover:border-zinc-600 transition-colors rounded-full cursor-pointer dark:text-black dark:bg-white dark:hover:bg-zinc-200 dark:border-zinc-200 dark:hover:border-zinc-400"
                  />
                  )}
              <div className="w-full h-40 flex gap-4 md:flex-row flex-col">
                <div
                  className={
                    `w-full h-full ${zoom === items.indexOf(item)
                      ? 'text-black dark:text-white'
                      : 'text-zinc-400 group-hover/singleletter:text-black dark:group-hover/singleletter:text-white'}`
                  }
                >
                  <p className="pr-8">{item.text}</p>
                </div>
              </div>
              {item.handle && (
                <div
                  className={
                    `absolute -top-8 transition-opacity pointer-events-none flex ${zoom === items.indexOf(item)
                      ? 'opacity-100'
                      : 'opacity-0 md:group-hover/singleletter:opacity-100'}`
                  }
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://unavatar.io/${item.handle}`}
                      className="w-6 h-6 rounded-full"
                    />
                    {' '}
                    <p>{item.handle}</p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
