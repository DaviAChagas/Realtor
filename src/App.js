import React from 'react'   
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Description from './components/Description'
import Localization from './components/Localization'
import Benefit from './components/Benefit'
import WhatsappButton from './components/WhatsappButton'
import Carousel from './components/Carousel'
import db from './db.json'
import icons from './Assets/icons'
import imagesFromTerrazoDiDante from './Assets/images'

function App() {
 return ( 
  <Wrapper>

     <Header>
      <img src={icons.terrazoDiDante} alt="Terrazo Di Dante Logo"/>
     </Header>

  <WhatsappButton>
   <a href='https://wa.me/5512991502105?text=Ol%C3%A1%2C+Jairo%21+Tudo+bem%3F+Vim+conversar+sobre+o+Terrazo+Di+Dante.'>
   <img src={icons.whatsapp} alt="WPP Logo"/>
   </a>
  </WhatsappButton>


     <Description>
    <h1>{db.description.title}</h1>

    <p>{db.description.paragraphs.first}</p>
    <p>{db.description.paragraphs.second}</p>
     </Description>


  <Localization>
    <h2>{db.localization.title}</h2>
    <p>{db.localization.paragraphs.first}</p>
    <p>{db.localization.paragraphs.second}</p>
  </Localization>


  <section className='Benefits'>

    <Benefit isRight={db.benefits.first.rigth}>
        <h2>{db.benefits.first.title}</h2>
        <img src={imagesFromTerrazoDiDante.img3}
        alt={db.benefits.first.title}
        />
    </Benefit> 

    <Benefit isRight={db.benefits.second.rigth}>
        <h2>{db.benefits.second.title}</h2>
        <img src={imagesFromTerrazoDiDante.img9}
        alt={db.benefits.second.title}/>
    </Benefit>

    <Benefit isRight={db.benefits.third.rigth}>
        <h2>{db.benefits.third.title}</h2>
        <img src={imagesFromTerrazoDiDante.img8}
        alt={db.benefits.third.title}
        />
    </Benefit>

    <Benefit isRight={db.benefits.fourth.rigth}>
        <h2>{db.benefits.fourth.title}</h2>
        <img src={imagesFromTerrazoDiDante.img23}
        alt={db.benefits.fourth.title}
        />
    </Benefit>

    <Description>
    <p>{db.benefits.paragraph}</p>
    </Description>

  </section>

  <Carousel>

  </Carousel>

     </Wrapper>
 )
}

export default App