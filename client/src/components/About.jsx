/* eslint-disable react/no-unescaped-entities */

import Card from "./Card"

// import Card from "./Card"

function About() {

  const developers = [
    {
      name: 'Wasim Middya',
      descrption: `Hi there I am Wasim Middya. I'm from India and I'm working as a software engineer in blumberg.
      I am well skilled in java, javascript, react and python.`,
      avater: '/wasim.jpg'
    },
    {
      name: 'Sohan Shaw',
      descrption: `Hi there I am Sohan Shaw. I'm from India and I'm working as a software engineer in blumberg.
      I am well skilled in java, javascript, react and python.`,
      avater: '/sohan.png'
    },
    {
      name: 'Zeesan Tarafdar',
      descrption: `Hi there I am Zeesan Tarafdar. I'm from India and I'm working as a software engineer in blumberg.
      I am well skilled in java, javascript, react and python.`,
      avater: '/zeesan.jpg'
    },
    {
      name: 'Ujjal Pattra',
      descrption: `Hi there I am Ujjal Pattra. I'm from India and I'm working as a software engineer in blumberg.
      I am well skilled in java, javascript, react and python.`,
      avater: '/profile.jpg'
    }
  ]

  return (
    <>
      <div className="bg-sky-50 w-full h-full pt-24 grid place-items-center">
        <div>
          <h1 className="text-center text-3xl font-semibold my-6">About Us</h1>
          <div className="flex justify-center space-x-4">
            {
              developers.map((e, k) => {
                return <Card key={k} devName={e.name} desc={e.descrption} avater={e.avater} />
              })
            }
          </div>
        </div>

      </div>
    </>
  )
}



export default About