import { RequestMethod } from '@nestjs/common';
import { UserRole } from '../user/entities/user-role.enum';

export interface AccessRule {
  path: string;
  method: RequestMethod | 'ANY';
  roles: UserRole[];
}

export const ACCESS_CONTROL_MAP: AccessRule[] = [
  { path: '/api/users', method: 'ANY', roles: [UserRole.ADMIN] },
  { path: '/api/inventory', method: RequestMethod.GET, roles: [UserRole.ADMIN, UserRole.INVENTORY, UserRole.SALES] },
  { path: '/api/inventory', method: RequestMethod.POST, roles: [UserRole.ADMIN, UserRole.INVENTORY] },
  { path: '/api/financial', method: 'ANY', roles: [UserRole.ADMIN, UserRole.FINANCIAL] },
  { path: '/api/sales', method: 'ANY', roles: [UserRole.ADMIN, UserRole.SALES] },
];