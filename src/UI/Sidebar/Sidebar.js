import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useSelector } from 'react-redux';
import useTranslate from '../../hooks/use-translate';
import Translate from '../../helpers/Translate/Translate';

const SideBar = () => {
    const [sidebarCollapsed, setSidebarCollabsed] = useState(false);
    const toggleSidebar = () => {
        setSidebarCollabsed(value => !value);
    }
    const globalLang = useSelector((state) => {
        return state.lang.globalLang;
    });
    return (
        <Sidebar className="app" collapsed={sidebarCollapsed} rtl={globalLang === 'ar'}>
            <Menu>
                <MenuItem onClick={toggleSidebar} icon={<i className="fa-solid fa-bars"></i>}>
                    <h5 className='m-0'>{!sidebarCollapsed && <span>MOD Dashboard</span>}</h5>
                </MenuItem>

                <MenuItem icon={<i className="fa-solid fa-table-columns"></i>}><Translate id="sidebar.dashboard" /></MenuItem>
                <SubMenu label={useTranslate('sidebar.user management')} icon={<i className="fa-solid fa-user-gear"></i>}>
                    <MenuItem icon={<i className="fa-solid fa-unlock-keyhole"></i>}><Translate id="sidebar.permissions" /></MenuItem>
                    <MenuItem icon={<i className="fa-solid fa-briefcase"></i>}><Translate id="sidebar.roles" /></MenuItem>
                    <MenuItem icon={<i className="fa-solid fa-users"></i>}><Translate id="sidebar.users" /></MenuItem>
                    <MenuItem icon={<i className="fa-solid fa-file-lines"></i>}><Translate id="sidebar.audit logs" /></MenuItem>
                    <MenuItem icon={<i className="fa-solid fa-pen-clip"></i>}><Translate id="sidebar.authors" /></MenuItem>
                </SubMenu>
                <SubMenu label={useTranslate('sidebar.content management')} icon={<i className="fa-solid fa-table-list"></i>}>
                    <MenuItem icon={<i className="fa-solid fa-book-open"></i>}><Translate id="sidebar.magazine versions" /></MenuItem>
                    <MenuItem icon={<i className="fa-solid fa-book-open"></i>}><Translate id="sidebar.magazine releases" /></MenuItem>
                    <MenuItem icon={<i className="fa-solid fa-bezier-curve"></i>}><Translate id="sidebar.categories" /></MenuItem>
                    <MenuItem icon={<i className="fa-solid fa-newspaper"></i>}><Translate id="sidebar.articles" /></MenuItem>
                </SubMenu>
                <MenuItem icon={<i className="fa-brands fa-adversal"></i>}><Translate id="sidebar.ads" /></MenuItem>
                <MenuItem icon={<i className="fa-solid fa-envelope"></i>}><Translate id="sidebar.contacts" /></MenuItem>
                <MenuItem icon={<i className="fa-solid fa-gears"></i>}><Translate id="sidebar.configurations" /></MenuItem>
                <MenuItem icon={<i className="fa-solid fa-key"></i>}><Translate id="sidebar.change password" /></MenuItem>
                <MenuItem icon={<i className="fa-solid fa-right-from-bracket"></i>}><Translate id="sidebar.logout" /></MenuItem>
            </Menu>
        </Sidebar>
    )
}

export default SideBar;