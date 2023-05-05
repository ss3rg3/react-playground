import {memo, useCallback, useState} from "react";
import CodeBlock from "../../paragraph/CodeBlock.tsx";
import Code from "../../paragraph/Code.tsx";
import Ident from "../../paragraph/Ident.tsx";
import {Button} from "antd";
import Heading from "../../paragraph/Heading.tsx";
import List from "../../paragraph/List.tsx";


export default function UseCallback() {
    const [count, setCount] = useState(0)

    const incrementCount = useCallback(() => {
        setCount(count => count + 1);
    }, []);

    const noDependency =
        `
const incrementCount = useCallback(() => {
setcount(count => count + 1);
}, []);
`.trim()

    const withDependency =
        `
const incrementCount = useCallback(() => {
    setChildCount(count + 1);
}, [count]);
`.trim()

    console.count("Rendering parent component")
    return (
        <>
            <Heading size={1}>useCallback</Heading>
            <List items={[
                <li key={1}>
                    <Code>useCallback</Code> is a React hook that allows you to memoize a callback function, which means
                    that it will only be re-created when one of its dependencies changes. This can be helpful in
                    preventing unnecessary re-renders of child components that depend on the callback as a prop. By
                    memoizing the callback, you ensure that it remains the same across renders, unless its dependencies
                    change.
                </li>,
                <li key={2}>For example, take this memoized increment function passed from the parent to the
                    sub-component (open JS console):</li>
            ]}/>

            <Ident>
                <SubComponent incrementCount={incrementCount}/>
                State is parent component:
                <span style={{padding: "2px"}}
                      className={"border border-ant-blue text-xl bg-amber-600"}>
                    {count}
                </span><br/>
            </Ident>

            <List items={[
                <li key={3}>
                    The SubComponent itself uses <Code>memo</Code> so that it won't rerender if the props did not
                    change. If you click "Increment" then <Code>useCallback</Code> will not recreate the function and
                    therefore SubComponent will not rerender, but if you remove <Code>useCallback</Code> then it will -
                    on every click.
                </li>,
                <li key={4}>Note that this example only works because we use no dependencies</li>
            ]}/>

            <Ident>
                <CodeBlock>
                    {noDependency}
                </CodeBlock>
            </Ident>

            <List items={[
                <li key={4}>
                    If you would use <Code>count</Code> as dependency then the SubComponent would rerender on every
                    increment because the value of this dependency changes.
                </li>
            ]}/>

            <Ident>
                <CodeBlock>
                    {withDependency}
                </CodeBlock>
            </Ident>
        </>
    )
}


type SubComponentProps = {
    incrementCount: () => void
};

const SubComponent = memo(({incrementCount}: SubComponentProps) => {

    console.count("Rendering child component")
    return (
        <div className={"border border-ant-blue p-2"}>
            <Ident>
                SubComponent<br/>
                <Button
                    className={"bg-amber-400"}
                    onClick={incrementCount}>
                    Increment
                </Button>
            </Ident>
        </div>
    )
})


