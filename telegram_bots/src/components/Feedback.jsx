import { useEffect } from "react";
import Aos from "aos";

import "lib/styles/components/Feedback.scss";

function Feedback() {
    useEffect(() => {
        Aos.init({duration: 1000,mirror:true, anchorPlacement:"top-bottom", once: false})
    }, [])

    
    return (  
        <section data-aos="fade-up" className="Feedback">
            <div className="Feedback-left">
                <h2>Обратная связь</h2>
                <p>Поговорите с одним из наших сотрудников, чтобы узнать, сколько мы можем получить для вас целевой аудитории за месяц с минимальными усилиями с вашей стороны</p>

                <form className="Feedback-left-form">
                    <input type="email" placeholder="Ведите свой e-mail"/>
                    <input type="text" placeholder="Номер мобильного телефона"/>
                    <input type="text" placeholder="Никнейм в Instagram"/>
                    <input type="text" placeholder="Что вы бы хотели спросить о росте в Instagram"/>

                    <div className="wrapper">
                        <button className="button-blue min-w-[203px]">Отправить заявку</button>
                        <p className="convention w-[354px]">
                            Нажми на кнопку вы соглашаетесь на обработку 
                            <a href=""> персональный данных</a>
                        </p>
                    </div>
                </form>
            </div>

            <div className="Feedback-right">
                <img src="/imgs/contact.png" alt="" />
            </div>
        </section>
    );
}

export default Feedback;