import React from "react";
import PropTypes from "prop-types";
import BookMark from "./bookmark";
import QualitieList from "./qualitieList";
import Table from "./table";

const UsersTable = ({ users, onSort, selectedSort, onToggleBookMark, onDelete }) => {
    const columns = {
        name: { path: "name", name: "Имя" },
        qualities: {
            name: "Качество",
            component: (user) => (<QualitieList qualities={user.qualities}/>)
        },
        professions: { path: "profession.name", name: "Профессия" },
        completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
        rate: { path: "rate", name: "Оценка" },
        bookmark: {
            //     path: "bookmark",
            name: "Избранное",
            component: (user) => (<BookMark
                status={user.bookmark}
                onClick={() => onToggleBookMark(user._id)}
            />)
        },
        delete: {
            component: (user) => (<button
                onClick={() => onDelete(user._id)}
                className="btn btn-danger"
            >
                delete
            </button>)
        }
    };
    return (
        <Table
            selectedSort={selectedSort}
            onSort={onSort}
            columns={columns}
            data = {users} />
    );
};

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object.isRequired,
    onToggleBookMark: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default UsersTable;
