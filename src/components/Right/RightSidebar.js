import { GrAddCircle } from "react-icons/gr";
import { questions } from "../../arrayQuestion";
import { useEffect, useState, useContext } from 'react'
import { KeyId } from '../Left/LeftSidebar'
function RightSidebar({ showQuestion }) {
    // console.log(showQuestion == questions.id)
    const [isRadio, setIsRadio] = useState(false);
    const [isCheckbox, setIsCheckbox] = useState(false);
    return (
        <div className="p-5 my-12 w-96 bg-slate-500 float-right rounded-xl items-center" style={{background: "#f6f6f6"}}>
            {questions.map((question) => (
                // {showQuestion === question.id && }
                showQuestion === question.id &&
                (<div key={question.id}>
                    <div className="flex justify-center">
                        <img className="w-44" style={{transform: "translateY(-60px)"}}
                        src= {question.image}/>
                    </div>
                    <h2 className="font-bold text-lg">{question.id}. {question.question}</h2>
                    <h5 className="ml-4 text-sm text-gray-300 italic mb-4">Description (optional)</h5>
                    {question.answers.map((answer, index) => 
                        <div className='flex text-sm mb-4 text-center rounded-lg py-2 bg-slate-50 hover:bg-slate-600 hover:text-slate-100 cursor-pointer'>
                            <div className= { (question.isRadio && "rounded-full m-3 w-4 h-4 border-gray-400 border border-solid") ||
                                            (question.isCheckbox && "m-3 w-4 h-4 border-gray-400 border border-solid") || 
                                            ('flex flex-col mx-4 w-9 h-9 rounded-md items-center justify-center')} style={{border: "2px solid #000"}}> 
                                {question.isRadio || question.isCheckbox ? '' : String.fromCharCode(65 + index)}
                            </div>
                            <span className='flex text-center' 
                            style={{alignSelf:"center"}}> {answer}
                            </span>
                        </div>
                    )}
                    {question.addAnswer && 
                    (
                        <div className="flex">
                            <div className="mx-3 flex text-center items-center"> 
                                <GrAddCircle />
                            </div>
                            <div
                                key={question.id}
                                className="after:content-[''] w-full after:block after:w-full after:h-0.5 after:bg-gray-200 after:focus:bg-gray-600 
                                text-sm focus:outline-none after:transition after:ease-in-out after:duration-200"
                                contentEditable
                            >
                                Add Answer
                            </div>
                        </div>
                    )
                    }
                    
                </div>)
            ))}
        </div>
    )
}

export default RightSidebar