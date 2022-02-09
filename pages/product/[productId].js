import Head from "next/head";
import {BASE_URL} from "../../common/Constants";
import SeoContent from "../../common/SeoContent";
import {useWindowSize} from "../../common/Common";
import styles from '../../styles/Home.module.css';
import ProductCarousel from "../../common/ProductCarousel";

function Product({props}) {
    const size = useWindowSize();
    let widthOfEach = 200;
    if(size?.width < 480 ){
        widthOfEach = Math.round(size.width / 2 - (5*3));
    }

    return (
        <div className={styles.container}>
            <Head>
                {/*<title>{title} - YOVI Clothing</title>*/}
                {/*<meta name="description" content={description} />*/}
                {/*<meta name="description" content={description}/>*/}
                {/*<meta property="og:type" content="website"/>*/}

                {/*<meta property="og:url" content="https://yovi.vercel.app/productVege/1"/>*/}
                {/*<meta property="og:title" content={title}/>*/}
                {/*<meta property="og:description" content={description}/>*/}
                {/*<meta property="og:image" content={image}/>*/}
                {/*<meta property="twitter:card" content="summary_large_image"/>*/}

                {/*<meta property="twitter:url" content="https://yovi.vercel.app/productVege/1"/>*/}
                {/*<meta property="twitter:title" content={title}/>*/}
                {/*<meta property="twitter:description" content={description}/>*/}
                {/*<meta property="twitter:image" content={image}/>*/}

                {/*<meta name="keywords" content={keywords}/>*/}
            </Head>

            <main className={styles.main}>
                {props?.data?.data?.map((value, index) => {
                    return <ProductCarousel
                        sellingPrice={value?.price || 0}
                        discountedPrice={value?.discountedPrice || 0}
                        title={value?.name}
                        imageList={value?.images}
                        pathToRedirect={value?.slug}
                        key={index}
                        widthAndHeight={widthOfEach}
                    />
                })}
            </main>
        </div>
    )
}

Product.getInitialProps = async (params) => {
    const res = await fetch(`${BASE_URL}product?pageId=3`);
    const data = await res.json();
    return {
        props: {
            productId: params.query.productId,
            data: data
        }
    };
}

export default Product;