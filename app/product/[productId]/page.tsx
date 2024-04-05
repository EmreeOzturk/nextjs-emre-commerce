import Heading from '@/app/components/common/Heading'
import RatingStars from '@/app/components/common/RatingStars'
import ProductDetailContainer from '@/app/components/containers/ProductDetailContainer'
import ProductReview from '@/app/components/reviews/ProductReview'
import { products } from '@/data/Products'
import Image from 'next/image'
import { useCart } from '@/store/useCart'
import QntController from '@/app/components/productDetail/QntController'
const ProductDetailPage = ({ params }: {
    params: {
        productId: string
    }
}) => {
    const productId = params.productId
    const product = products.find((product) => product.id == productId)

    if (product === undefined) {
        return <h1>Product not found</h1>
    }
    return (
        <ProductDetailContainer>
            <div className='flex flex-col w-full'>
                <div className='flex items-start flex-col md:flex-row gap-5 md:gap-10 md:px-10 px-3 py-5 md:py-10 bg-slate-100 w-full'>
                    <div className='flex flex-col items-center gap-5 md:gap-10 md:px-10 px-3 bg-slate-100 w-full h-full'>
                        <div className='relative h-80 w-80 '>
                            <Image src={"/ip.avif"} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill alt={product.name} className=' object-contain' />
                        </div>
                        <div className='flex flex-col gap-5 w-full items-start '>
                            <h2 className='text-3xl text-slate-500 font-semibold'>{product.name}</h2>
                            <p className='text-xl text-slate-500 font-semibold'>${product.price}</p>
                            <div className='scale-125 ml-2'>
                                <RatingStars value={product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length} />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 shadow-xl px-4 py-2 rounded-lg'>
                        <h2 className='md:text-2xl text-xl text-slate-500 font-bold'>Description</h2>
                        <p className='md:text-lg text-slate-500 font-semibold'>{product.description}</p>
                        <div>
                            <h2 className={`'md:text-2xl text-xl font-bold' ${product.inStock ? 'text-green-500' : 'text-red-400'}`}>
                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                            </h2>
                        </div>
                        {
                            product.inStock && <div className='flex justify-center gap-6 items-center'>
                                <QntController productId={productId} product={product} />
                            </div>
                        }
                    </div>
                </div>
                <Heading title='Reviews' />
                <div className='w-full flex flex-wrap gap-4'>
                    {
                        product.reviews.map((review) => (
                            <ProductReview review={review} key={review.id} />
                        ))
                    }
                </div>
            </div>
        </ProductDetailContainer>
    )
}

export default ProductDetailPage