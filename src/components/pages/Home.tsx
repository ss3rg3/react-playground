import {Link} from "react-router-dom";
import {Paths} from "../../Paths.tsx";

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link className={"underline"} to={Paths.COUNT}>Count</Link><br/>
        </>
    )
}
