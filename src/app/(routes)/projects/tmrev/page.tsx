import Container from '@/app/_components/container'
import React from 'react'


const TmrevPage = () => {
  return (
    <Container>
      <div className='space-y-8'>
        <div className='space-y-2'>
          <h1 className='text-3xl font-bold' >The Movie Review (TMREV)</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ducimus dolore dignissimos temporibus. Dolores soluta illum quo perferendis dolor ab adipisci ullam alias. 
            Iure expedita recusandae tenetur reprehenderit sint rem ea?
          </p>
        </div>
        <div className='space-y-2'>
          <div className=' h-96 w-full bg-zinc-700 p-2 rounded-md'>
            Image
          </div> 
        </div>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold' >Tech stack</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ducimus dolore dignissimos temporibus. Dolores soluta illum quo perferendis dolor ab adipisci ullam alias. 
            Iure expedita recusandae tenetur reprehenderit sint rem ea?
          </p>
          <div className='flex space-x-8'>
            <div>
              <span className='text-lg font-semibold'>Frontend</span>
              <ul className='ml-2 list-inside list-disc'>
                <li>Javascript</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              <span className='text-lg font-semibold'>Backend</span>
              <ul className='ml-2 list-inside list-disc'>
                <li>Javascript</li>
                <li>Express</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold' >Features</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ducimus dolore dignissimos temporibus. Dolores soluta illum quo perferendis dolor ab adipisci ullam alias. 
            Iure expedita recusandae tenetur reprehenderit sint rem ea?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ducimus dolore dignissimos temporibus. Dolores soluta illum quo perferendis dolor ab adipisci ullam alias. 
            Iure expedita recusandae tenetur reprehenderit sint rem ea?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ducimus dolore dignissimos temporibus. Dolores soluta illum quo perferendis dolor ab adipisci ullam alias. 
            Iure expedita recusandae tenetur reprehenderit sint rem ea?
          </p>
        </div>
      </div>
    </Container>
  )
}

export default TmrevPage