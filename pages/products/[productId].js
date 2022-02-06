
import styles from '../../styles/Home.module.css'
import Head from "next/head";

export default function Product({data}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{data.data.first_name} {data.data.last_name}  - YOVI Clothing</title>
                <meta name="description" content={data.support.text} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Hello {data.data.first_name}
                </h1>
            </main>
        </div>
    )
}

export async function getServerSideProps({params }) {
    const res = await fetch(`https://reqres.in/api/users/`+params?.productId)
    const data = await res.json()
    return { props: { data }}
}