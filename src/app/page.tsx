import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container mx-auto p-8 flex flex-col md:flex-row items-center bg-gray-100 rounded-lg shadow-lg">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold mb-4">Hello, I'm Babar Ahmed!</h1>
          <p className="text-lg text-gray-700 text-justify leading-loose mr-10">
            As a passionate Full Stack Developer, I thrive at the intersection of design and technology. With expertise in both front-end and back-end development, I bring ideas to life through innovative web applications that provide seamless user experiences. From crafting intuitive interfaces to building robust server-side logic, I am dedicated to delivering high-quality solutions that meet real-world needs. Explore my projects and discover how I transform challenges into opportunities through code!
          </p>
        </div>
        <div className="md:w-1/2 ml-40 align-right">
          <Image
            src="/assets/my pic.png"
            alt="Babar Ahmed"
            width={300}  // Set the width of the image
            height={300} // Set the height of the image
            className="rounded-full shadow-lg w-full md:w-1/2 h-auto"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
