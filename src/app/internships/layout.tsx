"use client";
import React, { PropsWithChildren, useReducer, useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const InternshipLayout = ({ children }: PropsWithChildren) => {
  const tabs = [
    { name: "Applied", href: "#", current: false },
    { name: "Phone Screening", href: "#", current: false },
    { name: "Interview", href: "#", current: true },
    { name: "Offer", href: "#", current: false },
    { name: "Hired", href: "#", current: false },
  ];

  const [tabSelect, setTabSelect] = useState("Interview");

  function handleTabChange(tabName: string) {
    setTabSelect(tabName);
  }

  return (
    <>
      <div className="border-b border-gray-200 pb-5 sm:pb-0 xl:px-11 py-1">
        <div className="">
          <div className="sm:hidden">
            <label htmlFor="current-tab" className="sr-only">
              Select a tab
            </label>
            <select
              id="current-tab"
              name="current-tab"
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden w-full sm:block xl:flex flex-row">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => handleTabChange(tab.name)}
                  className={`${
                    tab.name === tabSelect ? "border-indigo-500 font-semibold text-indigo-600" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
            <h3 className=" justify-end  ml-auto font-semibold text-xl  w-full flex font-sans">Interns</h3>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

export default InternshipLayout;
