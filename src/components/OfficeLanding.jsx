import { useState } from "react";

const images = [
  "/office1.jpeg",
  "/office2.jpeg",
  "/office3.jpeg"
];

export default function OfficeLanding() {
  const [current, setCurrent] = useState(0);
  const handlePrev = () => setCurrent((current - 1 + images.length) % images.length);
  const handleNext = () => setCurrent((current + 1) % images.length);

  return (
    <div className="bg-white text-gray-900">
      <section className="relative h-96 bg-cover bg-center" style={ backgroundImage: `url(${images[current]})` }>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Furnished Office for Rent</h1>
            <p className="mb-6 text-lg">709, Parsvnath Plaza, Vibhuti Khand, Gomti Nagar, Lucknow</p>
            <div className="space-x-4">
              <a href="https://wa.me/918169943052" target="_blank" rel="noopener noreferrer">
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">WhatsApp</button>
              </a>
              <a href="tel:+918169943052">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Call Now</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
