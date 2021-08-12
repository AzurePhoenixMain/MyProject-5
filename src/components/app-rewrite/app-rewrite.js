import React, {Component} from 'react'
import './app-rewrite.css'

export default class Rewrite extends Component {
constructor(props) {
    super(props);
    this.state = {
        text: ''
    };

    this.onValueChange = this.onValueChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
}

componentDidMount() {
    this.setState({
        text: this.props.lable
    })
}

onValueChange(e) {
    this.setState({
        text: e.target.value
    })
}

onSubmit(e) {
    let {rewriteItem} = this.props
    rewriteItem(this.props.id, this.state.text)
    e.preventDefault();
}

render() {

    let {rewriteButFun, rewriteBut} = this.props;
    let classNames = 'hide';
    if (rewriteBut) {
        classNames ='show'
    }

    return (
    <div className={classNames}>
    <div className="modal">
        <div className="modal__dialog">
        <div className="modal__content">
            <form action="#" onSubmit={this.onSubmit}>
                <div className="modal__close"
                onClick={rewriteButFun()}>&times;</div>
                <div className="modal__title">Измените свое сообщение</div>

                <textarea type='text'
                className='form-control new-post-label modal__inputt'
                onChange={this.onValueChange}
                value={this.state.text}>
                </textarea>
                <button className="btn btn-primary"
                onClick={rewriteButFun()}
                >
                Готово</button>
            </form>
        </div>
        </div>
    </div>    
    </div> 
    )
}
}
