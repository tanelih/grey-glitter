import m from "mithril"

import { UserList } from "../components/user-list"
import { MatchList } from "../components/match-list"

export class Root {
  view() {
    return (
      <div
        class="container d-flex flex-column h-100 justify-content-center"
        style="max-width: 768px;"
      >
        <UserList />
        <MatchList />
      </div>
    )
  }
}
