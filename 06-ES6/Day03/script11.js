import { fetchUsers } from "./api.js";

try {
    const users = await fetchUsers();
    users.forEach((user) => {
      console.log(user.name);
    });
} catch (error) {
    console.error("Error:", error.message);
}
