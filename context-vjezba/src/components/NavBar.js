import React from 'react'
import { useGlavniContext } from './ContextNeki'

const NavBar = () => {

    const { rijec } = useGlavniContext();

    return (
        <div>{ rijec }</div>
    )
}

export default NavBar
