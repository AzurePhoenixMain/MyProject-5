import React, {Component} from 'react'
import Login from '../app-login';
import './app-header.css'

export default class AppHeader extends Component {

constructor (props) {
    super(props);
    this.state = {
        loginBut: false
    }

    this.onLogin = this.onLogin.bind(this)
}

onLogin() {
    this.setState(({loginBut}) => ({
        loginBut: !loginBut
    }))
}

render() {
    let {loginBut} = this.state;
    let {onTogglePageWork, onTogglePageFree, loginUser} = this.props;

    return (
    <div>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <a href='/' className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </a>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><button type="button" className="btn btn-light px-2 mar-r "
                onClick={onTogglePageWork}>Рабочий чат</button></li>
                <li><button type="button" className="btn btn-light px-2 mar-l "
                onClick={onTogglePageFree}>Флудилка</button></li>
            </ul>

            <div className="col-md-3 text-end">
                <button type="button" className="btn btn-primary"
                onClick={this.onLogin}>Login</button>
            </div>
        </header>
        <Login
        onClose={() => this.onLogin}
        loginBut={loginBut}
        loginUser={loginUser}
        />
    </div>    
    )
}
}