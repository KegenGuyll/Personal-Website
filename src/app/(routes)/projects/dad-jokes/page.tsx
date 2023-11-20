import Code from '@/app/_components/code'
import Container from '@/app/_components/container'
import { GITHUB_URLS, WEB_URLS } from '@/app/_constants/urls'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CodeBlock } from 'react-code-blocks'


const DadJokesPage = () => {
  return (
    <Container>
      <div className='space-y-8'>
        <div className='space-y-2'>
          <div className='flex items-center space-x-4'>
            <h1 className='text-3xl font-bold' >DadJokes.io</h1>
            <Link className='h-8 w-8 hover:bg-zinc-700 flex items-center justify-center rounded-full' href={WEB_URLS.DAD_JOKES}>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
            </Link>
            <div className='flex-grow'/>
            <Link className='h-8 w-8 hover:bg-zinc-700 flex items-center justify-center rounded-full' href={GITHUB_URLS.DAD_JOKES}>
              <FontAwesomeIcon icon={faGithub} size='xl'/>
            </Link>
          </div>
          <p>
            DadJokes is a robust API developed using TypeScript, Express, and MongoDB. 
            Initially conceived as a collaborative venture with a colleague, the project encountered some challenges, leading to an early conclusion. 
            However, the API emerged as a significant component, demonstrating resilience and potential. 
            Subsequently, I introduced DadJokes to the <a className='text-blue-400' href="https://rapidapi.com/KegenGuyll/api/dad-jokes">Rapid API platform</a>, where it gained considerable traction and has since evolved into one of the most extensive Dad Jokes APIs globally.
             In this project post, I will elaborate on the critical decisions made during the project&lsquo;s development, 
             highlight some of the challenges faced, and discuss future directions and enhancements planned for DadJokes.
          </p>
        </div>
        <div className='space-y-2'>
          <div className='h-96 w-full relative bg-zinc-700'>
            <Image
              src="/images/dadjokes-cover.png"
              alt='DadJokes Cover'
              fill
              className='object-cover rounded-md'
            />
          </div> 
        </div>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold' >Features</h2>
          <div className='space-y-4 ml-3'>
            <div className='space-y-1'>
              <span className='text-lg font-bold'>Random Jokes</span>
              <div className='space-y-2'>
                <p>The DadJokes API is primarily designed to provide users with a diverse selection of random jokes. To access these jokes, users have two options:</p>
                <ul className=' list-inside list-decimal ml-2 space-y-1'>
                  <li>The <span className='bg-zinc-700 p-1 rounded-md mx-1'>/joke/random</span> endpoint, which serves a random joke without any specific criteria.</li>
                  <li>The <span className='bg-zinc-700 p-1 rounded-md mx-1'>/joke/type/:type</span> endpoint, where users can retrieve a random joke based on a specified type.</li>
                </ul>
                <p>These endpoints ensure a versatile and user-friendly experience, catering to different preferences for joke categories.</p>
              </div>
            </div>
            <div className='space-y-4 ml-3'>
              <span className='text-lg font-bold' >The How</span>
              <p>I&apos;m utilizing MongoDB as the database, which simplifies the process of returning a random joke. This is achieved efficiently through the use of an aggregation pipeline.</p>
              <Code
                code={`
                const pipeline = [
                    {
                      '$match': {
                        'NSFW': isTrueSet
                      }
                    }, 
                    {
                      '$sample': {
                        'size': count > 5 ? 5 : count
                      }
                    }
                ]
                const result = await mongoService
                    .db('Jokes')
                    .collection('DadJokes')
                    .aggregate(pipeline)
                    .toArray();
                `}
                language='javascript'            
              />
              <p>
                In summary, this code performs a two-stage aggregation operation on a MongoDB collection named DadJokes in the Jokes database. 
                It first filters the documents based on the NSFW field value and then randomly selects a specified number of these filtered documents. 
                The result of this operation is stored in the result variable as an array of documents.
              </p>
            </div>
          </div>
          <div className='space-y-4 ml-3'>
            <div className='space-y-1'>
              <span className='text-lg font-bold'>Joke PNG</span>
              <div className='space-y-2'>
                <p>
                  In addition to text-based joke retrieval, 
                  the Dad Jokes API offers a unique feature: the PNG route. 
                  This functionality generates a joke in the form of a data URL PNG image, 
                  facilitating seamless sharing on various social media platforms. 
                  It is particularly advantageous for social media bots and is optimized for SEO, enhancing digital reach and engagement.
                </p>
              </div>
            </div>
            <div className='space-y-4 ml-3'>
              <span className='text-lg font-bold' >The How</span>
              <Code
                code={`
                import { createCanvas, registerFont } from 'canvas';

                async function generateImage(setup: string, punchline: string): Promise<string> {
                  // Set up canvas dimensions
                  const canvasWidth = 800;
                  const canvasHeight = 400;
                
                  registerFont('src/fonts/Montserrat-Regular.ttf', { family: 'Montserrat' })
                  // Create a canvas
                  const canvas = createCanvas(canvasWidth, canvasHeight);
                  const ctx = canvas.getContext('2d');
                
                  // Set up font style
                  const fontSize = 40;
                  ctx.font = "fontSizepx Montserrat";
                  ctx.fillStyle = '#000000';
                
                  // Wrap text function to handle line breaks
                  function wrapText(text: string, maxWidth: number, lineHeight: number) {
                    const words = text.split(' ');
                    let line = '';
                    let lines: string[] = [];
                    for (let i = 0; i < words.length; i++) {
                      const testLine = line + words[i] + ' ';
                      const testLineWidth = ctx.measureText(testLine).width;
                      if (testLineWidth > maxWidth && i > 0) {
                        lines.push(line);
                        line = words[i] + ' ';
                      } else {
                        line = testLine;
                      }
                    }
                    lines.push(line);
                    return lines;
                  }
                
                  // Wrap text and draw setup
                  const setupLines = wrapText(setup, canvasWidth - 40, fontSize + 10);
                  const setupHeight = setupLines.length * (fontSize + 10);
                  setupLines.forEach((line, index) => {
                    ctx.fillText(line, 20, 40 + index * (fontSize + 10));
                  });
                
                  // Wrap text and draw punchline below setup
                  const punchlineLines = wrapText(punchline, canvasWidth - 40, fontSize + 10);
                  punchlineLines.forEach((line, index) => {
                    ctx.fillText(line, 20, 40 + setupHeight + index * (fontSize + 10));
                  });
                
                  // Convert canvas to data URL
                  const dataURL = canvas.toDataURL();
                
                  return dataURL;
                }
                
                export default generateImage;
                `}
                language='typescript'            
              />
              <p>
                In summary, this code provides a utility to create an image from two strings, 
                intended to represent the setup and punchline of a joke. It handles font styling, text wrapping, and positioning, 
                ultimately returning the joke as a shareable image format.
              </p>
            </div>
          </div>
        </div>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold' >Challenges</h2>
          <p>
            In deploying my project, I dockerized the API for cost efficiency. 
            I used a docker-compose file with <span className='bg-zinc-700 p-1 rounded-md mx-1'>jwilder/nginx-proxy</span> and <span className='bg-zinc-700 p-1 rounded-md mx-1'> jrcs/letsencrypt-nginx-proxy-companion</span>
            o serve the API and manage SSL certificates. I also created a specific Dockerfile for the API. Initially, 
            the documentation website was included in the docker-compose, but I switched to hosting it with Vercel due to certain limitations. 
            The entire API setup runs on a $5 per month DigitalOcean server, reflecting a balance between affordability and functionality.
          </p>
          <Code
            language='YML'
            code={`
            version: '3.7'
            services:
              dadjokes_api_container:
                container_name: dadjokes_api_container
                restart: always
                build: './'
                environment:
                  VIRTUAL_HOST: api.dadjokes.io
                  LETSENCRYPT_HOST: api.dadjokes.io
                expose:
                  - '8080'
              nginx-proxy:
                container_name: nginx_container
                restart: always
                image: jwilder/nginx-proxy
                ports:
                  - '80:80'
                  - '443:443'
                volumes:
                  - '/etc/nginx/vhost.d'
                  - '/usr/share/nginx/html'
                  - '/var/run/docker.sock:/tmp/docker.sock:ro'
                  - '/etc/nginx/certs'
                depends_on:
                  - dadjokes_api_container
              letsencrypt-nginx-proxy-companion:
                container_name: letsencrypt
                restart: always
                image: jrcs/letsencrypt-nginx-proxy-companion
                volumes:
                  - '/var/run/docker.sock:/var/run/docker.sock:ro'
                volumes_from:
                  - 'nginx-proxy'
            `}
          />
        </div>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold' >Tech stack</h2>
          <p>
            In the development of the project, 
            the frontend was built using TypeScript for strong typing, Next.js for efficient server-side rendering, 
            and TailwindCSS for responsive design. The backend was developed with TypeScript and Express for server management,
            MongoDB for database needs, and GraphQL for optimized data querying. This tech stack synergizes to offer a robust, scalable,
            and efficient application development environment.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default DadJokesPage