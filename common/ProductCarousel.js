import {Card, Carousel} from "antd";
import Link from "next/link";
import {setImageDimensions} from "./Common";
const { Meta } = Card;
import { SimpleImg } from 'react-simple-img';

export default function ProductCarousel({ imageList, title, sellingPrice, discountedPrice, pathToRedirect,index, widthAndHeight=200 }) {
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
                                console.log(index);
                                return <div key={index}>
                                        <SimpleImg
                                            src={setImageDimensions(image?.imageUrl, Math.round(widthAndHeight*1.3), widthAndHeight, 70)}
                                            alt={image?.alt}
                                            width={widthAndHeight}
                                            height={widthAndHeight*1.3}
                                            style={{borderRadius: 0, margin: 0}}
                                            importance={index === 0 ? 'auto' : 'low'}
                                            placeholder={'https://c.tenor.com/Prsb5xSwfQYAAAAM/claire-dancing.gif'}
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
