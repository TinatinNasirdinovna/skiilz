import Header from "@/components/Header";
import { FC, ReactNode } from "react";

interface IindexProps {
    children: ReactNode;
}

const LayoutMain: FC<IindexProps> = ({ children }) => {
    return <>
    <Header/>
    {children}</>;
};

export default LayoutMain;