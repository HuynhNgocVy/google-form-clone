import LeftSidebar from "./Left/LeftSidebar"
import RightSidebar from "./Right/RightSidebar"
import { useState } from 'react'
function Container() {
    const [showQuestionById, setShowQuestionId] = useState(1)
    // console.log(showQuestionById)
    return (
        <div className="m-auto p-10" style={{ background: "#f3eef2" }}>
            <div className="flex m-auto p-5" style={{ width:"800px", justifyContent: "space-between", background: "#f2f2f5" }}>
                <LeftSidebar showQuestion={showQuestionById} setQuestion={setShowQuestionId} />
                <RightSidebar showQuestion={showQuestionById} />
            </div>
        </div>

    )
}
export default Container