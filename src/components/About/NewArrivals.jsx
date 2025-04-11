import React, { useState } from "react";
import Container from "../layouts/Container";

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
                } px-[30px] py-3 rounded-lg cursor-pointer`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewArrivals;
