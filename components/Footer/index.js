import React from 'react';
import styles from './style.module.scss';
import Container from "../Container";
import Logo from "../Logo";
import SocialContainer from "../../containers/SocialContainer";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                <Logo />
                <p className={styles.copyright}>
                    Copyright - Suite
                </p>

                <ul className={styles.socialContainer}>
                    <SocialContainer />
                </ul>
            </Container>
        </footer>
    );
};

export default Footer;
