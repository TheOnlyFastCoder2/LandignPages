import NavBar from "./NavBar"
import st from 'styles/compontens/Header.module.scss'

export default function () {
  return (
    <header className={st.Header}>
      <NavBar/>
      <div className={st.container}>
        <div className={st.leftSide}>
          <h1>
            Tell a <span>better</span>
            <span> brand</span> story
          </h1>
          <p>
            Literature surrounded insensible at indulgence or to admiration remarkably. Matter future lovers desire marked boy use. 
            Chamber reached do he nothing be.
          </p>
          <div className={st.container}>
            <button className={st.active}>Explore More</button>
            <button>Contact Us</button>
          </div>
        </div>
        <div className={st.rightSide}>
          <img src="imgs/Hero.png" alt="" />
        </div>
      </div>
    </header>
  )
}