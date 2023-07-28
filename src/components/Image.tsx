import {CSSProperties, useEffect, useState} from "react";
import Layout from "minigame-canvas-engine";
import ReactCanvas from "../ReactCanvas";

export interface ImageProps {
    className?: string;
    src: string;
    onClick?: () => void;
    style?: CSSProperties;
}

const Image = (props: ImageProps) => {
    ReactCanvas.loadImg(props.src);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        Layout.loadImgs([props.src]).then(() => setLoaded(true))
    }, [props.src]);
    return <>
        {loaded && <image {...props}></image>}
    </>;
};
export {Image};
