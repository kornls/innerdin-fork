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
        href="/findid"
        className={`link ${router.pathname == "/findid" ? "link-active" : ""}`}
      >
        Find Your ID
      </Link>
      <Link
        href="/whatsid"
        className={`link ${router.pathname == "/whatsid" ? "link-active" : ""}`}
      >
        What&apos;s ID
      </Link>
    </nav>
  )
}
