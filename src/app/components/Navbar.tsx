import Link from "next/link";
// import Header from "./Header";
// import Footer from "./Footer";


export default function Navbar() {
    return(
       
        <div className="flex justify-end text-right bg-yellow-600  text-white font-sans p-1">
      
        <Link href="./" className="hover:text-black transition duration-300 font-bold">HOME</Link>
        <span className="mx-6" />
        <Link href="./About" className="hover:text-black transition duration-300 font-bold">ABOUT</Link>
        <span className="mx-6" />
        <Link href="./Contact" className="hover:text-black transition duration-300 font-bold">CONTACT</Link>
        <span className="mx-6" />
        {/* <Link href="/not-found" className="mx-6 hover:text-black transition duration-300 font-bold">NOT-FOUND</Link> */}
        {/* <span className="mx-6" /> */}
      </div>
    )
  }