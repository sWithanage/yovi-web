import styles from '../../styles/Home.module.css'
import Head from "next/head";
import SeoContent from "../../common/SeoContent";
import ProductCarousel from "../../common/ProductCarousel";
import {BASE_URL} from "../../common/Constants";

function Product({props}) {
    const data = props.data;
    console.log(data);
    return (
        <div className={styles.container}>
            <Head>
                <SeoContent
                    title={"Store Page"}
                    description={"Description is here"}
                    image={"https://res.cloudinary.com/sunshinevege/image/upload/v1643353185/webstore/sldtmfmw8hwjhpmtr8iv.png"}
                    keywords={'Sasa'}
                />
            </Head>

            <main className={styles.main}>
                {props?.data?.data?.map((value, index) => {
                    return <ProductCarousel
                        sellingPrice={value?.price || 0}
                        discountedPrice={value?.discountedPrice || 0}
                        title={value?.name}
                        imageList={value?.images}
                        pathToRedirect={'1'}
                        key={index}
                    />
                })}

            </main>
        </div>
    )
}

Product.getInitialProps = async (params) => {
    const res = await fetch(`${BASE_URL}product?pageId=3`)
    const data = await res.json()
    console.log(data);
    return {
        props: {
            productId: params.query.productId,
            data: data
        }
    }
}

export default Product;