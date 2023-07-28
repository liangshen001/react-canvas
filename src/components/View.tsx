import {CSSProperties, PropsWithChildren} from "react";

export interface ViewProps {
    className?: string;
    id?: string;
    onClick?: () => void;
    style?: CSSProperties;
}

const View = (props: PropsWithChildren<ViewProps>) => <view {...props}></view>
export {View};
