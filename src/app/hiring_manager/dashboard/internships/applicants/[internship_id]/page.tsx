"use client";
/* eslint-disable @next/next/no-img-element */
import { InternshipInterface } from "@/domain/interfaces/internshipInterface";
import { InternshipService } from "@/domain/usecases/InternshipService";
import { InternshipRepository } from "@/infrastructure/repositories/InternshipRepository";
import { useEffect, useState } from "react";
import { User } from "@/domain/entities/InternshipEntity";
const internshipRepository = new InternshipRepository();
const internshipInterface: InternshipInterface = new InternshipService(internshipRepository);

export default function Page({ params }: { params: { internship_id: string } }) {
  const [myInternshipApplication, setMyInternshipApplication] = useState<User[]>([]);
  useEffect(() => {
    async function fetchInternships() {
      const access_token = localStorage.getItem("access_token") || null;
      if (access_token) {
        const response = await internshipInterface.getAllApplicants(access_token, params.internship_id);
        if (response?.code === 200) {
          console.log(response.data);
          setMyInternshipApplication(response?.data);
        }
      }
    }
    fetchInternships();
  }, [params.internship_id]);
  return (
    <>
      <div className="h-screen">
        <div className="text-xl font-sans font-semibold m-4">All applicants</div>
        <ul role="list" className="divide-y  rounded-lg  divide-gray-100 flex flex-col gap-12">
          {myInternshipApplication?.map((person) => (
            <li key={person.username} className="flex justify-between px-8 bg-white flex-col gap-6 py-5 ">
              <div className="flex min-w-0 gap-x-4 flex-col gap-2">
                <div className="items-center flex gap-6">
                  <div className="font-semibold text-xl flex flex-row items-center font-sans text-gray-600">
                    {" "}
                    {person.firstname} {person.lastname}{" "}
                  </div>

                  <div className=" font-semibold font-sans text-gray-600">{person.username}</div>
                </div>

                {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> */}
                <div className="min-w-0 flex-auto"></div>
                <div>Address: {person.address}</div>
                <div className="flex gap-6 items-center">
                  {" "}
                  <div className="px-5 py-2.5 bg-purple-50 text-purple-600 rounded-lg">{person.email}</div>
                  <div className="px-5 py-2.5 bg-blue-50 text-blue-600 rounded-lg">{person.phonenumber}</div>
                  <div className="px-5 py-2.5 bg-blue-50 text-blue-600 rounded-lg">{person.country}</div>
                </div>
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
}
