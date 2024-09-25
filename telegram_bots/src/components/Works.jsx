import { useEffect } from "react";
import Aos from "aos";

import "lib/styles/components/Works.scss";

function Works() {
    useEffect(() => {
        Aos.init({duration: 5000,mirror:true, anchorPlacement:"top-bottom", once: false})
    }, [])

    return ( 
        <section className="Works background-decor">
            <h2>Как мы работаем</h2>
            <div className="wrapper">
                <div className="Works-left z-50">
                    <img src="public/imgs/how_me_working.png" alt="" />
                </div>
                <div data-aos="fade-right" className="Works-right">
                    <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
                    <span>Semper sollicitudin ut cursus nunc eu ultricies.</span>
                    <div className="Works-right_description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Posuere lorem nulla tincidunt egestas nibh. 
                            Non orci, et massa sed vulputate proin. Eu euismod diam, arcu sit vitae nam. 
                            Tristique orci, ornare sit vel amet.
                        </p>
                        <p>
                            Ut elit dui iaculis malesuada in auctor dui. 
                            Sollicitudin varius vitae ut vitae lacus, 
                            sem dolor fermentum enim. 
                            Orci orci interdum pretium adipiscing augue sit nisl adipiscing.
                        </p>
                    </div>

                    <button className="button-blue">Забронировать звонок</button>
                </div>
            
            </div>
        </section>    
     );
}

export default Works;