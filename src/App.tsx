import { useMemo, useState } from "react";
import { HexaDecimal } from "./brain/HexaDecimal";
import MagicInput from "./components/semantic/MagicInput";
import { pipe } from "./utils/pipe";

const App: React.FC = () => {
  const [input, setInput] = useState("");

  const hexa = useMemo(
    () =>
      pipe(input)
        .next((curr) => {
          try {
            return BigInt(curr);
          } catch (_: unknown) {
            return null;
          }
        })
        .next((curr) => (curr ? HexaDecimal.from(curr) : null))
        .next((curr) => curr ?? "")
        .end(),
    [input]
  );

  return (
    <div className="flex justify-center align-middle w-screen h-screen bg-slate-900">
      <div className="flex flex-col items-center w-10/12 md:w-6/12 lg:w-4/12 justify-center _card">
        <div className="font-mono text-md md:text-xl m-3 text-orange-600">
          HexaDecimal Converter
        </div>
        <MagicInput
          type="text"
          label="Input"
          bind={(e) => setInput(e.target.value)}
          value={input}
        />
        <MagicInput
          type="text"
          label="HexaDecimal"
          bind={(_) => {}}
          value={hexa}
        />
      </div>
    </div>
  );
};

export default App;
