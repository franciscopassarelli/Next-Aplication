'use client'
import Boton from "./Boton";

const Counter = ({ counter, setCounter, max }) => {
  const increase = () => counter < max && setCounter(counter + 1);
  const decrease = () => counter > 1 && setCounter(counter - 1);

  return (
    <div className="flex items-center gap-3">
      <Boton onClick={decrease} className="px-3 py-1 md:px-4 md:py-2 active:bg-blue-600">
        -
      </Boton>
      <p className="text-lg md:text-xl">{counter}</p>
      <Boton onClick={increase} className="px-3 py-1 md:px-4 md:py-2 active:bg-blue-600">
        +
      </Boton>
    </div>
  );
};

export default Counter;
