import { useContext } from "react";
import { Context } from "../main.jsx";


export const useActions = () => {
	const { actions } = useContext(Context);
    
    return actions;
}
