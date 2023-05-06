import Heading from "../../paragraph/Heading.tsx";
import Code from "../../paragraph/Code.tsx";
import List from "../../paragraph/List.tsx";
import {Button} from "antd";
import {useGlobalCounter} from "../../../states/globalCounter.tsx";
import {usePersistentCounter} from "../../../states/persistentCounter.tsx";
import id from "../../../utils/utils.tsx"


export default function Zustand() {
    const globalCount = useGlobalCounter((state) => state.count);
    const globalCountIncrement = useGlobalCounter((state) => state.increment);
    const persistentCount = usePersistentCounter((state) => state.count);
    const persistentCountIncrement = usePersistentCounter((state) => state.increment);

    console.log("Zustand component rerender")
    return (
        <>
            <Heading size={1}>Zustand</Heading>
            <List items={[
                <li key={id()}>
                    <Code>Zustand</Code> offers global state management in contrast to <Code>useState</Code> which
                    only works inside a component. The state from <Code>useState</Code> has to be passed via
                    <Code>Props</Code> while <Code>Zustand</Code> state is stored externally.<br/>
                    <Button className={"bg-amber-400"} onClick={globalCountIncrement}>
                        globalCount: {globalCount}
                    </Button>
                </li>,
                <li key={id()}>
                    Additionally it offers easy-peasy handling of <Code>localStorage</Code> which is a "key-value
                    storage system that allows you to store data persistently in the user's web browser". 5 to 10 MB per
                    domain. Cookies only allow ~4KB.<br/>
                    <Button className={"bg-amber-400"} onClick={persistentCountIncrement}>
                        persistentCount: {persistentCount}
                    </Button>
                </li>
            ]}/>
        </>
    )
}
