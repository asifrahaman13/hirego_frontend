/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { InternshipRepository } from "@/infrastructure/repositories/InternshipRepository";
import { InternshipService } from "@/domain/usecases/InternshipService";
import { Job } from "@/domain/entities/InternshipEntity";
import Link from "next/link";

const internshipRepository = new InternshipRepository();
const internshipInterface = new InternshipService(internshipRepository);

export default function AllInternshipSeekers() {
  const [internships, setInternships] = useState<Job[]>([]);

  useEffect(() => {
    async function fetchInternships() {
      const access_token = localStorage.getItem("access_token") || null;
      if (access_token) {
        const response = await internshipInterface.getAllInternships(access_token);
        if (response?.code === 200) {
          setInternships(response.data);
        }
      }
    }

    fetchInternships();
  }, []);

  return (
    <div className="flex w-screen h-screen   flex-row bg-gray-50">
      <div className="w-3/4 flow-root overflow-y-scroll h-full no-scrollbar">
        <div className="-mx-4 -my-2 w-full overflow-x-auto sm:-mx-6 px-12 lg:-mx-8">
          <div className="text-xl m-4 font-semibold font-sans">Available internships</div>
          <div className="flex flex-col w-full gap-4">
            {internships.map((person) => (
              <>
                <Link href={`/internships/${person.jobID}`} className="bg-white w-full border gap-4 flex flex-col rounded-lg px-4 py-4">
                  <div key={person.jobID} className="  flex gap-8 ">
                    <div className="w-full  p-3 flex flex-row gap-2 items-center">
                      <img className="h-11  rounded-full" src={person.jobID} alt="" />
                      <div className="font-semibold text-lg font-sans" > {person.title}</div>
                      <div className="text-sm">{person.jobID}</div>
                    </div>

                    <div className="p-3 flex items-center gap-2">
                      <div className="bg-green-50 px-2 py-1  text-xs font-medium text-green-700 rounded-md ring-1 ring-inset flex flex-row gap-1 ring-green-600/20 ">
                        <div>{person.salary.max}</div>
                        <div>{person.salary.currency}</div>
                      </div>
                      <span className="bg-blue-50 px-2 py-1  text-xs font-medium text-blue-700 rounded-md ring-1 ring-inset ring-green-600/20 ">{person.industry}</span>
                    </div>
                  </div>

                  <div className="flex  flex-row justify-start items-start text-start  ">
                    {person.description}
                    ....
                  </div>
                  <div className="flex flex-row gap-2 text-msm flex-wrap">
                    {person.skills.map((skill) => (
                      <>
                        <div className="bg-yellow-100 text-yellow-500 rounded-lg px-2 py-1">{skill}</div>
                      </>
                    ))}
                  </div>
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
