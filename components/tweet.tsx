import { getTweet } from 'react-tweet/api'
import {
  EmbeddedTweet,
  TweetNotFound,
  type TweetProps,
} from 'react-tweet'
import './tweet.css'

async function TweetContent({ id, components, onError }: TweetProps) {
  let error
  const tweet = id
    ? await getTweet(id).catch((err) => {
      if (onError) {
        error = onError(err)
      }
      else {
        console.error(err)
        error = err
      }
    })
    : undefined

  if (!tweet) {
    const NotFound = components?.TweetNotFound || TweetNotFound
    return <NotFound error={error} />
  }

  return <EmbeddedTweet tweet={tweet} components={components} />
}

const ReactTweet = (props: TweetProps) => <TweetContent {...props} />

export async function TweetComponent({ id }: { id: string }) {
  return (
    <div className="tweet">
      <div className="flex justify-center">
        <ReactTweet id={id} />
      </div>
    </div>
  )
}
