import React, { useState, useEffect } from "react";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utilits/utils";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../api";
import SearchStatus from "./searchStatus";

const Users = ({ users, ...rest }) => {
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const pageSize = 2;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const valuePropertyProf = "_id";
    const filteredUsers = selectedProf
        // Тут не поулчаеться сравнить обьекты
        ? users.filter((user) => user.profession[valuePropertyProf] === selectedProf[valuePropertyProf])
        : users;
    console.log(filteredUsers);
    const count = filteredUsers.length;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);
    const clearFilter = () => {
        setSelectedProf();
    };

    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        valueProperty = {valuePropertyProf}
                        items = {professions}
                        onItemSelect = {handleProfessionSelect}
                        selectedItem = {selectedProf}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        Очистить
                    </button>
                </div>
            )}
            <div className="d-flex flex-column p-3">
                <SearchStatus length = {count}/>
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
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount = {count}
                        pageSize = {pageSize}
                        currentPage = {currentPage}
                        onPageSize = {handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired
};

export default Users;
