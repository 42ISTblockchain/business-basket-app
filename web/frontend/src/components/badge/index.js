import React from "react";

export default function Badge(props) {
    let className = "badge gap-2";
    if (props.status === "accepted") {
        className += " badge-success";
    } else if (props.status === "pending") {
        className += " badge-warning";
    } else if (props.status === "rejected") {
        className += " badge-error";
    }
    return (
        <div className={className}>
            {props.children}
        </div>
    )
}