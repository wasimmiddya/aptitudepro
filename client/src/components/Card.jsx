/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

function Card({ devName, desc, avater }) {
    console.log(devName);
    return (
        <>
            <div className="card w-[18%] bg-white overflow-hidden shadow-md rounded-lg">
                <img className="mx-auto my-6 outline outline-4 outline-pink-400 rounded-full h-[100px]" src={avater} alt={`${avater}'s Image`} />
                <div className="px-5 mb-14 text-center">
                    <h4 className="text-lg font-semibold my-2">{devName}</h4>
                    <p className="text-xs">{desc}</p>
                </div>
            </div>
        </>
    )
}

export default Card