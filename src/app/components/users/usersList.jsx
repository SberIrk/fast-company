import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import { paginate } from "../../utilits/utils";
import GroupList from "./groupList";
import api from "../../api";
import SearchStatus from "./searchStatus";
import UsersTable from "./usersTable";
import _ from "lodash";

const UsersList = () => {
    // Берём данные api users
    const [users, setUsers] = useState();

    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const pageSize = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });

    //
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    if (!users) {
        return "Loading...";
    }

    const valuePropertyProf = "_id";
    const filteredUsers = selectedProf
        // Тут не поулчаеться сравнить обьекты
        ? users.filter((user) => user.profession[valuePropertyProf] === selectedProf[valuePropertyProf])
        : users;

    const count = filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
    const userCrop = paginate(sortedUsers, currentPage, pageSize);

    // Смена страницы
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    if (currentPage > 1 && userCrop.length === 0) {
        handlePageChange(currentPage - 1);
    }

    // Фильтр профессии
    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    // Очистить фильтр
    const clearFilter = () => {
        setSelectedProf();
    };

    // Сортировка
    const handleSort = (item) => {
        setSortBy(item);
    };

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
                {count > 0 && <UsersTable
                    users = {userCrop}
                    onSort = {handleSort}
                    selectedSort = {sortBy}
                    onDelete={onDelete}
                    onToggleBookMark={onToggleBookMark}
                />}
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

export default UsersList;
