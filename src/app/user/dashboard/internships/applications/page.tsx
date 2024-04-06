"use client";
/* eslint-disable @next/next/no-img-element */
import { JobApplication } from "@/domain/entities/InternshipEntity";
import { InternshipInterface } from "@/domain/interfaces/internshipInterface";
import { InternshipService } from "@/domain/usecases/InternshipService";
import { InternshipRepository } from "@/infrastructure/repositories/InternshipRepository";
import { useEffect, useState } from "react";
import DashboardLayout from "../../layout";
const internshipRepository = new InternshipRepository();
const internshipInterface: InternshipInterface = new InternshipService(internshipRepository);

const Page = () => {
  const [myInternshipApplication, setMyInternshipApplication] = useState<JobApplication[]>([]);
  useEffect(() => {
    async function fetchInternships() {
      const access_token = localStorage.getItem("access_token") || null;
      if (access_token) {
        const response = await internshipInterface.getAppliedInternships(access_token);
        if (response?.code === 200) {
          console.log(response.data);
          setMyInternshipApplication(response?.data);
        }
      }
    }
    fetchInternships();
  }, []);
  return (
    <>
      <div className="h-screen">
        <div className="text-xl font-sans font-semibold m-4">My applications</div>
        <ul role="list" className="divide-y  rounded-lg  divide-gray-100 flex flex-col gap-12">
          {myInternshipApplication?.map((person) => (
            <li key={person.jobID} className="flex justify-between px-8 bg-white flex-col gap-6 py-5 ">
              <div className="flex min-w-0 gap-x-4 flex-col gap-2">
                <div className=" py-2.5 font-semibold font-sans text-gray-600">{person.companyName}</div>
                <div className="flex gap-6 items-center">
                  {" "}
                  <div className="px-5 py-2.5 bg-purple-50 text-purple-600 rounded-lg">{person.title}</div>
                  <div className="px-5 py-2.5 bg-blue-50 text-blue-600 rounded-lg">{person.location}</div>
                </div>

                {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> */}
                <div className="min-w-0 flex-auto">
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.jobID}</p>
                </div>
                <div>{person.description}</div>
              </div>
              {/* <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                  {person.lastSeen ? (
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                    </p>
                  ) : (
                    <div className="mt-1 flex items-center gap-x-1.5">
                      <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <p className="text-xs leading-5 text-gray-500">Online</p>
                    </div>
                  )}
                </div> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Page;
