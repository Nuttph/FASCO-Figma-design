import React from "react";

//image
import img1 from "../../assets/woman/image.png"

const WomanCollection = () => {
  return (
    <div className="bg-[#eeeeee]">
      <div className="flex flex-col sm:flex-row h-[600px] relative justify-between">
        {/* ด้านซ้าย: รูปภาพหมุน */}
        <div className="w-full sm:w-[50%] flex justify-center sm:overflow-hidden">
          {/* ที่นี่คุณสามารถใส่รูปภาพหรือคอนเทนต์เพิ่มเติม */}
          <img src={img1} alt={img1} className="object-cover h-[300px] sm:h-full" />
        </div>

        {/* เส้นเฉียงแบ่ง */}
        <div className="hidden sm:flex absolute top-0 left-[55%] w-[30%] h-full bg-[#DADADA] transform -skew-x-[15deg] origin-top-left"></div>

        {/* ด้านขวา: ข้อมูลสินค้า */}
        <div className="w-full sm:w-[45%] h-full flex items-center justify-start bg-[#DADADA] z-10 py-10 sm:py-0">
          <div className="px-6">
            <p className="text-sm text-[#767676] cursor-pointer hover:underline">Women's Collection</p>
            <h1 className="
            text-[35px]
            lg:text-[46px] font-bold mb-4 mt-[40px] text-[#484848] font-volkhov">Peaky Blinders</h1>
            <p className="underline mb-4 cursor-pointer">DESCRIPTION</p>
            <p className="text-gray-600 mb-4 xl:w-[500px] md:w-3/4 w-full duration-300 line-clamp-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultricies sollicitudin aliqum sem. Scelerisque
              duis ultricies sollicitudin. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Scelerisque duis.
            </p>
            <div className="mb-4 flex flex-row gap-3 items-center">
              <span className="text-gray-600">Size: </span>
              <button className="border border-black text-white bg-black rounded-full px-6 py-1">
                M
              </button>
            </div>
            <p className="text-[20px] sm:text-2xl font-bold mb-4">$100.00</p>
            <button className="bg-black text-white px-20 py-2 rounded cursor-pointer 
            text-[13px]
            sm:text-[16px]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomanCollection;
