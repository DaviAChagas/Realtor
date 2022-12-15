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
      <Wrapper 
        rowGap="1" bgColor="#FAFAFA"
        title={`${data.name} - Jairo Corretor`}
        description={data.description.paragraphs[0]}
        ogImage={data.background}
        urlPath={data.urlPath}>

    <LocalizationHeader name={data.name} /> 
    <WhatsappButton subjectMatter={data.name}/>
   
        <Description display="flex">
        <div> 
          <h1>{data.name}</h1>
   

      {data.description.paragraphs.map(paragraphContent => {
        return (
          <>
            <p>{paragraphContent}</p>
          </>
        )
      })}

        </div>

          <Image src={data.description.image} width="1200" height="900" alt={data.name + " image"}/>
       </Description>
   
   
     <Localization>
       <h2>Localização</h2>

       {data.description.localization.paragraphs.map(paragraphContent => {
        return (
          <>
            <p>{paragraphContent}</p>
          </>
        )
      })}

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

          {data.description.benefits.paragraphs.map(paragraphContent => {
        return (
          <>
            <p>{paragraphContent}</p>
          </>
        )
      })}
        </Description>

     <Carousel
      className="Carousel"
      imagePath={data.imagePath}
      numberOfImages={data.numberOfImages} />
   
   
        </Wrapper>
    )
}

export default Localidades