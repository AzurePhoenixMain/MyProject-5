import React, {Component} from 'react'
import Rewrite from '../app-rewrite'
import './post-list-item.css'

export default class PostListItem extends Component {

constructor (props) {
    super(props);
    this.state = {
        rewriteBut: false
    }

    this.rewriteButFun = this.rewriteButFun.bind(this)
}

rewriteButFun() {
    this.setState(({rewriteBut}) => ({
        rewriteBut: !rewriteBut
    }))
    console.log(this.state.rewriteBut)
}

render() {
const {lable, onDelete, name, id, rewriteItem, users, time} = this.props;

let lastUser = users[users.length - 1]
let classNames = 'hide'

if (name === lastUser || lastUser === 'Admin') {
    classNames = 'show'
}

return (
<div className='app-list-item d-flex justify-content-between' >
    <div>
        <span className='app-list-name'>
            {name}
        </span>
        <span className='app-list-time'>
            {time}
        </span>

        <div className='app-list-img-lable'>
            <span 
            className='app-list-item-lable'>
            {lable}
            </span>
        </div>  
    </div>
        
    <div className={classNames}>
    <div className='d-flex justify-content-center align-item-center'>
        <button
        type='button' 
        className='btn-trash btn-sm btn-my-custom'
        onClick={this.rewriteButFun}>
            <i className="bi bi-wrench"></i>
        </button>

        <button 
        type='button' 
        className='btn-x-circle btn-sm btn-my-custom'
        onClick={onDelete}>
            <i className="bi bi-x-circle"></i>
        </button>
    </div>
    </div>

    <Rewrite
        rewriteBut={this.state.rewriteBut}
        rewriteButFun={() => this.rewriteButFun}
        lable={lable}
        id={id}
        rewriteItem={rewriteItem}
        />
</div>
)
}
}


