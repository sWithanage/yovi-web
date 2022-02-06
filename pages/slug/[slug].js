import styles from '../../styles/Home.module.css'
import Head from "next/head";
import Image from 'next/image';


import dbConnect from "../../utils/dbConnect";
import Products from '../../models/Products';

dbConnect();

const myLoader = ({ src, width, quality }) => {
    return `https://reqres.in/img/faces/2-image.jpg`
}

export default function Slug({data}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{data.name} {data.image}  - YOVI Clothing</title>
                <meta name="description" content={data.image} />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.name}>
                    Name:  {data.name}
                </h1>
                <h1 className={styles.name}>
                    Image {data.image}
                </h1>

                {/*<Image*/}
                {/*    src={data.title}*/}
                {/*    alt="Picture of the author"*/}
                {/*    width={200}*/}
                {/*    height={200}*/}
                {/*/>*/}

            </main>
        </div>
    )
}

export async function getServerSideProps({params}) {
    console.log(params.slug);
    const notes = await Products.findOne({name: params.slug});
    const data = JSON.parse(JSON.stringify(notes));
    if(notes?.name){
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