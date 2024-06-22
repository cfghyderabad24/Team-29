

const Header = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-Prata">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Alumni</a></li>
                <li><a>Donate</a></li>
                <li><a>Contact</a></li>
            </ul>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex font-Prata">
            <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Alumni</a></li>
            <li><a>Donate</a></li>
            <li><a>Contact</a></li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn font-Prata">Login</a>
        </div>
    </div>
  )
}

export default Header