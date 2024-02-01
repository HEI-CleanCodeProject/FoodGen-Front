"use client";
import React from "react";
import { useContext, useState } from "react";
import { Context } from "@/app/contextProvider";
("@/app/contextProvider");
import Modal from "../modal";

export function FoodModal() {
  const { data, isOpen, closeModalAndClearData } = useContext(Context);
  console.log(data);
  return (
    <Modal handleClose={closeModalAndClearData} isOpen={isOpen}>
      <>my modal</>
    </Modal>
  );
}
