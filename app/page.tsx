/* eslint-disable react/no-unescaped-entities */
import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function Homepage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="flex space-x-4  text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* sun Icon */}
            <SunIcon className="h-8 w-8 " />
            <h2>Exemples</h2>
          </div>

          <div className="space-y-4">
            <p className="infoText">"Explain somthing to me"</p>
            <p className="infoText">
              "What is the difference between a dog and a cat?"
            </p>
            <p className="infoText">"what is the color of the sum?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* sun Icon */}
            <ExclamationTriangleIcon className="h-8 w-8 " />
            <h2>Capabilities</h2>
          </div>

          <div className="space-y-4">
            <p className="infoText">"Change the ChatGPT Model to use "</p>
            <p className="infoText">
              "Messages are stored in Firebase's Firestore"
            </p>
            <p className="infoText">
              "Hot Toast notifications when ChatGPT is thinking"
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* sun Icon */}
            <BoltIcon className="h-8 w-8 " />
            <h2>Limitations</h2>
          </div>

          <div className="space-y-4">
            <p className="infoText">
              "May occasionally generate incorrect information"
            </p>
            <p className="infoText">
              "May occasionally produce harmful instructions or biased content"
            </p>
            <p className="infoText">
              "Limited knowledge of world and events after 2021"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
