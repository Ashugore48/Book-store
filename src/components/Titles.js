import React from "react";
import Frame1 from "./assets/Frame 1.png";
import Frame2 from "./assets/Frame 2.png";
import Frame3 from "./assets/Frame 3.png";

const Titles = () => {
  return (
    <div className="w-full flex flex-col items-center py-5">
      <div className="flex gap-3">
        <div className="flex flex-row items-center z-100">
          <img className="w-52 z-10" src={Frame1}></img>
          <div className="w-52 bg-green-700 -ml-5 pl-7 rounded-sm p-3">
            <p className="text-left text-white font-medium text-2xl">Title</p>
            <p className="text-left text-white text-sm">
              Description- Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.{" "}
            </p>
            <button className="border px-4 py-0 text-white">Now read!</button>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <img className="w-52 z-10" src={Frame2}></img>
          <div className="w-52 bg-purple-700 -ml-5 pl-7 rounded-sm p-3">
            <p className="text-left text-white font-medium text-2xl">Title</p>
            <p className="text-left text-white text-sm">
              Description- Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.{" "}
            </p>
            <button className="border px-4 py-0 text-white">Now read!</button>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <img className="w-52 z-10" src={Frame3}></img>
          <div className="w-52 bg-pink-700 -ml-5 pl-7 rounded-sm p-3">
            <p className="text-left text-white font-medium text-2xl">Title</p>
            <p className="text-left text-white text-sm">
              Description- Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.{" "}
            </p>
            <button className="border px-4 py-0 text-white">Now read!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Titles;
