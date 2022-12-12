import db from '../../db.json'
import React from 'react'   
import Image from 'next/legacy/image'
import Wrapper from '../../components/Wrapper'
import LocalizationHeader from '../../components/LocalizationHeader'
import Description from '../../components/Description'
import Localization from '../../components/Localization'
import Benefit from '../../components/Benefit'
import WhatsappButton from '../../components/WhatsappButton'
import Carousel from '../../components/Carousel'
import icons from '../../public/icons'

export async function getStaticPaths() { 
    const locations = db
    return {
      paths: locations.map((localization) => ({ 
        params: {
          id: localization.name, 
        },
      })),
      fallback: false,
    };
  }

export async function getStaticProps(context) {
    const id = context.params.id
    const data = db.find(word => word.name == id);

    return {
        props: {
            id,
            data,
        }
    }
}

function Localidades ({data}) {
    return (
        <Wrapper rowGap="1" bgColor="#FAFAFA">

        <LocalizationHeader name={data.name} /> 
   
     <WhatsappButton>
      <a href='https://wa.me/5512991502105?text=Ol%C3%A1%2C+Jairo%21+Tudo+bem%3F+Vim+conversar+sobre+o+Terrazo+Di+Dante.'>
      <Image src={icons.whatsapp} alt="WPP Logo"/>
      </a>
     </WhatsappButton>
   
   
        <Description display="flex">
        <div> 
          <h1>{data.description.title}</h1>
   
          <p>{data.description.paragraphs.first}</p>
          <p>{data.description.paragraphs.second}</p>
        </div>

          <Image src={data.description.image} width="1200" height="900" alt={data.name + " image"}/>
       </Description>
   
   
     <Localization>
       <h2>{data.description.localization.title}</h2>
       <p>{data.description.localization.paragraphs.first}</p>
       <p>{data.description.localization.paragraphs.second}</p>
     </Localization>
   
   
     <section className='Benefits'>
   
{
data.description.benefits.list.map((benefit) => {
    return (
      <Benefit 
          key={benefit.title}
          title={benefit.title}
          image={benefit.image}
          alt={benefit.title} />)
})
}   
     </section>

        <Description>
        <p>{data.description.benefits.paragraph}</p>
       </Description>

     <Carousel>
   
     </Carousel>
   
        </Wrapper>
    )
}

export default Localidades