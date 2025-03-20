import { useState } from 'react';
import '../styles/Assessment2.css'; // Create a similar CSS file for styling
import { useNavigate } from 'react-router-dom';
import { TbPlayerTrackNext } from "react-icons/tb";

function Assessment2() {
    const [responses, setResponses] = useState({});
    const navigate = useNavigate();
    
    const questions = [
        {
            question: "How comfortable are you with using technology and digital tools? (Select one)",
            options: [
                "Very comfortable, I use them daily",
                "Somewhat comfortable, I learn quickly",
                "Not very comfortable, but I want to improve",
                "Not comfortable at all"
            ],
            type: "radio"
        },
        {
            question: "Can you effectively communicate your ideas to others? (Select one)",
            options: [
                "Yes, I am a strong communicator",
                "I can communicate well but prefer written communication",
                "I struggle with verbal communication but work well independently",
                "I need to improve my communication skills"
            ],
            type: "radio"
        },
        {
            question: "How strong are your problem-solving skills? (Select one)",
            options: [
                "Very strong, I love solving problems",
                "Somewhat strong, but I need guidance",
                "I prefer working on tasks with clear instructions",
                "I find problem-solving difficult"
            ],
            type: "radio"
        },
        {
            question: "Do you have experience managing projects and meeting deadlines? (Select one)",
            options: [
                "Yes, I have successfully managed multiple projects",
                "Somewhat, I have experience but need improvement",
                "No, I have not managed projects before"
            ],
            type: "radio"
        },
        {
            question: "How well do you handle stressful or high-pressure situations? (Select one)",
            options: [
                "Very well, I thrive under pressure",
                "I manage stress well but need some support",
                "I struggle under pressure but try my best",
                "I find stress difficult to handle"
            ],
            type: "radio"
        },
        {
            question: "Are you proficient in any specific software, coding languages, or technical skills? (Select all that apply)",
            options: [
                "Programming (Java, Python, JavaScript, etc.)",
                "Data Analysis (Excel, SQL, Power BI, etc.)",
                "Graphic Design (Photoshop, Illustrator, etc.)",
                "Business Tools (Microsoft Office, CRM, etc.)",
                "Other (Please specify)"
            ],
            type: "checkbox"
        },
        {
            question: "How good are your negotiation and persuasion skills? (Select one)",
            options: [
                "Excellent, I can convince others easily",
                "Good, but I need more practice",
                "Average, I sometimes struggle",
                "Poor, I avoid negotiations"
            ],
            type: "radio"
        },
        {
            question: "Can you work efficiently without constant supervision? (Select one)",
            options: [
                "Yes, I work best independently",
                "I can work alone, but I need occasional guidance",
                "I prefer working under close supervision"
            ],
            type: "radio"
        },
        {
            question: "How do you approach learning new skills and adapting to changes? (Select one)",
            options: [
                "I enjoy learning and adapt quickly",
                "I can learn, but I need structured training",
                "I struggle with change but try my best"
            ],
            type: "radio"
        },
        {
            question: "How well do you collaborate with others in a team setting? (Select one)",
            options: [
                "Very well, I am a team player",
                "I collaborate well but prefer independent tasks",
                "I struggle with teamwork but try to improve"
            ],
            type: "radio"
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
        <div className="assessment-container">
            <h2 className="title">Skills & Competency Assessment</h2>
            <form className="assessment-form">
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
                <button type="button" className="btn btn-success" onClick={() => navigate('/Assessment3')}>Next <TbPlayerTrackNext /></button>
            </form>
        </div>
    );
}

export default Assessment2;
