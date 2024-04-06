import { SuccessEntity } from "@/domain/entities/AuthEntity";
import { InternshipInterface } from "@/domain/interfaces/internshipInterface";
import axios from "axios";

class InternshipRepository implements InternshipInterface {
  async getAllInternships(access_token: string) {
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;
    console.log(access_token);

    const response = await axios.get(`${backend_url}/user/intenships`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 200) {
      return new SuccessEntity(200, response.data.data);
    }
  }

  async getInternshipById(access_token: string, id: string) {
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

    const response = await axios.post(
      `${backend_url}/user/intenship`,
      {
        jobId: id,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    if (response.status === 200) {
      return new SuccessEntity(200, response.data.data);
    }
  }

  async applyForInternship(access_token: string, id: string, jobID: string, Username: string, companyName: string, jobTitle: string, description: string, location: string) {
    console.log("asdfasdfasdfsdf");
    console.log(access_token, id, jobID, Username, companyName, jobTitle, description, location);
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

    const response = await axios.post(
      `${backend_url}/user/internship/apply`,
      {
        jobId: id,
        jobID: jobID,
        Username: Username,
        companyName: companyName,
        jobTitle: jobTitle,
        description: description,
        location: location,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    if (response.status === 200) {
      return new SuccessEntity(200, response.data.data);
    }
  }

  async getAppliedInternships(access_token: string) {
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

    const response = await axios.get(`${backend_url}/user/internship/applied`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 200) {
      return new SuccessEntity(200, response.data.data);
    }
  }

  async getAllApplicants(access_token: string, jobID: string) {
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

    const response = await axios.post(
      `${backend_url}/hr/applicants`,
      {
        jobId: jobID,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    if (response.status === 200) {
      return new SuccessEntity(200, response.data.data);
    }
  }

  async getAllJobPosting(access_token: string) {
    const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

    const response = await axios.get(`${backend_url}/hr/jobposting`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (response.status === 200) {
      return new SuccessEntity(200, response.data.data);
    }
  }
}

export { InternshipRepository };
