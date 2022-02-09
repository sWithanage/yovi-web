import '../styles/globals.css'
import styles from "../styles/Home.module.css";
import NextNProgress from "nextjs-progressbar";
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={2}
          showOnShallow={true}
      />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp