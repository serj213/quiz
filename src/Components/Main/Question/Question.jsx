import React from "react";
import styles from './Question.module.css';

const Question = ({question, numberQuestion}) => {
    
    return(
        <div>
            <div className={styles.question}>
                <span>
                    {numberQuestion}.
                </span>
                <span>
                    {question}
                </span>
            </div>
        </div>
    )
}

export default Question;