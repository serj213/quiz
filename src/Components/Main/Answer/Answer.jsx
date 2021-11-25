import React from "react";
import styles from './Answer.module.css';



const Answer = props => {
    return (
        <div className={styles.AnswerItem}>
            <span>
                1.
            </span>

            <span>
                вариант ответа
            </span>
        </div>
    )
}

export default Answer;