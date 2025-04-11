import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

const slides = [
  {
    id: 1,
    image: '/images/img1.jpg', // เปลี่ยนเป็น path รูปจริง
    title: 'Spring Sale',
    discount: '30% OFF',
  },
  {
    id: 2,
    image: '/images/img2.jpg',
    title: 'Summer Collection',
    discount: 'New Arrival',
  },
  {
    id: 3,
    image: '/images/img3.jpg',
    title: 'Autumn Vibe',
    discount: 'Up to 50%',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full relative">
            <img src={slide.image} alt={slide.title} className="w-full h-[500px] object-cover" />
            <div className="absolute bottom-8 left-8 bg-white p-4 shadow rounded">
              <p className="text-sm">0{slide.id} — {slide.title}</p>
              <h2 className="text-2xl font-semibold">{slide.discount}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow">
        <ChevronLeft />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow">
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${index === current ? 'bg-black' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}
