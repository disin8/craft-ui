import Link from 'next/link'
import type { IFeatureList, IFeatureListItem } from '@/config/components'
import Video from '@/components/ui/video'

export function Features({ list }: { list: IFeatureList }) {
  return (
    <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-white/5 pt-10 sm:grid-cols-2 lg:grid-cols-2">
      {list.map(item => (
        <FeatureCard {...item} key={item.name} />
      ))}
    </div>
  )
}

function FeatureCard({ video, name, description, href }: IFeatureListItem) {
  return (
    <Link
      href={href}
      className="overflow-hidden relative rounded-[--radius] bg-neutral-300 dark:bg-primary/10 p-2 [--radius:theme(borderRadius.2xl)]"
    >
      <div className="relative overflow-hidden rounded-xl">
        <Video src={video} />
      </div>
      <div className="relative px-4 pb-2 pt-4">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="mt-2 text-netural-500">{description}</p>
      </div>
    </Link>
  )
}
