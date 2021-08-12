import React, {Component} from 'react'
import './app-login.css'

export default class Login extends Component {
constructor(props) {
    super(props);
    this.state = {
        text: ''
    };

    this.onValueChange = this.onValueChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
}

onValueChange(e) {
    this.setState({
        text: e.target.value
    })
}

onSubmit(e) {
    let {loginUser} = this.props
    loginUser(this.state.text)

    e.preventDefault();
        this.setState({
            text: ''
        })
}

render() {
    let {onClose, loginBut} = this.props;
    let classNames = 'hide';

    if (loginBut) {
        classNames ='show'
    }

    return (
    <div className={classNames}>
    <div className="modal">
    <div className="modal__dialogq">
        <div className="modal__content">
        <form action="#" onSubmit={this.onSubmit}>
            <div className="modal__close"
            onClick={onClose()}>&times;</div>
            <div className="modal__title">Войдите в свой аккаунт</div>
            <input 
            required placeholder="Ваш логин" 
            name="name" type="text" 
            className="modal__inputq"
            onChange={this.onValueChange}
            value={this.state.text}
            />
            <input required placeholder="Ваш пароль" name="pass" type="password" className="modal__inputq"/>
            <button className="btn btn-primary"
            onClick={onClose()}>Войти</button>
        </form>
        </div>
    </div>
    </div>    
    </div>   
    )
}
}
