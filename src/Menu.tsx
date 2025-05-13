import { Menu, MenuItemLink, useSidebarState } from "react-admin";
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useLocation } from "react-router-dom";

const CustomMenu = () => {
    const [open] = useSidebarState();
    const location = useLocation();

return (
    <Menu>
        {/* Dashboard */}
        <MenuItemLink
            to="/"
            primaryText="DashBoard"
            leftIcon={<DashboardIcon />}

            selected={location.pathname === '/'}
        />

        {/* Resource: users */}
        <MenuItemLink
            to="/users"
            primaryText="Users"
            leftIcon={<GroupIcon />}
            selected={location.pathname.startsWith('/users')}


        />

        {/* Products */}
        <MenuItemLink
            to="/products"
            primaryText="Products"
            leftIcon={<ShoppingCartIcon />}
            selected={location.pathname.startsWith('/products')}

        />

        {/* Custom route */}
        <MenuItemLink
            to="/profile"
            primaryText="Profile"
            leftIcon={<PersonIcon />}
            selected={location.pathname.startsWith('/profile')}

        />
    </Menu>
    
);
};

export default CustomMenu;