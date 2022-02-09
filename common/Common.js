import {useEffect, useState} from "react";

export const setImageDimensions = (url, height, width, quality) => {
    if(url.includes('cloudinary')) {
        return url.split("upload/")[0] + "upload/w_" + width + ",h_" + height + ",q_" + quality + "/" + url.split("upload/")[1];
    } else {
        return url;
    }
};



export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        if (typeof window !== 'undefined') {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    return windowSize;
}