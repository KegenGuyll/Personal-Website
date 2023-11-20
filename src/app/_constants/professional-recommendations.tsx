import React from 'react'


interface Recommendation {
  link: string
  author: string
  date: string
  text: React.ReactNode
  image: string
}

const recommendations: Recommendation[] = [
  {
    image: 'https://media.licdn.com/dms/image/C4E03AQEQn1X3QlgDCw/profile-displayphoto-shrink_400_400/0/1553127687136?e=1706140800&v=beta&t=DHLvBd_NhIvEbXzM8H8lhapXdan-JAXl206yhXmlJdE',
    link: 'https://www.linkedin.com/in/elise-alexander-41071b16?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3Bwl7gKUmbTgCZKL%2B3HQM%2BpA%3D%3D',
    author: 'Elise Alexander',
    date: 'October 26, 2023',
    text: (
      <p>I had the pleasure of working with Kegen for over two and a half years and saw his role evolve over that time both in terms of his responsibilities and complexity on different products. Kegen is very smart, hard-working and is a good problem solver. Kegen delivers high-quality work on time consistently. He is so fun and would be a great addition to any team.</p>
    )
  },
  {
    image: 'https://media.licdn.com/dms/image/D5603AQFS6LfGYcplRA/profile-displayphoto-shrink_400_400/0/1688936130051?e=1706140800&v=beta&t=sEMYSudp5fgtoVeWJKNxowLS9ARaKo6ecaN8iIZ4b6c',
    link: 'https://www.linkedin.com/in/jon-gaebe?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3Bwl7gKUmbTgCZKL%2B3HQM%2BpA%3D%3D',
    author: 'Jonathan Gaebe',
    date: 'October 15, 2023',
    text: (
      <>
        <p>I had the pleasure of working with Kegen as a front-end engineer for over two and a half years, and I am truly impressed with his exceptional skills and dedication.</p>
        <p>Kegen is an expert in HTML, CSS, JavaScript, React.js, and Next.js. His technical proficiency and problem-solving abilities have contributed to the success of many of our Geospatial Analytics Platform business’ projects. He consistently delivered high-quality code and demonstrated a deep understanding of front-end development principles.</p>
        <p>What sets Kegen apart is his excellent attention to detail. Whether it&apos;s refining the user interface or optimizing the performance of a web application, Kegen ensures that every aspect is polished to perfection. His commitment to quality has had a positive impact on the overall user experience of our products.</p>
        <p>In addition to his technical prowess, Kegen has a keen understanding of SEO optimization. He seamlessly integrates best practices into his work, contributing to our projects&apos; visibility and success in search engine rankings.</p>
        <p>Beyond his technical skills, Kegen is a reliable and collaborative team member. He communicates effectively, actively engages in problem-solving discussions, and consistently meets project deadlines. His positive attitude and willingness to take on challenges make him a valuable asset to any team.</p>
        <p>Kegen also demonstrated an outstanding ability to manage and mentor less experienced software developers. Kegen took several interns and entry level full time engineers under his wing and helped onboard, train, and manage them very effectively.</p>
        <p>I highly recommend Kegen to any organization looking for a front-end engineer who not only possesses technical expertise but also brings a meticulous approach to every project. It has been a pleasure working with Kegen, and I am confident that he will continue to excel in his career.</p>
      </>
    )
  },
  {
    image: 'https://media.licdn.com/dms/image/C4D03AQFLTvc3_BZePA/profile-displayphoto-shrink_400_400/0/1517617802827?e=1706140800&v=beta&t=cVoO2CET8GfMBy1bP_VQcCkokaBF2yOJq2FJrBx9cYc',
    link: 'https://www.linkedin.com/in/brian-dearing-52bb0213a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3Bwl7gKUmbTgCZKL%2B3HQM%2BpA%3D%3D',
    author: 'Brian Dearing',
    date: 'October 14, 2023',
    text: (
      <>
        <p>It has been a delightful experience collaborating with Kegen. Navigating the delicate balance between rapid development and delivering a flawless product poses a constant challenge, yet Kegen consistently rises to the occasion, even in the face of demanding timelines. What sets Kegen apart is his unwavering commitment to personal growth; he actively seeks out opportunities to enhance his skills. Working alongside him has been a pleasure for his peers, as he brings a dynamic energy to the team, propelling us forward in building the next revolutionary product.</p>
        <p>Kegen stands out as a seasoned senior software engineer, and any team would be incredibly fortunate to have him on board. His proficiency in unraveling complex challenges is unparalleled, making him an invaluable asset to any project. Kegen not only delivers impeccable work but also contributes to the growth of his team members, readily offering assistance and guidance. His versatility is striking — he tackles any task with finesse and readily supports his colleagues in their endeavors. Kegen possesses a keen eye for feature development, providing insightful feedback at every stage of the product development process. In summary, Kegen is not just a remarkable professional but a team player who elevates the entire collaborative experience.</p>
      </>
    )
  },
  {
    image: 'https://media.licdn.com/dms/image/C5603AQEWWkx65JvUkg/profile-displayphoto-shrink_400_400/0/1650468990896?e=1706140800&v=beta&t=ikFeRxUfmqU8hmaIu6PSB23jUdhSA7KWYK3WD9gfDHw',
    link: 'https://www.linkedin.com/in/hayden-holzhauser-a43321104?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3Bwl7gKUmbTgCZKL%2B3HQM%2BpA%3D%3D',
    author: 'Hayden Holzhauser',
    date: 'October 11, 2023',
    text: (
      <>
        <p>Kegen is an experienced senior software engineer that any team would be extremely fortunate to have. He has a knack for figuring out any challenge and is a great addition to any team. Kegen always delivers top notch work while also helping others on his team, he is capable of taking on any work you throw at him and can assist with helping others on their work as well. He has a great eye for feature work and will provide valuable feedback on any step of the process for product development.</p>
      </>
    )
  },
  {
    image: 'https://media.licdn.com/dms/image/C5603AQGP2Ud-RfRM9A/profile-displayphoto-shrink_800_800/0/1627478656035?e=1706140800&v=beta&t=J-WHFy256jXo8giDzLF-ZCMfJlGhT5aJddqx7u07wmQ',
    link: 'https://www.linkedin.com/in/carter-malloy?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3Bwl7gKUmbTgCZKL%2B3HQM%2BpA%3D%3D',
    author: 'Carter Malloy',
    date: 'October 11, 2023',
    text: (
      <>
        <p>I&apos;ve had the pleasure for working with Kegen for over 2 years. Finding the balance between velocity of development and pristine product is always a challenge, but somehow Kegen was always able to pull it off against a demanding schedule. He constantly challenges himself to grow, and his peers enjoy working alongside him to build the next big thing.</p>
      </>
    )
  },
  {
    image: 'https://media.licdn.com/dms/image/D5603AQFOKEYOd9sdug/profile-displayphoto-shrink_400_400/0/1695691145445?e=1706140800&v=beta&t=_zRrTnni2YLuoCr9mTgD-FmuSAhRfrgkQg6Lpfh0UXs',
    link: 'https://www.linkedin.com/in/amanda-banks-908a71225?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3Bwl7gKUmbTgCZKL%2B3HQM%2BpA%3D%3D',
    author: 'Amanda Banks',
    date: 'October 10, 2023',
    text: (
      <>
        <p>Kegen is a very skilled developer and a true asset to any team. He is always willing to tackle even the most challenging tasks, never complaining even when the ask is big. He makes the work look easy, all while bringing levity and being a bright spot on the team. For GIS and MapBox related work in particular, he is likely the best front-end dev in the state at this point, and his work speaks for itself.</p>
      </>
    )
  },
]

export type { Recommendation }

export default recommendations
