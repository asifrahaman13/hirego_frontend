/* eslint-disable @next/next/no-img-element */
"use client";
import DashboardLayout from "@/app/profile-dashboard/layout";
import { classNames } from "@/constants/styles/styles";
import React, { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { CalendarDaysIcon, CreditCardIcon, EllipsisVerticalIcon, UserCircleIcon, XMarkIcon as XMarkIconMini } from "@heroicons/react/20/solid";
import { InternshipRepository } from "@/infrastructure/repositories/InternshipRepository";
import { InternshipService } from "@/domain/usecases/InternshipService";
import { Job } from "@/domain/entities/InternshipEntity";
import { InternshipInterface } from "@/domain/interfaces/internshipInterface";
import SuccessMessage from "@/components/SuccessMessage/SuccessMessage";

const internshipRepository = new InternshipRepository();
const internshipInterface: InternshipInterface = new InternshipService(internshipRepository);

const activity = [
  { id: 1, type: "created", person: { name: "Chelsea Hagon" }, date: "7d ago", dateTime: "2023-01-23T10:32" },
  { id: 2, type: "edited", person: { name: "Chelsea Hagon" }, date: "6d ago", dateTime: "2023-01-23T11:03" },
  { id: 3, type: "sent", person: { name: "Chelsea Hagon" }, date: "6d ago", dateTime: "2023-01-23T11:24" },
  {
    id: 4,
    type: "commented",
    person: {
      name: "Chelsea Hagon",
      imageUrl: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    comment: "Called client, they reassured me the invoice would be paid by the 25th.",
    date: "3d ago",
    dateTime: "2023-01-23T15:56",
  },
  { id: 5, type: "viewed", person: { name: "Alex Curren" }, date: "2d ago", dateTime: "2023-01-24T09:12" },
  { id: 6, type: "paid", person: { name: "Alex Curren" }, date: "1d ago", dateTime: "2023-01-24T09:20" },
];

export default function Page({ params }: { params: { internship_id: string } }) {
  const [internship, setInternship] = useState<Job | null>(null);
  const [message, setMessage] = useState(false);

  useEffect(() => {
    async function getInsternDetails() {
      try {
        const access_token = localStorage.getItem("access_token") || null;
        if (access_token) {
          const response = await internshipInterface.getInternshipById(access_token, params.internship_id);
          if (response?.code === 200) {
            setInternship(response.data);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
    getInsternDetails();
  }, [params.internship_id]);

  const [key, setKey] = useState(0);

  async function ApplyForInternship() {
    try {
      const access_token = localStorage.getItem("access_token") || null;
      if (access_token) {
        const response = await internshipInterface.applyForInternship(access_token, params.internship_id);
        if (response?.code === 200) {
          setMessage(true);
          setKey(key + 1);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Fragment>
      {message && <SuccessMessage message="You have successfully applied for the internship" key={key} />}
      <DashboardLayout>
        <main className="bg-white rounded-xl">
          <header className="relative isolate pt-16">
            <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
              <div className="absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
                <div
                  className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br "
                  style={{
                    clipPath: "polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)",
                  }}
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gray-900/5" />
            </div>

            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
              <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
                <div className="flex items-center gap-x-6">
                  <img src="https://tailwindui.com/img/logos/48x48/tuple.svg" alt="" className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-900/10" />
                  <h1>
                    <div className="text-xl leading-6 font-semibold">
                      {internship?.title} <span className="text-gray-700"> #{internship?.jobID}</span>
                    </div>
                    <div className="mt-1 text-base font-semibold leading-6 text-gray-900">@{internship?.company.name}</div>
                    <div>{internship?.location}</div>
                  </h1>
                </div>
                <div className="flex items-center gap-x-4 sm:gap-x-6">
                  <button type="button" className="hidden text-sm font-semibold leading-6 text-gray-900 sm:block">
                    Copy URL
                  </button>
                  <a href="#" className="rounded-md bg-Pri-Dark px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">
                    Share this
                  </a>

                  <Menu as="div" className="relative sm:hidden">
                    <Menu.Button className="-m-3 block p-3">
                      <span className="sr-only">More</span>
                      <EllipsisVerticalIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
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
                      <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <button type="button" className={classNames(active ? "bg-gray-50" : "", "block w-full px-3 py-1 text-left text-sm leading-6 text-gray-900")}>
                              Copy URL
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a href="#" className={classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900")}>
                              Edit
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {/* Invoice summary */}
              <div className="lg:col-start-3 lg:row-end-1">
                <h2 className="sr-only">Summary</h2>
                <div className="rounded-lg bg-white shadow-sm ring-1 ring-gray-900/5">
                  <dl className="flex flex-wrap">
                    <div className="flex-auto pl-6 pt-6">
                      <dt className="text-sm font-semibold leading-6 text-gray-900">Amount</dt>
                      <div className="mt-1 text-base font-semibold leading-6 text-gray-900 flex flex-row gap-1">
                        <div> {internship?.salary.currency}</div>
                        <div> {internship?.salary.max}</div>
                      </div>
                    </div>
                    <div className="flex-none self-end px-6 pt-4">
                      <dt className="sr-only">Status</dt>
                      <dd className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">
                        {internship?.remote === true ? "Remote" : "Work from office"}
                      </dd>
                    </div>
                    <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                      <dt className="flex-none">
                        <span className="sr-only">Client</span>
                        <UserCircleIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                      </dt>
                      <dd className="text-sm font-medium leading-6 text-gray-900">{internship?.company.name}</dd>
                    </div>
                    <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                      <dt className="flex-none">
                        <span className="sr-only">{internship?.employmentType}</span>
                        <CalendarDaysIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                      </dt>
                      <dd className="text-sm leading-6 text-gray-500">
                        <time dateTime="2023-01-31">{internship?.company.description}</time>
                      </dd>
                      <dd className="text-sm leading-6 text-gray-500">
                        <time dateTime="2023-01-31">{internship?.company.size}</time>
                      </dd>
                    </div>
                    <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                      <dt className="flex-none">
                        <span className="sr-only">Status</span>
                        <CreditCardIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                      </dt>
                      <dd className="text-sm leading-6 text-gray-500">{internship?.company.industry}</dd>
                    </div>
                    <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                      <dt className="flex-none">
                        <span className="sr-only">Status</span>
                        <CreditCardIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
                      </dt>
                      <dd className="text-sm leading-6 text-gray-500">{internship?.company.website}</dd>
                    </div>
                  </dl>
                  <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                      Know more about the company <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Invoice */}
              <div className="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
                <h2 className="text-base font-semibold leading-6 text-gray-900">About this role</h2>
                <dl className="mt-6 grid grid-cols-1 text-sm leading-6 sm:grid-cols-2">
                  <div className="sm:pr-4">
                    <dt className="inline text-gray-500">Issued on</dt>{" "}
                    <dd className="inline text-gray-700">
                      <time dateTime="2023-23-01">January 23, 2023</time>
                    </dd>
                  </div>
                  <div className="mt-2 sm:mt-0 sm:pl-4">
                    <dd className="inline text-gray-700">
                      <time dateTime="2023-31-01">Employment type: </time>
                    </dd>
                    <dt className="inline text-gray-500">{internship?.employmentType}</dt>{" "}
                  </div>
                </dl>
                <div className="mt-16 w-full whitespace-nowrap text-left text-sm leading-6 flex flex-col gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="border-b border-gray-200 text-gray-900">
                      <div className="px-0 py-3 text-2xl font-sans font-semibold">More about this role</div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-wrap text-gray-900">{internship?.description}</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="border-b border-gray-200 text-gray-900">
                      <div className="px-0 py-3 font-semibold">Desired Skills</div>
                    </div>
                    <div>
                      {internship?.skills.map((item, index) => (
                        <>
                          <p>- {item}</p>
                        </>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="border-b border-gray-200 text-gray-900">
                      <div className="px-0 py-3 font-semibold">Requirements</div>
                    </div>
                    <div>
                      {internship?.requirements.map((item, index) => (
                        <>
                          <p>- {item}</p>
                        </>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="border-b border-gray-200 text-gray-900">
                      <div className="px-0 py-3 font-semibold">Responsibilities</div>
                    </div>
                    <div>
                      {internship?.responsibilities.map((item, index) => (
                        <>
                          <p>- {item}</p>
                        </>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="border-b border-gray-200 text-gray-900">
                      <div className="px-0 py-3 font-semibold">Benifits</div>
                    </div>
                    <div>
                      {internship?.benefits.map((item, index) => (
                        <>
                          <p>- {item}</p>
                        </>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-row ">
                    <button
                      className="ml-auto bg-Pri-Dark rounded-lg text-white px-5 py-2.5"
                      onClick={(e) => {
                        ApplyForInternship();
                      }}
                    >
                      Apply now
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:col-start-3">
                {/* Activity feed */}
                <h2 className="text-sm font-semibold leading-6 text-gray-900">Hiring process</h2>
                <ul role="list" className="mt-6 space-y-6">
                  {activity.map((activityItem, activityItemIdx) => (
                    <li key={activityItem.id} className="relative flex gap-x-4">
                      <div className={classNames(activityItemIdx === activity.length - 1 ? "h-6" : "-bottom-6", "absolute left-0 top-0 flex w-6 justify-center")}>
                        <div className="w-px bg-gray-200" />
                      </div>

                      <>
                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                          <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                        </div>
                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500">
                          <span className="font-medium text-gray-900">{activityItem.person.name}</span> {activityItem.type} the invoice.
                        </p>
                        <time dateTime={activityItem.dateTime} className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                          {activityItem.date}
                        </time>
                      </>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </DashboardLayout>
    </Fragment>
  );
}
