import { Controller } from "@hotwired/stimulus"
import React from "react"
import ReactDOM from "react-dom"
import { createRoot } from "react-dom/client"
import App from "../components/App"
import { Provider } from "react-redux"
import configureStore from "../store/index"

const store = configureStore();
// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log("React connected")
    const app = document.getElementById('app')
    createRoot(app).render(
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
