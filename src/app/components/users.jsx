import React, { useState } from "react";
import User from "./user";
import Pagination from "./pagination";
import { paginate } from "../utilits/utils";
import PropTypes from "prop-types";

const Users = ({ users, ...rest }) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);
    return (
        <>
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
