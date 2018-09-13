import m from "mithril"

import { OpenDotaService } from "../services/open-dota"

export class UserList {
  async oninit() {
    await OpenDotaService.getUsers()
    m.redraw()
  }
  view() {
    return (
      <div class="card p-3 mb-3">
        <div class="card-deck w-100 justify-content-center align-self-center">
          {OpenDotaService.users
            .sort((a, b) => a.mmr_estimate.estimate - b.mmr_estimate.estimate)
            .map((user) => (
              <div key={user.profile.account_id} class="card">
                <img class="card-img-top" src={user.profile.avatarfull} />
                <div class="card-footer">
                  <center>
                    <small class="text-muted">{user.mmr_estimate.estimate}</small>
                  </center>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  }
}
