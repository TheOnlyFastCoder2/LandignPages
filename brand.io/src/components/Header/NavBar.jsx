import st from 'styles/compontens/Header.module.scss';

export default function () {
  return (
    <div className={st.NavBar}>
      <div className={st.logo}>
        <img src="logo.png" alt="logo of website" />
      </div>
      <ul className={st.menu}>
        <li>Home</li>
        <li>About</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>
      <div className={st.boxVarify}>
        <button>Login</button>
        <button className={st.active}>Sign up</button>
      </div>
    </div>
  )
}