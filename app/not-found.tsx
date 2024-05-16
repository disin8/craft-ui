import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">

      <span className="mb-4 text-9xl  font-bold">404</span>
      <h1 className="relative z-10 text-3xl font-bold tracking-tighter sm:text-5xl">
        Page Not Found
      </h1>
      <Link href="/" className="text-foreground mt-8 font-semibold underline">
        Go Home
      </Link>
    </main>
  )
}
