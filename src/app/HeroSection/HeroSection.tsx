/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { Dialog, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { callsToAction, navigation } from "@/constants/static/HeroSection/HeroSectionStatic";
import Link from "next/link";
import { userNavigation } from "@/constants/static/dashboard/Dashboard";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token") || null;
    if (access_token) {
      setIsSignedIn(true);
    }
  }, []);

  function handleSignout() {
    localStorage.removeItem("access_token");
    window.location.href = "/";
  }

  return (
    <>
      {/* <Banner /> */}

      <header className="sticky bg-white backdrop-filter backdrop-blur-xl inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <div className="inline-flex outline-none items-center gap-x-1 text-sm font-semibold leading-6 text-gray-90">
              <Link href="/">Why hirego?</Link>
            </div>
            {navigation.map((item) => (
              <>
                <Popover className="relative">
                  <Popover.Button className="inline-flex outline-none items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                    <span>{item.name}</span>
                    <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                      <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                          {item?.solutions.map((item) => (
                            <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                              </div>
                              <div>
                                <Link href={item.href} className="font-semibold text-gray-900">
                                  {item.name}
                                  <span className="absolute inset-0" />
                                </Link>
                                <p className="mt-1 text-gray-600">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                          {callsToAction.map((item) => (
                            <Link key={item.name} href={item.href} className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100">
                              <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              </>
            ))}

            <div className="inline-flex outline-none items-center gap-x-1 text-sm font-semibold leading-6 text-gray-90">
              <Link href="/jobseekers">For job seekers</Link>
            </div>

            <div className="inline-flex outline-none items-center gap-x-1 text-sm font-semibold leading-6 text-gray-90">
              <Link href="/companies">For companies</Link>
            </div>

            <div className="inline-flex outline-none items-center gap-x-1 text-sm font-semibold leading-6 text-gray-90">
              <Link href="/pricing">Pricing</Link>
            </div>
          </div>
          <div className="hidden gap-2 lg:flex lg:flex-1 lg:justify-end">
            {isSignedIn === false ? (
              <>
                <Link href="/signup" className="text-sm font-semibold leading-6 text-gray-900">
                  Signup
                </Link>

                <Link href="/signin" className="text-sm font-semibold leading-6 text-gray-900">
                  sign in
                </Link>
              </>
            ) : (
              <>
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full bg-gray-50"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                        Profile
                      </span>
                      <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <>
                          {" "}
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link href={item.href} className={classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900")}>
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        </>
                      ))}
                      <button
                        className="px-3"
                        onClick={() => {
                          handleSignout();
                        }}
                      >
                        Sign out
                      </button>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </>
            )}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </Link>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}
