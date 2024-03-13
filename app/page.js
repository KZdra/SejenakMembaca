import Link from "next/link";
export default function Home() {
  return (
 <>
  <div className="min-h-screen hero" style={{backgroundImage: 'url(https://www.syahida.com/wp-content/uploads/2016/03/islam-background.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="text-center hero-content text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Sejenak baca</h1>
      <p className="mb-5">Adalah Web Berita Islami dan lain lain yang bertemakan islam 
      ini adalah tantangan saya untuk Ramadhan-Coding-Fest</p>
      <Link className="btn btn-primary" href={"/beritalist"}>Mari Baca!</Link>
    </div>
  </div>
</div>
 </>
  );
}
