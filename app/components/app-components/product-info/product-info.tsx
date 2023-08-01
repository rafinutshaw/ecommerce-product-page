import HeartIcon from "@/public/icons/heart.icon";
import { useMemo } from "react";

import { useTranslations } from "next-intl";
import Card from "../../generic-components/card/card";
import Pill from "../../generic-components/pill/pill";
import GoogleReview from "../google-review/google-review";
import { PriceInfo } from "../price-info/price-info";
import { Product } from "./product-info.types";

export const ProductInfo: React.FC<Product> = (props: Product) => {
  const { google_review } = props;
  const t = useTranslations();

  const rate: number = useMemo(() => {
    return Number(google_review.rate.split("/")[0].split(",").join("."));
  }, [google_review.rate]);

  const maxRate: number = useMemo(() => {
    return Number(google_review.rate.split("/")[1]);
  }, [google_review.rate]);

  return (
    <Card>
      <Pill>
        {props.category} {!!props.subcategory && `| ${props.subcategory}`}
      </Pill>
      <div className="font-bold text-lg">{props.name}</div>
      <div
        className={` my-2 text-sm font-bold italic ${
          props.amount > 0 ? "text-green-400" : "text-red-400"
        }`}
      >
        {props.amount > 0
          ? `${props.amount} ${t("in_stock")}`
          : t("out_of_stock")}
      </div>
      <PriceInfo
        originalPrice={props.selling_price - props.discounted_price}
        discountPrice={props.discounted_price}
        currency={props.currency}
      />
      <div className="my-8 text-gray-400 text-sm text-justify">
        {props.description}
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <button
            disabled={props.amount === 0}
            className={`${
              props.amount === 0
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-red-500"
            } px-3 py-2 text-white`}
          >
            {t("add_to_cart")}
          </button>
          <button className="border p-2 ml-2">
            <HeartIcon />
          </button>
        </div>
        <GoogleReview rate={rate} maxRate={maxRate} />
      </div>
    </Card>
  );
};

export default ProductInfo;
