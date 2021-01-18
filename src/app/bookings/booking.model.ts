export class Booking {
  constructor(
    public id: string,
    public placeId: string,
    public userEmail: string,
    public placeTitle: string,
    public imageDataUrl: string,
    public firstName: string,
    public lastName: string,
    public guestNumber: number,
    public bookedFrom: Date,
    public bookedTo: Date
  ) {}
}
