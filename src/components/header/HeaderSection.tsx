import {Header} from "antd/es/layout/layout";
import {useGlobalCounter} from "../../states/globalCounter.tsx";
import {usePersistentCounter} from "../../states/persistentCounter.tsx";


export default function HeaderSection() {
    const globalCount = useGlobalCounter((state) => state.count);
    const persistentCount = usePersistentCounter((state) => state.count);

    console.count("HeaderSection component rerender")
    return (
        <Header className={"flex justify-end text-amber-50 text-lg"}>
            globalCount: {globalCount}<br/>persistentCount: {persistentCount}
        </Header>
    )
}
