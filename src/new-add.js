import React from 'react'

class PostListItem extends React.Component {
    render () {
        const {label, onDelete, onToggleLike, liked} = this.props
        let classNames = 'form';
        if (liked) {
            classNames += ' important';
        }
        return (
            <li className={classNames}>
                <span>
                    {label}
                </span>
                <div>
                    <button onClick={onToggleLike}>
                        like
                    </button>
                    <button onClick={onDelete}>
                        dislike
                    </button>
                </div>
            </li>
        )
    }
}


const Header = () => {
    return (
        <div>
            <h1>ННН</h1>
            <h2>2000 очков</h2>
        </div>
    )
}

const SerchPanel = () => {
    return (
        <input type="text" placeholder="поиск среди игроков"/>
    )
}

const PostAddForm = ({onAdd}) => {
    return (
       <div>
           <input type='text' placeholder="как тебя зовут">
           </input>
           <button type="submit" onClick={()=>onAdd("Hello")}>
                В список
           </button>
       </div>
    )
}



const PostList = ({posts, onDelete, onToggleLike}) => {

    const element = posts.map((item)=>{
        const {id, ...itemProps} = item
        return (
            <li  key={id}>
                <PostListItem
                    {...itemProps}
                    onDelete={()=> onDelete(id)}
 >
                </PostListItem>
            </li>
        )
    });

    return (
        <ul>{element}</ul>

    )
}

const PostStatusFilter = () => {
    return (
        <div>
            <button type="button">
         all
            </button>
            <button type="button">
                like
                </button>
        </div>
    )
}

export class NewReg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label:'nikta', liked: true, id: 1},
                {label:'anton', liked: false,  id: 2},
                {label:'max', liked: true,  id: 3}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.maxId = 4;
    }
    deleteItem(id) {
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0,index);
            const after = data.slice(index+1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        })
    }
    addItem(body){
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data})=>{
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
    onToggleLike(id) {
        console.log(id);
    }

    // eslint-disable-next-line no-dupe-class-members
    onToggleLike(id) {
        console.log(id);
    }
        render() {
            return (
                <>
                <h1>Hello</h1>
                <Header/>
                <SerchPanel/>
                <PostStatusFilter/>
                <PostList 
                onDelete={this.deleteItem}
                posts={this.state.data}/>
                <PostAddForm 
                onAdd={this.addItem}/>
                </>
            )
        
    }
    }



