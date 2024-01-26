import styles from "./styles.module.css";
import Image from "next/image";

export default function Card () {
  return(
    <div className={`container bg-color-grey p-2 hover:shadow-2xl transition-all duration-200 rounded m-2 drop-shadow-xl ${styles["card-width"]}`}>
      <div className="w-full h-full">
        <div className="bg-color-2 h-3/6 w-full shadow-xl rounded">
          <Image alt="my image" src="" className="w-full h-full"/>
        </div>
        <div className={`p-1 h-2/6`}>
          <h4 className="py-2">My food</h4>
          <p className={`text-elipsis ${styles["card-text-size"]}`}>lorem upsum dolor shit hap adsf asdfjafd asd adsf adsf asd fa sdf adsf ad</p>
        </div>
        <div className="h-1/6 relative">
          <button className="btn-app-1 absolute right-1 bottom-1">more</button>
        </div>
      </div>
    </div>
  );
}
