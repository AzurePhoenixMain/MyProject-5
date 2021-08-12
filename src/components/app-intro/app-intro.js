import React, {Component} from 'react'
import './app-intro.css'

export default class Intro extends Component {
render() {

    let {filter} = this.props
    let classNames1 = 'hide';
    let classNames2 = 'hide';

    if (filter === 'work') {
        classNames1 = 'show center'
    } else classNames2 = 'show center'

    return(
    <div>
        <div className={classNames1}>
            Добро пожаловать! Этот раздел посвящен для обсуждения рабочих моментов. Всем плодотворной работы!
        </div>
        <div className={classNames2}>
            Всем привет! Этот раздел отведен для флуда и свободного общения. Здесь можно оющаться на любые темы)
        </div>    
    </div>
    )
}
}
