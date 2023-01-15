import React, { useState, useEffect } from "react";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utilits/utils";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../api";

const Users = ({ users, ...rest }) => {
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const filteredUsers = selectedProf
        // Тут не поулчаеться сравнить обьекты
        ? users.filter((user) => user.profession._id === selectedProf._id)
        : users;
    console.log(filteredUsers);
    const userCrop = paginate(filteredUsers, currentPage, pageSize);
    return (
        <>
            {professions && (
                <GroupList
                    items = {professions}
                    onItemSelect = {handleProfessionSelect}
                    selectedItem = {selectedProf}
                />
            )}
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избраное</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        { userCrop.length !== 0
                            ? userCrop.map(user => (
                                <User {...rest} {...user} key={user._id} />
                            ))
                            : handlePageChange(currentPage - 1)
                        }
                    </tbody>
                </table>
            )}

            <Pagination
                itemsCount = {count}
                pageSize = {pageSize}
                currentPage = {currentPage}
                onPageSize = {handlePageChange}
            />
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired
};

export default Users;
