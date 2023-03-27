import React from "react";
import useCustomhook from "../context/useCustomhook";

export default function Route({path,children}) {
    const { currentPath } = useCustomhook();
    if(currentPath === path){
        return children
    }
    return null;
}
