import st from 'styles/compontens/Main.module.scss'

import SVGStar from 'lib/icons/Star.jsx';
import SCGArrow from 'lib/icons/Arrow.jsx';

export default function() {
  return (
    <section className={st.ReviewsOfClients}>
      <div className={st.head}>
        <h2>What our clients say </h2>
        <p>Community development is often linked with community work or community planning, and may involve stakeholders, foundations,</p>
      </div>

      <div className={st.slider}>
        <div className={st.wrapepr}>
          <div className={st.swipeContainer}>
            <Card/>
            <Card/>
            <Card/>
          </div>
          <div className={st.swipeController}>
            <button><SCGArrow/></button>
            <button className={st.active}><SCGArrow/></button>
          </div>
        </div>
      </div>
    </section>
  )
}

function Card() {
  return (
    <div className={st.card}>
      <div className={st.stars}>
        <SVGStar/>
        <SVGStar/>
        <SVGStar/>
        <SVGStar/>
        <SVGStar/>
      </div>

      <p>
        Yet preference connection unpleasant yet melancholy but end appearance. 
        And excellence partiality estimating terminated day everything.
      </p>

      <div className={st.postScriptum}>
       <h6>Sam</h6>
       <span>Founder @ Migelko</span>
      </div>
    </div>
  )
}