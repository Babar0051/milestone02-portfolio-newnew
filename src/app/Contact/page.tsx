import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4 text-left">Contact Me</h1>
        <p className="text-lg text-justify mb-6 leading-relaxed">
          I am always open to discussing new projects creative ideas or opportunities to be part of your vision Feel free to reach out through any of the contact methods listed below.
        </p>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
          <p className="text-lg mb-1"><strong>Address:</strong> 1234 Street Name, Karachi, Pakistan</p>
          <p className="text-lg mb-1"><strong>Mobile:</strong> 0345-2390089</p>
          <p className="text-lg">
            <strong>Email:</strong> <a href="mailto:dummyemail@example.com" className="text-blue-500 hover:underline">dummyemail@example.com</a>
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-2">Follow Me</h2>
        <p className="text-lg">
          Stay connected with me on social media to keep up with my latest projects and updates!
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><a href="#" className="text-blue-500 hover:underline">Facebook</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Twitter</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">LinkedIn</a></li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
