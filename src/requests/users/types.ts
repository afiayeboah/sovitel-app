export type UserType =
  | "admin" // Sovitel Super User
  | "customer"; // Sovitel Customer

export type User = {
  id: string;
  email: string;
  userType: UserType;
  active: boolean;
  firstName?: string;
  lastName?: string;
  emailVerified: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}