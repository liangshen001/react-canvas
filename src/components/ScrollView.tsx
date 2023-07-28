import {CSSProperties, PropsWithChildren} from "react";

export interface ScrollViewProps {
    className?: string;
    id?: string;
    onClick?: () => void;
    style?: CSSProperties;
    scrollY?: boolean;
    scrollX?: boolean;
}

// @ts-ignore
const ScrollView = (props: PropsWithChildren<ScrollViewProps>) => <scrollview {...props}></scrollview>
export {ScrollView};
