import styles from '../../styles/Home.module.css'
import Image from 'next/image';
import {Component} from "react";
import SeoContent from "../../common/SeoContent";

const myLoader = ({ src, width, quality }) => {
    return `https://reqres.in/img/faces/2-image.jpg`
}


export default function Product({data,params}) {
    return (
        <div className={styles.container}>
            <SeoContent data={data} params={params}/>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Hello {data.data[params.productId].name}
                </h1>

                <Image
                    src={data.data[params.productId].imageUrl}
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
    const data = await res.json();
    if(data?.data){
        return { props: { data , params}}
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