export interface MedicationUser {
  id: string;
  profileId: string;
  name: string;
  relation: "self" | "child" | "parent" | "other";
  createdAt: string;
}
