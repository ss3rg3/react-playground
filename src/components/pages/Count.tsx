import {useState} from "react";
import Code from "../utils/Code.tsx";


function Count() {
    const [count, setCount] = useState(0)

    return (
        <>
            <button className={"text-2xl"} onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <Code>
                Here is the code
            </Code>
        </>
    )
}

export default Count
