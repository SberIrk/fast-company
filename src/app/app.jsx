import React, {useState} from 'react';
import Users from "./components/users";
import SearchStatus from "./components/searchStatus"
import api from "./api";

function App(){
    // Берём данные api
    const [users, setUsers] = useState(api.users.fetchAll());

    // Кнопка удаления
    const handleDelete = (userID) => {
        setUsers((store)=> {
            return store.filter(value => value._id !== userID);
        });
    }

    // Кнопка избраное
    const handleBookmark = (userID) => {
        setUsers((store)=> {
            return store.map(value => {
                if( value._id === userID){
                    value.bookmark = (value.bookmark) ? false : true;
                }
                return value;
            })
        });
    }


    // Инцилизация данных
    const init = () => {
        // Если массив пустой, то вернём только статус
        if(!Array.isArray(users) || users.length < 1) {
            return ( <SearchStatus users = {[]}/>);
        } else {
        // Данные есть, доабвляем таблицу
            return(<>
                <SearchStatus users = {users}/>
                <Users users = {users}
                   handleDelete = {handleDelete}
                   handleBookmark = {handleBookmark}
                />
            </>)
        }
    }

    return (
        <React.StrictMode>
            {init()}
        </React.StrictMode>
    )
}

export default App;