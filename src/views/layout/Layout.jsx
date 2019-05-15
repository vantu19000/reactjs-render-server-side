import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Header from './Header';

class Layout extends React.Component {
    constructor() {
        super();
        this._handleClick = this._handleClick.bind(this);
    }
    _handleClick() {
        alert(this.props.custom.title);
    }
    render() {
        const { custom } = this.props;
        return (
            <html>
                <head>
                    <title>{custom.title}</title>
                    <link rel='stylesheet' href='/public/css/bootstrap.min.css' />
                    <link rel='stylesheet' href='/public/style.css' />
                </head>
                <body>

                    <Header />

                    <h1>{custom.title}</h1>
                    <p>Isn't server-side rendering remarkable?</p>
                    <button onClick={this._handleClick}>Click Me</button>
                    {this.props.children}
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                    <script dangerouslySetInnerHTML={{
                        __html: 'window.PROPS=' + JSON.stringify(custom)
                    }} />
                    <script src='/public/bundle.js' />
                </body>
            </html>
        );
    }
}

const wrapper = connect(
    (state) => {
        return { custom: state };
    }
);

export default wrapper(Layout);
