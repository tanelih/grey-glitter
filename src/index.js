import m from "mithril"

import { Root } from "./components/root"

m.route.prefix("")
m.route(document.getElementById("app"), "/", { "/": Root })
