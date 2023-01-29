import React from "react";
import PropTypes from "prop-types";
import IconSortTable from "./iconSortTable";
const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: (selectedSort.order === "asc") ? "desc" : "asc"
            });
        } else {
            onSort({
                path: item,
                order: "asc"
            });
        }
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map(column => (
                    <th
                        key={column}
                        onClick={columns[column].path
                            ? () => handleSort(columns[column].path)
                            : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                        <IconSortTable
                            selectedSort={selectedSort}
                            item={columns[column].path}
                        />
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    selectedSort: PropTypes.object.isRequired,
    onSort: PropTypes.func,
    columns: PropTypes.object.isRequired
};

export default TableHeader;