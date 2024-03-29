import "./globals.css";
import Link from "next/link";


export const metadata = {
  title: 'Sejenak Membaca',
}
 
export default function RootLayout({ children }) {
  return (
    <>
     <html lang="en" data-theme="cupcake">
    <body>
    <div className="bg-base-200 navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link href={'/'}>Home</Link></li>
      <li><Link href={"/beritalist"}>Daftar Berita</Link></li>
      <li> <Link href={"/about"}>About</Link></li>
      </ul>
    </div>
    <Link href={'/'} className="text-xl btn btn-ghost">Sejenak Baca</Link>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 menu menu-horizontal">
      <li><Link href={'/'}>Home</Link></li>
      <li>
       <Link href={"/beritalist"}>Daftar Berita</Link>
      </li>
      <li> <Link href={"/about"}>About</Link></li>
    </ul>
  </div>
  <div className="mr-1 navbar-end">
  <label className="flex gap-2 cursor-pointer">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
  </div>
  
</div>
    {children}
    <footer className="p-4 footer footer-center bg-base-300 text-base-content">
  <aside>
    <p>Ramadhan-Code-Fest 2024</p>
  </aside>
</footer>
    </body>
  </html>
  </>
   
  );
}
