import { SuccessEntity } from "../entities/AuthEntity";

export interface InternshipInterface {
  getAllInternships(access_token: string): Promise<SuccessEntity | undefined>;
  getInternshipById(access_token: string, id: string): Promise<SuccessEntity | undefined>;
  applyForInternship(access_token: string, id: string): Promise<SuccessEntity | undefined>;
  getAppliedInternships(access_token: string): Promise<SuccessEntity | undefined>;
}
