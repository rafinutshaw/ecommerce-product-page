"use client";
import { AppImages } from "@/app/utils/constants";
import ArrowDownIcon from "@/public/icons/arrow-down.icon";
import "photoswipe/dist/photoswipe.css";
import { useEffect, useRef, useState } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import {
  ImagesStateType,
  ProductImage,
  ProductImagesType,
} from "./product-images.types";

export const ProductImages: React.FC<ProductImagesType> = (
  props: ProductImagesType
) => {
  const { images, enableZoom = true } = props;

  const [state, setState] = useState<ImagesStateType>({
    productImages: [],
    isMediaReady: false,
    selectedImage: "",
  });
  const scrollElement = useRef<any>(null);

  const setMeta = (currentState = state) => {
    let currentImages = currentState.productImages;
    let newImages: any[] = [];
    let count = 0;
    currentState.productImages?.forEach((item, index) => {
      let img = new Image();
      img.src = item.url_link || AppImages.ProductPlaceholder;
      img.onload = () => {
        currentImages.forEach((x) => {
          if (x.url_link == item.url_link) {
            newImages.push({
              ...x,
              ImageUrl: x.url_link ? x.url_link : AppImages.ProductPlaceholder,
              Height: img.height,
              Width: img.width,
            });
          }
        });
        count++;
        if (count == currentImages.length) {
          setState({
            ...currentState,
            productImages: newImages,
            isMediaReady: true,
          });
        }
      };
    });
  };

  const initializeState = () => {
    let currentImages: ProductImage[] =
      images.length > 0 ? images : [{ url_link: AppImages.ProductPlaceholder }];
    const newState = {
      ...state,
      productImages: currentImages,
      isMediaReady: false,
      selectedImage: currentImages[0].url_link
        ? currentImages[0].url_link
        : AppImages.ProductPlaceholder,
    };
    setState(newState);
    setMeta(newState);
  };

  useEffect(initializeState, [images]);

  const scrollUpdate = (isUp: boolean = true) => {
    const value = isUp ? -144 : 144;
    if (scrollElement?.current) {
      scrollElement.current.scrollTop += value;
    }
  };

  const updateSelectedImage = (imageUrl: string | undefined) => {
    setState({
      ...state,
      selectedImage: imageUrl || "",
    });
  };

  return state.productImages?.length > 0 ? (
    <div className="flex sticky top-32">
      <div className="mr-4">
        <div
          onClick={() => scrollUpdate(true)}
          className="flex justify-center text-gray-300 cursor-pointer rotate-180"
        >
          <ArrowDownIcon size={16} />
        </div>
        <div
          className="space-y-2 max-h-80 overflow-x-auto overflow-y-hidden my-4"
          ref={scrollElement}
          style={{ scrollBehavior: "smooth" }}
        >
          {state.productImages.map((item) => {
            return (
              <div
                key={item.thumbnail_link}
                className="w-16 h-16 border-2 border-light-blue-600 cursor-pointer bg-contain bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${item.thumbnail_link})`,
                }}
                onClick={() => updateSelectedImage(item.url_link)}
              ></div>
            );
          })}
        </div>
        <div
          onClick={() => scrollUpdate(false)}
          className="flex justify-center text-gray-300 cursor-pointer"
        >
          <ArrowDownIcon size={16} />
        </div>
      </div>
      {enableZoom ? (
        <Gallery>
          {state.productImages?.map((item) => {
            return (
              <Item
                key={item.url_link}
                original={item.url_link}
                width={item.original_weight}
                height={item.original_height}
              >
                {({ ref, open }) => (
                  <div
                    className={`${
                      state.selectedImage == item.url_link ? "" : "hidden"
                    } flex-grow h-96`}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${item.url_link})`,
                      }}
                      ref={ref as React.RefObject<HTMLDivElement>}
                      onClick={
                        state.isMediaReady &&
                        item.url_link != AppImages.ProductPlaceholder
                          ? open
                          : () => {}
                      }
                      className={`block mr-auto w-full h-full mb-2 bg-no-repeat bg-contain bg-center ${
                        state.isMediaReady ? "cursor-zoom-in" : "cursor-wait"
                      } ${
                        state.isMediaReady &&
                        item.url_link != AppImages.ProductPlaceholder
                          ? "cursor-pointer"
                          : ""
                      }`}
                    ></div>
                  </div>
                )}
              </Item>
            );
          })}
        </Gallery>
      ) : (
        <div className={`flex-grow h-96`}>
          <div
            className="block mr-auto w-full h-full mb-2 bg-no-repeat bg-contain bg-center"
            style={{
              backgroundImage: `url(${state.selectedImage})`,
            }}
          ></div>
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};

export default ProductImages;
