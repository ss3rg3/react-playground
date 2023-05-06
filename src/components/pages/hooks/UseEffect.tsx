import {useEffect, useState} from "react";
import Code from "../../paragraph/Code.tsx";
import {Button, Spin} from "antd";
import Heading from "../../paragraph/Heading.tsx";
import List from "../../paragraph/List.tsx";
import id from "../../../utils/utils.tsx";

export type User = {
    id: number;
    name: string;
    email: string;
};

export default function UseEffect() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();

            await new Promise((resolve) => setTimeout(resolve, 2000));

            setUsers(data);
            setLoading(false);
        };
        console.log("Fetching users")
        fetchUsers();
    }, []);


    console.log("Component is rerendering")
    return (
        <>
            <Heading size={1}>useEffect</Heading>
            <List items={[
                <li key={id()}>
                    <Code>useEffect</Code> is a React hook that allows you to perform side effects, such as
                    data fetching,
                    DOM manipulation, subscriptions, or timers, in functional components. It replaces the lifecycle
                    methods <Code>componentDidMount</Code>, <Code>componentDidUpdate</Code>,
                    and <Code>componentWillUnmount</Code> that were used in class
                    components. <Code>useEffect</Code> takes two arguments: a callback function and an optional
                    dependency
                    array.</li>,
                <li key={id()}>
                    The callback function is where you perform your side effects. It runs after every render
                    by default. However, if you provide a dependency array, the callback function will only run when one
                    of the dependencies changes. If you pass an empty dependency array [], the callback function will
                    only run once, when the component mounts. You can also return a cleanup function from the callback
                    function, which will be executed when the component is unmounted or when the dependencies
                    change.</li>,
                <li key={id()}>
                    For example if you have a fetch then you do not want to refetch the result on every component
                    rendering.
                    <div className={"border-2 border-ant-blue p-2"}>
                        {
                            loading
                                ? <Spin size="large" tip="Loading..."/>
                                : users.slice(0, 3).map((user) => (
                                    <div key={id()}>{user.name} - {user.email}</div>
                                ))
                        }
                    </div>
                </li>,
                <li key={id()}>If you wouldn't use <Code>useEffect</Code>, then every rerender caused by the state
                    in this button would trigger the fetch again. Since your fetch sets a state you would even create
                    an infinite loop.<br/>
                    <Button className={"bg-amber-400"} onClick={() => setCount(count => count + 1)}>
                        Counter: {count}
                    </Button>
                </li>

            ]}/>

        </>
    )
}
