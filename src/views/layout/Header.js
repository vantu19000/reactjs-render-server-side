import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
    render() {
        console.log(this.props.auth)

        const authButton = this.props.auth ? (
            <a href="/api/logout">Logout</a>
        ) : (
            <a href="/api/auth/google">Login</a>
        )
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link className="brand-logo" to="/">
                        React SSR
                    </Link>
                    <ul className="right">
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/admins">Admins</Link>
                        </li>
                        <li>{authButton}</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth }
}

// export default connect(mapStateToProps)(Header)

export default Header;
