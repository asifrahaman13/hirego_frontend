"use client";
/* eslint-disable @next/next/no-img-element */
import { InternshipInterface } from "@/domain/interfaces/internshipInterface";
import { InternshipService } from "@/domain/usecases/InternshipService";
import InternDetails from "../../InternshipComponents/InternDetails";
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

  const [key, setKey] = useState(0);
  const [username, setUserName] = useState("");

  function handleUserClick(person: string) {
    setKey(key + 1);
    setUserName(person);
  }

  return (
    <>
      <InternDetails key={key} blur={true} username={username} should_open={true} />

      <div className="h-screen">
        <div className="text-xl font-sans font-semibold m-4">All applicants</div>
        <ul role="list" className="divide-y  rounded-lg  divide-gray-100 flex flex-col gap-4">
          {myInternshipApplication?.map((person, index) => (
            <button
              onClick={() => {
                handleUserClick(person.username);
              }}
              key={index}
              className="flex justify-between px-8  bg-white flex-col gap-6 py-5 "
            >
              <div className="flex min-w-0 gap-x-4 flex-col gap-2">
                <div className="items-center flex gap-6">
                  <div className="font-semibold text-xl flex flex-row items-center font-sans text-gray-600">
                    {" "}
                    {person.firstname} {person.lastname}{" "}
                  </div>

                  <div className=" font-semibold font-sans text-gray-600">{person.username}</div>
                </div>

                <div className="min-w-0 flex-auto"></div>
                <div>Address: {person.address}</div>
                <div className="flex gap-6 items-center">
                  {" "}
                  <div className="px-5 py-2.5 bg-purple-50 text-purple-600 rounded-lg">{person.email}</div>
                  <div className="px-5 py-2.5 bg-blue-50 text-blue-600 rounded-lg">{person.phonenumber}</div>
                  <div className="px-5 py-2.5 bg-blue-50 text-blue-600 rounded-lg">{person.country}</div>
                </div>
              </div>
            </button>
          ))}
        </ul>
      </div>
    </>
  );
}
