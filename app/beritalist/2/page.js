import React from 'react'
import Image from 'next/image'
import { Suspense } from 'react'
import Loading from '@/app/loading'
function BeritaTwo() {
  return (
    <>
    <Suspense  fallback={<Loading/>}>
    <div className='container max-w-full max-h-full p-5 mx-auto'>
    <div className='flex items-center justify-center'>
    <div className='text-3xl font-bold text-center'>
    <h1>Bolehkah Niat Puasa saat Imsak? Ini Batas Waktunya</h1>
    </div>
    </div>
    <div className="flex items-center justify-center">
    <div className='mt-1'>
        <Image
            src= "/images/b2.jpg"
            width={700}
            height={394}
            alt='sahur'
        />
    </div>
    </div>
    <div className='w-2/3 mx-auto mt-5 max-sm:w-full'>
    <p className='text-justify text-wrap'>
    <b>Jakarta</b> - Hukum niat dalam puasa dan dalam setiap ibadah lainnya adalah wajib. Maksud niat di sini adalah bertekad untuk menjalankan ibadah sebagai bentuk pengabdian kepada Allah SWT serta untuk mendekatkan diri kepada-Nya.
    </p>
    <br />
    <p>Udin Wahyudin dalam buku Fiqih menjelaskan, niat puasa dilakukan agar amalan yang dikerjakan sejalan dengan keridhoan-Nya dan sebagai bentuk taqarrub (pendekatan diri) kepada-Nya. Dikutip dari sebuah hadis yang menceritakan bahwa Rasulullah SAW bersabda,</p>
    <br />
    <p>"Sesungguhnya setiap amalan yang dilakukan itu tergantung niatnya. Dan setiap orang akan mendapatkan apa yang sesuai dengan niatnya." (HR Bukhari dan Muslim)</p>
    <br />
    <p>Allah tidak menerima ibadah hamba-hamba-Nya kecuali disertai dengan niat. Allah berfirman dalam surat Al-Bayyinah ayat 5:</p>
    <br />
    <span className='text-2xl font-bold'>وَمَآ اُمِرُوْٓا اِلَّا لِيَعْبُدُوا اللّٰهَ مُخْلِصِيْنَ لَهُ الدِّيْنَ ەۙ حُنَفَاۤءَ وَيُقِيْمُوا الصَّلٰوةَ وَيُؤْتُوا الزَّكٰوةَ وَذٰلِكَ دِيْنُ الْقَيِّمَةِۗ</span>
    <br />
    <br />
    <p>Artinya: Padahal mereka hanya diperintah menyembah Allah SWT dengan ikhlas menaati-Nya semata-mata karena (menjalankan) agama, dan juga agar melaksanakan salat dan menunaikan zakat; dan yang demikian itulah agama yang lurus (benar).</p>
    <br />
    <p>Salah satu ibadah yang mensyaratkan adanya niat adalah puasa. Dikatakan dalam buku Dialog Lintas Mazhab: Fiqh Ibadah & Muamalah karya Asmaji Muchtar, mazhab Syafi'i berpendapat rukun puasa ada tiga, yakni menahan diri dari perkara yang membatalkan, niat, dan orang yang berpuasa. Mazhab ini berpandangan puasa tidak terwujud tanpa tiga hal itu.</p>
    <br />
    <p>Tiga mazhab lainnya, Maliki, Hanbali, dan Hanafi juga memasukkan niat dalam rukun puasa. Namun, mazhab Hanafi berpendapat niat dan orang yang berpuasa adalah syarat yang keluar dari hakikat puasa, tapi keduanya harus ada.</p>
<br />
<div className="text-2xl font-bold">
        <h1>Batas Waktu Berniat</h1>
    </div>
    <p>
Persoalan lainnya adalah mengenai batas waktu niat berpuasa. Menukil buku Tirulah Puasa Nabi! oleh Yusuf Qardhawi, mayoritas ulama fiqih berpendapat bahwa niat puasa sebaiknya dilakukan sejak malam atau pada sepertiga malam sebelum fajar.
    </p>
    <br />
    <p>Mereka beragumen dengan hadis Ibn Umar, dari Hafshah, bahwa Rasulullah bersabda, "Barang siapa tidak menetapkan puasa sebelum fajar, maka tidak ada puasa baginya." (HR Ahmad)</p>
    <br />
    <p>Makna menetapkan di sana adalah berniat. Dikatakan, aku menetapkan urusan, jika aku meniatkannya.</p>
   <br />
   <p>Imam Syafi'i berpendapat niat puasa wajib harus sebelum fajar, sedangkan niat puasa sunah bisa setelah fajar. Pendapat Imam Syafi'i ini terdapat dalam Al Majmu' yang turut dinukil Muhammad Ridho al-Thurisinai dalam buku Buka Puasa Bersama Rasulullah SAW.</p>
    <br />
    <p>Fajar sendiri adalah batas awal waktu puasa sebagaimana pendapat jumhur. Fajar ditandai dengan kumandang azan Subuh, sekitar 10 menit setelah imsak.</p>
    <br />
    <p>Sementara itu, mazhab Hanafi membolehkan berpuasa Ramadan dengan mengucapkan niat sejak dari malam sampai tengah hari. Ada juga yang berpendapat mengucapkan niat puasa pada malam hari hanya untuk puasa wajib, sedangkan puasa sunah boleh berniat pada siang hari sebelum terbenamnya matahari.</p>
    <br />
    <p>Dalam sebuah hadis yang diriwayatkan Muslim, dari Aisyah, ia berkata, bahwa Rasulullah suatu ketika mendatangi sebagian istrinya, lalu bersabda, "Apakah ada makanan?" Mereka menjawab, "Tidak." Nabi bersabda, "Kalau begitu, aku akan berpuasa."</p>
    <br />
    <p>Imam Malik berpendapat bahwa niat puasa pada malam pertama bulan Ramadan sudah cukup untuk puasa sebulan penuh tanpa perlu memperbarui niat setiap malamnya. Alasannya bahwa puasa Ramadan itu merupakan satu paket amalan dan ibadah, sekalipun dilakukan dalam beberapa hari.</p>
    <br />
    <div className="text-2xl font-bold">
        <h1>Doa Niat Puasa Ramadan</h1>
    </div>
    <br />
    <p>Adapun bacaan niat puasa Ramadan, sebagai berikut:</p><br />
    <span className='text-2xl font-bold'>نَوَيْتُ صَوْمَ غَدٍ عَنْ أَدَاءِ فَرْضِ شَهْرِ رَمَضَانَ هَذِهِ السَّنَةِ لِلّٰهِ تَعَالَى</span>
    <br />
    <p>Nawaitu shaumaghadin 'an ada'i fardhisyahri Ramadana hadzihis-sanati lillahi ta'ala.</p>
    <br />
    <p>Artinya: "Aku niat berpuasa esok hari untuk menunaikan kewajiban puasa bulan Ramadan, karena Allah Ta'ala"</p>
    </div>
    </div>
    </Suspense>
    </>
  )
}

export default BeritaTwo