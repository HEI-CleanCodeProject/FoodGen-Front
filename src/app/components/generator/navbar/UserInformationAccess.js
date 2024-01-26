import { UserIcon } from "../../Icons";
import styles from "./styles.module.css";

export function UserInformationAccess () {
  return(
    <div className="bg-color-2 w-1/6 relative color-yellow">
      <div className={`bg-color-2 h-full absolute ${styles["custom-block"]}`}></div>
      <div className="flex row color-1 p-1 h-full relative justify-end">
        <label className="self-center text-lg text-black">@userName</label>
        <button className="px-4 rounded-full"><UserIcon /></button>
      </div>
    </div>
  )
}
