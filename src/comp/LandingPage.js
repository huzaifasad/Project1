import React ,{useRef}from 'react';

export default function LandingPage() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200; // Adjust scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200; // Adjust scroll distance as needed
    }
  };

  return (
    <div className="flex flex-col">
      {/* Video Section */}
      <section className="flex justify-center items-center h-screen w-screen bg-gray-900 text-white">
        <video className="h-full w-full object-cover" autoPlay loop muted>
          <source src="your-video-source.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Card Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Top Heading</h1>
        <div className="flex overflow-x-auto max-w-screen-xl" ref={scrollRef}>
          {/* Example cards */}
          <div className="flex-shrink-0 w-64 bg-white shadow-lg rounded-lg mx-2">
            <img src="card-image-1.jpg" alt="Card" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Card Title</h2>
              <p className="text-gray-700">Card content goes here.</p>
            </div>
          </div>
          {/* Repeat this card component as needed */}
        </div>
        {/* Left and Right buttons */}
        <div className="flex justify-between mt-4">
          <button onClick={scrollLeft} className="px-4 py-2 bg-gray-900 text-white rounded">Left</button>
          <button onClick={scrollRight} className="px-4 py-2 bg-gray-900 text-white rounded">Right</button>
        </div>
      </section>

      {/* Button Section */}
      <section className="flex justify-center items-center h-screen bg-gray-200">
        <button className="flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-full">
          <img src="icon-image.png" alt="Icon" className="w-6 h-6 mr-2" />
          Get in touch
        </button>
      </section>

      {/* Background Image Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("background-image.jpg")' }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-white mb-8">023 Sustainability Report</h2>
          <div className="space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-900">Press Release</button>
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-900">Download Report</button>
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-900">Reporting Framework Indexes</button>
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-900">Sustainability Databook</button>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section>
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6">WHAT WE DO</h2>
          <p className="mb-6">Bringing efficiency to complex supply chains</p>
          <p className="mb-6">Trafigura is one of the world's largest suppliers of commodities.</p>
          <p className="mb-6">Founded in 1993, we connect producers and consumers of minerals, metals, and energy, reliably and responsibly. Across our global network, we deploy infrastructure, logistics, and our deep understanding of markets to make global supply chains more efficient.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Discover what we do
          </button>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6">RESPONSIBLY SUPPLYING RESOURCES</h2>
          <p className="mb-6">Our role in the energy transition</p>
          <p className="mb-6">We play an active role in the energy transition, responsibly supplying vital commodities to meet current and future needs.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Find out more
          </button>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold mb-6">OUR PEOPLE</h2>
          {/* Add content about your people */}
        </div>
      </section>
    </div>
  );
}
