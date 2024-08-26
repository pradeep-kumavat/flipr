import React from 'react'
import Image from 'next/image'

const Dashboard = () => {
	return (
		<>
			<div className='overflow-hidden bg-sky-100 text-gray-800 min-h-[80vh] relative'>
				<div className='bottom-image absolute left-0 bottom-0 z-0'>
					<Image src={'/images/1.svg'} alt='' height={500} width={500} />
				</div>

				<div className='flex items-center justify-center gap-x-4  h-[89%] relative z-10 ml-10'>
				{/* <div className='mt-8'> */}
					<div className='first flex flex-col w-[32%] gap-y-8 mt-32'>
						<div>
							<Image src={'/images/Subtract.svg'} alt='' width={40} height={40} />
						</div>
						<div>
							<h1 className='text-4xl font-bold w-[18rem]'>$7+ M paid out to investors</h1>
						</div>
						<div>
							<p className='text-gray-400 font-medium text-sm tracking-wide'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima exercitationem fuga, quam adipisci obcaecati animi consectetur aliquid tempora, culpa quo quod cupiditate vero esse mollitia.</p>
						</div>

					</div>
					<div className='second mt-20'>
						<Image src={'images/16.svg'} alt='' width={500} height={500} />
					</div>
					{/* </div> */}
					<div className='third flex flex-col gap-y-60 ml-16 '>
						<div className='-mt-16'>
							<Image src={'/images/14.svg'} alt='' width={100} height={100} />
							</div>
						<div className='mt-8 -mb-4'>
							<Image src={'/images/15.svg'} alt='' width={20} height={20} />
							</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Dashboard