 import { useState } from "react";
 
 function Folder({explorer}) {
    const [expand, setExapnd] = useState(false);
    // console.log("explorer",explorer)


    if(explorer.isFolder){
        return (
            <div>
            <span onClick={() => setExapnd(!expand)}>{explorer.name}</span>
            <br/>
          
            <div style={{ display:expand ? "block": "none",paddingLeft:20}}>
            {explorer.items.map((exp) => {
                return <Folder key={Math.random()}  explorer = {exp}/>
            })}
            </div>
            </div>
        )

    } else {
       return <span>{explorer.name} <br/></span>
    }

}
export default Folder