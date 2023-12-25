import '../../../assets/globals.scss';
import styles from './styles.module.scss';
import Header from './components/Header';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className={styles.mainWrap}>
          <div className={styles.mainContentWrap}>
            {children}
          </div>
        </div>
        <div>
          Footer
        </div>
      </body>

    </html>
  )
}
