import React, { useState } from 'react';

const GlavniContext = React.createContext({});

const ContextNeki = (props) => {

    const [rijec, setRijec] = useState("Neka riječ")

    return (
        <GlavniContext.Provider value={{rijec: rijec}}>
            {props.children}
        </GlavniContext.Provider>
    )
}

export const useGlavniContext = () => React.useContext(GlavniContext);
export default ContextNeki
