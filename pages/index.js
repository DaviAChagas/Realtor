import React from 'react'   
import Wrapper from '../components/Wrapper'
import Header from '../components/Header'
import Card from '../components/Card'
import db from '../db.json'
import imagesFromTerrazoDiDante from '../public/images'

function App() {
 return ( 
<Wrapper rowGap="8">
<Header />

{db.map((local) => {
return (
  <Card 
  key={local.name}
  name={local.name}
  background={imagesFromTerrazoDiDante.img2.src}
  city={local.localization.city}
  state={local.localization.state}/>
  )
})}


     </Wrapper>
 )
}

export default App