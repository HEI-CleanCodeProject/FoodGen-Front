import { useState } from "react";
import { UserIcon } from "@/app/components/Icons";
import styles from "./styles.module.css";
import Modal from "../modal";
import React from "react";
import LogoutIcon from "@/app/components/Icons/LogoutIcon";
import UserActionsButton from "./UserActionsButton";
import EditIcon from "@/app/components/Icons/EditIcon";

export function UserInformationAccess({user}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-color-2 w-[300px] relative color-yellow">
      <div
        className={`bg-color-2 h-full absolute ${styles["custom-block"]}`}
      ></div>
      <div className="flex row color-1 p-1 h-full relative justify-end">
        <label className="self-center text-lg text-white">{user.username}</label>
        <button className="px-4 rounded-full" onClick={() => setIsOpen(true)}>
          <UserIcon />
        </button>
        {isOpen && (
          <Modal isOpen={isOpen} handleClose={() => setIsOpen(!isOpen)}>
            <div className="flex flex-row shadow-inner bg-white rounded-lg my-3">
              <UserIcon className="w-[160px] h-[160px]"/>
              <div className="flex flex-col p-6">
                <p className="font-bold py-2 text-xl">{user.username}</p>
                <p><span className="font-bold">Fullname : </span>{`${user.firstname} ${user.lastname}`}</p>
                <p><span className="font-bold">Email :</span> {user.email}</p>
              </div>
              <div>
                
              </div>
            </div>
            <div className="flex flex-row shadow-inner flex-wrap bg-white p-2 rounded-lg h-3/5 overflow-auto overflow-x-hidden">
              <UserActionsButton label={"Edit profile"} Icon={EditIcon} />
              <UserActionsButton label={"log out"} Icon={LogoutIcon} />
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}
