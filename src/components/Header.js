import {useState} from "react";

const Header = () => {
    const [burger, setBurger] = useState(false)

    let burgerClasses = "navbar-burger burger"
    let menuClasses = "navbar-menu"

    if (burger) {
        burgerClasses += " is-active"
        menuClasses += " is-active"
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="../">
                        <img src="img/logo-darker.png" alt="Logo" style={{maxHeight: "3rem"}}/>
                    </a>
                    <span
                        className={burgerClasses}
                        data-target="navbarMenu"
                        onClick={e => setBurger(!burger)}
                    >
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                </div>
                <div id="navbarMenu" className={menuClasses}>
                    <div className="navbar-end">
                        <div className="tabs is-right">
                            <ul>
                                <li className={"mx-3"}>
                                    <a href="https://github.com/jackmillward" target="_blank"
                                       style={{borderBottom: "none"}} rel="noreferrer">
                                        <i className="lni lni-github-original is-size-5"></i>
                                    </a>
                                </li>
                                <li><a href="/">Home</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header