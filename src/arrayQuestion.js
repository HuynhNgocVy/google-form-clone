import  question1 from '../src/images/question1.png'
import  question2 from '../src/images/question2.png'
import  question3 from '../src/images/question3.png'
import  asnout from '../src/images/asnout.png'

const questions = [
    {
        id: 1,
        question: "What is your gender?",
        image: question1,
        answers: ["Male", "Female", "Prefer not to say"],
        isRadio: true
    },
    {
        id: 2,
        question: "What is your age?",
        image: question2,
        answers: ["Under 18", "18-24 years old", "25-34 years old", "25-34 years old",
         "35-44 years old", "45 or older"],
        isRadio: true
    },
    {
        id: 3,
        question: "Please specify your ethnicity?",
        image: question3,
        answers: ["Asian / Pacific Islander", "Hispanic or Latino", "Native American or American Indian", "White",
        "Black or African American"
        ],
        isCheckbox: true,
        addAnswer: true
    },
    {
        id: 4,
        question: "What department do you work in?",
        image: asnout,
        answers: ["Marketing", "Product development", "Customer success"],
        addAnswer: true
    },
    {
        id: 5,
        question: "How did you hear about us?",
        image: question2,
        answers: ["Online forum", "Social media", "Friend", "Google"],
        isRadio: true,
        addAnswer: true
    },
    {
        id: 6,
        question: "Did you consider buying any other products on the market?",
        image: question2,
        answers: ["Yes", "No"],
        isRadio: true,
    },
    {
        id: 7,
        question: "what types of credit cards do you have (Select all that apply)?",
        image: question2,
        answers: ["Visa", "Mastercard", "Momo", "PayPal"],
        isCheckbox: true,
        addAnswer: true
    },
    {
        id: 8,
        question: "What is the capital of Uruguay?",
        image: question2,
        answers: ["New Uruguay", "Panama City", "Monterey", "Montevideo"],
        addAnswer: true
    },
   
]
export { questions }