import {Layout} from 'antd';
import {ReactNode} from "react";
import {Content, Footer, Header} from "antd/es/layout/layout";
import Logo from "./sidebar/Logo.tsx";
import MenuItems from "./sidebar/MenuItems.tsx";
import Sider from "antd/es/layout/Sider";

interface LayoutProps {
    children?: ReactNode;
}

function LayoutWrapper({children}: LayoutProps) {

    return (
        <Layout className={"h-screen"}>
            <Sider breakpoint="lg" collapsedWidth="0">
                <Logo />
                <MenuItems />
            </Sider>
            <Layout>
                <Header/>
                <Content>
                    <div className={"p-6 min-h-full"}>{children}</div>
                </Content>
                <Footer className={"text-center"}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}

export default LayoutWrapper
