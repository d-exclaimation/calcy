//
//  HexaDecimalView.tsx
//  calcy
//
//  Created by d-exclaimation on 16:09.
//

import React, { useMemo, useState } from "react";
import { Link } from "react-location";
import { HexaDecimal } from "../../brain/HexaDecimal";
import { Opt, pipe } from "../../utils/pipe";
import MagicInput from "../semantic/MagicInput";

const HexaDecimalView: React.FC = () => {
  const [input, setInput] = useState("");
  const [isUpper, toggle] = useState(false);

  const hexa = useMemo(
    () =>
      pipe(input)
        .flatNext(BigInt)
        .next(Opt.map((c) => HexaDecimal.from(c)))
        .next(Opt.or(""))
        .next((res) => (isUpper ? res.toUpperCase() : res.toLowerCase()))
        .end(),
    [input, isUpper]
  );

  const isInputValidOrEmpty = useMemo(
    () => input.length == 0 || hexa.length != 0,
    [input, hexa]
  );

  return (
    <>
      <Link
        className="fixed bottom-2 right-2 py-1 px-2 rounded-md font-mono text-sm text-orange-500 hover:bg-slate-300 hover:bg-opacity-10"
        to={"/"}
        replace
      >
        Home
      </Link>
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
          label={
            isInputValidOrEmpty ? "HexaDecimal" : "Invalid input (not a number)"
          }
          bind={(_) => {}}
          value={hexa}
        >
          <button
            className="absolute right-1 bottom-2 z-20 text-sm px-2 py-1 rounded bg-gray-900 hover:bg-gray-800"
            onClick={(e) => {
              e.preventDefault();
              toggle((prev) => !prev);
            }}
          >
            {isUpper ? "upper" : "lower"}
          </button>
        </MagicInput>
      </div>
    </>
  );
};

export default HexaDecimalView;
