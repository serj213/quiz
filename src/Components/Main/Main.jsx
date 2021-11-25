import React from "react";
import styles from './Main.module.css';

import Question from "./Question/Question";
import Answer from "./Answer/Answer";


const Main = () => {
    return (
        <div className={styles.main}>

            <h1>
                Тупо Опросник
            </h1>

            <div className={styles.main__wrapper}>
                <Question />

                <div className={styles.main__inner}>
                    <Answer />

                    <Answer />

                    <Answer />


                    <Answer />
                </div>

            </div>




        </div>
    )
}

export default Main;