import {ReactNode} from "react";

type Props = {
    items: ReactNode;
};

export default function List(props: Props) {
    return (
        <ul className={"ml-4 mt-1.5 list-disc leading-6"}>
            {props.items}
        </ul>
    )
}
