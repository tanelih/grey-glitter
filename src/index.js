import m from "mithril"

import { Root } from "./components/root"
import { User } from "./components/user"

m.route.prefix("")
m.route(document.getElementById("app"), "/", {
  "/": Root,
  "/user": User
})
