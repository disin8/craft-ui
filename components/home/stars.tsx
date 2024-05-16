import { getGitHubStars } from '@/lib/github'
import { numberFormatter } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

export function StarsBadgeFallback() {
  return (
    <Badge variant="secondary" className="ml-1">
      ~
    </Badge>
  )
}

export function getStaticProps() {
  return getGitHubStars()
}

export async function StarsBadge() {
  const stars = await getGitHubStars()
  return (
    <>
      <Badge variant="secondary" className="ml-1 hidden sm:block">
        {numberFormatter(stars)}
      </Badge>
      <Badge variant="secondary" className="ml-1 block sm:hidden">
        {stars}
      </Badge>
    </>
  )
}
