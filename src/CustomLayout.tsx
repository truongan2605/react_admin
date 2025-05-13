import { Layout, LayoutProps } from "react-admin";
import CustomMenu from "./Menu";

const CustomLayout = (props: LayoutProps) => <Layout {...props} menu={CustomMenu} />;

export default CustomLayout;