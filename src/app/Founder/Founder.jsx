import Image from 'next/image'
import React from 'react'

const Founder = () => {
  return (
    <div>
        <h1 className='text-6xl text-center my-5'>Meet Our Founder, Toriqul</h1>
        <div className='w-[60%] mx-[auto] grid grid-cols-2 gap-5 py-5 place-items-center'>
             <div className='place-self-start'>
               <Image  
               src={'https://scontent.fdac37-1.fna.fbcdn.net/v/t39.30808-6/411074347_1575848396577332_4331380925465508173_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFjliNsSVqEsxMCulUikP690igXI2MahrjSKBcjYxqGuEIqa0noBUffi6IGTbcnvtsXQZVG7mewRHjMzmsiLlrs&_nc_ohc=FFpdocViNIQAX_nf2Je&_nc_ht=scontent.fdac37-1.fna&oh=00_AfA5St5cNkhkq_9an19YcIgUrGUBCiB82qCMcU73yXlxZw&oe=65DD06DE'} width={500} height={500}/>
             </div>
             <div className='mt-[-80px]'>
                   <p className='text-justify'>Hi, I’m Toriqul, the Founder of Tori—an e-commerce platform committed to ensuring safe, pure food across Bangladesh. Since 2020, I’ve led AHARI in delivering 60+ top-notch products with swift home delivery in Dhaka and nationwide courier services. My vision goes beyond commerce; I strive to foster a healthier Bangladesh, raising awareness about food safety and promoting a happy, healthy lifestyle for all. While serving my community with possible purest foods is my primary interest, I blend entrepreneurship with my love for literature, astrology, poetry, public speaking, storytelling and cooking. Proficient in Bengali, English, Hindi, Urdu, and Arabic (reading and writing), I strive for a sustainable, eco-conscious future where technology uplifts marginalized communities responsibly. 
                    Join me in this journey towards a brighter, healthier future through Tori’s convenient website.</p>
                    <button className='btn  text-white bg-[#04472D] mt-5 w-[100%] hover:bg-[#04472D]'>Website</button>
             </div>
        </div>
    </div>
  )
}

export default Founder