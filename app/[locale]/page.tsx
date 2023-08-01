"use client";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ProductAttributes from "../components/app-components/product-attributes/product-attributes";
import ProductFootPrint from "../components/app-components/product-footprint/product-footprint";
import ProductImages from "../components/app-components/product-images/product-images";
import ProductInfo from "../components/app-components/product-info/product-info";
import RelatedProducts from "../components/app-components/related-products/related-products";
import { PRODUCT_DATA } from "../utils/product_data";

export default function Product() {
  const [data, setData] = useState<any>(null);
  const t = useTranslations();
  const pathname = usePathname();

  useEffect(() => {
    setData(PRODUCT_DATA);
  }, [pathname]);

  return (
    <div>
      {data && (
        <>
          <div className="md:flex">
            <div className="md:w-1/2 w-full relative">
              <ProductImages images={data.product.images} />
            </div>
            <div className="md:w-1/2  w-full grid grid-cols-1 gap-4">
              <ProductInfo {...data.product} />
              <ProductFootPrint
                title={data.title}
                lifeSpan={data.foot_print.life_span}
                returnPolicy={data.foot_print.return_policy}
              />
              <ProductAttributes attributes={data.product.attributes} />
            </div>
          </div>
          <RelatedProducts
            header={data.similar_product.header}
            products={data.similar_product.products}
          />
        </>
      )}
    </div>
  );
}
