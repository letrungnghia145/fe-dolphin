import {
  AdminDashBoardPage,
  AdminUserInfoPage,
  CategoriesPage,
  PostsPage,
  UsersPage
} from "../pages";

const prefix = "/admin";

export const adminRoutes = [
  {
    path: `${prefix}/dashboard`,
    exact: true,
    roles: ["ROLE_ADMIN"],
    component: (props) => <AdminDashBoardPage {...props} />,
  },
  {
    path: `${prefix}/category`,
    exact: false,
    roles: ["ROLE_ADMIN"],
    component: (props) => <CategoriesPage {...props} />,
  },
  {
    path: `${prefix}/users`,
    exact: true,
    roles: ["ROLE_ADMIN"],
    component: (props) => <UsersPage {...props} />,
  },
  {
    path: `${prefix}/users/info/:id`,
    exact: true,
    roles: ["ROLE_ADMIN"],
    component: (props) => <AdminUserInfoPage {...props} />,
  },
  {
    path: `${prefix}/profile/:id`,
    exact: true,
    roles: ["ROLE_ADMIN"],
    component: (props) => <AdminUserInfoPage {...props} />,
  },
  {
    path: `${prefix}/posts`,
    exact: true,
    roles: ["ROLE_ADMIN"],
    component: (props) => <PostsPage {...props} />,
  },
];
