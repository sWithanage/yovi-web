import {Card, Carousel} from "antd";
import Link from "next/link";
import {setImageDimensions} from "./Common";
const { Meta } = Card;

export default function ProductCarousel({ imageList, title, sellingPrice, discountedPrice, pathToRedirect }) {
    const widthAndHeight = 200;

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
                                            src={setImageDimensions(image?.imageUrl, widthAndHeight, widthAndHeight, 70)}
                                            alt={image?.alt}
                                            width={widthAndHeight}
                                            height={widthAndHeight}
                                        />
                                    </div>
                                }
                            )}
                        </Carousel>
                    }
                >
                        <Meta title={"Rs. "+sellingPrice} description={title} />
                </Card>
            </Link>
        </>
    )
}
