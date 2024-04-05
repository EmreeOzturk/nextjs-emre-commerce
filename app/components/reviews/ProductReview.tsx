import { Review } from "@/types"
import Image from "next/image"
import RatingStars from "../common/RatingStars"


type ProductReviewProps = {
    review: Review
}
const ProductReview: React.FC<ProductReviewProps> = (
    { review }
) => {
    return (
        <div className="flex w-full md:w-1/3 shadow-lg pt-4 border rounded-lg gap-4 md:gap-10">
            <div className="flex flex-col gap-2 justify-center items-center">
                <div className="w-10 h-10 relative border border-black rounded-full">
                    <Image src="/ip.avif" alt="name" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-full" />
                </div>
                <div>
                    {review.user.name}
                </div>
                <div className="scale-[.8]">
                    <RatingStars value={review.rating} />
                </div>
            </div>
            <div className="flex flex-col items-start justify-start">
                <div>
                    {
                        new Date(review.createdDate).toLocaleDateString()
                    }
                </div>
                <div>
                    {review.comment}
                </div>
            </div>

        </div>
    )
}

export default ProductReview