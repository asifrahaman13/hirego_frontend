/* eslint-disable @next/next/no-img-element */
"use client";
import { people } from "@/constants/static/HeroSection/HeroSectionStatic";
import { Switch } from "@headlessui/react";
import { team } from "@/constants/static/HeroSection/HeroSectionStatic";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { LinkIcon, PlusIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import InternDetails from "./InternDetails";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function AllInternshipSeekers() {
  const [enabled, setEnabled] = useState(false);
  const [open, setOpen] = useState(true);
  return (
    <div className="flex w-screen h-screen py-14  flex-row bg-gray-50">
      <div className="w-3/4  mt-8 flow-root overflow-y-scroll h-full no-scrollbar">
        <div className="-mx-4 -my-2 w-full overflow-x-auto sm:-mx-6 px-12 lg:-mx-8">
          <div className="flex flex-col w-full gap-4">
            {people.map((person) => (
              <>
                <button className="bg-white w-full border gap-4 flex flex-col rounded-lg px-4 py-4">
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
                    looking for internship in web development. I am a self taught developers. I love to spend most of the time in coding and hackathon. Learning new technology is my passion. Currently
                    I am in my 3rd year of college and I am looking for internship in web development.
                  </div>
                            <div className="flex flex-row gap-2 text-msm flex-wrap">
                    <div className="bg-yellow-300 rounded-lg px-2 py-1">HTML</div>
                    <div className="bg-red-300 rounded-lg px-2 py-1">Python</div>
                    <div className="bg-green-300 rounded-lg px-2 py-1">JavaScript</div>
                    <div className="bg-blue-300 rounded-lg px-2 py-1">Dart</div>
                    <div className="bg-red-300 rounded-lg px-2 py-1">Npm package</div>
                  </div>
                </button>
              </>
            ))}
          </div>
        </div>
      </div>

      <div className=" px-4 flex gap-8 flex-col  mb-0 sticky top-0 h-screen max-h-screen max-w-md grow bg-white overflow-y-scroll no-scrollbar">
        <div className=" my-4 flex gap-2 flex-row items-center">
          <div className="font-medium font-sans text-lg">Settings</div>
          <div className="font-medium  text-lg font-sans">Filters</div>
        </div>
        <div className=" 0">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              />
            </div>
          </div>
        </div>
        <div className=" 0">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row ">
          <div>Latest Updates</div>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={classNames(
              enabled ? "bg-indigo-600" : "bg-gray-200",
              "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 ml-auto"
            )}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={classNames(
                enabled ? "translate-x-5" : "translate-x-0",
                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              )}
            />
          </Switch>
        </div>
      </div>
      <InternDetails />
    </div>
  );
}
