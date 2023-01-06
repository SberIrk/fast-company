// Header users
import React  from "react";
import {declOfNum} from "../utilits/utils"
// Есть данные, заполняем таблицу...

const SearchStatus = (props) => {
    const count = props.users.length;
    if(count < 1) {
        return (<h2><span className="badge bg-danger m-2">Никто с тобой не тусанет</span></h2>);
    }
    const msg = `${count} ${declOfNum(count, ['человек', 'человека', 'человек'])} тусанут с тобой сегодня.`;
    return (<h2><span className="badge bg-primary m-2">{msg}</span></h2>);
}
export default SearchStatus;
