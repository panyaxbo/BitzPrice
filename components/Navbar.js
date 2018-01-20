import Link from 'next/link'

const Navbar = () => (
    <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
            <div className="container" id="navbarColor01">
                <a className="navbar-brand" href="/">BitzPrice</a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                       
                        <li className="nav-item">
                            <a className="nav-link" href="about">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)

export default Navbar