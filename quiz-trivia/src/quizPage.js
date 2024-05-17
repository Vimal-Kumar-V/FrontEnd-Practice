import { useState } from "react";
import "./quizPage.css"
let questions = [
    {
        "_id": 1,
        "question": "What is your Name",
        "options": [
            {"key": "1",  "_id": "1", "value": "Devil", "selected": false},
            {"key": "2",  "_id": "2", "value": "Vk", "selected": false},
            {"key": "3",  "_id": "3", "value": "Joker", "selected": false},
            {"key": "4",  "_id": "4", "value": "IronMan", "selected": false},
        ],
        "correct": 1
    },
    {
        "_id": 2,
        "question": "What is your Name",
        "options": [
            {"key": "1",  "_id": "1", "value": "Devil", "selected": false},
            {"key": "2",  "_id": "2", "value": "Vk", "selected": false},
            {"key": "3",  "_id": "3", "value": "Joker", "selected": false},
            {"key": "4",  "_id": "4", "value": "IronMan", "selected": false},
        ],
        "correct": 1
    },
    {
        "_id": 3,
        "question": "What is your Name",
        "options": [
            {"key": "1",  "_id": "1", "value": "Devil", "selected": false},
            {"key": "2",  "_id": "2", "value": "Vk", "selected": false},
            {"key": "3",  "_id": "3", "value": "Joker", "selected": false},
            {"key": "4",  "_id": "4", "value": "IronMan", "selected": false},
        ],
        "correct": 1
    },
    {
        "_id": 4,
        "question": "What is your Name",
        "options": [
            {"key": "1",  "_id": "1", "value": "Devil", "selected": false},
            {"key": "2",  "_id": "2", "value": "Vk", "selected": false},
            {"key": "3",  "_id": "3", "value": "Joker", "selected": false},
            {"key": "4",  "_id": "4", "value": "IronMan", "selected": false},
        ],
        "correct": 1
    },
    {
        "_id": 5,
        "question": "What is your Name",
        "options": [
            {"key": "1",  "_id": "1", "value": "Devil", "selected": false},
            {"key": "2",  "_id": "2", "value": "Vk", "selected": false},
            {"key": "3",  "_id": "3", "value": "Joker", "selected": false},
            {"key": "4",  "_id": "4", "value": "IronMan", "selected": false},
        ],
        "correct": 1
    }
]
export default function QuizPage(){
    function optionSelect(question_id, option_id){
        let latestQuestions = [];
        console.log(question_id, option_id)
        setQuestion(prevQuestion => {
            for (let question of prevQuestion){
                if (question._id === question_id){
                    question.options = question.options.map(option => ({...option, "selected": option._id === option_id}))
                }
                latestQuestions.push(question)
            }
            console.log(latestQuestions);
            return latestQuestions
        })
    }

    const [question, setQuestion] = useState(questions);
    const [submitted, setSubmit] = useState(false);
    const [score, setScore] = useState(0);
    let questionUI = question.map(currQuestion => (
        <div className={submitted?"submitted":""}>
            <p className="questions">{currQuestion.question}</p>
            <ul className="options">
                {currQuestion.options.map(option => 
                    <li onClick={()=>!submitted?optionSelect(currQuestion._id, option._id):()=>{}} className={`${option.selected?"selected-option": "unselected:option"} ${option.correct?"correct":"None"}`}>
                        {option.value}
                    </li>)}
             </ul>
             <hr />
        </div>
    ))

    const submitAnswer = () => {
        let latestQuestions = [];
        setSubmit(true);
        setQuestion(prevQuestion => {
            for (let question of prevQuestion){
                question.options = question.options.map(option => ({...option, "correct": option._id == question.correct}))
                latestQuestions.push(question)
            }
            console.log(latestQuestions);
            return latestQuestions
        })
    }
    
    const reloadPage = () =>{
        setQuestion(questions)
        setSubmit(false);
    }

    const getScore = () => {
        let score = 0;
        for (let quest of question)
            {
                for (let option of quest.options)
                    {
                        if (option._id == quest.correct && option.selected)
                            score++;
                    }
            }
        return score;
    }
    return (
        <div className="question-option">
            <>
            {questionUI}
            {submitted && <div className="result"><p>You scored {getScore()}/5 correct answers</p><button className="reloadPage" onClick={reloadPage}>Reload</button></div>}
            {!submitted && <button className="submit" onClick={submitAnswer}>Submit</button>}
            </>
        </div>
    )
}