import styles from "./styles.module.css";

export default function () {
  return(
    <div className={`container bg-color-grey p-1 rounded m-2 shadow-lg ${styles["card-width"]}`}>
      <div className="w-full h-full">
        <div className="bg-color-2 h-3/6 w-full shadow-xl rounded">
          <img alt="my image" className="w-full h-full"/>
        </div>
        <div className="p-1 h-2/6">
          <h4 className="py-2">My food</h4>
          <p>lorem upsum dolor shit hap adsf asdfjafds  ds dsafjjjdf ajdsfjadsf </p>
        </div>
        <div className="h-1/6 relative">
          <button className="btn-app-1 absolute right-1 bottom-1">look up</button>
        </div>
      </div>
    </div>
  );
}
