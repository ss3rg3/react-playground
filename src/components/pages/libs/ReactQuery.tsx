import Code from "../../paragraph/Code.tsx";
import Heading from "../../paragraph/Heading.tsx";
import List from "../../paragraph/List.tsx";
import axios from "axios";
import {useQuery, useQueryClient} from "react-query";
import id from "../../../utils/utils.tsx"
import {Button, Spin} from "antd";
import {useState} from "react";
import CodeBlock from "../../paragraph/CodeBlock.tsx";


interface User {
    id: number;
    name: string;
    email: string;
}

async function fetchUsers(): Promise<User[]> {
    console.log("Fetching data...")
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return response.data;
}

function useExpiringRequest() {
    return useQuery<User[], Error>('expiringUsers', fetchUsers, {
        staleTime: 5000, // data is marked as stale after 5 minutes
        cacheTime: 10000 // data is removed from cache after 30 minutes
    });
}

function useManualRequest() {
    return useQuery<User[], Error>('manualUsers', fetchUsers, {
        enabled: false
    });
}

export default function ReactQuery() {
    const {
        data: expiringUsers,
        isFetching: isExpiringUserFetching,
        error: expiringUsersError
    } = useExpiringRequest();
    const {
        data: manualUsers,
        isFetching: isManualUsersFetching,
        error: manualUsersError,
        refetch: refetchManualUsers
    } = useManualRequest();
    const [count, setCount] = useState<number>(0)
    const queryClient = useQueryClient()

    const expiringContent =
        isExpiringUserFetching ? (
            <Spin size="large" tip="Loading..."/>
        ) : expiringUsersError ? (
            <p>An error occurred: {expiringUsersError.message}</p>
        ) : !expiringUsers ? (
            <div>No users found</div>
        ) : (
            expiringUsers.slice(0, 3).map((user: User) => (
                <div key={id()}>{user.name} - {user.email}</div>
            ))
        )
    const manualContent =
        isManualUsersFetching ? (
            <Spin size="large" tip="Loading..."/>
        ) : manualUsersError ? (
            <p>An error occurred: {manualUsersError.message}</p>
        ) : !manualUsers ? (
            <div>No users found</div>
        ) : (
            manualUsers.slice(0, 3).map((user: User) => (
                <div key={id()}>{user.name} - {user.email}</div>
            ))
        )


    console.count("Rendering ReactQuery component")
    return (
        <>
            <Heading size={1}>ReactQuery</Heading>
            <List items={[
                <li key={1}>
                    <Code>ReactQuery</Code> offers a custom hook which replace the need to tinkering your solution to
                    make REST queries to some backend. Usually you would <Code>useEffect</Code> which makes this
                    standard procedure more complicated. <Code>ReactQuery</Code> also caches queries by default.
                </li>,
                <li key={id()}>
                    Let's say you fetch some data from the backend:
                    <div className={"border-2 border-ant-blue p-2"}>
                        {expiringContent}
                    </div>
                </li>,
                <li key={id()}>
                    Then you get memoized state as using <Code>useEffect</Code> out of the box. E.g. this will change
                    the state of the component via <Code>useState</Code> but no fetching is done again.<br/>
                    <Button className={"bg-amber-400"} onClick={() => setCount(count => count + 1)}>
                        Counter: {count}
                    </Button>
                </li>,
                <li key={id()}>
                    Additionally you get the ability to invalidate the cache which will force to re-run the query. This
                    is useful is you e.g. saved something and then want a new list from the server which has the newest
                    results. The request above is marked as <Code>stale</Code> only after 5 minutes. Then a refetching
                    occurs (after refocussing the window, automatic polling works with different options). It is also
                    possible to trigger the refetching before that point by invalidating it: <br/>
                    <Button className={"bg-amber-400"} onClick={() => queryClient.invalidateQueries('expiringUsers')}>
                        Invalidate query 'users'
                    </Button>
                </li>,
                <li key={id()}>
                    If you disable the <Code>react-query</Code> hook then the request has to be manually triggered. This
                    is useful if you need a search function:
                    <Button className={"ml-3 bg-amber-400"} onClick={refetchManualUsers}>
                        Search
                    </Button>
                    <div className={"border-2 border-ant-blue p-2"}>
                        {manualContent}
                    </div>
                    All of this is done via simple options.
                </li>,
                <li key={id()}>
                    There are also lots of options for fine-grained configuration, e.g. cache settings for re-fetching:
                    <CodeBlock>
                        {
`return useQuery<User[], Error>('users', fetchUsers, {
  staleTime: 5 * 60 * 1000, // data is marked as stale after 5 minutes
  cacheTime: 30 * 60 * 1000, // data is removed from cache after 30 minutes
});`}
                    </CodeBlock>
                </li>,
                <li key={id()}>
                    Or lots of conditionals like:<br/>
                    <CodeBlock>
                        {
`isLoading         // data is loaded the first time  
isFetching        // data is being fetched
isPreviousData    // ...
isError
isStale
...`}
                    </CodeBlock>
                </li>,
                <li key={id()}>
                    There is also the <Code>useMutations</Code> which is useful for queries which have "side-effects"
                    (POST, PUT, DELETE).
                    <br/>
                    <CodeBlock>
                        {
`const mutation = useMutation(addUser, {
    onSuccess: () => {
      // Reset the form fields after successful mutation
      setName('');
      setEmail('');
      alert('User added successfully');
  },
    onError: (error: Error) => {
      alert(\`An error occurred: \${error.message}\`);
  },
});`}
                    </CodeBlock>
                </li>
            ]}/>

        </>
    )
}
