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
    const seo = {
        title: "Products Page - YOVI Clothing",
        description: "This is YOVI shopping for all the women Sri Lanka. ",
        image: "https://www.yovi.lk/wp-content/uploads/2022/01/2.jpg",
        twitterImage: "",
        keywords: "shop,Yovi,clothing",
        url: "https://www.yovi.lk/shop"
    }

    return (
        <div className={styles.container}>
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