import { UserRole, UserRoleLabels } from "../entities/user-role.enum";



export const getUserRoles = () => {
  return Object.values(UserRole).map(role => ({
    value: role,
    label: UserRoleLabels[role],
  }));
};