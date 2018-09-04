import m from "mithril"
import moment from "moment"

import { OpenDotaService } from "../services/open-dota"

export class MatchList {
  async oninit() {
    await OpenDotaService.getMatches()
    m.redraw()
  }
  view() {
    return (
      <ul class="list-group">
        {OpenDotaService.matches.map((match) => (
          <li class="list-group-item d-flex">
            <a
              class="w-100"
              target="_blank"
              href={`https://www.opendota.com/matches/${match.match_id}`}
            >
              <small class="text-muted">
                {moment.unix(match.start_time).format("DD.MM.YYYY")}
                &nbsp;
                {moment.unix(match.start_time).format("HH:mm:ss")}
              </small>
            </a>
            <span class="align-self-end">
              <small class="text-muted">{this.isMatchAWin(match) ? "WIN" : "LOSS"}</small>
            </span>
          </li>
        ))}
      </ul>
    )
  }
  isMatchAWin(match) {
    return (
      (match.player_slot < 128 && match.radiant_win) ||
      (match.player_slot >= 128 && !match.radiant_win)
    )
  }
}
