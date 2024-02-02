import React from "react";
import Card from "@/app/components/food/generator/card";
import RegenerateIcon from "@/app/components/icons/RegenerateIcon";

export default function Generator() {
  return (
    <div>
      <div className="p-2">
        <div>
          <h3 className="p-3">Recommended for you</h3>
          <div className="flex flex-wrap row">
            <Card />
          </div>
        </div>
        <hr className="bg-color-2 w-4/5 m-6" />
        <div className="flex row flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <button className="btn-app-1 fixed right-4 bottom-4">
          <div className="flex flex-row items-center">
            <RegenerateIcon className={"text-[--color-2]"} />
            <span className="px-2">Regenerate</span>
          </div>
        </button>
      </div>
    </div>
  );
}
