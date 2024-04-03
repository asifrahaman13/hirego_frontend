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

  async applyForInternship(access_token: string, id: string) {
    return this.internshipRepository.applyForInternship(access_token, id);
  }

  async getAppliedInternships(access_token: string) {
    return this.internshipRepository.getAppliedInternships(access_token);
  }
}

export { InternshipService };