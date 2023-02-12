import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ selectedSort, onSort, columns, data, children }) => {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader {...{ selectedSort, onSort, columns }}/>
                    <TableBody {...{ columns, data }}/>
                </>
            )}
        </table>
    );
};

Table.propTypes = {
    selectedSort: PropTypes.object.isRequired,
    onSort: PropTypes.func,
    columns: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    children: PropTypes.array
};

export default Table;
