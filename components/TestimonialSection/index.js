import React from "react";
import styles from './style.module.scss';
import Container from "../Container";

const TestimonialSection = () => {
    return (
        <section className={styles.testimonialSection}>
            <Container className={styles.container}>
                <h2 className={styles.title}>
                    It just <strong>works.</strong>
                </h2>
                <p className={styles.description}>
                    “I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker.”
                </p>
                <div className={styles.username}>
                    <strong>
                        JEREMY ROBINSON
                    </strong>
                    <div>
                        CMO, FYLO
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TestimonialSection;
