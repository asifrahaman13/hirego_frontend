/* eslint-disable @next/next/no-img-element */
"use client";
import { people } from "@/constants/static/HeroSection/HeroSectionStatic";
import { Switch } from "@headlessui/react";
import { team } from "@/constants/static/HeroSection/HeroSectionStatic";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { LinkIcon, PlusIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export default function AllInternshipSeekers() {
  const [enabled, setEnabled] = useState(false);
  const [open, setOpen] = useState(true);
  return (
    <div className="flex w-screen  flex-row bg-gray-50">
      <div className="w-3/4  mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 px-12 lg:-mx-8">
          <div className="flex flex-col w-full gap-2">
            <div className="flex w-full bg-white font-semibold">
              <div className="w-1/4 p-3 flex">Name</div>
              <div className="w-1/4 p-3 flex ">Title</div>
              <div className="w-1/4 p-3 flex ">Status</div>
              <div className="w-1/4 p-3 px-6">Role</div>
            </div>
            {people.map((person) => (
              <div key={person.email} className=" bg-white w-full rounded-lg flex gap-4 ">
                <div className="w-1/4 p-3 flex flex-row gap-2 items-center">
                  <img className="h-11 w-11 rounded-full" src={person.image} alt="" />
                  <div> {person.name}</div>
                </div>
                <div className="w-1/4 p-3 ">{person.title}</div>
                <div className="w-1/4 p-3  ">
                  <span className="bg-green-50 px-2 py-1 w-12 text-xs font-medium text-green-700 rounded-md ring-1 ring-inset ring-green-600/20 ">Active</span>
                </div>
                <div className="w-1/4 p-3">{person.role}</div>
              </div>
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

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <form className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                      <div className="h-0 flex-1 overflow-y-auto">
                        <div className="bg-indigo-700 px-4 py-6 sm:px-6">
                          <div className="flex items-center justify-between">
                            <Dialog.Title className="text-base font-semibold leading-6 text-white">New Project</Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                onClick={() => setOpen(false)}
                              >
                                <span className="absolute -inset-2.5" />
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                          <div className="mt-1">
                            <p className="text-sm text-indigo-300">Get started by filling in the information below to create your new project.</p>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="divide-y divide-gray-200 px-4 sm:px-6">
                            <div className="space-y-6 pb-5 pt-6">
                              <div>
                                <label htmlFor="project-name" className="block text-sm font-medium leading-6 text-gray-900">
                                  Project name
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="project-name"
                                    id="project-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                              <div>
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                  Description
                                </label>
                                <div className="mt-2">
                                  <textarea
                                    id="description"
                                    name="description"
                                    rows={4}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    defaultValue={""}
                                  />
                                </div>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium leading-6 text-gray-900">Team Members</h3>
                                <div className="mt-2">
                                  <div className="flex space-x-2">
                                    {team.map((person) => (
                                      <a key={person.email} href={person.href} className="relative rounded-full hover:opacity-75">
                                        <img className="inline-block h-8 w-8 rounded-full" src={person.imageUrl} alt={person.name} />
                                      </a>
                                    ))}
                                    <button
                                      type="button"
                                      className="relative inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-dashed border-gray-200 bg-white text-gray-400 hover:border-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                      <span className="absolute -inset-2" />
                                      <span className="sr-only">Add team member</span>
                                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <fieldset>
                                <legend className="text-sm font-medium leading-6 text-gray-900">Privacy</legend>
                                <div className="mt-2 space-y-4">
                                  <div className="relative flex items-start">
                                    <div className="absolute flex h-6 items-center">
                                      <input
                                        id="privacy-public"
                                        name="privacy"
                                        aria-describedby="privacy-public-description"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        defaultChecked
                                      />
                                    </div>
                                    <div className="pl-7 text-sm leading-6">
                                      <label htmlFor="privacy-public" className="font-medium text-gray-900">
                                        Public access
                                      </label>
                                      <p id="privacy-public-description" className="text-gray-500">
                                        Everyone with the link will see this project.
                                      </p>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="relative flex items-start">
                                      <div className="absolute flex h-6 items-center">
                                        <input
                                          id="privacy-private-to-project"
                                          name="privacy"
                                          aria-describedby="privacy-private-to-project-description"
                                          type="radio"
                                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                      </div>
                                      <div className="pl-7 text-sm leading-6">
                                        <label htmlFor="privacy-private-to-project" className="font-medium text-gray-900">
                                          Private to project members
                                        </label>
                                        <p id="privacy-private-to-project-description" className="text-gray-500">
                                          Only members of this project would be able to access.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="relative flex items-start">
                                      <div className="absolute flex h-6 items-center">
                                        <input
                                          id="privacy-private"
                                          name="privacy"
                                          aria-describedby="privacy-private-to-project-description"
                                          type="radio"
                                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                      </div>
                                      <div className="pl-7 text-sm leading-6">
                                        <label htmlFor="privacy-private" className="font-medium text-gray-900">
                                          Private to you
                                        </label>
                                        <p id="privacy-private-description" className="text-gray-500">
                                          You are the only one able to access this project.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </fieldset>
                            </div>
                            <div className="pb-6 pt-4">
                              <div className="flex text-sm">
                                <a href="#" className="group inline-flex items-center font-medium text-indigo-600 hover:text-indigo-900">
                                  <LinkIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-900" aria-hidden="true" />
                                  <span className="ml-2">Copy link</span>
                                </a>
                              </div>
                              <div className="mt-4 flex text-sm">
                                <a href="#" className="group inline-flex items-center text-gray-500 hover:text-gray-900">
                                  <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                  <span className="ml-2">Learn more about sharing</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-shrink-0 justify-end px-4 py-4">
                        <button
                          type="button"
                          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
