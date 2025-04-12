import React, { useState } from "react";
import Container from "../layouts/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaStar } from "react-icons/fa";

// Images
import ic1 from "../../assets/Contact/ic1.png";
import ic2 from "../../assets/Contact/ic2.png";
import ic3 from "../../assets/Contact/ic3.png";

const Customers = () => {
  const customers = [
    { id: 1, name: "James K.", img: ic1 },
    { id: 2, name: "Nuttaphon P.", img: ic2 },
    { id: 3, name: "Hello W.", img: ic3 },
  ];

  const [activeIndex, setActiveIndex] = useState(1); // Start with the middle card (id: 2)

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === customers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? customers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gradient-to-r from-[#ededed] via-orange-100 to-pink-100 py-[100px]">
        <div className="flex flex-col">
          <h1 className="font-volkhov text-[40px] text-[#484848] text-center">
            This Is What Our Customers Say
          </h1>
          <p className="text-[#8A8A8A] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis
          </p>
          <div className="relative flex items-center justify-center mt-[50px] h-[500px] sm:h-[400px] overflow-hidden">
            {customers.map((item, index) => {
              let offset = index - activeIndex;
              if (offset < -1) offset += customers.length;
              if (offset > 1) offset -= customers.length;
              const isActive = offset === 0;
              const isLeft = offset === -1;
              const isRight = offset === 1;

              return (
                <div
                  key={item.id}
                  className={`
                    absolute bg-white
                    w-full flex-col
                    sm:w-[600px] sm:flex-row
                    lg:w-[850px] flex  items-center justify-center px-[50px] sm:gap-[50px] py-[50px] sm:py-0
                    shadow-2xl transition-all duration-500 ease-in-out
                    ${isActive ? "z-10 sm:h-[300px] lg:h-[400px] scale-100 opacity-100" : ""}
                    ${isLeft ? "z-0 sm:h-[300px] scale-90 opacity-70 -translate-x-[300px]" : ""}
                    ${isRight ? "z-0 sm:h-[300px] scale-90 opacity-70 translate-x-[300px]" : ""}
                    ${!isActive && !isLeft && !isRight ? "opacity-0 scale-90" : ""}
                  `}
                >
                  <div className="duration-300 min-w-[150px] lg:min-w-[300px] flex items-center justify-center">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="flex flex-col">
                    <p className="mt-[20px] duration-300
                    text-[14px]
                    lg:text-[16px]">
                      "You won't regret it. I would like to personally thank you
                      for your outstanding product. Absolutely wonderful!"
                    </p>
                    <div className="flex flex-row gap-1 text-yellow-400 mt-[40px]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <span className="duration-300 w-[200px] lg:w-[300px] h-[1px] bg-[#484848] mt-[30px]"></span>
                    <h1 className="font-volkhov duration-300
                    text-[20px]
                    lg:text-[30px] text-[#484848] mt-[25px]">
                      {item.name}
                    </h1>
                    <h3 className="lg:text-[10px] duration-300
                    text-[9px]
                    text-[#484848]">Traveler</h3>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-row items-center justify-center mt-[40px] gap-4">
            <button
              onClick={handlePrev}
              className="bg-white rounded-full p-2 shadow hover:bg-gray-100 cursor-pointer"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="bg-white rounded-full p-2 shadow hover:bg-gray-100 cursor-pointer"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
    </div>
  );
};

export default Customers;