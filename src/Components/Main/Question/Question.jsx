import React from "react";
import styles from './Question.module.css';

const Question = () => {
    return(
        <div>
            <div className={styles.question}>
                <span>
                    1.
                </span>
                <span>
                    Вопрос
                </span>
            </div>
        </div>
    )
}

export default Question;