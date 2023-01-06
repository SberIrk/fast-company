import React from "react";

const Qualitie  = (props) => {

    return props.value.map(quality => {
        const color = `m-2 badge bg-${quality.color}`
        return (<span key = {quality._id} className = {color}>{quality.name}</span>)
    });
}

export default Qualitie;