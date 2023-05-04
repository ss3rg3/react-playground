import {ReactNode} from "react";

type Props = {
    children: ReactNode
    size?: number
};

export default function Ident(props: Props) {
    let size = props.size ?? 1;

    if (size > 4) {
        size = 4;
    }

    let indentClass = '';

    switch (size) {
        case 1:
            indentClass = 'ml-4';
            break;
        case 2:
            indentClass = 'ml-8';
            break;
        case 3:
            indentClass = 'ml-12';
            break;
        case 4:
            indentClass = 'ml-16';
            break;
        default:
            break;
    }

    return (
        <div className={indentClass}>
            {props.children}
        </div>
    )
}
