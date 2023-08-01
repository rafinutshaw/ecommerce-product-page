import Image from "next/image";
import { FootPrintItemType } from "./footprint-item.types";

export const FootPrintItem: React.FC<FootPrintItemType> = (
  props: FootPrintItemType
) => {
  const { icon, title, description } = props;

  return (
    <div className="flex items-start">
      <Image alt={title} src={icon} width={30} height={30} />
      <div className="ml-2">
        <div className="font-bold line-clamp-2 h-12">{title}</div>
        <div className="text-justify">{description}</div>
      </div>
    </div>
  );
};

export default FootPrintItem;
