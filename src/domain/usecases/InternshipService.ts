import { InternshipRepository } from "@/infrastructure/repositories/InternshipRepository";

class InternshipService {
  private internshipRepository: InternshipRepository;

  constructor(internshipRepository: InternshipRepository) {
    this.internshipRepository = internshipRepository;
  }

  async getAllInternships(access_token: string) {
    return this.internshipRepository.getAllInternships(access_token);
  }

  async getInternshipById(access_token: string, id: string) {
    return this.internshipRepository.getInternshipById(access_token, id);
  }

  async applyForInternship(access_token: string, id: string, jobID: string, Username: string, companyName: string, jobTitle: string, description: string, location: string) {
    return this.internshipRepository.applyForInternship(access_token, id, jobID, Username, companyName, jobTitle, description, location);
  }

  async getAppliedInternships(access_token: string) {
    return this.internshipRepository.getAppliedInternships(access_token);
  }

  async getAllApplicants(access_token: string, jobID: string) {
    return this.internshipRepository.getAllApplicants(access_token, jobID);
  }

  async getAllJobPosting(access_token: string) {
    return this.internshipRepository.getAllJobPosting(access_token);
  }
}

export { InternshipService };
