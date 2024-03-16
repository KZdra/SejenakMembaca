import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
export const metadata = {
    title: 'About | Sejenak Membaca',
  }

function About() {
  return (
    <div className='container p-5 m-auto'>
       <div className='text-3xl font-bold text-center'>
    <h2>About</h2>
    </div>
    <div className='flex content-center justify-center w-4/5 mx-auto h-4/5'>
    <div className="mt-5 shadow-xl card lg:card-side bg-base-100">
  <figure><Image
    src= "/images/profile.png"
    height={400}
    width={400}
    alt='profile'
  /></figure>
  <div className="card-body">
    <h2 className="card-title">Indra Hardika</h2>
    <p>Indra Hardika also known as KzDra make this site using NextJS 14!
    Check on my github for another project! See You later 👋</p>
    <div className="justify-end card-actions">
    <a href="http://github.com/kzdra" target="_blank" rel="noopener noreferrer" className="btn ">
    <span className='w-10 h-10'><FontAwesomeIcon icon={faGithub} /></span>KZdra 
    </a>
    
    </div>
  </div>
</div>
    </div>
   
    </div>
  )
}

export default About