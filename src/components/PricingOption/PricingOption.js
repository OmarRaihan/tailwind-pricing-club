import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Benefit from "../Benefit/Benefit";

const PricingOption = (props) => {
  const { name, price, benefits } = props.option;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="bg-indigo-300 py-2 rounded text-xl font-bold">{name}</h2>
      <p>
        <span className="text-3xl font-bold">{price}</span>
        <span className="text-xl text-gray-500">/month</span>
      </p>
      <div>
        <h3 className="text-xl text-left">Benefits: </h3>
        {
            benefits.map(benefit => <Benefit
            benefit={benefit}
            ></Benefit>)
        }
      </div>
      <button className="bg-green-500 py-2 my-2 flex items-center rounded justify-center w-full hover:bg-green-700">
          Buy Now <ArrowRightIcon className="w-4 h-4 mx-1"></ArrowRightIcon>
      </button>
    </div>
  );
};

export default PricingOption;
