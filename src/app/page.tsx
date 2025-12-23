import { siteConfig } from "../content";
import Link from "next/link";
import GithubHeatmap from "./github-heatmap";
import Image from "next/image";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter, FaRedditAlien } from "react-icons/fa6";


import { MdEmail } from 'react-icons/md';

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between min-h-[60vh] py-12 md:py-20 px-4 gap-8 w-full">
        {/* Left: Hero Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left justify-center max-w-2xl w-full">
          <div className="flex flex-col items-center md:items-start gap-4 mb-8 w-full">
            {/* Rotating Card Image */}
            <div className="w-32 h-32 mb-2 relative overflow-hidden rounded-full flex items-center justify-center">
              <Image
                src="/card.png"
                alt="Rotating Card"
                fill
                className="object-cover animate-3d-rotate"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              <span>{siteConfig.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
              {siteConfig.title}
            </h2>
            <p className="text-gray-400 text-lg mb-4">{siteConfig.about.headline}</p>
          </div>
          {/* Social Links */}
           <div className="flex justify-center md:justify-start gap-4 mb-8 w-full">
            <Link href={siteConfig.about.socials.github} target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-800 transition-colors" aria-label="GitHub">
              <FaGithub size={22} color="#f0f0f0" />
            </Link>
            <Link href={siteConfig.about.socials.linkedin} target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-800 transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={22} color="#f0f0f0" />
            </Link>
            <Link href={`mailto:${siteConfig.about.socials.email}`} className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-800 transition-colors" aria-label="Email">
              <MdEmail size={22} color="#f0f0f0" />
            </Link>
            <Link href={siteConfig.about.socials.twitter} target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-800 transition-colors" aria-label="Twitter">
              <FaXTwitter size={22} color="#f0f0f0" />
            </Link>
            <Link href={siteConfig.about.socials.reddit} target="_blank" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#FF4500]/20 transition-colors" aria-label="Reddit">
              <FaRedditAlien size={22} color="#f0f0f0" />
            </Link>
          </div>
          {/* Resume Button */}
          <div className="flex justify-center md:justify-start w-full">
            <Link href="/resume" className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-400 hover:text-blue-400 transition">
              View Resume
            </Link>
          </div>
        </div>
        {/* Right: Hero Image */}
        <div className="flex-1 flex items-center justify-center w-full max-w-md">
          <Image src="/hero.webp" alt="Hero Illustration" width={400} height={400} className="w-full h-auto object-contain" priority />
        </div>
      </section>
      {/* GitHub Heatmap Section - visually distinct */}

      {/* GitHub Heatmap Section - visually distinct */}
      
     
      
       {/* Projects */}
      
        
      
    </>
  );
}