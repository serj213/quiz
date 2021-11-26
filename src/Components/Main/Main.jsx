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
    const [colorActive, setColorActive] = useState(false);

    console.log(colorActive);

    



    const changeQuestion = answerId => {



        if (answerId === listAll[currentQuestion].rightAnswer) {
            setNumberCorrectAnswers(numberCorrectAnswers + 1)
        }
        

        colorOnClick()

        setTimeout(() => {
            setCurrentQuestion(currentQuestion + 1); 
            setColorActive(false)
        }, 1000);
        
       

        finishedChange();
    }

    const colorOnClick = () => {
        setColorActive(true);
    }


    const finishedChange = () => {

        if (listAll.length === currentQuestion + 1) {
            setIsFinished(true);
            setCurrentQuestion(0)
        } else {

        }
    }

    const replayQuiz = () => {
        setIsFinished(false);
        setNumberCorrectAnswers(0)
    }


    const countRightAnswers = answerId => {

        console.log(answerId);

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
                                    checkAnswers={countRightAnswers}
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