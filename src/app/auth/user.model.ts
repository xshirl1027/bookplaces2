export class User {
  constructor(
    public id: string,
    public displayName: string,
    public email: string,
    private _token: string,
    public tokenExpirationDate: Date,
    public idToken: string
  ) {}

  get token() {
    if (!this.tokenExpirationDate || this.tokenExpirationDate <= new Date()) {
      return null;
    }
    return this._token;
  }
}
