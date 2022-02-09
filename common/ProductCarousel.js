import {Card, Carousel} from "antd";
import Link from "next/link";
import {setImageDimensions} from "./Common";
const { Meta } = Card;
import { SimpleImg } from 'react-simple-img';

export default function ProductCarousel({ imageList, title, sellingPrice, discountedPrice, pathToRedirect, widthAndHeight=200 }) {
    return (
        <>
            <Link href={pathToRedirect}>
                <Card
                    hoverable
                    style={{ width: widthAndHeight+12, borderRadius: 10, float: 'left', margin: 5 }}
                    bodyStyle={{padding: 10}}
                    cover={
                        <Carousel>
                            {imageList.map((image, index)=> {
                                return <div key={index}>
                                        <SimpleImg
                                            src={setImageDimensions(image?.imageUrl, Math.round(widthAndHeight*1.3), widthAndHeight, 70)}
                                            alt={image?.alt}
                                            width={widthAndHeight}
                                            height={widthAndHeight*1.3}
                                            style={{borderRadius: 10, margin: 10}}
                                            importance={'auto'}
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
