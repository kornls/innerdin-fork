import Template from "../components/Template"
import Link from "next/link"

export default function Home() {
  return (
    <Template>
      <header className="text-center">
        <h1 className="font-extrabold text-6xl">Din</h1>
        <p className="text-lg max-w-xl">
          Hi, I&apos;m a tall black man with a GPA of 3.89.
        </p>
        <div className="flex gap-2 mt-6 justify-center">
          <Link href="projects" className="btn-primary">
            Projects
          </Link>
          <Link href="din" className="btn-secondary">
            About Me
          </Link>
        </div>
      </header>
    </Template>
  )
}
