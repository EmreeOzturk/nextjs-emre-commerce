import React from 'react'


type HeadingProps = {
    title?: string
    subtitle?: string
    center?: boolean
}
const Heading: React.FC<HeadingProps> = (
    { title = "title", subtitle, center }
) => {
    return (
        <div className={`${center ? 'text-center' : 'text-start'} text-slate-500 my-10 select-none text-2xl md:text-4xl px-3 md:px-10`}>
            <h2>
                {title}
            </h2>
        </div>
    )
}

export default Heading