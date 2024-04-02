/* eslint-disable @next/next/no-img-element */
"use client";
import { people } from "@/constants/static/HeroSection/HeroSectionStatic";

import { useState } from "react";
import InternDetails from "./InternDetails";

export default function AllInternshipSeekers() {
  const [enabled, setEnabled] = useState(false);
  const [open, setOpen] = useState(true);

  const [blur, setBlur] = useState(false);

  const [username, setUsername] = useState("");
  const [keyIncrement, setKeyIncrement] = useState(0);

  function handleUserNameChange(person: string) {
    setUsername(person);
setKeyIncrement(keyIncrement + 1);
  }

  return (
    <div className="flex w-screen h-screen   flex-row bg-gray-50">
      <div className="w-3/4 flow-root overflow-y-scroll h-full no-scrollbar">
        <div className="-mx-4 -my-2 w-full overflow-x-auto sm:-mx-6 px-12 lg:-mx-8">
          <div className="flex flex-col w-full gap-4">
            {people.map((person) => (
              <>
                <button
                  className="bg-white w-full border gap-4 flex flex-col rounded-lg px-4 py-4"
                  onClick={() => {
                    setBlur(true);
                    handleUserNameChange(person.name+ keyIncrement);
                  }}
                >
                  <div key={person.email} className="  flex gap-8 ">
                    <div className="w-full  p-3 flex flex-row gap-2 items-center">
                      <img className="h-11  rounded-full" src={person.image} alt="" />
                      <div> {person.name}</div>
                      <div className="text-sm">{person.title}</div>
                    </div>

                    <div className="w-1/4 p-3 flex items-center ">
                      <span className="bg-green-50 px-2 py-1 w-12 text-xs font-medium text-green-700 rounded-md ring-1 ring-inset ring-green-600/20 ">Active</span>
                    </div>
                  </div>

                  <div className="flex  flex-row justify-start items-start text-start  ">
                    I am a self taught developers. I love to spend most of the time in coding and hackathon. Learning new technology is my passion. Currently I am in my 3rd year of college and I am
                    ....
                  </div>
                  <div className="flex flex-row gap-2 text-msm flex-wrap">
                    <div className="bg-yellow-100 text-yellow-500 rounded-lg px-2 py-1">HTML</div>
                    <div className="bg-red-100 text-red-500 rounded-lg px-2 py-1">Python</div>
                    <div className="bg-green-100 text-green-500 rounded-lg px-2 py-1">JavaScript</div>
                    <div className="bg-blue-100 text-blue-500 rounded-lg px-2 py-1">Dart</div>
                    <div className="bg-red-100 text-red-500 rounded-lg px-2 py-1">Npm package</div>
                  </div>
                </button>
              </>
            ))}
          </div>
        </div>
      </div>

      {username &&   <InternDetails blur={blur} username={username} should_open={true} key={keyIncrement}/>}

    
    </div>
  );
}
