import React from "react";
import { PriceInfoType } from "./price-info.types";

export const PriceInfo: React.FC<PriceInfoType> = (props: PriceInfoType) => {
  const { originalPrice, discountPrice = 0, currency } = props;
  return (
    <div className="flex items-center">
      <span className="text-3xl font-bold">
        {currency} {originalPrice - discountPrice}
      </span>
      {discountPrice > 0 && (
        <span className=" ml-2 text-xs font-bold text-red-400 line-through">
          {currency} {originalPrice}
        </span>
      )}
    </div>
  );
};

export default PriceInfo;
