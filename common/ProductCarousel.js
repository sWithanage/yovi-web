import {Card, Carousel} from "antd";
import Link from "next/link";
import {setImageDimensions} from "./Common";
const { Meta } = Card;

export default function ProductCarousel({ imageList, title, price, pathToRedirect }) {
    const widthAndHeight = 300;

    return (
        <>
            <Link href={pathToRedirect}>
                <Card
                    hoverable
                    style={{ width: widthAndHeight, borderRadius: 10 }}
                    bodyStyle={{padding: 10}}
                    cover={
                        <Carousel style={{padding: 5}}>
                            {imageList.map((image, index)=> {
                                return <div key={index}>
                                        <img
                                            src={setImageDimensions(image, widthAndHeight, widthAndHeight, 70)}
                                            alt="Picture of the author"
                                            width={widthAndHeight}
                                            height={widthAndHeight}
                                        />
                                    </div>
                                }
                            )}
                        </Carousel>
                    }
                >
                        <Meta title={price} description={title} />
                </Card>
            </Link>
        </>
    )
}
