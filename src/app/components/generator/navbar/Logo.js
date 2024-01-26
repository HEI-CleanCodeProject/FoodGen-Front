import Image from "next/image"

export function Logo(){
  return(
    <span className="block w-1/6 h-full">
      <a href="#" className="w-full h-full block">
        <Image alt="logo" className="w-full h-full"/>
      </a>
    </span> 
  )
}