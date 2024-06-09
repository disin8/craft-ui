import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Suspense } from 'react'
import { StarsBadge, StarsBadgeFallback } from './stars'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <div className="my-10 flex w-full flex-col justify-center gap-1 px-3 py-4 text-center md:my-20 md:p-6">
      <div>
        <Badge variant="outline" className="backdrop-blur-[2px]">
          <Link
            href="/components"
            target="_blank"
            rel="noreferrer"
            className="flex items-center"
          >
            beatiful components
            <ChevronRight className="ml-1 h-3 w-3" />
          </Link>
        </Badge>
      </div>
      <div className="flex flex-col gap-6">
        <h1
          className={cn(
            'text-foreground font-cal text-2xl md:text-4xl md:leading-tight mt-8',
          )}
        >
          Elevate your React projects with
          {' '}
          <span className="block text-7xl font-bold gradient-text leading-normal">Craft UI</span>
        </h1>
        <p className="text-muted-foreground mx-auto max-w-md text-lg md:max-w-xl md:text-xl ">
          A comprehensive component library that seamlessly integrates Tailwind CSS and Framer Motion.
        </p>
      </div>
      <div className="my-4 grid gap-2 sm:grid-cols-2">
        <div className="text-center sm:block sm:text-right">
          <Button className="w-48 rounded-3xl sm:w-auto" asChild>
            <Link href="/components">Explore Components</Link>
          </Button>
        </div>
        <div className="text-center sm:block sm:text-left">
          <Button
            variant="outline"
            className="w-48 rounded-3xl sm:w-auto"
            asChild
          >
            <Link href="https://github.com/disin8/craft-ui" target="_blank">
              Star on GitHub
              {' '}
              <Suspense fallback={<StarsBadgeFallback />}>
                <StarsBadge />
              </Suspense>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
