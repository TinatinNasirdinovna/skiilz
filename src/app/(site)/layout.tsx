import LayoutMain from "@/appPages/layout/LayoutMain";
import { FC, ReactNode } from "react";

interface IlayoutProps {
    children: ReactNode;
}

const layout: FC<IlayoutProps> = ({ children }) => {
    return <LayoutMain>{children}</LayoutMain>;
};

export default layout;