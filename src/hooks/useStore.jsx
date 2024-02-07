import { useContext } from "react";
import { Context } from "../main.jsx";


export const useStore = () => {
	const { store } = useContext(Context);
    
    return store;
}
