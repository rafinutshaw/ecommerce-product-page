"use client";
import "glider-js/glider.min.css";
import React from "react";
import Glider from "react-glider";
import ProductCard from "../product-card/product-card";
import { ProductCardItem } from "../product-card/product-card.types";
import { RelatedProductType } from "./related-products.types";

export const RelatedProducts: React.FC<RelatedProductType> = (
  props: RelatedProductType
) => {
  const { products, header } = props;
  return (
    <div className="">
      <div className="font-bold text-xl mb-4">{header}</div>
      <Glider
        draggable
        hasDots
        slidesToShow={5}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 0,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 5,
            },
          },
        ]}
      >
        {products.map((item: ProductCardItem, index) => (
          <div
            key={item.title}
            className={`
            ${index == 0 && products.length == 1 && ""} 
            ${index == 0 && products.length > 1 && "pr-2"}
            ${index == products.length - 1 && products.length > 1 && "pl-2"}
            ${
              index != products.length - 1 &&
              index != 0 &&
              products.length > 1 &&
              "px-2"
            }
            `}
          >
            <ProductCard productCardInfo={item} />
          </div>
        ))}
      </Glider>
    </div>
  );
};

export default RelatedProducts;
