import {QuoteRequestForm} from "../../../components/quoteRequestForm.jsx"
import { CircleAnimation } from "../../../components/circleAnimation.jsx"

export default function Feedback(){
    return (
      <main>
        <div className="mt-10">
          <CircleAnimation/>
        </div>
        <div className="relative -mt-56 -mb-56 -top-96">
          <QuoteRequestForm/>
        </div>

        <div className="mb-6 mb-10"></div>

        
      </main>
    )
};