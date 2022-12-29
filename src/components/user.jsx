import React , {useState} from "react";
import api from "../api"
import {declOfNum} from "../utils"

const Users=()=>{

    const [storeUsers, setStoreUsers] = useState(api.users.fetchAll());

    const renderedHeaderTable = () => {
        if(!Array.isArray(storeUsers) || storeUsers.length < 1) {
            return (<h2><span className="badge bg-danger m-2">Никто с тобой не тусанет</span></h2>);
        }
        const count = storeUsers.length;
        const msg = `${count} ${declOfNum(count, ['человек', 'человека', 'человек'])} тусанут с тобой сегодня.`
        return (<h2><span className="badge bg-primary m-2">{msg}</span></h2>);

    };

    const buttonDeleteUser = (userID) => {
        setStoreUsers((store)=> {
            return store.filter(value => value._id !== userID);
        });
    }

    const qualitiesRendered = (dataQualityUser) => {
        if(!Array.isArray(dataQualityUser) && dataQualityUser.length < 1){
            return;
        }
        return dataQualityUser.map(quality => {
            const color = `m-2 badge bg-${quality.color}`
            return (<span key = {quality._id} className = {color} >{quality.name}</span>)
        });
    }

    const rowRender = (user) => {
        return (
            <tr key={user._id}>
                <td>{user.name}</td>
                <td>{qualitiesRendered(user.qualities)} </td>
                <td>{(user?.profession?.name) ? user.profession.name : ""}</td>
                <td>{user.completedMeetings}</td>
                <td>{`${user.rate} / 5`}</td>
                <td><button type="button" className="btn btn-danger" onClick={() => buttonDeleteUser(user._id)}>Удалить</button></td>
            </tr>
        );
    }

    const renderedBodyTable = () => {
        if(!Array.isArray(storeUsers) || storeUsers.length < 1) {
            return
        }
        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {storeUsers.map( dataUser => rowRender(dataUser))}
                </tbody>
            </table>
        );
    }

    const usersRendered = () => {
        return(
            <>
                {renderedHeaderTable()}
                {renderedBodyTable()}
            </>
        );
    }

    return usersRendered()
}

export default Users;