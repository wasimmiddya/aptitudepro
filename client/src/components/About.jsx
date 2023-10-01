/* eslint-disable react/no-unescaped-entities */

import Card from "./Card"

// import Card from "./Card"

function About() {

  const developers = [
    {
      name: 'Wasim Middya',
      descrption: `Hi there I am Wasim Middya. I am working as a Bankend Engineer.`,
      avater: '/wasim.jpg'
    },
    {
      name: 'Sohan Shaw',
      descrption: `Hi there I am Sohan Shaw. I am working as a Frontend Engineer.`,
      avater: '/sohan.png'
    },
    {
      name: 'Zeesan Tarafdar',
      descrption: `Hi there I am Zeesan Tarafdar and I am working as a Database Administrator`,
      avater: '/zeesan.jpg'
    },
    {
      name: 'Ujjal Pattra',
      descrption: `Hi there I am Ujjal Pattra and I am working as a service consultent.`,
      avater: '/profile.jpg'
    }
  ]

  return (
    <>
      <div className="bg-sky-50 w-full h-full pt-24 grid place-items-center">
        <div>
          <h1 className="text-center text-3xl font-semibold my-6">Developers</h1>
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