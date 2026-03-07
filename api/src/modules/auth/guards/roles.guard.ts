import { Injectable, CanActivate, ExecutionContext, ForbiddenException, RequestMethod } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from 'src/modules/user/entities/user-role.enum';
import { IS_PUBLIC_KEY } from '../public.decorator';

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

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const { method, url } = request;

    if (!user) {
      return false;
    }

    const rule = ACCESS_CONTROL_MAP.find(route => 
      url.startsWith(route.path) && 
      (route.method === 'ANY' || route.method === method)
    );

    if (!rule) {
      return true;
    }

    const hasPermission = rule.roles.includes(user.role);

    if (!hasPermission) {
      throw new ForbiddenException(`Acesso negado: o perfil ${user.role} não possui permissão para esta rota.`);
    }

    return true;
  }
}