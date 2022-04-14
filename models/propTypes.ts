export interface DescLinePropType{
    title: string;
    text: string
}

export type ImgWrapPropType = {
    children?: JSX.Element;
    imgUrl: string;
    title? : string;
    imgDesc?: string
    width?: number
    height?: number
}