import st from 'styles/compontens/Main.module.scss'

export default function () {
  return (
    <section className={st.CTA}>
      <div className={st.head}>
        <h2>Ready to get started?</h2>
        <p>
          Products on online services or over the Internet. 
          Electronic commerce draws on technologies such as mobile  commerce application
        </p>
      </div>
      <form action="">
        <input type="text" placeholder="Enter your email address"/>
        <button>Sign Up</button>
      </form>
    </section>
  ) 
}