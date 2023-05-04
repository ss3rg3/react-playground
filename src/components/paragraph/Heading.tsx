import {ReactNode} from "react";

type Props = {
    children: ReactNode
    size?: number
};

export default function Heading(props: Props) {
    let size = props.size ?? 1

    if (size > 3) {
        size = 3
    }

    let classes = ''

    switch (size) {
        case 1:
            classes = 'text-3xl font-bold'
            break
        case 2:
            classes = 'text-2xl font-bold'
            break
        case 3:
            classes = 'text-xl font-bold'
            break
        default:
            break
    }

    return (
        <h1 className={classes}>{props.children}</h1>
    )
}
