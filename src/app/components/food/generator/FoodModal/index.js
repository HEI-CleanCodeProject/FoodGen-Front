"use client"
import React from "react";
import { useContext, useState } from "react";
import { Context } from "@/app/context/foodDetailContextProvider"; "@/app/contextProvider";
import Modal from "../modal";

export function FoodModal(){
  const {data,isOpen,closeModalAndClearData} = useContext(Context);
  console.log(data)
  return (
    <Modal handleClose={closeModalAndClearData} isOpen={isOpen}>
      <div className="w-[300px] h-[300px] bg-white">adsfdsf</div>
    </Modal>
  )
}
