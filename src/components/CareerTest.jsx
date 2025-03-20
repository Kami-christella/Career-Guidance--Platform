import  { useState } from 'react';
import '../styles/CareerTest.css';
import { useNavigate } from 'react-router-dom';
import { TbPlayerTrackNext } from "react-icons/tb";


function CareerTest() {
    const [responses, setResponses] = useState({});
    const navigate = useNavigate(); 
    const questions = [
        
        {
            question: "What activities do you enjoy doing in your free time? (Select all that apply)",
            options: ["Solving puzzles and analytical problems", "Creating art, music, or writing", "Helping people and giving advice", "Working with machines or technology", "Managing projects and organizing tasks"],
            type: "checkbox"
        },
        {
            question: "Do you prefer working with:",
            options: ["People", "Data and numbers", "Physical objects and tools", "A mix of all the above"],
            type: "radio"
        },
        {
            question: "Would you rather:",
            options: ["Solve complex problems", "Create something new", "Work on routine tasks that require precision", "Manage and coordinate tasks"],
            type: "radio"
        },
        {
            question: "Do you enjoy working:",
            options: ["Independently", "In a team", "A mix of both"],
            type: "radio"
        },
        {
            question: "Are you more interested in:",
            options: ["Technical tasks (e.g., coding, engineering)", "Creative work (e.g., writing, design, art)", "Business and management", "Healthcare and helping others"],
            type: "radio"
        },
        {
            question: "Do you prefer:",
            options: ["Planning and organizing projects", "Hands-on execution and action", "A mix of both"],
            type: "radio"
        },
        {
            question: "Would you enjoy a career that involves frequent travel?",
            options: ["Yes, I love traveling", "Occasionally, but not too much", "No, I prefer a stable location"],
            type: "radio"
        },
        {
            question: "Do you prefer structured tasks or flexible, open-ended work?",
            options: ["Structured tasks with clear guidelines", "Flexible tasks with room for creativity", "A mix of both"],
            type: "radio"
        },
        {
            question: "Do you enjoy helping others and making an impact on people’s lives?",
            options: ["Yes, that’s my main motivation", "Somewhat, but it’s not my top priority", "No, I prefer working on technical tasks"],
            type: "radio"
        },
        {
            question: "What industries or fields excite you the most? (Select all that apply)",
            options: ["Technology and Engineering", "Healthcare and Social Work", "Business and Entrepreneurship", "Arts, Media, and Entertainment", "Education and Research"],
            type: "checkbox"
        }
    ];
    const handleChange = (questionIndex, option, type) => {
        setResponses((prevResponses) => {
            if (type === "checkbox") {
                const selectedOptions = prevResponses[questionIndex] || [];
                return {
                    ...prevResponses,
                    [questionIndex]: selectedOptions.includes(option)
                        ? selectedOptions.filter((item) => item !== option)
                        : [...selectedOptions, option]
                };
            } else {
                return { ...prevResponses, [questionIndex]: option };
            }
        });
    };

    return (
        <div className="career-test-container">
            <h2 className="title">Career Interest Assessment</h2>
            <form className="career-test-form">
                {questions.map((q, index) => (
                    <div key={index} className="question-block">
                        <p className="question"><strong>{q.question}</strong></p>
                        <div className="options-container">
                            {q.options.map((option, optIndex) => (
                                <label key={optIndex} className="option-label">
                                    <input
                                        type={q.type}
                                        name={`question-${index}`}
                                        value={option}
                                        checked={q.type === "radio" ? responses[index] === option : (responses[index] || []).includes(option)}
                                        onChange={() => handleChange(index, option, q.type)}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
                 <button type="button" className="btn btn-success" onClick={() => navigate('/Assessment2')}>Next <TbPlayerTrackNext /></button>
            </form>
        </div>
    );
}

export default CareerTest;
