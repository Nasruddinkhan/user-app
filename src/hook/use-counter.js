import { useEffect, useState } from "react";

const useCounter = (forwards = true) => {
  
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const internalval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(internalval);
  }, [forwards]);
  return counter;
};
export default useCounter;