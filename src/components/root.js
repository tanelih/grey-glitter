import m from "mithril"

export class Root {
  view() {
    return m("div", [
      m(
        "a",
        {
          href: "/user",
          oncreate: m.route.link,
          onupdate: m.route.link
        },
        "Link"
      )
    ])
  }
}
