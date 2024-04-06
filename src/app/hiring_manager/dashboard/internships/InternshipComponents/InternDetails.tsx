/* eslint-disable @next/next/no-img-element */
"use client";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { LinkIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import { InternshipRepository } from "@/infrastructure/repositories/InternshipRepository";
import { InternshipService } from "@/domain/usecases/InternshipService";
import { Job } from "@/domain/entities/InternshipEntity";

const internshipRepository = new InternshipRepository();
const internshipInterface = new InternshipService(internshipRepository);

interface InternDetailsProps {
  blur: boolean;
  username: string;
  should_open: boolean;
}

const InternDetails: React.FC<InternDetailsProps> = ({ blur, username, should_open }) => {
 
  const [open, setOpen] = useState(true);
  const [internship, setInternship] = useState<Job | null>(null);

  useEffect(() => {
    async function getInsternDetails() {
      try {
        const access_token = localStorage.getItem("access_token") || null;
        if (access_token) {
          const response = await internshipInterface.getInternshipById(access_token, "");
          if (response?.code === 200) {
            setInternship(response.data);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
    getInsternDetails();
  }, [username]);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={setOpen}>
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
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-4xl backdrop-blur-2xl">
                    <form className="flex h-full flex-col divide-y divide-gray-200  bg-white shadow-xl">
                      <div className="h-0 flex-1 overflow-y-auto">
                        <div className="px-4 py-6 sm:px-6">
                          <div className="flex items-center justify-between">
                            <Dialog.Title className="leading-6 text-xl font-semibold font-sans">{username}sadf</Dialog.Title>
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
                            <p className="text-sm ">Software developer intern</p>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="divide-y divide-gray-200 px-4 sm:px-6">
                            <div className="space-y-6 pb-5 pt-6">
                              <div>
                                <label htmlFor="project-name" className="block text-medium  font-semibold leading-6">
                                  About me
                                </label>
                                <div className="mt-2">
                                  <div id="project-name" className=" w-full rounded-md border-0 text-justify ">
                                  {internship?.description} 
                                  </div>
                                </div>
                              </div>
                              <div>
                                <label htmlFor="description" className="block text-medium  font-semibold leading-6 ">
                                  Projects done
                                </label>
                                <div className="mt-2">
                                  {" "}
                                  <div id="project-name" className=" w-full rounded-md border-0 text-justify ">
                                    I am a passionate software developer. I am currently working as a software developer intern at the Foos foundation. I am interested in the new tools and
                                    technologies coming every months! I am a passionate software developer. I am currently working as a software developer intern at the Foos foundation. I am
                                    interested in the new tools and technologies coming every months! I am a passionate software developer. I am currently working as a software developer intern at the
                                    Foos foundation. I am interested in the new tools and technologies coming every months!
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-row gap-2 text-msm flex-wrap">
                                <div className="bg-yellow-300 rounded-lg px-2 py-1">HTML</div>
                                <div className="bg-red-300 rounded-lg px-2 py-1">Python</div>
                                <div className="bg-green-300 rounded-lg px-2 py-1">JavaScript</div>
                                <div className="bg-blue-300 rounded-lg px-2 py-1">Dart</div>
                                <div className="bg-red-300 rounded-lg px-2 py-1">Npm package</div>
                              </div>
                              <div></div>
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
                          className="ml-4 inline-flex justify-center rounded-md bg-Pri-Dark px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
    </>
  );
};

export default InternDetails;
