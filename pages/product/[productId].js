import styles from '../../styles/Home.module.css'
import Head from "next/head";
import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
    return `https://reqres.in/img/faces/2-image.jpg`
}

function Product({props}) {
    const data = JSON.parse(props.data);
    console.log(data);
    return (
        <div className={styles.container}>
            <Head>
                <title>{data.data[props.productId].name} {data.data[props.productId].name}  - YOVI Clothing</title>
                <meta name="description" content={data.data[props.productId].name} />
                <meta name="description" content={data.data[props.productId].name}/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://yovi.vercel.app/productVege/1"/>
                <meta property="og:title" content={data.data[props.productId].name}/>
                <meta property="og:description" content={data.data[props.productId].name}/>
                <meta property="og:image" content={data.data[props.productId].imageUrl}/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://yovi.vercel.app/productVege/1"/>
                <meta property="twitter:title" content={data.data[props.productId].name}/>
                <meta property="twitter:description" content={data.data[props.productId].name}/>
                <meta property="twitter:image" content={data.data[props.productId].imageUrl}/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Hello {data.data[props.productId].name}
                </h1>

                <Image
                    src={data.data[props.productId].imageUrl}
                    alt="Picture of the author"
                    width={200}
                    height={200}
                />

            </main>
        </div>
    )
}

Product.getInitialProps = async (ctx) => {
    const res = await fetch(`https://sun-shinevege-mart.herokuapp.com/api/item`)
    const data = await res.json()
    return {
        props: {
            productId: ctx.query.productId,
            data: JSON.stringify(data)
        }
    }
}

// Product.getInitialProps = async (ctx) => {
//     const res = await fetch(`https://sun-shinevege-mart.herokuapp.com/api/item`)
//     const data = await res.json();
//     const productId = ctx.query.productId;
//     console.log(data);
//     if(data?.data){
//         return { props: { data , productId}}
//     } else {
//         return { props: { "data": {
//                     "data": {
//                         "id": 1250,
//                         "email": "Not Found",
//                         "first_name": "Not Found",
//                         "last_name": "Not Found",
//                         "avatar": "https://reqres.in/img/faces/2-image.jpg"
//                     },
//                     "support": {
//                         "url": "https://reqres.in/#support-heading",
//                         "text": "Not Found. Please find this one."
//                     }
//                 } }}
//     }
// }

export default Product