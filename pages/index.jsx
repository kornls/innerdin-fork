import Template from "../components/Template"
import Link from "next/link"

export default function Home() {
  return (
    <Template>
      <header className="text-center">
        <h1 className="font-extrabold text-6xl">Inner Din</h1>
        <p className="text-lg max-w-xl">
          Inner Din, or ID for short, is a spiritual power inside of you that
          can can enlighten you and awaken your inner talents and desires.
        </p>
        <div className="flex gap-2 mt-6 justify-center">
          <Link href="findid" className="btn-primary">
            Find Your ID
          </Link>
          <Link href="findid" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </header>
    </Template>
  )
}
