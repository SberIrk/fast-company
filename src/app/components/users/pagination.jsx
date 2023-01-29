import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
const Pagination = (props) => {
    const { itemsCount, pageSize, onPageSize, currentPage } = props;
    const pageCount = Math.ceil(itemsCount / pageSize);

    if (pageCount === 1) {
        return null;
    }
    const pages = _.range(1, pageCount + 1);
    return <nav>
        <ul className="pagination">
            {pages.map(page => {
                return (
                    <li
                        className={
                            "page-item" +
                            (currentPage === page ? " active" : "")
                        }
                        key = { "page_" + page }
                    >
                        <button
                            className="page-link"
                            onClick={
                                () => onPageSize(page)
                            }
                        >
                            {page}
                        </button>
                    </li>
                );
            })}
        </ul>
    </nav>;
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageSize: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};
export default Pagination;
