import "./App.css";
import Folder from "./component/Folder";
import explorer from "./data/folderData";

export default function App() {
    return (
        <div className="App">
        <h1>Hello</h1>
        <h2>Folder arrangement in UI</h2>
        <Folder explorer={explorer}/>
        </div>
        
    )
}