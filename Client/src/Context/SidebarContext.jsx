import { createContext, useState } from "react";

export const SidebarContext = createContext();


export default function Sidebarprovider({ children }) {
    const [sidebarShow, SetsidebarShow] = useState(false);
    function sidebaropen() {
        SetsidebarShow(true)
    }

    function sidebarclosed() {
        SetsidebarShow(false);
    }

    return <SidebarContext.Provider value={
        {
            issidebar: sidebarShow,
            sidebaropen,
            sidebarclosed

        }

    }>
        {children}

    </SidebarContext.Provider>

}