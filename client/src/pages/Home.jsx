import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import png1 from "../assets/png1.png";
import png2 from "../assets/png2.png";
export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-zinc-200 m-5 justify-between rounded-2xl shadow-md shadow-zinc-500/40">
        <div className="p-4 flex items-center">
          <div className="bg-white rounded-full p-1 flex gap-3 items-center justify-start shadow-md shadow-zinc-500/40">
            <FontAwesomeIcon icon={faSearch} className="ml-2" />
            <input
              className="outline-none"
              type="text"
              placeholder="Search Project"
            />
          </div>
        </div>
        <div className="flex p-5">
          <div className="flex gap-2 border items-center border-slate-500 bg-white p-1 rounded text-slate-600">
            <FontAwesomeIcon icon={faFilter} className=" text-slate-500" />
            <label htmlFor="filter">Filter</label>
            <select className="outline-none" id="filter"></select>
          </div>
        </div>
      </div>
      <div className="flex m-5 justify-between h-screen gap-16 my-10 pr-3 md:flex-row">
        <div className="w-full flex flex-col gap-5 items-center">
          <div className="bg-zinc-200 w-full rounded-xl h-56 shadow-md shadow-zinc-500/40 flex flex-col justify-evenly pl-3">
            <span className="w-16 h-16 bg-red-600 rounded-full p-4">
              <img src={png1} alt="png1" />
            </span>
            <span className="text-slate-500 font-semibold">Expired Tasks</span>
            <span className="font-bold text-3xl">5</span>
            <span></span>
          </div>
          <div className="bg-zinc-200 w-full rounded-xl h-56 shadow-md shadow-zinc-500/40 flex flex-col justify-evenly pl-3">
            <span className="w-16 h-16 bg-rose-400 rounded-full p-4"></span>
            <span className="text-slate-500 font-semibold">
              All Active Tasks
            </span>
            <span className="font-bold text-3xl">7</span>
            <span></span>
          </div>
          <div className="bg-zinc-200 w-full rounded-xl h-56 shadow-md shadow-zinc-500/40 flex flex-col justify-evenly pl-3">
            <span className="w-16 h-16 bg-blue-400 rounded-full p-4">
              <img src={png1} alt="png1" />
            </span>
            <span className="text-slate-500 font-semibold">
              Completed Tasks
            </span>
            <div>
              <span className="font-bold text-3xl">2/</span>
              <span className="font-bold text-xl">7</span>
              <span></span>
            </div>
          </div>
          <button className="bg-slate-900 p-3 w-full rounded-2xl text-white">
            + Add Task
          </button>
        </div>
        <div className="bg-zinc-200 w-full rounded-xl shadow-md shadow-zinc-500/40">
          <div className="flex items-center gap-3 p-4 h-4 justify-center my-3">
            <span className="w-3 h-3 bg-blue-800 rounded-full"></span>
            <span>To DO</span>
            <span className="w-5 h-5 bg-slate-300 rounded-full text-center">
              3
            </span>
          </div>
          <div className="flex">
            <div className="h-1 w-full  bg-blue-800 mx-5"></div>
          </div>
        </div>
        <div className="bg-zinc-200 w-full rounded-xl shadow-md shadow-zinc-500/40">
          <div className="flex items-center gap-3 p-4 h-4 justify-center my-3">
            <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
            <span>To DO</span>
            <span className="w-5 h-5 bg-slate-300 rounded-full text-center">
              2
            </span>
          </div>
          <div className="flex">
            <div className="h-1 w-full  bg-orange-400 mx-5"></div>
          </div>
        </div>
        <div className="bg-zinc-200 w-full rounded-xl shadow-md shadow-zinc-500/40">
          <div className="flex items-center gap-3 p-4 h-4 justify-center my-3">
            <span className="w-3 h-3 bg-green-400 rounded-full"></span>
            <span>To DO</span>
            <span className="w-5 h-5 bg-slate-300 rounded-full text-center">
              2
            </span>
          </div>
          <div className="flex">
            <div className="h-1 w-full  bg-green-400 mx-5"></div>
          </div>
        </div>
      </div>
    </>
  );
}
