import React from 'react'
import Card from '../components/card'
import { Suspense } from 'react'
import Loading from '../loading'

export const metadata = {
  title: 'Berita | Sejenak Membaca',
}
function BeritaList() {
  return (
    <div className='container p-5 m-auto'>
    <div className='text-3xl font-bold text-center'>
    <h2>List Berita</h2>
    </div>
    
    <div className='flex flex-col gap-4 mt-3'>
    <Suspense fallback={<Loading/>}>
      <Card 
        Title = "Sahur Adalah: Pengertian, Hukum dan Waktunya"
         Content = "Sahur adalah kegiatan makan dan minum sebelum terbitnya fajar saat berpuasa. Simak penjelasan lengkapnya di sini."
         ImgUrl = "/images/b1.jpg"
         BeritaHref = "beritalist/1"
      />
        <Card 
        Title = "Bolehkah Niat Puasa saat Imsak? Ini Batas Waktunya"
         Content = "Setiap ibadah harus diawali dengan niat, termasuk dalam berpuasa. Lantas, kapan batas waktu berniat dalam puasa"
         ImgUrl = "/images/b2.jpg"
         BeritaHref = "beritalist/2"
      />
      </Suspense>
    </div>
    </div>
  )
}

export default BeritaList