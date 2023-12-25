import styles from './styles.module.scss';
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.headerWrap}>
      <div>
        Header
      </div>
      <ul className={styles.categoryWrap}>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/news">
          <li>News</li>
        </Link>
        <Link href="/dashboard">
          <li>Dashboard</li>
        </Link>
      </ul>
    </div>
  )
}
