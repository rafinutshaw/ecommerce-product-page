import React from "react";
import {
  AttributeItem,
  ProductAttributesType,
} from "./product-attributes.types";

export const ProductAttributes: React.FC<ProductAttributesType> = (
  props: ProductAttributesType
) => {
  const { attributes } = props;

  return (
    <div className="p-2">
      <div className="text-xl font-bold mb-2">Attributes</div>
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
        {attributes.map((item: AttributeItem) => {
          return (
            <div key={item.attribute}>
              <span className="font-bold">{item.attribute}:</span>{" "}
              <span>{item.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductAttributes;
