import st from 'styles/compontens/Main.module.scss'



export default function () {
  return (
    <section className={st.HowItWorks}>
      <div className={st.head}>
        <h2>How it works</h2>
        <p>
          It’s about you and your family, 
          having a comfortable payment, 
          exceptional service and a lender.
        </p>
      </div>
      <Container img={'/imgs/howToWorks/1.png'}>
        <h2>Create Account</h2>
        <p>
          we know your home is more than just a place to live, 
          that’s why we’re committed to providing the best home loan
        </p>
      </Container>
      <Container img={'/imgs/howToWorks/2.png'}>
        <h2>Search for Services</h2>
        <p>
          It’s the fast, easy way to apply for your mortgage and access your application anytime, anywhere. 
          With our mortgage access center
        </p>
      </Container>
      <Container img={'/imgs/howToWorks/3.png'}>
        <h2>Sit back and Enjoy</h2>
        <p>
          It’s about you and your family, having a comfortable payment, exceptional service and a lender.
        </p>
      </Container>    
    </section>
  )
}

function Container ({img,children}) {
  return (
    <div className={st.item}>
      <div className={st.leftSide}>
        <img src={img} />
      </div>
      <div className={st.rightSide}>
        {children}
      </div>
    </div>
  ) 
}