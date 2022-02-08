import React from "react";

const LinkItem = ({ name='', href, children }) => {
    return (
        <li>
            <a href={href}
               aria-label={name}
            >
                {children}
            </a>
        </li>
    );
};

export default LinkItem;
