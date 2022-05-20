import React from "react";
import Logo from '../../assets'

export default function Nav() {

    return (
        <React.Fragment>
            <div>
                <img src={Logo} style={{ width: 200, marginTop: -7 }} alt='logo'></img>
                <nav>
                    <ul>
                        <li>
                            Dashboard
                        </li>
                        <li>
                            Login
                        </li>
                        <li>
                            Register
                        </li>
                    </ul>
                </nav> 
            </div>


        </React.Fragment>
    )
};

