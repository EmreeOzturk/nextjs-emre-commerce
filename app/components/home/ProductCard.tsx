import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/types'
import RatingStars from '../common/RatingStars'
type ProductCardProps = {
    product: Product
}
const ProductCard: React.FC<ProductCardProps> = ({ product }: { product: Product }) => {
    const ratingStarts = product?.reviews?.reduce((acc, review) => acc + review.rating, 0) / product?.reviews?.length
    return (
        <Link href={`product/${product.id}`} className='flex overflow-hidden flex-col w-[300px] h-96  shadow-xl items-center hover:scale-105 transition-all justify-center rounded-lg p-4 md:py-10 md:px-10 cursor-pointer'>
            <div className='relative h-24 w-32'>
                <Image src={product.image} alt={product.name} fill className='rounded-lg object-contain' />
            </div>
            <div className='flex items-center justify-center my-2'>
            <RatingStars value={ratingStarts} />
            </div>
            <div className='flex justify-center items-center flex-col  w-[300px]'>
                <h2 className='text-lg text-wrap font-semibold text-slate-500'>{
                    product.name.length > 15 ? product.name.slice(0, 15) + '...' : product.name
                }
                </h2>
                <p className='text-slate-500 text-xl font-semibold mt-1 md:mt-2'>${product.price}</p>
                <button className='bg-slate-500 text-white px-5 py-2 transition-all rounded-lg md:mt-5 mt-1 hover:bg-transparent hover:border hover:border-slate-500 hover:text-slate-500'>Add to Cart</button>
            </div>
        </Link>
    )
}

export default ProductCard