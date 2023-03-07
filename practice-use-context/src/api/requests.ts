import axios from "axios";

export const getUsersRequests = async () =>
  await axios.get("https://jsonplaceholder.typicode.com/users");
