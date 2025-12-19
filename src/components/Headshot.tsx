import headshot from '../images/prof_pic_transparent.png'

export default function Headshot() {
    return(
        <div className="relative group w-60 h-60 mx-auto"> 
            <div
                className="
                absolute inset-0 rounded-full blur-2xl opacity-90
                bg-gradient-to-tr from-blue-500 via-purple-500
                transition-all duration-500
                group-hover:opacity-90 group-hover:scale-110
                -z-10
                "
            />

            <img
                src={headshot}
                alt='Headshot'
                className='w-full h-full rounded-full object-cover object-top ring-2 ring-white/60 shadow-xl transition-transform duration-500 group-hover:scale-105'
            />
        </div>
    )
}