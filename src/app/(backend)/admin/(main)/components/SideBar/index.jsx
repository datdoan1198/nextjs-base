import Link from "next/link";
import styles from './styles.module.scss';

export default function SideBar() {
  return(
    <div className={styles.sideBarWrap}>
      <div className={styles.headerWrap}>
        Logo
      </div>
      <ul className={styles.navMenuWrap}>
        <Link href="/admin">
          <li className={styles.navItemWrap}>Home</li>
        </Link>
        <Link href="/admin/user">
          <li className={styles.navItemWrap}>User</li>
        </Link>
      </ul>
    </div>
  )
}
