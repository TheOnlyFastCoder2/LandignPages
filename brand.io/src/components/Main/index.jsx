import st from 'styles/compontens/Main.module.scss'

import Partners from './Partners';
import Customers from './Customers';
import HowToWorks from './HowToWorks';
import AboutUs from './AboutUs';
import ReviewsOfClients from './ReviewsOfClients';
import CTA from './CTA';

export default function () {
  return (
    <div className={st.Main}>
      <Partners/>
      <Customers/>
      <HowToWorks/>
      <AboutUs/>
      <ReviewsOfClients/>
      <CTA/>
    </div>
  )
}
