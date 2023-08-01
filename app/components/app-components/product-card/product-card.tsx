"use client";
import CartIcon from "@/public/icons/cart.icon";
import HeartIcon from "@/public/icons/heart.icon";
import { useMemo, useState } from "react";

import { useTranslations } from "next-intl";
import Card from "../../generic-components/card/card";
import Pill from "../../generic-components/pill/pill";
import { ProductCardType } from "./product-card.types";

export const ProductCard: React.FC<ProductCardType> = (
  props: ProductCardType
) => {
  const { productCardInfo } = props;
  const [isHover, setIsHover] = useState(false);
  const t = useTranslations();

  const label = useMemo(
    () =>
      productCardInfo.title.split("|").length > 1
        ? productCardInfo.title.split("|")[0].trim()
        : "",
    [productCardInfo.title]
  );
  const name = useMemo(
    () => productCardInfo.title.split("|")[1].trim(),
    [productCardInfo.title]
  );

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Card className="text-sm flex flex-col">
      <div className="relative">
        <span className="absolute flex justify-between w-full items-center">
          <Pill>{label}</Pill>
          <div className="text-xs font-bold text-gray-400 whitespace-nowrap">
            {productCardInfo.amount > 0
              ? `${productCardInfo.amount} ${t("in_stock")}`
              : t("out_of_stock")}
          </div>
        </span>

        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-full h-56 cursor-pointer bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${
              isHover ? productCardInfo.cart_image : productCardInfo.hover_image
            })`,
          }}
        ></div>
        <div className="flex-grow">
          <div className="font-semi-bold h-10 line-clamp-2">{name}</div>
        </div>
        <div className="font-bold my-2">
          {productCardInfo.selling_price}
          {" kr"}
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-gray-200 rounded flex items-center p-2 text-sm mr-2">
            <CartIcon size={16} />
            <div className="hidden lg:block ml-2 whitespace-nowrap">
              {t("add_to_cart")}
            </div>
          </button>
          <button>
            <HeartIcon />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
