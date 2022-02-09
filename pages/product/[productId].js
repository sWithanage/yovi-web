import styles from '../../styles/Home.module.css'
import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';
import SeoContent from "../../utils/SeoContent";

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
                <h1 className={styles.title}>
                    Hello {data.data[props.productId].name}
                </h1>

                <Image
                    src={data.data[props.productId].imageUrl}
                    alt="Picture of the author"
                    width={200}
                    height={200}
                />
                <Link href='1'>
                    <a>1</a>
                </Link>
                <Link href='2'>
                    <a>2</a>
                </Link>
                <Link href='3'>
                    <a>3</a>
                </Link>
                <Link href='4'>
                    <a>4</a>
                </Link>
                <Link href='5'>
                    <a>5</a>
                </Link>
                <Link href='6'>
                    <a>6</a>
                </Link>
                <Link href='7'>
                    <a>7</a>
                </Link>
                <Link href='8'>
                    <a>8</a>
                </Link>
                <Link href='9'>
                    <a>9</a>
                </Link>
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