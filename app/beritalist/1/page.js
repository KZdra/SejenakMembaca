import React from 'react'
import Image from 'next/image'
import {faNutritionix} from '@fortawesome/free-brands-svg-icons';
function Berita1() {
  return (
    <div className='container max-w-full max-h-full p-5 mx-auto'>
    <div className='flex items-center justify-center'>
    <div className='text-3xl font-bold text-center'>
    <h1>Sahur Adalah: Pengertian, Hukum dan Waktunya</h1>
    </div>
    </div>
    <div className="flex items-center justify-center">
    <div className='mt-1'>
        <Image
            src= "/images/b1.jpg"
            width={700}
            height={394}
            alt='sahur'
        />
    </div>
    </div>
    <div className='w-2/3 mx-auto mt-5 max-sm:w-full'>
    <p className='text-justify text-wrap'>
    <b>Jakarta</b> - Umat Islam di seluruh dunia kini sedang menjalankan ibadah puasa Ramadan. Sebelum puasa, ada penganjuran Rasulullah SAW untuk melakukan sahur.
Sahur bukan hanya sekadar makan dan minum, tapi juga merupakan amalan sunah yang dianjurkan Rasulullah SAW. Selain itu, waktu sahur juga menjadi waktu yang dianjurkan untuk berdoa, sebab pada waktu tersebut turunnya rahmat Allah SWT.
    </p>
    <br />
    <div className="text-2xl font-bold">
        <h1>Pengertian Sahur</h1>
    </div>
    <br />
    <p>
    Menukil buku Materi Puasa Ramadhan oleh Yunus Hanis Syam, dalam bahasa Arab as-sahurr dengan memfathahkan huruf sin adalah benda makanan dan minuman untuk sahur. Adapun as-suhuur dengan mendhomahkan huruf sin adalah nashdar yakni perbuatan makan sahur itu sendiri.
    </p>
    <br />
    <p>
    Mengutip buku Ensiklopedi Puasa oleh Ustadz Irfan Supandi, sahur adalah makan minum di malam hari mulai tengah malam hingga sebelum Subuh. Di samping itu, sahur juga membantu stamina tubuh di siang hari saat sedang berpuasa. Untuk itu, makan sahur harus tetap diupayakan meskipun hanya dengan sesuap nasi atau seteguk air.
    </p>
    <br />
    <p>
Sementara itu, Yusuf Qardhawi berpendapat dalam bukunya Mukjizat Puasa, sahur adalah hidangan yang dimakan pada waktu dini hari, yaitu setelah pertengahan malam hingga fajar. Ini dimaksudkan untuk memberikan kekuatan kepada orang yang berpuasa, agar dapat tahan berpuasa dengan lapar dan dahaganya, khususnya pada waktu siang hari.
</p>
<br />
<p>
Di antara berkah sahur adalah selain memberikan asupan kepada umat Islam yang bersifat materi, ia juga memberikan asupan rohani dengan amalan zikir, istigfar dan doa di waktu yang penuh berkah tersebut. Sebab waktu sahur adalah saat rahmat diturunkan.
</p>
<br />
<div className="text-2xl font-bold">
        <h1>Hukum Sahur</h1>
    </div>
    <br />
    <p>
    Mengutip buku Ngopi Bareng Ustaz oleh Amirulloh Syarbini, hukum makan sahur adalah sunah. Meski demikian, bersahur adalah perbuatan yang sangat dianjurkan bagi orang yang hendak berpuasa.
    </p>
    <br />
    <p>
    Hal ini sebagaimana sabda Rasulullah SAW yang dikatakan Annas bin Malik RA berikut,<br /> <br />
    <span className='items-end text-2xl font-bold'>تَسَحَّرُوا فَإِنَّ فِي السُّحُورِ بَرَكَةً</span>
<br />
<br />
Artinya: "Makan sahurlah kalian karena sesungguhnya di dalam sahur itu terdapat berkah." (HR Bukhari)

    </p>
    </div>
    </div>
  )
}

export default Berita1