import React from "react";
import { Navbar } from "./layout/Navbar";

export const Layout: React.FC = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            {children}
        </React.Fragment>
    );
}