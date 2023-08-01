export type ProductFootPrintType = {
  title: string;
  lifeSpan: FootPrintItem;
  returnPolicy: FootPrintItem;
};

type FootPrintItem = {
  title: string;
  description: string;
  icon: string;
};
