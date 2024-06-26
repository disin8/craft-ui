import { BlocksIcon } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function BlocksPage() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center items-center py-16 gap-4">
        <BlocksIcon size={256} />
        <h1 className="text-3xl font-semibold">
          Coming soon
        </h1>
        <p className="text-base text-neutral-500">In progress...</p>
        <Button asChild variant="default">
          <Link href="/" className="text-3xl font-semibold">
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  )
}
