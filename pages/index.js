import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  const seo = {
    title: "Chiranga Wicramasinghe - YOVI Clothing",
    description: "Hello I'm chiranga wickramasinghe. According to LinkedIn Chiranga Wickramasinghe started working on 2016, then the employee has changed 2 companies and 2 jobs. On average, Chiranga",
    image: "https://www.yovi.lk/wp-content/uploads/2022/01/2.jpg",
    twitterImage: "",
    keywords: "shop,Yovi,clothing",
    url: "https://www.yovi.lk/shop"
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://yovi.vercel.app/productVege/1"/>
        <meta property="og:title" content={seo.title}/>
        <meta property="og:description" content={seo.description}/>
        <meta property="og:image" content={seo.image}/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://yovi.vercel.app/productVege/1"/>
        <meta property="twitter:title" content={seo.title}/>
        <meta property="twitter:description" content={seo.description}/>
        <meta property="twitter:image" content={seo.image}/>
        <meta name="keywords" content={seo.keywords}/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
