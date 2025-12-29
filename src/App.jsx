import { Construction } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

function App() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen gap-5 ">
        <Construction className="size-13" />

        <span className="text-5xl">
          <Typewriter
            words={[
              "Under Construction...",
              "Currently Building...",
              "Please wait...",
            ]}
            loop={0}
            cursor={true}
            cursorStyle="_"
            typeSpeed={150}
            deleteSpeed={100}
            delaySpeed={1500}
          />
        </span>
      </div>
    </>
  );
}

export default App;
