import React from 'react'
import Link from 'next/link'
function Card({Title , Content , ImgUrl , BeritaHref}) {
  return (
    <div className="shadow-xl card lg:card-side bg-base-100">
    <figure><img src={ImgUrl} alt="Album"/></figure>
    <div className="card-body">
      <h2 className="card-title">{Title}</h2>
      <p>{Content}</p>
      <div className="justify-end card-actions">
        <Link href={BeritaHref} className="btn btn-primary">Baca Selengkapnya</Link>
      </div>
    </div>
  </div>
  )
}

export default Card