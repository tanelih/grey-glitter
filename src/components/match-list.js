import m from "mithril"

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
                {new Date(match.start_time * 1000).toLocaleDateString()}
                &nbsp;
                {new Date(match.start_time * 1000).toLocaleTimeString()}
              </small>
            </a>
            <span class="align-self-end">
              <small>{this.isMatchAWin(match) ? <div>&#x1F917;</div> : <div>&#x1F621;</div>}</small>
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
