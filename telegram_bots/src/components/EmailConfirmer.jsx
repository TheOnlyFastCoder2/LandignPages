import { useEffect } from "react";
import Aos from "aos";

import "lib/styles/components/EmailConfirmer.scss";

function EmailConfirmer({className, headline, children}) {
    useEffect(() => {
        Aos.init({duration: 2000,mirror:true, anchorPlacement:"top-bottom", once: false})
    }, []) 

    return ( 
        <div className={`EmailConfirmer background-decor ${className}`}>
            <div data-aos="fade-right" className="EmailConfirmer-left">
                <h1>{headline}</h1>
                <from className="EmailConfirmer-left-form">
                    <input type="text" className="EmailConfirmer-left-form_input" />
                    <button className="EmailConfirmer-left-form_button">Отправить</button>
                </from>
                <p className="convention w-[354px]">
                    Нажми на кнопку вы соглашаетесь на обработку 
                    <a href=""> персональный данных</a>
                </p>
            </div>
            <div className="EmailConfirmer-right">
                <div data-aos="zoom-in">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default EmailConfirmer;