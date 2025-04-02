import { Link } from "react-router-dom"
export default function Navbar() {
    return <div className="nav-container">
        <nav className="navbar navbar-expand-lg">
            <div className="fluid-text flex flex-row items-center justify-center text-black gap-50">
                <div className="Navbar flex ml-20">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                </div>
                <div className="flex flex-row items-center justify-center ml-80">
                    <ul className="navbar-nav  ">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Education">Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Achievements">Achievements</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Profiles">Profiles</Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    </div>
}