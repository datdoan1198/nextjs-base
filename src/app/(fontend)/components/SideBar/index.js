import Link from 'next/link'

export default function SideBar() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/news">News</Link>
        </li>
      </ul>
    </div>
  )
}

