import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import w1 from "../../assets/deals/w1.png";
import w2 from "../../assets/deals/w2.png";
import w3 from "../../assets/deals/w3.png";

const initialSlides = [
  {
    id: 1,
    image: w1,
    title: 'Spring Sale',
    discount: '30% OFF',
  },
  {
    id: 2,
    image: w2,
    title: 'Summer Collection',
    discount: 'New Arrival',
  },
  {
    id: 3,
    image: w3,
    title: 'Autumn Vibe',
    discount: 'Up to 50%',
  }
];

export default function HeroCarousel() {
  const [slides, setSlides] = useState(initialSlides);
  const [direction, setDirection] = useState(0); // สำหรับบอกว่ากำลังเลื่อนซ้ายหรือขวา

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
    let timeout;
    timeout = setInterval(() => {
      setDate(new Date());
    }, 10);

    return () => {
      clearInterval(timeout);
    };
  }, [date]);

  const day = date.getDay();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const sec = date.getSeconds();

  const counter = [
    {
      type:"Days",
      value:day
    },
    {
      type:"Hr",
      value:hour
    },
    {
      type:"Mins",
      value:minute
    },
    {
      type:"Sec",
      value:sec
    },
  ]

  return (
    <div className="flex w-full gap-4 my-10 bg-gradient-to-r from-[#ededed] via-orange-100 to-pink-100 pl-[200px] py-[50px]">

    {/* Left Side: Placeholder */}
    <div className="w-4/10 flex flex-col">
      <div className='font-volkhov text-[#484848] text-[35px]'>Deals Of The Month</div>
      <p className='text-[#8A8A8A] mt-[20px] w-[350px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
      <button className='w-[200px] py-2 bg-black text-white rounded-lg mt-[20px]'>Buy Now</button>
      <div className='font-semibold text-[26px] mt-[60px] text-[#484848]'>Hurry, Before It’s Too Late!</div>
      <div className='flex flex-col gap-2 mt-[20px]'>
        <div className='flex flex-row gap-4 w-[350px] justify-between'>
          {counter.map((item,index)=>(
            <div key={index} className='flex flex-col items-center justify-center gap-2'>
              <div className='w-[70px] h-[70px] bg-white drop-shadow-2xl rounded-lg flex items-center justify-center text-[20px]'>{item.value < 10 ? "0"+item.value:item.value}</div>
              <div>{item.type}</div>
          </div>
          ))}
        </div>
      </div>
    </div>

      
      <div className="w-6/10 flex flex-row-reverse items-end gap-2">
        <div className="relative w-[900px] h-[400px]">
  {/* ภาพหลัก */}
  <div className="absolute left-0 top-0 w-[300px] h-[400px] overflow-hidden">
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
          if (info.offset.x > 100) {
            prevSlide();
          } else if (info.offset.x < -100) {
            nextSlide();
          }
        }}
      >
        <img
          src={slides[0].image}
          alt={slides[0].title}
          className="w-full h-full object-cover rounded"
        />
        <div className="absolute bottom-8 left-8 bg-white p-4 shadow rounded">
          <p className="text-sm">0{slides[0].id} — {slides[0].title}</p>
          <h2 className="text-2xl font-semibold">{slides[0].discount}</h2>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>

  {/* รูปอื่นๆ แสดงต่อจากภาพหลัก */}
  <div className="absolute left-[320px] top-0 flex gap-4">
    {slides.slice(1).map(slide => (
      <div key={slide.id} className="w-[150px] h-[200px] opacity-60">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover rounded"
        />
      </div>
    ))}
  </div>
</div>


        {/* ปุ่ม Prev/Next อยู่ใต้ภาพแรก */}
        <div className="mt-4 flex gap-4">
          <button
            onClick={prevSlide}
            className="bg-white rounded-full p-2 shadow hover:bg-gray-100 cursor-pointer"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white rounded-full p-2 shadow hover:bg-gray-100 cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      
    </div>
  );
}
