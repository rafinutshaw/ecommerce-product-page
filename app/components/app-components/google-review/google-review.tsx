import StarIcon from "@/public/icons/star.icon";
import { GoogleReviewType } from "./google-review.types";

export const GoogleReview: React.FC<GoogleReviewType> = (
  props: GoogleReviewType
) => {
  const { rate, maxRate } = props;

  return (
    <div className="flex items-center">
      <div className="text-yellow-400">
        <StarIcon />
      </div>
      <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
        {rate}/{maxRate}
      </p>
    </div>
  );
};

export default GoogleReview;
