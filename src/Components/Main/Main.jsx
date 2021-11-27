import React, { useState } from "react";
import styles from './Main.module.css';

import listQuestion from '../../ListAnswers.json';
import QuizFinish from "./Question/QuizFinish/QuizFinish";
import Question from "./Question/Question";
import Answer from "./Answer/Answer";


const Main = props => {

    const listAll = listQuestion;

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [numberCorrectAnswers, setNumberCorrectAnswers] = useState(0);
    const [colorActive, setColorActive] = useState(0);

    const changeQuestion = answerId => {

        setColorActive(answerId);

        if (answerId === listAll[currentQuestion].rightAnswer) {
            setNumberCorrectAnswers(numberCorrectAnswers + 1)
        }

        if (listAll.length === currentQuestion + 1) {
            setIsFinished(true);
            setCurrentQuestion(0)
        } else {

            setTimeout(() => setCurrentQuestion(currentQuestion + 1), 1000);
        }
    }

    React.useEffect(() => {

        setColorActive(0);

    }, [currentQuestion])





    const replayQuiz = () => {
        setIsFinished(false);
        setNumberCorrectAnswers(0)
    }


    if (isFinished) {
        return <QuizFinish allQuestions={listAll.length} countRightAnswers={numberCorrectAnswers} replay={replayQuiz} />
    }
    else {
        return (
            <div className={styles.main}>

                <h1>
                    Тупо Опросник
                </h1>


                <div className={styles.main__wrapper}>

                    <Question numberQuestion={listAll[currentQuestion].id} question={listQuestion[currentQuestion].question} />

                    <div className={styles.main__inner}>

                        {
                            listAll[currentQuestion].answers.map((item, index) => {
                                return <Answer key={index} finished={isFinished}
                                    answerChange={changeQuestion}
                                    answerId={item.id}
                                    text={item.text}
                                    colorActive={colorActive}
                                />

                            })
                        }

                    </div>

                </div>
            </div>
        )

    }
}

export default Main;