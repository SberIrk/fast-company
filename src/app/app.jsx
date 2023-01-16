import React, { useEffect, useState } from "react";
import Users from "./components/users";
import api from "./api";

function App() {
    // Берём данные api
    const [users, setUsers] = useState([]);

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    // Кнопка удаления
    const onDelete = (userID) => {
        setUsers((store) => {
            return store.filter(value => value._id !== userID);
        });
    };

    // Кнопка избраное
    const onToggleBookMark = (userID) => {
        setUsers((users) => {
            return users.map(user => {
                if (user._id === userID) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            });
        });
    };
    return (
        <div>
            <Users
                users = {users}
                onDelete = {onDelete}
                onToggleBookMark = {onToggleBookMark}
            />
        </div>
    );
}

export default App;
