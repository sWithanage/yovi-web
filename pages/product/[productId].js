import styles from '../../styles/Home.module.css'
import Head from "next/head";
import { Image } from 'antd';
import Link from 'next/link';
import SeoContent from "../../common/SeoContent";
import ProductCarousel from "../../common/ProductCarousel";

function Product({props}) {
    const data = JSON.parse(props.data);


    return (
        <div className={styles.container}>
            <Head>
                <SeoContent
                    title={data.data[props.productId].name}
                    description={data.data[props.productId].name + "Description is here"}
                    image={data.data[props.productId].imageUrl}
                    keywords={'Sasa'}
                />
            </Head>

            <main className={styles.main}>
                <ProductCarousel
                    price={2500}
                    title={"Cute Looking Red Dress Though"}
                    imageList={[
                        'https://res.cloudinary.com/sunshinevege/image/upload/v1643353185/webstore/sldtmfmw8hwjhpmtr8iv.png',
                        'https://res.cloudinary.com/sunshinevege/image/upload/v1643355101/webstore/gcw5r6tz4zfilc3ezibk.jpg',
                        'https://res.cloudinary.com/sunshinevege/image/upload/v1643286381/webstore/ropui20nehuur99hizzx.jpg'
                    ]}
                    pathToRedirect={'1'}
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

export default Product