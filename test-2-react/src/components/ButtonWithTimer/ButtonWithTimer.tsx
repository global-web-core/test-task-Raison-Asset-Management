import { useEffect, useRef, useState } from "react";
import { ButtonWithTimerProps } from "./ButtonWithTimer.types";

const timerResponseTime = 500;
const stepTimer = 100;

export const ButtonWithTimer = ({onСlickHappened, ...props}: ButtonWithTimerProps): JSX.Element => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [takeAction, setTakeAction] = useState(false);
  
  useEffect(() => {
    if (!takeAction) {
      if (isButtonPressed) {
        timerRef.current = setInterval(() => {
          setTimer((prevTimer) => {
            if (prevTimer < timerResponseTime) {
              return prevTimer + stepTimer;
            } else {
              if (timerRef.current !== null) {
                clearInterval(timerRef.current);
              }
              setIsButtonPressed(false)
              setTimer(0)
              setTakeAction(true)
              return prevTimer;
            }
          });
        }, stepTimer);
      } else {
        if (timer > 0) {
          timerRef.current = setInterval(() => {
            setTimer((prevTimer) => {
              if (prevTimer > 0) {
                return prevTimer - stepTimer;
              } else {
                if (timerRef.current !== null) {
                  clearInterval(timerRef.current);
                }
                return 0;
              }
            });
          }, stepTimer);
        }
      }
    }

  return () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
    }
  };
} , [isButtonPressed]);

  const handleMouseDown = () => {
    setIsButtonPressed(true);
  }

  const handleMouseUp = () => {
    setIsButtonPressed(false);
  }

  useEffect(() => {
    if (takeAction) {
      setTakeAction(false)
      onСlickHappened()
    }
  }, [takeAction])

  return (
    <button className="btn btn-primary mt-auto"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      {...props}
    >
      Hold to proceed ({timer / 1000}s)
    </button>
  )
}