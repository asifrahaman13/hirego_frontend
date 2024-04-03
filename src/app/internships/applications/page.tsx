"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import DashboardLayout from "../../profile-dashboard/layout";

import { InternshipRepository } from "@/infrastructure/repositories/InternshipRepository";
import { InternshipService } from "@/domain/usecases/InternshipService";
import { Job, JobApplication } from "@/domain/entities/InternshipEntity";
import Link from "next/link";
import { InternshipInterface } from "@/domain/interfaces/internshipInterface";

const internshipRepository = new InternshipRepository();
const internshipInterface:InternshipInterface = new InternshipService(internshipRepository);

const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Designer",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    role: "Director of Product",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
];
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
      <DashboardLayout>
        <div className="h-screen">
          <div className="text-xl font-sans font-semibold m-4">My applications</div>
          <ul role="list" className="divide-y bg-white rounded-lg p-8 divide-gray-100">
            {myInternshipApplication.map((person) => (
              <li key={person.jobID} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> */}
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{person.id}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.jobID}</p>
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
      </DashboardLayout>
    </>
  );
};

export default Page;
