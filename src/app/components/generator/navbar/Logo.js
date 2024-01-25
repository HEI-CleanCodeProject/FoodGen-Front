import image from "@public/Nyan Food.png"
import Image from "next/image"

export function Logo(){
  return(
    <span>
        <Image src={image} className="w-20 h-20"/>
    </span> 
  )
}