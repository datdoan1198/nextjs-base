import BgAuth from '@/assets/images/auth/back-ground-auth.png';
import Image from 'next/image';
import styles from './styles.module.scss';

function RootLayoutAuth({ children }) {
  return (
    <div className={styles.layoutWrap}>
      <Image
        className={styles.imgWrap}
        src={BgAuth}
        alt="Picture of the author"
      />
      {children}
    </div>
  )
}

export default RootLayoutAuth;
