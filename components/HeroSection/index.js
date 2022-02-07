import React from "react";
import styles from './style.module.scss';
import Button from "../Button";
import Container from "../Container";

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <Container>
                <h2 className={styles.title}>
                    A <strong>super <span>solution</span></strong>
                    for your <strong>business.</strong>
                </h2>
                <p className={styles.description}>
                    Our marketing and sales automations help you scale your outreach to get more leads for your company.
                </p>
                <Button>
                    Request Beta Access
                </Button>
            </Container>
            <Container>
                <img className={styles.landscapeImage}
                     src={'/img/image-hero-landscape@2x.png'}
                     alt={'landscape'}
                />
            </Container>
            <Container className={styles.featureContainer}>
                <div>
                    <div className={styles.numbers}>
                        2K+
                    </div>
                    <div className={styles.label}>
                        companies
                    </div>
                </div>
                <div>
                    <div className={styles.numbers}>
                        8
                    </div>
                    <div className={styles.label}>
                        languages
                    </div>
                </div>
                <div>
                    <div className={styles.numbers}>
                        1.2M
                    </div>
                    <div className={styles.label}>
                        leads
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;
