import m from "mithril"

import { Root } from "./components/root"

m.route.prefix("/grey-glitter")
m.route(document.getElementById("app"), "/", { "/": Root })
