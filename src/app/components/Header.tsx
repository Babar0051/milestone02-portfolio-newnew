// import Image from 'next/image';
// import logo from "@/public/assets/logo.png"

export default function Header() {
    return (
        <header className="bg-black text-white p-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* Name and Title Section */}
                <div className="text-left">
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                        BABAR AHMED
                    </h1>
                    <h2 className="text-2xl font-light text-yellow-300">Full Stack Developer</h2>
                </div>

                {/* Logo Section */}
                {/* <div className="w-20 h-20">
                    <Image src={logo} // Replace with your logo's URL or path
                        alt="Logo"
                        width={80}
                        height={80}
                        className="object-contain w-full h-full rounded-full border-2 border-yellow-500"
                    />
                </div> */}
            </div>
        </header>
    );
}
