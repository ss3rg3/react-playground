import {Layout} from 'antd';
import {ReactNode} from "react";
import {Content, Footer, Header} from "antd/es/layout/layout";
import Logo from "./sidebar/Logo.tsx";
import MenuItems from "./sidebar/MenuItems.tsx";
import Sider from "antd/es/layout/Sider";

interface Props {
    children?: ReactNode;
}

export default function LayoutWrapper(props: Props) {

    return (
        <Layout className="flex min-h-screen justify-center bg-gray-200">
            <div className="flex-1 max-w-screen-xl flex">
                <Sider breakpoint="lg" collapsedWidth="0">
                    <Logo/>
                    <MenuItems/>
                </Sider>
                <Layout>
                    <Header/>
                    <Content className={"bg-gray-100-200 border-r-8 border-r-ant-blue"}>
                        <div className={"p-6 min-h-full max-w-3xl"}>
                            {props.children}
                        </div>
                    </Content>
                    <Footer className={"border-b-ant-blue border-r-ant-blue text-center border-r-8 border-b-8"}>
                        Footer!
                    </Footer>
                </Layout>
            </div>
        </Layout>
    )
}
