import styles from './styles.module.scss';
import BannerLogin from "@/assets/images/auth/banner-login.png";
import Image from "next/image";
import FormLogin from "./components/FormLogin";

export default function Login() {
  return (
    <div className={`${styles.loginWrap}`}>
      <div className={styles.bannerWrap}>
        <Image
          className={styles.bgImageBannerWrap}
          src={BannerLogin}
          alt="Picture of the author"
        />
        <div className={styles.titleWrap}>
          Welcome Login
        </div>
      </div>

      <div className={styles.mainWrap}>
        <FormLogin />
      </div>
    </div>
  )
}
