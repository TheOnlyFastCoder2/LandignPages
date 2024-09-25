import st from 'styles/compontens/Main.module.scss'

export default function () {
  return (
    <div className={st.AboutUs}>
      <div className={st.leftSide}>
        <h2>About Us</h2>
        <p>
          And produce say the ten moments parties. 
          Simple innate summer fat appear basket his desire joy. Outward clothes promise at gravity do excited. Sufficient particular impossible by reasonable oh expression is. Yet preference connection unpleasant yet melancholy but end appearance. 
          And excellence partiality estimating terminated day everything.
        </p>
        <div className={st.container}>
          <button className={st.active}>Learn More</button>
          <button>Watch Video</button>
        </div>
      </div>
      <div className={st.rightSide}>
        <Card active={true}/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

function Card({active}) {
  return (
    <div className={`${st.card} ${active ? st.active : ''}`}>
      <h2>1000+</h2>
      <p>
        Completed
        Projects
      </p>
    </div>
  )
}