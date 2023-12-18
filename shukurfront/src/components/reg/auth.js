import vector from "./Vector.svg";
import "./Reg.css"
function Auth(){
    return(
        <div className={"reg"}>
            <div className={"reg_card"}>
                <h2>Регистрация</h2>
                <form>
                    <input placeholder={"Логин или E-mail"} id={"login"}/>
                    <input placeholder={"Пароль"} type={"password"} id={"password"}/>
                    <button>Зарегестрировать</button>
                </form>
                <img src={vector}/>
            </div>
        </div>
    )
}

export default Auth