import React, {Component} from 'react'

import AppHeader from '../app-header'
import PostList from '../post-list'
import PostAddForm from '../post-add-form'
import Intro from '../app-intro'

import './app.css'

export default class App extends Component {

constructor (props) {
    super(props);
    this.state = {
        data : [
            {lable: 'Сегодня будем работать над тем', id: 1, name: 'Alex', typeChat: 'work', time: '12:34 - 11.07'},
            {lable: 'А как же то?', id: 2, name: 'Bob', typeChat: 'work', time: '12:34 - 11.07'},
            {lable: 'А вот так', id: 3, name: 'Alex', typeChat: 'work', time: '12:34 - 11.07'},
            {lable: 'Понятно. Что делать с тем?', id: 4, name: 'Vova', typeChat: 'work', time: '12:34 - 11.07'},
            {lable: 'Думаю надо сделать так.', id: 5, name: 'Sara', typeChat: 'work', time: '12:34 - 11.07'},
            {lable: 'Го в бар!', id: 6, name: 'Bob', typeChat: 'free', time: '12:34 - 11.07'},
            {lable: 'Доработаем и все пойдем в бар!', id: 7, name: 'Alex', typeChat: 'free', time: '12:34 - 11.07'},
            {lable: 'Ок...', id: 8, name: 'Bob', typeChat: 'free', time: '12:34 - 11.07'},
            {lable: 'Бар?', id: 9, name: 'Vova', typeChat: 'free', time: '12:34 - 11.07'},
            {lable: 'Есс', id: 10, name: 'Alex', typeChat: 'free', time: '12:34 - 11.07'}
        ],
        users: ["Anon"],
        login: false,
        filter: 'work',
        maxId: 11
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
    this.onTogglePageWork = this.onTogglePageWork.bind(this);
    this.onTogglePageFree = this.onTogglePageFree.bind(this);
    this.rewriteItem = this.rewriteItem.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.getTime = this.getTime.bind(this);
    this.maxId1 = this.maxId1.bind(this);   
}

componentDidMount() {
    let dataLS = JSON.parse(localStorage.getItem('dataLS'))
    let usersLS = JSON.parse(localStorage.getItem('usersLS'))
    
    if (dataLS) {
        this.setState(({data}) => {
            const newArr = [...dataLS];
            return {
                data: newArr
            }
        })
    }

    if (usersLS) {
        this.setState(({users}) => {
            const newArr = [...usersLS];
            return {
                users: newArr
            }
        })
    }

    this.maxId1(dataLS);
}

componentDidUpdate() {
    localStorage.setItem('dataLS', JSON.stringify(this.state.data))
    localStorage.setItem('usersLS', JSON.stringify(this.state.users))
}

maxId1(arr) {
    if (arr) {
    let lenght = arr.length

    this.setState(({maxId}) => {
        return {
            maxId: ++lenght
        }
    })}
}

filterPost(data, filter) {
    return data.filter((data) => {
        return data.typeChat.indexOf(filter) > -1
    })
}

loginUser(newUser) {
    this.setState(({users}) => {
        const newUsers = users.push(newUser.toString())
        return newUsers
    }) 
}

onTogglePageWork() {
    this.setState(() => {
        return {filter: 'work'}
    })
}

onTogglePageFree() {
    this.setState(() => {
        return {filter: 'free'}
    })
}


deleteItem(id) {
    this.setState(({data}) => {
        const index = data.findIndex(el => el.id === id);
        
        const before = data.slice(0, index);
        const after = data.slice(index + 1);

        const newArr = [...before, ...after];

        return {
            data: newArr
        }
    })


}

rewriteItem(id, text) {
    this.setState(({data}) => {
        let item = data.filter((i) => i.id === id)
        let newItem = item[0];
        newItem.lable = text;
        newItem.time = this.getTime() + ' (отредактировано)'

        const index = data.findIndex(el => el.id === id);
        const before = data.slice(0, index);
        const after = data.slice(index + 1);
        const newArr = [...before, newItem, ...after];

        return {
            data: newArr
        }
    })
}


addItem(text, filter) {
    let newId = this.state.maxId

    do {
        newId++
    } while (this.state.data.some(item => item.id === newId))

    const newItem = {
        lable: text,
        id: newId,
        name: this.state.users[this.state.users.length - 1],
        typeChat: filter,
        time: this.getTime()
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    })
}

onUpdateSearch(term) {
    this.setState({term: term})
}

onFilterSelect(filter) {
    this.setState({filter: filter})    
}

getTime() {
    let Data = new Date();
    let Month = getZero(Data.getMonth());
    let Day = getZero(Data.getDate());
    let Hour = getZero(Data.getHours());
    let Minutes = getZero(Data.getMinutes());

    function getZero(num) {
        if (num >=0 && num <10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    let t = Hour + ':' + Minutes + ' - ' + Day + '.' + Month
    return t
}


render() {
const {data, filter, typeChat, name, users, time} = this.state;

const visiblePosts = this.filterPost(data, filter)

return (
    <div className='app'>
        <AppHeader
            onTogglePageWork={() => this.onTogglePageWork()}
            loginUser={this.loginUser}
            onTogglePageFree={() => this.onTogglePageFree()}/>
        <Intro
            filter={filter}/>
        <PostList 
            users={users}
            time={time}
            name={name}
            posts={visiblePosts}
            typeChat={typeChat}
            onDelete={this.deleteItem}
            rewriteItem={this.rewriteItem}/>
        <PostAddForm
            onAdd={this.addItem}
            filter={filter} />
    </div>
)
}
}








