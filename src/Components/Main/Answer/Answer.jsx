import React from "react";
import styles from './Answer.module.css';



const Answer = ({ text, answerId, answerChange, finished, colorActive}) => {
      
    return (
        <div className={`${styles.AnswerItem} ${colorActive === answerId ? styles.answerActive : ''}`} onClick={finished ? '' : () => answerChange(answerId)}>
            <span>
                {answerId}.
            </span>

            <span>
                {text}
            </span>
        </div>
    )
}

export default Answer;