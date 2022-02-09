import Head from "next/head";
import {BASE_URL} from "../common/Constants";
import {useWindowSize} from "../common/Common";
import styles from '../styles/Home.module.css';
import ProductCarousel from "../common/ProductCarousel";

function Shop({props}) {
    const seo = {
        title: "Shop - YOVI Clothing",
        description: "",
        image: "",
        twitterImage: "",
        keywords: "",
        url: "https://www.yovi.lk/shop"
    }

    const size = useWindowSize();
    let widthOfEach = 200;
    if(size?.width < 480 ) {
        widthOfEach = Math.round(size.width / 2 - (5*3));
    } else if (size?.width < 740 ) {
        widthOfEach = Math.round(size.width / 4 - (5*3));
    } else {
        widthOfEach = Math.round(size.width / 5 - (5 * 3) );
    }

    return (
        <>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://yovi.vercel.app/productVege/1"/>
                <meta property="og:title" content={seo.title}/>
                <meta property="og:description" content={seo.description}/>
                <meta property="og:image" content={seo.image}/>
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://yovi.vercel.app/productVege/1"/>
                <meta property="twitter:title" content={seo.title}/>
                <meta property="twitter:description" content={seo.description}/>
                <meta property="twitter:image" content={seo.image}/>
                <meta name="keywords" content={seo.keywords}/>
            </Head>
            <div className={styles.container}>
                <main className={styles.main}>
                    {props?.data?.data?.map((value, index) => {
                        return <ProductCarousel
                            sellingPrice={value?.price || 0}
                            discountedPrice={value?.discountedPrice || 0}
                            title={value?.name}
                            imageList={value?.images}
                            pathToRedirect={`product/${value?.slug}`}
                            key={index}
                            widthAndHeight={widthOfEach}
                        />
                    })}
                </main>
            </div>
        </>
    )
}

Shop.getInitialProps = async (params) => {
    const res = await fetch(`${BASE_URL}product?pageId=1`);
    const data = await res.json();
    return {
        props: {
            productId: params.query.productId,
            data: data
        }
    };
}

export default Shop;