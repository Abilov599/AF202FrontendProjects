import React, { useEffect, useState } from "react";
import { getUser } from "../../service/countries-cities.service";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    setUsers(await getUser());
  };

  useEffect(() => {
    getUsers();
  }, []);

  users.map((user) => console.log(user.email));

  return (
    <div>
      <ul>
        {users.map((user) => {
          return <li key={`${user.id}`}>{`${user.mail}`}</li>;
        })}
      </ul>
    </div>
  );
};

export default UsersPage;
