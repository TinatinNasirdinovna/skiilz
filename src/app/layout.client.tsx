import ReduxProvider from "@/providers/ReduxProvider";
import { FC, ReactNode } from "react";

interface IlayoutClientProps {
    children: ReactNode;
}

const LayoutClient: FC<IlayoutClientProps> = ({ children }) => {
    return <ReduxProvider>{children}</ReduxProvider>;
};

export default LayoutClient;