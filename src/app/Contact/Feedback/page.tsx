import {ReviewForm} from "../../../components/reviewForm.jsx"
import { CircleAnimation } from "../../../components/circleAnimation.jsx"

export default function Feedback(){
    return (
      <main>
        <div className="mt-10">
          <CircleAnimation/>
        </div>
        <div className="relative -mt-56 -mb-48 -top-96">
          <ReviewForm/>
        </div>

        
      </main>
    )
};
