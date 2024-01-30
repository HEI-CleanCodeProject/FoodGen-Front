import React from "react";
export default function Input({ name, type, placeholder, id }) {
  return (
    <>
      <input
        name={name}
        type={type}
        autoComplete={name}
        id={id}
        required
        className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#333]"
        placeholder={placeholder}
      />
    </>
  );
}
