import { useState, createContext } from 'react'
import { VscNotebook } from 'react-icons/vsc'
import { GrAddCircle } from "react-icons/gr";
import { AiOutlineCalendar } from "react-icons/ai";
import { questions } from "../../arrayQuestion";

// export const KeyId = createContext()
function LeftSidebar({ showQuestion, setQuestion }) {
    // const [showQuestionById, setShowQuestionId] = useState(1)
    // console.log(showQuestion)
    return (
        // <KeyId.Provider value={showQuestionById}>
            <div className="w-80 float-left rounded-xl px-5 bg-white">
                <div>
                    <h3 className="m-4 font-medium">Cover</h3>
                    <div className='flex text-sm text-center'>
                        <div className='flex mx-4 w-10 h-10 rounded-xl bg-slate-400 items-center justify-center'>
                            <VscNotebook className='text-slate-800 text-lg'/>
                        </div>
                        <span className='flex text-center' style={{alignSelf:"center"}}> Welcome to HIHI Survey </span>
                    </div>
                </div>
                <div >
                    <div className='flex justify-between items-center'>
                        <h3 className="m-4 font-medium">Question</h3>
                        <GrAddCircle />
                    </div>
                    {questions.map(question => (
                        // showQuestion === question.id &&
                        <div className={( showQuestion === question.id ? 'bg-slate-800 text-slate-100 flex text-sm text-center mb-4  p-3 rounded-md' : 'flex text-sm text-center mb-4  p-3 rounded-md hover:bg-slate-800 hover:text-slate-100 hover:translate-x-10 ease-in-out duration-700' )}
                        key={question.id} 
                        onClick={() => setQuestion(question.id)}
                        >
                            <div className='flex w-10 h-10 rounded-xl bg-slate-400 items-center justify-center'>
                                <AiOutlineCalendar className='text-slate-800 text-lg'/>
                            </div>
                            <span className='flex self-center text-center w-48 ml-3'><strong>
                                {question.id}.</strong>{question.question} </span>      
                        </div>
                    ))}
                </div>
            </div>
        // </KeyId.Provider>
    )
}

export default LeftSidebar