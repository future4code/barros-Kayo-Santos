import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { orderUser } from "./endpoints/orderUser";
import { searchUserByName } from "./endpoints/searchUserByName";
import { searchUserByType } from "./endpoints/searchUserByType";
import { userPerPage } from "./endpoints/userPerPage";

app.get("/users/name", searchUserByName)
app.get("/users/:type", searchUserByType)
app.get("/usersorder", orderUser)
app.get("/users", userPerPage)
app.get("/allusers",getAllUsers)