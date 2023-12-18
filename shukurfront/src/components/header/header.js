import "./header.scss"
import right from "./right.svg"
import left from "./left.svg"
import React, {useState} from 'react';
function Header(){
    const [slaider,slaiderSet] = useState("header_back")
    const [loc1,loc1Set]=useState("loc")
    const [loc2,loc2Set]=useState()
    const [loc3,loc3Set]=useState()

    return(
        <div className={slaider}>
            <div className={"base"}>
                <span className={"header_text"}>Находи алтернативные продукты при помощи нашего приложения.
                    Просто отсканируй штрих код, остальное сделает Shukur</span>
            </div>
            <div className={"slaider"}>
                <img src={right} className={"rigth"} onClick={()=>right_click()}/>
                <div className={"balls"}>
                    <span className={"ball"} id={loc1}>-</span>
                    <span className={"ball"} id={loc2}>-</span>
                    <span className={"ball"} id={loc3}>-</span>
                </div>
                <img src={left} className={"left"} onClick={()=>left_click()}/>
            </div>
        </div>
    )
    function right_click(){
        if(slaider==="header_back"){
            loc2Set("loc")
            loc1Set("")
            loc3Set("")
            slaiderSet("header_back1")
            console.log(slaider[slaider.length])
        }
        else if (slaider==="header_back1"){
            loc2Set("")
            loc1Set("")
            loc3Set("loc")
            slaiderSet("header_back2")
        }
    }
    function left_click(){
        if (slaider==="header_back1"){
            slaiderSet("header_back")
            loc2Set("")
            loc1Set("loc")
            loc3Set("")
        }
        else if(slaider==="header_back2"){
            loc2Set("loc")
            loc1Set("")
            loc3Set("")
            slaiderSet("header_back1")
        }
    }
}

export default Header