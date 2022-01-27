//
//  MainMenuView.tsx
//  calcy
//
//  Created by d-exclaimation on 19:01.
//

import React from "react";
import { useNavigate } from "react-location";

const MainMenuView: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-10/12 md:w-6/12 lg:w-4/12 justify-center _card">
      <div className="font-mono text-4xl md:text-6xl m-3 text-orange-600">
        Calcy
      </div>
      <button
        className="m-5 py-3 px-5 font-mono rounded-lg select-none _pressable active:text-slate-900"
        onClick={() => navigate({ to: "./convert/hexa", replace: true })}
      >
        HexaDecimal Converter
      </button>
    </div>
  );
};

export default MainMenuView;
