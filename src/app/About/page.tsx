// import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from "../components/Header"
import Footer from "../components/Footer";
export default function About() {
    return (

    <div>
      <Header />
      <Navbar/>
      <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-left">About Me</h1>
            <p className="text-lg text-justify mb-4 leading-relaxed">
                As a Full Stack Developer, I am dedicated to crafting high-quality, scalable web applications that provide exceptional user experiences. With a robust skill set in both front-end and back-end technologies, I specialize in using tools such as Node.js and TypeScript to create dynamic and responsive applications. My experience encompasses a variety of projects, from developing intuitive user interfaces to implementing complex server-side logic, ensuring that every aspect of a project aligns with best practices and industry standards. I thrive in collaborative environments, leveraging agile methodologies to enhance productivity and foster innovation within development teams.
            </p>
            <p className="text-lg text-justify mb-4 leading-relaxed">
                My passion for technology drives me to stay at the forefront of industry trends, continuously seeking new challenges and opportunities for growth. I believe in the power of code to solve real-world problems, and I am committed to delivering solutions that not only meet client specifications but also exceed expectations. Whether it’s through optimizing performance, ensuring security, or enhancing user engagement, I approach each project with a keen eye for detail and a focus on achieving measurable results. By prioritizing effective communication and collaboration, I aim to build strong relationships with clients and colleagues alike, transforming ideas into successful, functional applications.
            </p>

    </div>

    <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 text-left">My Services</h1>
            <p className="text-lg text-justify mb-4 leading-relaxed">
                As a Full Stack Developer, I offer a comprehensive range of services designed to address the diverse needs of businesses and organizations. With expertise in both front-end and back-end development, I am equipped to build robust, user-friendly applications that not only meet client specifications but also enhance user engagement and satisfaction. My approach is centered on understanding your unique requirements and delivering tailored solutions that drive success and innovation.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Specific Services Offered:</h2>
            <ul className="list-disc list-inside mb-4">
                <li><strong>Web Application Development</strong>: I specialize in creating dynamic, responsive web applications using Next.js and TypeScript, focusing on seamless user experiences and high performance.</li>
                <li><strong>API Development and Integration</strong>: Designing and developing RESTful APIs that enable smooth communication between your application and external services.</li>
                <li><strong>UI/UX Design</strong>: Offering UI/UX design services to create intuitive interfaces that enhance user experiences through best practices in design thinking.</li>
                <li><strong>Maintenance and Support</strong>: Providing ongoing maintenance and support to keep your application secure and efficient.</li>
            </ul>
            <p className="text-lg text-justify mb-4 leading-relaxed">
    By choosing my services, you gain a partner who is committed to your project&apos;s success. I prioritize clear communication, timely delivery, and a collaborative approach to ensure that your vision is realized. Whether you are a startup looking to build your first application or an established business seeking to enhance your existing systems, I am here to provide the expertise and support you need.
</p>

        </div>
    <Footer/>

    </div>
  );
}