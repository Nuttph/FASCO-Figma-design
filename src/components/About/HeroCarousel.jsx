import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import w1 from "../../assets/deals/w1.png";
import w2 from "../../assets/deals/w2.png";
import w3 from "../../assets/deals/w3.png";

const initialSlides = [
  { id: 1, image: w1, title: 'Spring Sale', discount: '30% OFF' },
  { id: 2, image: w2, title: 'Summer Collection', discount: 'New Arrival' },
  { id: 3, image: w3, title: 'Autumn Vibe', discount: 'Up to 50%' },
];

export default function HeroCarousel() {
  const [slides, setSlides] = useState(initialSlides);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setSlides(prev => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const prevSlide = () => {
    setDirection(-1);
    setSlides(prev => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, prev.length - 1);
      return [last, ...rest];
    });
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.4 },
    }),
  };

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timeout = setInterval(() => {
      setDate(new Date());
    }, 1000); // อัปเดตทุกวินาที (ลดจาก 10ms เพื่อประสิทธิภาพ)

    return () => clearInterval(timeout);
  }, []);

  const day = date.getDay();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const sec = date.getSeconds();

  const counter = [
    { type: "Days", value: day },
    { type: "Hr", value: hour },
    { type: "Mins", value: minute },
    { type: "Sec", value: sec },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full gap-4 my-10 bg-gradient-to-r from-[#ededed] via-orange-100 to-pink-100 py-6 px-4 md:px-10 lg:pl-[100px] lg:pr-8">
      {/* Left Side: Text and Counter */}
      <div className="w-full md:w-4/10 flex flex-col items-center md:items-start">
        <h1 className="font-volkhov text-[#484848] text-2xl md:text-3xl lg:text-4xl">Deals Of The Month</h1>
        <p className="text-[#8A8A8A] mt-4 text-sm md:text-base w-full max-w-[350px] text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin.
        </p>
        <button className="w-40 md:w-48 py-2 bg-black text-white rounded-lg mt-4 md:mt-6 text-sm md:text-base">
          Buy Now
        </button>
        <div className="font-semibold text-lg md:text-xl lg:text-2xl mt-8 md:mt-10 text-[#484848] text-center md:text-left">
          Hurry, Before It’s Too Late!
        </div>
        <div className="flex flex-row gap-2 md:gap-4 mt-4 justify-center md:justify-start">
          {counter.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-1">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white drop-shadow-xl rounded-lg flex items-center justify-center text-base md:text-lg">
                {item.value < 10 ? `0${item.value}` : item.value}
              </div>
              <div className="text-xs md:text-sm">{item.type}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Carousel */}
      <div className="w-full md:w-6/10 flex flex-col items-center md:flex-row-reverse md:items-end gap-2 mt-6 md:mt-0">
        <div className="relative w-full max-w-[900px] h-[300px] md:h-[350px] lg:h-[400px]">
          {/* ภาพหลัก */}
          <div className="absolute left-0 top-0 w-full max-w-[300px] md:max-w-[300px] h-full overflow-hidden mx-auto md:mx-0">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={slides[0].id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full h-full"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x > 100) prevSlide();
                  else if (info.offset.x < -100) nextSlide();
                }}
              >
                <img
                  src={slides[0].image}
                  alt={slides[0].title}
                  className="w-full h-full object-cover rounded"
                />
                <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 bg-white p-2 md:p-4 shadow rounded">
                  <p className="text-xs md:text-sm">0{slides[0].id} — {slides[0].title}</p>
                  <h2 className="text-lg md:text-2xl font-semibold">{slides[0].discount}</h2>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* รูปอื่นๆ แสดงต่อจากภาพหลัก (ซ่อนในมือถือ) */}
          <div className="hidden md:flex absolute left-[320px] top-0 gap-2 lg:gap-4">
            {slides.slice(1).map(slide => (
              <div key={slide.id} className="w-[120px] md:w-[150px] h-[160px] md:h-[200px] opacity-60">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ปุ่ม Prev/Next */}
        <div className="flex gap-2 md:gap-4 mt-4">
          <button
            onClick={prevSlide}
            className="bg-white rounded-full p-2 md:p-3 shadow hover:bg-gray-100 cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white rounded-full p-2 md:p-3 shadow hover:bg-gray-100 cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}