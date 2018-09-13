import m from "mithril"

import { UserList } from "../components/user-list"
import { MatchList } from "../components/match-list"

export class Root {
  view() {
    return (
      <div
        class="container d-flex flex-column justify-content-center my-3"
        style="min-height: 100vh;"
      >
        <UserList />
        <MatchList />
      </div>
    )
  }
}
