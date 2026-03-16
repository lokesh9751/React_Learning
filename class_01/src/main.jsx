import ReactDOM from "react-dom/client"
import Header from "./header.jsx"
import Below_Header from "./Below_Header.jsx"
import About_Us from "./components/About_Us.jsx"
import "./index.css"
let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    [<Header />,<Below_Header />,<About_Us/>] 
);