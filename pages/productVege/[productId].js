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
                <title>{data.data[0].name} {data.data[0].name}  - YOVI Clothing</title>
                <meta name="description" content={data.data[0].name} />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Hello {data.data[0].name}
                </h1>

                <Image
                    src={data.data[0].imageUrl}
                    alt="Picture of the author"
                    width={200}
                    height={200}
                />

            </main>
        </div>
    )
}

export async function getServerSideProps({params}) {
    const res = await fetch(`https://sun-shinevege-mart.herokuapp.com/api/item`)
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