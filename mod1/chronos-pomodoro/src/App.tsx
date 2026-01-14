import "./styles/theme.css";
import "./styles/global.css";
import Heading from "./components/Heading";
import { TimerIcon } from "lucide-react";

export default function App() {
  return (
    <>
      <Heading>
        Chronos Pomodoro
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        laborum, aspernatur earum illum modi vel delectus voluptas ab voluptatum
        voluptatibus asperiores sint nisi a quidem doloribus aliquam, non optio
        labore!
      </p>
    </>
  );
}
