import st from 'styles/compontens/Main.module.scss'

export default function() {
  return (
    <section className={st.Customers}>
      <h2>Grow faster with help your customers</h2>
      <div className={st.container}>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </section>
  )
}

function Card() {
  return (
    <div className={st.card}>
      <div className={st.icon}>
        <img src="/imgs/customers/Icon-1.png" alt="" />
      </div>
      <div className={st.text}>
        <h5>Ratings & Reviews</h5>
        <p>
          Collect reviews, Q&A and other content from your customers started.
        </p>
      </div>
    </div>
  ) 
}