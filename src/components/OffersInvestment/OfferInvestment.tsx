'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import ProgressBar from '../ProgressBar'

const OfferInvestment = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [cards, setCards] = useState<any[]>([]); 

  // Fetch card data from backend using Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response:any = await axios.get('/api/investments'); 
        console.log(response.data)
        if (response.data.success) {
          setCards(response.data.response); 
          console.log(response)
        } else {
          console.error("Failed to retrieve cards.");
        }
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };
    

    fetchData();
  }, []);

  return (
    <div className='overflow-hidden bg-white'>
      <div className='main-covering-tag flex items-center lg:ml-20 pb-20'>
        <div className='side-image'>
          <Image src={'/images/shape.svg'} alt='' width={200} height={200} />
        </div>

        <div className='flex flex-col'>
          <div className='text-center mt-10'>
            <h1 className='text-3xl font-bold text-gray-800 tracking-wide'>Offerings open for investments</h1>
            <p className='text-sm font-medium text-gray-400 w-[30rem] mx-auto mt-4'>
              Explore pre-vetted investment opportunities available in a growing number of industry categories.
            </p>
          </div>

          <div className='grid grid-cols-3 mt-10'>
            {cards.length > 0 ? (
              cards.map((card, _id) => (
                <div
                  key={card._id} // Ensure a unique key for each item
                  className='border m-2 flex flex-col bg-white rounded-md shadow-md text-gray-800 w-[250px] relative'
                  onMouseEnter={() => setHoveredCard(_id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className='relative border'>
                    <div className={`w-full ${hoveredCard === _id ? 'hidden' : ''}`}>
                      <Image src={card.cardImage} alt={card.title} height={300} width={350} /> {/* Use card image from backend */}
                    </div>
                    <div className='flex gap-x-6 z-10 absolute inset-0 text-sm m-3'>
                      <div className={`h-8 w-[4rem] bg-gray-100 opacity-2 text-gray-800 flex items-center justify-center p-2 text-[0.850rem] font-bold ${hoveredCard === _id ? 'hidden' : ''}`}>
                        {card.tag} {/* Dynamic tag */}
                      </div>
                      <div className={`h-8 w-[8rem] bg-gray-100 opacity-2 text-gray-800 flex items-center px-2 text-[0.850rem] font-bold ${hoveredCard === _id ? 'hidden' : ''}`}>
                        {card.securityType} {/* Dynamic security type */}
                      </div>
                    </div>
                  </div>
                  <div className='m-3'>
                    <h1 className='text-2xl font-bold '>{card.title}</h1> {/* Dynamic title */}
                    <p className='text-gray-400 text-[0.850rem]'>{card.location}</p> {/* Dynamic location */}
                  </div>
                  <div className='m-3'>
                    <p className='text-[0.830rem] font-semibold tracking-tight'>{card.description}</p> {/* Dynamic description */}
                  </div>
                  <div className='m-3'>
                    <ProgressBar current={card.getPrice} goal={card.totalPrice} /> {/* Dynamic progress bar */}
                    <p className='text-[0.830rem] font-semibold tracking-tight ml-2'>
                      <span className='text-teal-500'>${card.getPrice}</span> raised of ${card.totalPrice}
                    </p>
                  </div>
                  {hoveredCard === _id && (
                    <>
                      <div className='m-2'>
                        <hr className='border-t border-gray-200' />
                      </div>
                      <div className='m-2'>
                        <table className='w-full text-sm text-left'>
                          <tbody>
                            <tr>
                              <td className='font-semibold'>Security Type</td>
                              <td>{card.securityType}</td> {/* Dynamic security type */}
                            </tr>
                            <tr>
                              <td className='font-semibold'>Investment Multiple</td>
                              <td>{card.investmentMultiple}</td> {/* Dynamic investment multiple */}
                            </tr>
                            <tr>
                              <td className='font-semibold'>Maturity</td>
                              <td>{card.maturity} months</td> {/* Dynamic maturity */}
                            </tr>
                            <tr>
                              <td className='font-semibold'>Min. Investment</td>
                              <td>${card.minInvestment}</td> {/* Dynamic minimum investment */}
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className='m-3'>
                        <button className='w-full bg-pink-500 text-white font-bold py-2 rounded-md'>VIEW</button>
                      </div>
                    </>
                  )}
                </div>
              ))
            ) : (
              <p className='text-center text-black'>Loading cards...</p>
            )}
          </div>

          <div className='more-project border border-pink-500 text-pink-500 w-[20%] mx-auto flex items-center justify-center h-12 cursor-pointer mt-8'>
            VIEW ALL PROJECTS
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferInvestment
