import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase, GraduationCap, FileText, Search, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from '@/components/ui/alert';
import { X } from 'lucide-react';









export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: ""
  }) 
  
  

  
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        alert("Message sent successfully!")
        setFormData({ firstName: "", lastName: "", email: "", number: "", message: "" })
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred. Please try again later.")
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="fixed w-full bg-gray-100 bg-opacity-90 z-50">
        <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 mb-2 sm:mb-0">
  <Image 
    src="/forensleuth-logo.png?height=60&width=60" 
    alt="Forensleuth Logo" 
    width={70} 
    height={70} 
    className="rounded-full w-12 h-12 md:w-[70px] md:h-[70px]" 
  />
  <span className="text-2xl md:text-3xl font-bold text-black">Forensleuth</span>
</Link>
          <nav className="hidden md:flex space-x-6 w-full sm:w-auto justify-end">
            <Link href="#about" className="text-black hover:text-blue-600 transition-colors text-lg">
              About
            </Link>
            <Link href="#mission" className="text-black hover:text-blue-600 transition-colors text-lg">
              Mission
            </Link>
            <Link href="#services" className="text-black hover:text-blue-600 transition-colors text-lg">
              Services
            </Link>
            <Link href="#footer" className="text-black hover:text-blue-600 transition-colors text-lg">
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="hero"
          className="min-h-screen flex items-center bg-white py-20"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 animate-fade-in">
                <div className="relative">
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                    Welcome to Forensleuth: Your Trusted Partner in Forensic
                  </h1>
                  <div className="absolute -left-4 -top-4 w-16 h-16 border-t-4 border-l-4 border-blue-600 opacity-50"></div>
                </div>

                <div className="flex flex-wrap gap-6 animate-fade-in animation-delay-300">
                  <Button
                    onClick={() => {
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
                  >
                    <span>Explore Services</span>
                    <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  {/* <Button
                    onClick={() => {
                      document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-gray-50 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 group border-2 border-gray-200"
                  >
                     <span>Contact Us</span> 
                    <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Button> */}
                </div>
              </div>

              {/* Right Content - Forensic Illustration */}
              <div className="relative group">
                <div className="relative w-full h-[350px] rounded-2xl overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-300 rounded-2xl"></div>
                  
                  {/* Image container with hover effects */}
                  <div className="relative w-full h-full transform transition-all duration-500 
                    group-hover:scale-105 group-hover:rotate-1">
                    <Image
                      src="/hero-image.jpg" 
                      alt="Forensic Illustration"
                      fill
                      className="object-cover rounded-2xl transition-all duration-500
                        group-hover:brightness-110 group-hover:contrast-110"
                      priority
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700
                      bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%]
                      group-hover:translate-x-[200%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            {/* About Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 relative inline-block group">
                About Forensleuth
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
              </h2>
            </div>

            {/* About Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left side - Description */}
              <div className="space-y-6 transform transition-all duration-500 hover:scale-105">
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-2 h-full bg-blue-600 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        <div className="text-justify space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed relative z-10">
            Established in 2025, Forensleuth stands at the forefront of forensic science innovation. Our commitment to excellence drives us to continuously evolve and adapt to the changing landscape of forensic investigation and education.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed relative z-10">
            We combine cutting-edge technology with decades of expertise to deliver comprehensive solutions in forensic science education, investigation, and research. Our team of seasoned professionals brings unparalleled experience and dedication to every project.
          </p>
          </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    {/* <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg"> */}
                      {/* <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-2xl text-blue-600 font-bold">10</span>
                      </div> */}
                      {/* <div className="text-sm">
                        <div className="font-semibold text-gray-900">Years of</div>
                        <div className="text-gray-600">Excellence</div>
                      </div> */}
                    {/* </div> */}
                    <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-2xl text-blue-600 font-bold">50+</span>
                      </div> 
                       <div className="text-sm">
                        <div className="font-semibold text-gray-900">Expert</div>
                        <div className="text-gray-600">Professionals</div>
                      </div> 
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg">
                       <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-2xl text-blue-600 font-bold">1K+</span>
                      </div> 
                      <div className="text-sm">
                         <div className="font-semibold text-gray-900">Successful</div>
                        <div className="text-gray-600">Cases</div> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Animated Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-6 transition-transform duration-300 group-hover:rotate-3"></div>
                <Image
                  src="/forensics.jpg"
                  alt="Forensic Science"
                  width={600}
                  height={400}
                  className="relative rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
                />
              </div>
            </div>

            {/* Video Section */}
            <div className="mt-20 flex flex-col items-center">
              <div className="text-center mb-12 relative group">
                <h3 className="text-3xl md:text-4xl font-bold relative inline-block animate-fade-in">
                  <span className="relative inline-block transform transition-transform duration-300 group-hover:scale-105">
                  Introducing a new era in forensics
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-blue-600 transition-all duration-500 group-hover:w-full"></div>
                  </span>
                </h3>
                {/* Decorative elements */}
                <div className="absolute -left-6 -top-6 w-12 h-12 border-t-2 border-l-2 border-blue-600 opacity-0 transform -translate-x-2 -translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"></div>
                <div className="absolute -right-6 -bottom-6 w-12 h-12 border-b-2 border-r-2 border-blue-600 opacity-0 transform translate-x-2 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              </div>
              
              <div className="w-full max-w-3xl mx-auto relative group">
                <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-2 scale-105 transition-transform duration-300 opacity-20 group-hover:rotate-1"></div>
                <div className="relative rounded-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500 shadow-2xl">
                  <div className="aspect-w-16 aspect-h-9 relative w-full max-w-2xl mx-auto">
                    <div className="absolute inset-0 bg-black bg-opacity-40 z-10 transition-opacity duration-300 group-hover:bg-opacity-30 pointer-events-none  "></div>
                    <video 
                      className="w-full h-full object-cover rounded-2xl"
                      poster="/hero-forensleuth.jpg"
                      controls
                    >
                      <source src="/video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 cursor-pointer group">
                        <div className="relative">
                          {/* Ripple effect */}
                          <div className="absolute inset-0 rounded-full animate-ping bg-blue-600 opacity-75"></div>
                          <svg className="w-8 h-8 text-white relative z-10 transform transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative dots */}
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-2 h-2 rounded-full bg-blue-600 opacity-60"
                      style={{ 
                        animation: `bounce 1.5s infinite ${i * 0.2}s`,
                        animationDirection: 'alternate'
                      }}
                    ></div>
                  ))}
                </div>
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-2 h-2 rounded-full bg-blue-600 opacity-60"
                      style={{ 
                        animation: `bounce 1.5s infinite ${i * 0.2}s`,
                        animationDirection: 'alternate'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black relative group">
          <span className="inline-block transform transition-transform duration-300 group-hover:scale-105">
            Mission and Vision
          </span>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded transition-all duration-300 group-hover:w-32"></div>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 animate-fade-in">
                <div className="group">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600 flex items-center space-x-2">
                    <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">Vision</span>
                    <div className="w-12 h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></div>
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    To be a global leader in forensic science, setting the standard for excellence in education, investigation, and innovation. We aspire to bridge the gap between technology and forensic expertise, fostering a future where truth and justice prevail.
                  </p>
                </div>
              </div>
              <div className="space-y-6 animate-fade-in animation-delay-200">
                <div className="group">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600 flex items-center space-x-2">
                    <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">Mission</span>
                    <div className="w-12 h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 group-hover:scale-x-110"></div>
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    We are committed to delivering accurate, ethical, and science-driven solutions that empower professionals, uphold justice, and enhance the integrity of forensic practices worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="why-choose-us" className="py-16 md:py-24 bg-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">Why Choose Us?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Expertise",
          description: "Decades of combined experience across diverse forensic disciplines.",
        },
        { title: "Innovation", description: "Cutting-edge technology and research-driven practices." },
        { title: "Integrity", description: "Commitment to ethical standards and confidentiality." },
        {
          title: "Collaboration",
          description:
            "Strong partnerships with academic institutions, legal entities, and law enforcement agencies.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
        >
          <h3 className="text-xl font-semibold mb-2 text-blue-600 text-left">{item.title}</h3>
          <p className="text-gray-700 group-hover:text-black transition-colors duration-300 text-justify">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

        

<section id="services" className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: GraduationCap,
          title: "Academics",
          description: "Empowering the next generation of forensic experts is at the heart of what we do.",
          details: [
            "Internship programs",
            "Webinars",
            "Seminars",
            "Workshops"
          ]
        },
        {
          icon: Briefcase,
          title: "Consultancy",
          description: "Expert solutions for complex forensic challenges",
          details: [
            "⁠Dessertation service",
            "⁠Thesis assistant - review and research", 
            "⁠Paper writing - review and research",
            "⁠Data interpretation",
            "⁠Data analysis", 
          ]
        },
        { 
          icon: FileText, 
          title: "Publication", 
          description: "Advancing knowledge through impactful research",
          details: []
        },
        { 
          icon: Search, 
          title: "Investigation", 
          description: "Uncovering truth with precision and integrity",
          details: []
        },
      ].map((service, index) => (
        <div
          key={index}
          className="group bg-white p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:shadow-xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <service.icon className={`w-12 h-12 mb-4 transition-all duration-300 group-hover:scale-110 ${service.details.length > 0 ? 'text-blue-600 group-hover:text-white' : 'text-blue-600'}`} />
            <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${service.details.length > 0 ? 'group-hover:text-white' : 'group-hover:text-blue-600'} text-black`}>
              {service.title}
            </h3>
            <p className={`text-justify transition-colors duration-300 ${service.details.length > 0 ? 'group-hover:text-white' : 'text-gray-700 group-hover:text-black'}`}>
              {service.description}
            </p>
            
            {service.details.length > 0 && (
              <div className="max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-300 mt-4">
                <ul className="space-y-2 text-white">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Background overlay for hover effect */}
          {service.details.length > 0 && (
            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-0"></div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Newsletter Section */}
        <section className="newsletter-section py-16 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="newsletter-box max-w-3xl mx-auto text-center space-y-8 bg-white rounded-2xl shadow-xl border border-gray-100 p-10 hover:shadow-2xl transition-all duration-300">
              <div className="newsletter-content">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Stay Updated with Forensleuth
                </h2>
                <p className="text-gray-600 mb-8">
                  Subscribe to our newsletter for the latest updates in forensic science and investigation.
                </p>
                <form className="newsletter-form flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full sm:w-96 px-6 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all duration-300 outline-none hover:border-blue-400"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
          .newsletter-section {
            animation: fadeIn 0.8s ease-out;
          }

          .newsletter-box {
            position: relative;
            overflow: hidden;
          }

          .newsletter-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(to right, #3b82f6, #60a5fa);
            border-radius: 4px 4px 0 0;
          }

          .newsletter-form {
            animation: slideUp 0.6s ease-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes slideUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}</style>

        {/* Footer Section */}
        <footer className="bg-gray-50 pt-16 pb-8" id="footer">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Section - Company Info */}
              <div className="space-y-8">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/forensleuth-logo.png?height=48&width=48"
                    alt="Forensleuth Logo"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <span className="text-4xl font-bold text-gray-900">Forensleuth</span>
                </div>
                
                <p className="text-gray-600 max-w-md">
                  Forensleuth is your trusted partner in forensic science, dedicated to advancing truth through education,
                </p>

                <div className="space-y-4">
                  {/* <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                     <span>123 Forensic Avenue, Science City, 12345</span> 
                  </div> */}
                  <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span>info@forensleuth.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <span>+91 8809210525</span>
                    
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <span>+91 9818194316</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  {/* Social Media Links */}
                  {[
                    { 
                      icon: "M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm10.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z",
                      name: "Instagram",
                      link: "https://instagram.com/forensleuth"
                    },
                    { 
                      icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                      name: "LinkedIn",
                      link: "https://www.linkedin.com/company/forensleuth/" 
                    },
                    { 
                      icon: "M.707 8.475C.275 8.64 0 9.508 0 9.508s.284.867.718 1.03l5.09 1.897 1.986 6.38a1.102 1.102 0 0 0 1.75.527l2.96-2.41a.405.405 0 0 1 .494-.013l5.34 3.87a1.1 1.1 0 0 0 1.046.135 1.1 1.1 0 0 0 .682-.803l3.91-18.795A1.102 1.102 0 0 0 22.5.075L.706 8.475z",
                      name: "Telegram",
                      link: "https://t.me/+SxrQOOw1bIc1YjE1"
                    },
                    { 
                      icon: "M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm10.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z",
                      name: "WhatsApp",
                      link: "https://whatsapp.com/channel/0029VaTfJj49Gv7Tbm9Olb43" 
                    }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                      aria-label={social.name}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Section - Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 relative inline-block">
                  Get in Touch
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="Your First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 placeholder-gray-400"
                    />
                  </div>
                  <div className="relative">
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Your Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 placeholder-gray-400"
                    />
                  </div>
                  <div className="relative">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 placeholder-gray-400"
                    />
                  </div>
                  <div className="relative">
                    <Input
                      type="tel"
                      name="number"
                      placeholder="Your Phone Number"
                      value={formData.number}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 placeholder-gray-400"
                    />
                  </div>
                  <div className="relative">
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 placeholder-gray-400 resize-none"
                      rows={4}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600">
                &copy; {new Date().getFullYear()} Forensleuth. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
