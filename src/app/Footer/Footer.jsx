import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#044029] py-5'>
        <div className='w-[60%] mx-[auto] text-white'>
             <div className="footer_logo">
                <Image style={{height:'86px',width:'143px'}}  className='d-block mx-auto' src={'https://aharibd.com/wp-content/uploads/2021/09/Asset-6-1.png'} width={500} height={500}/>
             </div>
             <div className='grid grid-cols-4 pt-5 gap-x-[45px] py-3'>
               <div className='text-white'>
                 <h3 className='text-xl mb-5'>IN A NUTSHELL</h3>
                 <p >
                 AHARI is a blend of an online shopping hub and physical stores, focused on providing safe, natural foods in Bangladesh. 
                 We prioritize offering pure, wholesome ingredients to nourish your body. Our range of products is thoughtfully selected
                 to ensure you get nature’s best, without any artificial additives or preservatives.
                 </p>
               </div>
               <div>
                <h3 className='text-xl mb-5'>Contact</h3>
                <div>
                    <span>Head Office:</span><br/>
                   <span>77/3, Humayun City 4th floor,<br/> Bansaree (G),
                    Dhaka -1219</span>
                </div>
                <div className='my-5'>
                    <span className='block'>Number:</span>
                    <span>+880 1911017725</span>
                </div>
                <div>
                    <span className='block' >Email: toriqulislam296@yahoo.com</span>
                    <span>
                          Website: toriq.vercel.app
                    </span>
                </div>
                 
               </div>
               <div>
                 <h3 className='text-xl mb-5'>
                    USEFUL LINK
                 </h3>
                 <ul>
                    <li className='mb-2'><Link href={''}>FAQ</Link></li>
                    <li className='mb-2'><Link href={''}>Refund Return Possible</Link></li>
                    <li className='mb-2'><Link href={''}>Contact</Link></li>
                    <li className='mb-2'><Link href={''}>Delivery Policy</Link></li>
                    <li className='mb-2'><Link href={''}>FAQ</Link></li>
                    <li className='mb-2'> <Link href={''}>FAQ</Link></li>
                 </ul>
               </div>
               <div>
               <h3 className='text-xl mb-5'>
                    JOIN OUR COMMIUNITY
                 </h3>
               <h3 className='text-xl mb-[50px]'>
                    Our DIGITAL PRESENCE
                 </h3>
                 
                 <ul>
                    <li className='mb-2'><Link href={''}>Twitter Profile</Link></li>
                    <li className='mb-2'><Link href={''}>Instagram Profile</Link></li>
                    <li className='mb-2'><Link href={''}>Facebook Profile</Link></li>
                    
                 </ul>
               </div>
             </div>
        </div>
    </div>
  )
}

export default Footer