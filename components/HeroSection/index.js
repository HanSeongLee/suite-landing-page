import React from "react";
import styles from './style.module.scss';
import Button from "../Button";
import Container from "../Container";

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <Container className={styles.introContainer}>
                <h2 className={styles.title}>
                    A <strong>super <span>solution</span></strong>&nbsp;<br/>
                    for your <strong>business.</strong>
                </h2>
                <p className={styles.description}>
                    Our marketing and sales automations help you scale your outreach to get more leads for your
                    company.
                </p>
                <Button>
                    Request Beta Access
                </Button>

                <div className={styles.landscapeContainer}>
                    <picture>
                        <source srcSet={'/img/image-hero-portrait@2x.png'}
                                media={'(min-width: 768px)'}
                        />
                        <img className={styles.landscapeImage}
                             src={'/img/image-hero-landscape@2x.png'}
                             alt={'landscape'}
                        />
                    </picture>
                </div>
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
