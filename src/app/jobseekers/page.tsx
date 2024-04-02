/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Layout from "../HeroSection/layout";
import Link from "next/link";
import { people, actions } from "@/constants/static/HeroSection/HeroSectionStatic";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Page = () => {
  return (
    <>
      <Layout>
        <div className="flex justify-center bg-Almost-White">
          <div className=" flex flex-row w-3/4 py-12">
            <div className="w-full flex flex-col gap-12">
              <div className=" flex flex-row">
                <div className="text-xl w-1/2 font-semibold font-sans">Trending startups in the tech industry</div>{" "}
                <div className="ml-auto   flex gap-4 ">
                  <Link href="/usersignup" className="bg-Pri-Dark py-2 px-5 items-center text-white flex justify-center rounded-lg ">
                    Sign up
                  </Link>
                  <Link href="/usersignin" className="bg-gray-200  py-2 px-5 items-center text-Pri-Dark flex justify-center rounded-lg ">
                    {" "}
                    Login
                  </Link>
                </div>
              </div>

              <div className="flex flex-row w-full">
                <ul role="list" className="divide-y w-full flex flex-col gap-4 divide-gray-100 overflow-hidden  ">
                  {people.map((person, index) => (
                    <>
                      <li key={person.email} className="relative w-full flex justify-between gap-x-6 px-4 py-5 border bg-white 0 sm:px-6">
                        <div className="flex min-w-0 gap-x-4 bg-white">
                          <img className="h-12 w-12 flex-none rounded-full " src={person?.image} alt="" />
                          <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                              <Link href={person.email}>
                                <span className="absolute inset-x-0 -top-px bottom-0" />
                                {person.name}
                              </Link>
                            </p>
                            <p className="mt-1 flex text-xs leading-5 text-gray-500">
                              <a href={`mailto:${person.email}`} className="relative truncate hover:underline">
                                {person.email}
                              </a>
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quia id, quas accusamus ad, alias hic quasi veniam blanditiis doloremque iste sint eligendi est
                              consequuntur perspiciatis quo saepe quidem.
                            </p>
                          </div>
                        </div>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mb-20">
          <div className="divide-y  w-3/4 divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
            {actions.map((action, actionIdx) => (
              <div
                key={action.title}
                className={classNames(
                  actionIdx === 0 ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none" : "",
                  actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                  actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                  actionIdx === actions.length - 1 ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none" : "",
                  "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
                )}
              >
                <div>
                  <span className={classNames(action.iconBackground, action.iconForeground, "inline-flex rounded-lg p-3 ring-4 ring-white")}>
                    <action.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-base font-semibold leading-6 text-gray-900">
                    <a href={action.href} className="focus:outline-none">
                      {/* Extend touch target to entire panel */}
                      <span className="absolute inset-0" aria-hidden="true" />
                      {action.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.</p>
                </div>
                <span className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Page;
