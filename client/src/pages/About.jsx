/* eslint-disable react/no-unescaped-entities */

// import Card from "../components/Card"

function About() {
  // const developers = [
  //   {
  //     name: 'Wasim Middya',
  //     descrption: `Hi there I am Wasim Middya. I am working as a Bankend Engineer.`,
  //     avater: '/images/wasim.jpg'
  //   },
  //   {
  //     name: 'Sohan Shaw',
  //     descrption: `Hi there I am Sohan Shaw. I am working as a Frontend Engineer.`,
  //     avater: '/images/sohan.png'
  //   },
  //   {
  //     name: 'Zeesan Tarafdar',
  //     descrption: `Hi there I am Zeesan Tarafdar and I am working as a Database Administrator`,
  //     avater: '/images/zeesan.jpg'
  //   },
  //   {
  //     name: 'Ujjal Ghosh',
  //     descrption: `Hi there I am Ujjal Ghosh and I am working as a service consultent.`,
  //     avater: '/images/ujjal.jpeg'
  //   }
  // ]

  return (
    <>
      <div className="bg-sky-50 w-full h-full pt-28 grid place-items-center overflow-scroll">
        <div className="w-[50%] bg-white py-8 px-12 rounded-md shadow-md">
          <h1 className="text-center text-3xl font-semibold mb-3">About Us</h1>
          <p className="text-center ">
            Welcome to Aptitude Pro, where we're dedicated to honing your
            aptitude reasoning skills. Our platform offers an authentic
            exam-like experience, ensuring you're not only knowledgeable but
            also well-prepared for time-bound assessments. Our user-friendly
            interface and skill-level categorized questions cater to beginners,
            intermediates, and pros. We present questions in Multiple Choice
            Question format, mirroring exam styles. To maintain integrity, our
            platform employs an AI camera system that detects violations during
            exams. The included timer adds a realistic pressure, automatically
            submitting your paper if time runs out—preparing you for real exam
            conditions. Join Aptitude Pro and embark on a journey towards
            aptitude excellence.
          </p>
        </div>
        <div>
          {/* <h1 className="text-center text-3xl font-semibold my-6">Developers</h1> */}
          <div className="flex justify-center space-x-4 mb-5">
            {
              // developers.map((e, k) => {
              //   return <Card key={k} devName={e.name} desc={e.descrption} avater={e.avater} />
              // })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
