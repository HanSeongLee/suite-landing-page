import React from "react";
import styles from './style.module.scss';
import Container from "../Container";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <h1>
                    <Logo/>
                </h1>

                <Button variants={'outline'}
                        size={'small'}
                >
                    Request Beta Access
                </Button>
            </Container>
        </header>
    );
};

export default Header;
