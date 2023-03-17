import React from "react"
import ReactDOM from 'react-dom/client'
import App from "./components/App"

const body = document.getElementsByTagName('body')[0]
body.style.backgroundColor = 'gray'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <App />
)