import React from 'react'
import Card from '../components/card'

export const metadata = {
  title: 'Berita | Sejenak Membaca',
}
function BeritaList() {
  return (
    <div className='container p-5 m-auto'>
    <div className='text-3xl font-bold text-center'>
    <h2>List Berita</h2>
    </div>
    
    <div className='flex flex-col gap-4 mt-1'>
      <Card 
        Title = "berita1"
         Content = "lorem ipsumdolsit"
         ImgUrl = "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
         BeritaHref = "/"
      />
        <Card 
        Title = "berita2"
         Content = "lorem ipsumdolsit"
         ImgUrl = "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
         BeritaHref = "/"
      />
    </div>
    </div>
  )
}

export default BeritaList