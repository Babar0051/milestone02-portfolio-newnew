import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white p-6">
            <div className="container mx-auto text-center">
                <p className="text-sm mb-4">&copy; {new Date().getFullYear()} Babar Ahmed. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mb-4">
                    <a 
                        href="https://github.com/yourprofile" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-gray-400 transition duration-300"
                    >
                        <FaGithub size={24} />
                    </a>
                    <a 
                        href="https://linkedin.com/in/yourprofile" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-gray-400 transition duration-300"
                    >
                        <FaLinkedin size={24} />
                    </a>
                    <a 
                        href="https://twitter.com/yourprofile" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-gray-400 transition duration-300"
                    >
                        <FaTwitter size={24} />
                    </a>
                    <a 
                        href="https://facebook.com/yourprofile" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-gray-400 transition duration-300"
                    >
                        <FaFacebook size={24} />
                    </a>
                </div>
                <p className="text-xs">
                    Designed with ❤️ by Babar Ahmed
                </p>
            </div>
        </footer>
    );
};

export default Footer;