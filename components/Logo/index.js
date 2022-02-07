import React from "react";
import styles from './style.module.scss';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href={''}>
            <a>
                <img src={'/logo.svg'}
                     alt={'suite'}
                />
            </a>
        </Link>
    );
};

export default Logo;
