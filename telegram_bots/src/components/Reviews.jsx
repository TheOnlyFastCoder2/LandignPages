import { useEffect } from "react";
import Aos from "aos";


import "lib/styles/components/Reviews.scss";
import * as SVG from 'lib/svg';

const users = [
    {
        nickname:"Кот Олежка",
        pathImg: "/imgs/avatar_1.png",
        date: "03.06.2021",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada gravida nisi sit felis odio. Sociis et pellentesque sed id. Congue arcu turpis est, aliquet porttitor. Congue arcu turpis est, aliquet porttitor.",
        score: 5
    },
    {
        nickname:"Кот Семен",
        pathImg: "/imgs/avatar_2.png",
        date: "03.06.2021",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada gravida nisi sit felis odio. Sociis et pellentesque sed id. Congue arcu turpis est, aliquet porttitor. Congue arcu turpis est, aliquet porttitor.",
        score: 5
    },
    {
        nickname:"Кот Серега",
        pathImg: "/imgs/avatar_3.png",
        date: "03.06.2021",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada gravida nisi sit felis odio. Sociis et pellentesque sed id. Congue arcu turpis est, aliquet porttitor. Congue arcu turpis est, aliquet porttitor.",
        score: 3
    },
    {
        nickname:"Кот Инокентий",
        pathImg: "/imgs/avatar_4.png",
        date: "03.06.2021",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada gravida nisi sit felis odio. Sociis et pellentesque sed id. Congue arcu turpis est, aliquet porttitor. Congue arcu turpis est, aliquet porttitor.",
        score: 4
    },
]

function Reviews() {
    useEffect(() => {
        Aos.init({duration: 3000,mirror:true, anchorPlacement:"top-bottom", once: false})
    }, [])

    return ( 
        <section data-aos="zoom-in" className="Reviews background-decor">
            <h2>Отзывы</h2>
            <div className="wrapper">
                {users.map((user) => (
                    <User data={user}>
                        <img src={user.pathImg} alt="" />
                    </User>
                ))}
            </div>
        </section>
    );
}

function User({data, children}) {
    return (
    <div className="User">
        <div className="User-topBar">
            <div className="wrapper">
                <div className="User-topBar_avatar">
                    {children}
                </div>
                <h3 className="User-topBar_nickname">{data.nickname}</h3>
            </div>
            <span className="User-topBar_date">{data.date}</span>
        </div>
        <div className="wrapper">
            <p className="User-comment">
                {data.comment}
            </p>

            <div className="User-scores">
                {[1,2,3,4,5].map((i) => (
                    <SVG.Star key={"start"+i} className={`${i <= data.score}`}/>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Reviews;