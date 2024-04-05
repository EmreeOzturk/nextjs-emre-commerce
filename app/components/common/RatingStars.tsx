
type RatingStarsProps = {
    value: number
}

const RatingStars: React.FC<RatingStarsProps> = ({ value }) => {
    return (
        <div className=" w-full  rounded-lg  lg:overflow-visible">
            <div className="inline-flex items-center">
                {
                    Array.from({ length: 5 }, (_, index) => {
                        return (
                            <span key={index}><svg xmlns="http://www.w3.org/2000/svg" fill={index < value ? 'orange' : 'none'} viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="orange" className="w-6 h-6 cursor-pointer text-blue-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
                                </path>
                            </svg></span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RatingStars