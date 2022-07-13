import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UsersList } from "./UserList";
import { UIActions } from "./../../../actions";

export const UsersPage = () => {
  const dispatch = useDispatch();
  const pageFilters = {
    usersFilters: { limit: 10 },
  };
  useEffect(() => {
    dispatch(UIActions.fetchDataAdminUsersPage(pageFilters));
  }, []);
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="main-box clearfix">
          <div className="table-responsive">
            <table className="table user-list text-center">
              <thead>
                <tr>
                  <th>
                    <span>User</span>
                  </th>
                  <th>
                    <span>Created</span>
                  </th>
                  <th className="text-center">
                    <span>Status</span>
                  </th>
                  <th>
                    <span>Email</span>
                  </th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <UsersList />
              </tbody>
            </table>
          </div>
          <ul className="pagination pull-right">
            <li>
              <a href="#">
                <i className="fa fa-chevron-left" />
              </a>
            </li>
            <li>
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li>
              <a href="#">4</a>
            </li>
            <li>
              <a href="#">5</a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-chevron-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
