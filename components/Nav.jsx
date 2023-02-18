import Link from "next/link"
import { useRouter } from "next/router"

export default function Nav() {
  const router = useRouter()

  return (
    <nav className="flex justify-center mb-20 mt-4 text-[17px]">
      <Link
        href="/"
        className={`link ${router.pathname == "/" ? "link-active" : ""}`}
      >
        Home
      </Link>
      <Link
        href="/projects"
        className={`link ${
          router.pathname == "/projects" ? "link-active" : ""
        }`}
      >
        Projects
      </Link>
      <Link
        href="/din"
        className={`link ${router.pathname == "/din" ? "link-active" : ""}`}
      >
        About Me
      </Link>
    </nav>
  )
}
