export enum UserRole {
  ADMIN = 'admin',
  SALES = 'sales',
  INVENTORY = 'inventory',
  FINANCIAL = 'financial',
}

export const UserRoleLabels: Record<UserRole, string> = {
  [UserRole.ADMIN]: 'Administrador',
  [UserRole.SALES]: 'Vendas',
  [UserRole.INVENTORY]: 'Estoque',
  [UserRole.FINANCIAL]: 'Financeiro',
};