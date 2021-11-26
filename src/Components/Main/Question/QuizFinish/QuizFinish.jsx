import React from "react";
import styles from './QuizFinish.module.css';


const QuizFinish = ({ replay, countRightAnswers, allQuestions }) => {
    return (
        <div className={styles.finish}>
            <h2>
                Результаты
            </h2>

            <div className={styles.finish__results}>
                <span>{countRightAnswers}</span>
                из
                <span>{allQuestions}</span>
            </div>


            <button onClick={() => replay()}>
                пройти заново
            </button>
        </div>
    )
}

export default QuizFinish;