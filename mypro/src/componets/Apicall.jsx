import { useEffect, useState } from "react";
import axios from "axios";
import Logout from "./Logout";

function Apicall() {
  const [data, setData] = useState(null);
  const token = localStorage.getItem("token"); // Get the token from local storage

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:3000/protected", {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((response) => {
          setData(response.data); // Handle the response data
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [token]);

  return (
    <div>
      {data ? (
        <div>
          <p>Message: {data.message}</p>
          <p>User: {data.user.username}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Logout />
    </div>
  );
}

export default Apicall;
