import {Menu} from "antd";
import {Link} from "react-router-dom";

export default function MenuItems() {

    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="home">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="count">
                <Link to="/count">Count</Link>
            </Menu.Item>
        </Menu>
    )
}
