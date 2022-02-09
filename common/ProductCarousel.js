import {Card, Carousel} from "antd";
import Link from "next/link";
import {setImageDimensions} from "./Common";
const { Meta } = Card;

export default function ProductCarousel({ imageList, title, sellingPrice, discountedPrice, pathToRedirect, widthAndHeight=200 }) {
    return (
        <>
            <Link href={pathToRedirect}>
                <Card
                    hoverable
                    style={{ width: widthAndHeight+2, borderRadius: 10, float: 'left', margin: 5 }}
                    bodyStyle={{padding: 10}}
                    cover={
                        <Carousel>
                            {imageList.map((image, index)=> {
                                return <div key={index}>
                                        <img
                                            src={setImageDimensions(image?.imageUrl, (widthAndHeight-10), widthAndHeight, 70)}
                                            alt={image?.alt}
                                            width={(widthAndHeight-10)}
                                            height={(widthAndHeight-10)}
                                            style={{ borderRadius: 10, margin: 5 }}
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
