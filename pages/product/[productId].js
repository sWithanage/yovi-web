import styles from '../../styles/Home.module.css'
import Head from "next/head";
import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
    return `https://reqres.in/img/faces/2-image.jpg`
}

export default function Product({data}) {
    console.log(data.data?.avatar);
    return (
        <div className={styles.container}>
            <Head>
                <title>{data.data.first_name} {data.data.last_name}  - YOVI Clothing</title>
                <meta name="description" content={data.support.text} />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Hello {data.data.first_name}
                </h1>

                <Image
                    src={data.data?.avatar}
                    alt="Picture of the author"
                    width={200}
                    height={200}
                />

            </main>
        </div>
    )
}

export async function getServerSideProps({params}) {
    const res = await fetch(`https://reqres.in/api/users/`+params?.productId)
    const data = await res.json()
    console.log(data);
    if(data?.data){
        return { props: { data }}
    } else {
        return { props: { "data": {
                    "data": {
                        "id": 1250,
                        "email": "Not Found",
                        "first_name": "Not Found",
                        "last_name": "Not Found",
                        "avatar": "https://reqres.in/img/faces/2-image.jpg"
                    },
                    "support": {
                        "url": "https://reqres.in/#support-heading",
                        "text": "Not Found. Please find this one."
                    }
                } }}
    }
}