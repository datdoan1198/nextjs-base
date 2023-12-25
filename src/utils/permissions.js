import permissionUser from '@/app/(fontend)/(main)/news/permission';
import permissionEmployee from '@/app/(fontend)/(main)/dashboard/permission';

export const PERMISSION_PAGE = [];
PERMISSION_PAGE['/news'] = permissionUser();
PERMISSION_PAGE['/dashboard'] = permissionEmployee();
