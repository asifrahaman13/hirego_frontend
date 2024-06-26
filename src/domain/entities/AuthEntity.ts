class TokenEntity {
  code: number;
  token: string;
  constructor(code: number, token: string) {
    this.code = code;
    this.token = token;
  }
}

class SuccessEntity {
  code: number;
  data: any;
  constructor(code: number, data: string) {
    this.code = code;
    this.data = data;
  }
}

export { TokenEntity, SuccessEntity };
