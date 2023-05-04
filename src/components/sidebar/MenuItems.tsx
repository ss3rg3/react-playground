import {Menu} from "antd";
import {Link, useLocation} from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";
import {Paths} from "../../Paths.tsx";
import { HomeOutlined, NodeExpandOutlined } from '@ant-design/icons';
import MenuItem from "antd/es/menu/MenuItem";

export default function MenuItems() {
    const location = useLocation();

    return (
        <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
            <MenuItem key={Paths.HOME} icon={<HomeOutlined />}>
                <Link to={Paths.HOME}>Home</Link>
            </MenuItem>
            <SubMenu key="hooks" title="Hooks" icon={<NodeExpandOutlined />} >
                <MenuItem key={Paths.hooks.USE_STATE}>
                    <Link to={Paths.hooks.USE_STATE}>useState</Link>
                </MenuItem>
            </SubMenu>
        </Menu>
    )
}
