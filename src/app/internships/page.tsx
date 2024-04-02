import React from "react";
import AllInternshipSeekers from "./InternshipComponents/AllInternshipSeekers";

import DashboardLayout from "@/app/profile-dashboard/layout";

const page = () => {
  return (
    <>
      <DashboardLayout>
        {" "}
        <AllInternshipSeekers />
      </DashboardLayout>
    </>
  );
};

export default page;
