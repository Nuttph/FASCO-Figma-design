import React from "react";
import Container from "../layouts/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";

//icon
import { FaStar } from "react-icons/fa";

//img
import ic1 from "../../assets/Contact/ic1.png";
import ic2 from "../../assets/Contact/ic2.png";
import ic3 from "../../assets/Contact/ic3.png";

const Customers = () => {
  return (
    <div className="bg-gradient-to-r from-[#ededed] via-orange-100 to-pink-100 py-[100px]">
      <Container>
        <div className="flex flex-col">
          <h1 className="font-volkhov text-[40px] text-[#484848] text-center">
            This Is What Our Customers Say
          </h1>
          <p className="text-[#8A8A8A] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis
          </p>
          <div className="flex flex-row items-center justify-center mt-[50px]">
            <div className="bg-white w-[850px] h-[400px] flex flex-row items-center justify-center px-[50px] gap-[50px]">
              <div className="min-w-[300px] flex items-center justify-center">
                <img src={ic1} alt={ic1} />
              </div>
              <div className="flex flex-col">
                <p className="mt-[20px]">
                  "You won't regret it. I would like to personally thank you for
                  your outstanding product. Absolutely wonderful!"
                </p>
                <div className="flex flex-row gap-1 text-yellow-400 mt-[40px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="w-[300px] h-[1px] bg-[#484848] mt-[30px] "></span>
                <h1 className="font-volkhov text-[30px] text-[#484848] mt-[25px]">
                  Jame K.
                </h1>
                <h3 className="text-[10px] text-[#484848]">Traveler</h3>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center mt-[40px] gap-4">
            <button className="bg-white rounded-full p-2 shadow hover:bg-gray-100 cursor-pointer">
              <ChevronLeft />
            </button>
            <button className="bg-white rounded-full p-2 shadow hover:bg-gray-100 cursor-pointer">
              <ChevronRight />
            </button>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Customers;
