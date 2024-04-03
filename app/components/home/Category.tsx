"use client"


const Category = () => {
    const categoryList = [
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
        {
            name: "Ayakkabı"
        },
    ]
    return (
        <div className="flex items-center justify-center  p-2 gap-3 md:gap-10 my-4 overflow-x-auto scroll-hidden">
            {
                categoryList.map((category, index) => (
                    <div key={index} className="bg-gray-100 p-2 m-2 rounded-lg cursor-pointer">{category.name}</div>
                ))
            }
        </div>
    )
}

export default Category