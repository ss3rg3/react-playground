import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {ReactNode} from "react";

type Props = {
    children: ReactNode;
};

export default function CodeBlock(props: Props) {
    const codeAsString = props.children?.toString() ?? '';

    return (
        <SyntaxHighlighter language="javascript" style={dracula}>
            {codeAsString}
        </SyntaxHighlighter>
    )
}

