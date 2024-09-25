import { useEffect } from "react";
import Aos from "aos";

import "lib/styles/components/Advantages.scss";

function Advantages() {
    useEffect(() => {
        Aos.init({duration: 2000,mirror:true, anchorPlacement:"center-center", once: false})
    }, [])

    return ( 
        <section className="Advantages">
            <h2 className="Advantages_head">Наши преимущества</h2>
            <div 
                className="wrapper"
                data-aos="fade-up"
            >
                <div className="Advantages-item">
                    <h3>Легко и просто</h3>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Malesuada gravida nisi sit felis odio. 
                        Sociis et pellentesque sed id. Congue arcu turpis est, aliquet porttitor. 
                        Congue arcu turpis est, aliquet porttitor.
                    </p>
                </div>
                <div className="Advantages-item">
                    <h3>Быстро и доступно</h3>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Malesuada gravida nisi sit felis odio. 
                        Sociis et pellentesque sed id. Congue arcu turpis est, aliquet porttitor. 
                        Congue arcu turpis est, aliquet porttitor.
                    </p>
                </div>
                <div className="Advantages-item">
                    <h3>А главное, качественно</h3>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Malesuada gravida nisi sit felis odio. 
                        Sociis et pellentesque sed id. Congue arcu turpis est, aliquet porttitor. 
                        Congue arcu turpis est, aliquet porttitor.
                    </p>
                </div>
            </div>
        </section>
     );
}

export default Advantages;