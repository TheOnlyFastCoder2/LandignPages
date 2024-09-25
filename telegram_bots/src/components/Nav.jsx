import "lib/styles/components/Nav.scss";
import * as SVG from "lib/svg";
import { useState } from "react";

function Nav() {
    const [isShowed, setShow] = useState(false);

    function toggleShowMenu (_) {
        setShow((oldState) => !oldState);
    }

    return ( 
        <nav className="Nav">
            <div className="wrapper _1">
                <button onClick={toggleShowMenu} className="Nav-triggerMobile">
                    {isShowed ? <SVG.Closer/>  : <SVG.BurgerMenu/>}
                </button>
                <span className="Nav-logo text-blue">Инстаботы</span>
            </div>
            
            <div className={`wrapper _2 ${isShowed ? 'active': ''}`}>
                <ul className="Nav-list">
                    <h3 className="headlineMobile">Меню</h3>
                    <li className="nav-list_item"><a href="#">О компании</a></li>
                    <li className="nav-list_item"><a href="#">Тарифы</a></li>
                    <li className="nav-list_item"><a href="#">Отзывы</a></li>
                    <li className="nav-list_item"><a href="#">Q&A</a></li>
                    <li className="nav-list_item"><a href="#">Обратная связь</a></li>
                </ul>

                <div className="Nav-translater">
                    <span className="Nav-translater_eng Ru">Ru</span>
                    <span>/</span>
                    <span className="Nav-translater_eng En">En</span>
                </div>
            </div>
            <button className="button-blue">Вход или регистрация</button>
        </nav>
    );
}

export default Nav;