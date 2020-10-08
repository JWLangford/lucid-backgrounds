import * as React from "react"
import * as ReactDom from "react-dom"

import { App } from "./app"

///<reference types="webpack-env" />

ReactDom.render(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
