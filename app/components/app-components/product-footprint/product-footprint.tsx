import React from "react";
import Card from "../../generic-components/card/card";
import FootPrintItem from "./footprint-item";
import { ProductFootPrintType } from "./product-footprint.types";

export const ProductFootPrint: React.FC<ProductFootPrintType> = (
  props: ProductFootPrintType
) => {
  const { title, lifeSpan, returnPolicy } = props;

  return (
    <Card>
      <div className="font-bold text-xl mb-4"> {title}</div>
      <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2">
        <FootPrintItem {...lifeSpan} />
        <FootPrintItem {...returnPolicy} />
      </div>
    </Card>
  );
};

export default ProductFootPrint;
