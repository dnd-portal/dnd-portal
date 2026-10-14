import { page } from "./page";

export { features } from "./features";
export { progression } from "./progression";
export { page } from "./page";

export const barbarian35e = {
  ...page,
  availableEditions: ["5.5e", "5e", "4e", "3.5e", "3e"] as const,
};

export default barbarian35e;
