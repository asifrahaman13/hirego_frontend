import { AuthRepository } from "@/infrastructure/repositories/AuthRepository";

class AuthService {
  private authRepository: AuthRepository;

  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async signup(email: string, username: string, password: string) {
    return this.authRepository.signup(email, username, password);
  }

  async login(username: string, password: string) {
    return this.authRepository.login(username, password);
  }

  async hr_signup(email: string, username: string, password: string) {
    return this.authRepository.hr_signup(email, username, password);
  }

  async hr_login(username: string, password: string) {
    return this.authRepository.hr_login(username, password);
  }
}

export { AuthService };
