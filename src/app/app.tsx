import * as React from "react"

import { Header, List } from "../components"

export const App: React.FC = () => {
  return (
    <div className="uk-container">
      <div className="row">
        <div className="column">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <List />
        </div>
      </div>
    </div>
  );
};
