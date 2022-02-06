
import styles from '../../styles/Home.module.css'
import Head from "next/head";

export default function Product({productId, title}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title} - YOVI Clothing</title>
                <meta name="description" content={title+` YOVI clothing is in here. We can continue like this.`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Hello {title}
                </h1>
            </main>
        </div>
    )
}

export async function getStaticProps({ params = {}} = {}) {
    return {
        props: {
            productId: params.productId,
            title: `Product ${params.productId}`
        }
    }
}

export async function getStaticPaths({ params = {}} = {}) {

    const paths = [...new Array(5)].map((i, index) => {
        return {
            params: {
                productId : `${index +1}`
            }
        }
    });

    return {
        paths,
        fallback: false
    }
}