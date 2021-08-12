import React from 'react'
import PostListItem from '../post-list-item/post-list-item'
import './post-list.css'

const PostList = ({posts, onDelete, rewriteItem, users}) => {
const elements = posts.map((item) => {

    const {id, ...itemProps} = item

    return (
        <li key={id} className='list-group-item'>
            <PostListItem 
                {...itemProps}
                onDelete={() => onDelete(id)}
                rewriteItem={rewriteItem}
                id={id}
                users={users}
            />
        </li>
    )
})

return (
    <div className='app-list'>
        {elements}
    </div>
)
}

export default PostList;