import {useState} from "react";
import CodeBlock from "../paragraph/CodeBlock.tsx";
import Code from "../paragraph/Code.tsx";
import Ident from "../paragraph/Ident.tsx";
import {Button} from "antd";
import Heading from "../paragraph/Heading.tsx";
import List from "../paragraph/List.tsx";


export default function UseState() {
    const [count, setCount] = useState(0)

    const codeExample =
        `
const [count, setCount] = useState(0)
// ...
<Button
    className={"bg-amber-400"}
    onClick={() => setCount((count) => count + 1)}>
    Increment: {count}
</Button>
`.trim()

    return (
        <>
            <Heading size={1}>useState</Heading>
            <List items={[
                <li key={1}><Code>useState</Code> is for using state inside a single component</li>,
                <li key={2}>Like a button with a counter:</li>]}/>
            <Ident>
                <Button
                    className={"bg-amber-400"}
                    onClick={() => setCount((count) => count + 1)}>
                    Increment: {count}
                </Button>
            </Ident>
            <List items={[
                <li key={3}>Can be used like this:</li>
            ]}/>

            <Ident>
                <CodeBlock>
                    {codeExample}
                </CodeBlock>
            </Ident>

            <List items={[
                <li key={4}>When the component gets destroyed, the state will also be deleted</li>,
                <li key={5}>If you need global state then you need a library like Zustand</li>
            ]}/>
        </>
    )
}
