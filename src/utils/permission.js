// 用户角色与asyncRoutes中路由的对应关系
const roleToRoutes = {
  coustomer: [
    { name: 'Products' },
    { name: 'ProductsList' },
    { name: 'ProductsAdd' },
  ],
  admin: [
    { name: 'Products' },
    { name: 'ProductsList' },
    { name: 'ProductsAdd' },
    { name: 'Category' },
  ],
};

/**
 * 过滤掉对应类别的用户没有权限访问的路由
 * @param {String} role
 * @param {Array} routes
 */
export default function getMenuRoutes(role, routes) {
  const allowRoutesName = roleToRoutes[role].map((it) => it.name);
  const res = routes.filter((route) => {
    const routeClone = route;
    if (allowRoutesName.includes(route.name)) {
      const newChild = route.children.filter((child) => allowRoutesName.includes(child.name));
      routeClone.children = newChild;
      return true;
    }
    return false;
  });
  return res;
}
