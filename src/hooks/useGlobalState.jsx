import { useState } from 'react';
import actions from '../actions';


export const useGlobalState = (defaultStoreValue) => {
    const [globalState, setGlobalState] = useState({
        store: defaultStoreValue,
        actions: actions({
            getStore: () => globalState.store,
            getActions: () => globalState.actions,
            setStore: updatedStore =>
                setGlobalState({
                    store: {
                        ...globalState.store,
                        ...updatedStore
                    },
                    actions: globalState.actions,
                })
        })
    });

    return globalState;
};
