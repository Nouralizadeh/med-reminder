export interface Profile {
  id: string; // auth.users.id
  fullName: string;
  avatar?: string;
  birthDate?: string; // YYYY-MM-DD
  gender?: string;
  createdAt: string; // timestamp
}
