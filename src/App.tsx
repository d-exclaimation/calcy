//
//  App.tsx
//  calcy
//
//  Created by d-exclaimation on 18:46.
//

import { ReactLocation, Router } from "react-location";
import HexaDecimalView from "./components/converter/HexaDecimalView";
import MainMenuView from "./components/MainMenuView";

const location = new ReactLocation();

const routes = [
  {
    path: "/",
    element: <MainMenuView />,
  },
  {
    path: "convert",
    children: [
      {
        path: "hexa",
        element: <HexaDecimalView />,
      },
    ],
  },
];

const App: React.FC = () => {
  return (
    <div className="flex justify-center align-middle w-screen h-screen bg-slate-900 text-white">
      <Router location={location} routes={routes} />
    </div>
  );
};

export default App;
