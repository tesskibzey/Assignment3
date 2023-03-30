// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function(){
    const surveyJson = {
        title: "Workplace Safety",
        showProgressBar: "bottom",
        showTimerPanel: "top",
        maxTimeToFinishPage: 10,
        maxTimeToFinish: 25,
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Workplace Safety. <br>You will have 10 seconds for every question and 25 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "question1",
                title: "Which of the following is NOT an example of Personal Protective Equipment (PPE)?",
                choices: [
                    "Hard hat", "Safety glasses", "Coffee mug", "Steel-toed boots"
                ],
                correctAnswer: "Coffee mug" 
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "question2",
                title: "Which of the following is an example of a physical hazard in the workplace?",
                choices: [
                    "Electrical shock", "Verbal abuse", "Age discrimination", "Poor ventilation"
                ],
                correctAnswer: "Electrical shock"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "question3",
                title: "What does the acronym 'MSDS' stand for?",
                choices: [
                    "Material Safety Data Sheet",
                    "Medical Safety Data Sheet",
                    "Management Safety Data Sheet",
                    "Mechanical Safety Data Sheet"
                ],
                correctAnswer: "Material Safety Data Sheet"
            }]
        }, {    
            elements: [{
                type: "radiogroup",
                name: "question4",
                title: "What is the maximum decibel level allowed for noise exposure in the workplace according to OSHA?",
                choices: [
                    "75 decibels", "85 decibels", "95 decibels", "105 decibels"
                ],
                correctAnswer: "85 decibels"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "question5",
                title: "What is the most common cause of workplace injuries?",
                choices: [
                    "Slips, trips, and falls", " Machinery accidents", "Fires and explosions", "Chemical exposure"
                ],
                correctAnswer: "Slips, trips, and falls" 
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "question6",
                title: "What is the first step to take in case of a workplace emergency?",
                choices: [
                    "Call 911", "Notify your supervisor", "Evacuate the building", "Provide first aid"
                ],
                correctAnswer: "Notify your supervisor" 
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "question7",
                title: "Which of the following is NOT a common type of workplace violence?",
                choices: [
                    "Physical assault", "Verbal abuse", "Sexual harassment", "Cyber-bullying"
                ],
                correctAnswer: "Cyber-bullying"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "question8",
                title: "What is the proper way to lift a heavy object in the workplace?",
                choices: [
                    "Bend your back and keep your legs straight", "Use your back muscles to lift the object", "Keep your feet close together while lifting", "Bend your knees and keep your back straight"
                ],
                correctAnswer: "Bend your knees and keep your back straight"   
                    }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "question9",
                title: "What is the correct way to use a fire extinguisher?",
                choices: [
                    "Aim the nozzle at the base of the fire and spray back and forth", "Aim the nozzle at the flames and spray as much foam as possible", "Aim the nozzle at the ceiling and spray downwards", "Aim the nozzle at yourself and spray"
                ],
                correctAnswer: "Aim the nozzle at the base of the fire and spray back and forth"
            }]
        }, {
            elements: [{
                type: "radiogroup",
                name: "question10",
                title: "What is the primary reason for conducting workplace incident investigations?",
                choices: [
                    "To determine who is at fault", "To avoid negative publicity", "To prevent the same incident from happening again", "To assign blame to the injured employee"
                ],
                correctAnswer: "To prevent the same incident from happening again"
            }]
        }, {
        }],
        completedHtml: "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
        completedHtmlOnCondition: [{
            expression: "{correctAnswers} == 0",
            html: "<h4>Unfortunately, none of your answers are correct. Please try again.</h4>"
        }, {
            expression: "{correctAnswers} == {questionCount}",
            html: "<h4>Congratulations! You answered all the questions correctly!</h4>"
        }]
    };

      const survey = new Model(surveyJson);
    
    return <Survey model={survey} />;
    }