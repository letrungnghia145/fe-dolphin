export const InfoBoard = (props) => {
  const { user } = props;
  console.log(user)
  return (
    <>
      <h2>
        <i className="fa fa-address-card" aria-hidden="true"></i> User Info
      </h2>
      <table className="table table-borderless">
        <tbody>
          <tr>
            <th>Id:</th>
            <td>{user.id}</td>
          </tr>
          <tr>
            <th>Full Name:</th>
            <td>{user.fullName}</td>
          </tr>
          <tr>
            <th>Username:</th>
            <td>{user.username}</td>
          </tr>
          <tr>
            <th>Message:</th>
            <td>{user.message}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
