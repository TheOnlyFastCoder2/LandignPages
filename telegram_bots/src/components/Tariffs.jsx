import { useEffect } from "react";
import Aos from "aos";


import "lib/styles/components/Tarrifs.scss";
import * as SVG from 'lib/svg';


const tarrifs = [
    {
        mode: "Эконом",
        price: 2990,
        services: [
            {
                isAvailable: true, 
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada gravida nisi sit felis odio.`
            },
            {
                isAvailable: false, 
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
            },
            {
                isAvailable: false, 
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
            },
            {
                isAvailable: false, 
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada gravida nisi sit felis odio.`
            }
        ]
    },
    {
        mode: "Стандарт",
        price: 4990,
        services: [
            {
                isAvailable: true, 
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada gravida nisi sit felis odio.`
            },
            {
                isAvailable: true, 
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
            },
            {
                isAvailable: false, 
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
            },
            {
                isAvailable: false, 
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada gravida nisi sit felis odio.`
            }
        ]
    },
    {
        mode: "Экстра",
        price: 9990,
        services: [
            {
                isAvailable: true, 
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada gravida nisi sit felis odio.`
            },
            {
                isAvailable: true, 
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
            },
            {
                isAvailable: true, 
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
            },
            {
                isAvailable: false, 
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada gravida nisi sit felis odio.`
            }
        ]
    },
    {
        mode: "Премиальный",
        price: 12990,
        services: [
            {
                isAvailable: true, 
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Malesuada gravida nisi sit felis odio.`
            },
            {
                isAvailable: true, 
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Malesuada gravida nisi sit felis odio.`
            },
            {
                isAvailable: true, 
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Malesuada gravida nisi sit felis odio.`
            }
        ]
    },
]



function Tarrifs() {
    useEffect(() => {
        Aos.init({duration: 3000,mirror:true, anchorPlacement:"top-bottom", once: false})
    }, [])

    return ( 
        <section data-aos="flip-left" className="Tarrifs">
            <h2>Наши тарифы</h2>
            <div className="wrapper">
                {tarrifs.map((data) => (
                    <Tarrif data={data}/>
                ))}
            </div>
        </section>
     );
}

function Tarrif({data}) {
    
    return (  
        <div className="Tarrif">
            <div className="Tarrif_headline">
                <h3>{data.mode}</h3>
                <h3><span>{data.price} руб</span>/месяц</h3>
            </div>
            <div className="Tarrif-services">
                {data.services.map(({isAvailable, description}) => (
                    <div className="Tarrif-services_item">
                        {
                            isAvailable 
                            ? <i><SVG.Available/></i>
                            : <i><SVG.Unavailable/></i>
                        } 
                        <p>{description}</p>
                    </div>
                ))}                
            </div>
            <button className="button-white">
                Узнать подробнее
            </button>
        </div>
    );
}

export default Tarrifs;