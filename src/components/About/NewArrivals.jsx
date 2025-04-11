import React, { useState } from "react";
import Container from "../layouts/Container";

//icon
import { FaStar } from "react-icons/fa";

//image
import i1 from "../../assets/arrivals/Images-1.png"
import i2 from "../../assets/arrivals/Images-2.png"
import i3 from "../../assets/arrivals/Images-3.png"
import i4 from "../../assets/arrivals/Images-4.png"
import i5 from "../../assets/arrivals/Images-5.png"
import i6 from "../../assets/arrivals/Images.png"

const NewArrivals = () => {
  const [options, setOptions] = useState([
    {
      title: "Man's Fashion",
      focus: true,
    },
    {
      title: "Woman's Fashion",
      focus: false,
    },
    {
      title: "Man Accessories",
      focus: false,
    },
    {
      title: "Woman Accessories",
      focus: false,
    },
    {
      title: "Discount Deals",
      focus: false,
    },
  ]);

  const products = [
    {
      img:i1,
      productName:"Shiny Dress"
    },
    {
      img:i2,
      productName:"Long Dress"
    },
    {
      img:i3,
      productName:"Full Sweater"
    },
    {
      img:i4,
      productName:"White Dress"
    },
    {
      img:i5,
      productName:"Colorful Dress"
    },
    {
      img:i6,
      productName:"White Shirt"
    },
  ]

  return (
    <div className="my-[50px]">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="font-volkhov text-[46px] text-[#484848]">
            New Arrivals
          </div>
          <p className="text-[16px] text-center text-[#8A8A8A] w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin{" "}
          </p>

          <div className="flex flex-row justify-between w-full my-4">
            {options.map((item, index) => (
              <button
                key={index}
                className={`${
                  item.focus ? "bg-black text-white" : "bg-[#FAFAFA] text-black"
                } px-[30px] py-3 rounded-lg cursor-pointer duration-300`}
                onClick={()=>{
                  setOptions((prev)=>
                    prev.map((item,i)=>({
                      ...item,
                      focus:i === index,
                    }))
                  )
                }}
              >
                {item.title}
              </button>
            ))}
          </div>

            {/* content */}
            <div className="flex flex-wrap pt-4 flex-row justify-between gap-[50px]">

              {products.map((item,index)=>(
                <div key={index} className="w-[330px] flex flex-col shadow-2xl items-center px-4 py-6 rounded-lg">
                <img src={item.img} alt={item.img} className="w-[350px] h-[#240] object-cover" />

                <div className="flex flex-row justify-between w-full mt-3">
                  <div className="flex flex-col">
                    <h1>{item.productName}</h1>
                    <p className="text-[10px] text-[#8A8A8A]">Al Karam</p>
                  </div>
                  <div className="text-yellow-300 flex flex-row">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </div>
                </div>

                <div className="text-[12px] w-full mt-4">
                  (4.1k) Customer Reviews
                </div>

                <div className="w-full flex flex-row justify-between mt-4 items-center">
                  <div className="text-[20px]">
                    $95.50
                  </div>
                  <div className="text-[12px] text-red-500">
                    Almost Sold Out
                  </div>
                </div>

              </div>
              ))}

            </div>

        </div>
      </Container>
    </div>
  );
};

export default NewArrivals;
