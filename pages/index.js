import React from 'react'   
import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import Card from '../components/Card'
import db from '../db.json'
import { Analytics } from '@vercel/analytics/react';


function App() {
 return ( 

<Wrapper rowGap="2" bgColor="#f7ffd7">

  <Header />

  <section className="Cards">
    {db.map((local) => {
      return (
        <Card 
        key={local.name}
        name={local.name}
        background={local.background}
        city={local.localization.city}
        state={local.localization.state}/>
              )
})}
   </section>

        <Analytics />
     </Wrapper>
 )
}

export default App