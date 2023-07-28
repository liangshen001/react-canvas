import {CSSProperties} from "react";


export interface TextProps {
    className?: string;
    style?: CSSProperties;
    value?: string;
    onClick?: () => void;
}
const Text = (props: TextProps) => <text {...props}></text>
export {Text};
