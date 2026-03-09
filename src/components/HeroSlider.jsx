import { useEffect, useState } from "react"

const slides = [
  {
    image: "/pan1.jpg",
    title: "MASA MADRE TRADICIONAL",
    subtitle: "Horneado a leña cada mañana"
  },
  {
    image: "/pan2.jpg",
    title: "INGREDIENTES PREMIUM",
    subtitle: "Solo los mejores ingredientes"
  },
  {
    image: "/pan3.jpg",
    title: "CRUJIENTE DE AUTOR",
    subtitle: "Una experiencia única en cada mordida"
  }
]

export default function HeroSlider(){

  const [index,setIndex] = useState(0)

  useEffect(()=>{

    const interval = setInterval(()=>{
      setIndex((prev)=> (prev + 1) % slides.length)
    },4000)

    return ()=> clearInterval(interval)

  },[])

  return(

    <section className="relative w-full h-[85vh]">

      {/* Imagen */}
      <img
        src={slides[index].image}
        className="absolute w-full h-full object-cover"
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Texto centrado */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          {slides[index].title}
        </h1>

        <p className="text-lg md:text-xl mb-6">
          {slides[index].subtitle}
        </p>

        <button className="bg-orange-500 px-8 py-3 rounded-full text-white hover:bg-orange-600 transition">
          Descubrir Más
        </button>

      </div>

    </section>

  )
}