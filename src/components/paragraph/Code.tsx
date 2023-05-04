import {ReactNode} from "react";

type Props = {
    children: ReactNode;
};

export default function Code(props: Props) {
    const codeAsString = props.children?.toString() ?? '';

    return (
        <span className={"bg-gray-200 font-mono p-0.5 text-sm"}>{codeAsString}</span>
    )
}

