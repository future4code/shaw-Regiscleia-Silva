export enum Role {
  normal = "NORMAL",
  evento = "EVENTO",
}

export class Post {
  constructor(
    private id: string,
    public photo: string,
    public description: string,
    public date_create: Date,
    public role: Role
  ) {}
}
