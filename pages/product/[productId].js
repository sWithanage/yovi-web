import styles from '../../styles/Home.module.css'
import Head from "next/head";
import { Image } from 'antd';
import Link from 'next/link';
import SeoContent from "../../utils/SeoContent";
import { Carousel } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function Product({props}) {
    const data = JSON.parse(props.data);
    function onChange(a) {
        console.log(a);
    }

    const contentStyle = {
        height: '350px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };


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

                <Link href='1'>
                    <Card
                        hoverable
                        style={{ width: 200 }}
                        cover={<Carousel beforeChange={(a)=>onChange(a)}>
                            <div>
                                <img
                                    src={'https://res.cloudinary.com/sunshinevege/image/upload/v1643355101/webstore/gcw5r6tz4zfilc3ezibk.jpg'}
                                    alt="Picture of the author"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div>
                                <img
                                    src={'https://res.cloudinary.com/sunshinevege/image/upload/v1643353185/webstore/sldtmfmw8hwjhpmtr8iv.png'}
                                    alt="Picture of the author"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div>
                                <img
                                    src={'https://res.cloudinary.com/sunshinevege/image/upload/v1643286381/webstore/ropui20nehuur99hizzx.jpg'}
                                    alt="Picture of the author"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div>
                                <img
                                    src={data.data[props.productId].imageUrl}
                                    alt="Picture of the author"
                                    width={200}
                                    height={200}
                                />
                            </div>
                        </Carousel>}
                    >
                        <Meta title={data.data[props.productId].name} description="www.instagram.com" />
                    </Card>
                </Link>


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