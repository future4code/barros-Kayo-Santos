import app from "./app"
import createUser from './endpoints/createUser'
import testeAddress from "./endpoints/testeAddress"
import getAddressInfo from "./services/getAddressInfo"

app.post('/users/signup', createUser)
app.post("/users/create", createUser)