import styles from './styles.module.scss';
import SideBar from "./components/SideBar";
import Header from "./components/Header";

function RootLayoutMain({ children }) {
  return (
    <div className={styles.layoutMainWrap}>
      <SideBar />
      <div className={styles.mainWrap}>
        <Header />
        <div className={styles.mainContentWrap}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default RootLayoutMain;
