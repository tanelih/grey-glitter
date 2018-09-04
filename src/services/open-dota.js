import m from "mithril"

const USER_IDS = (process.env.USER_IDS || "").split(",")

export const OpenDotaService = {
  users: [],
  matches: [],
  getUsers: async () => {
    OpenDotaService.users = await Promise.all(
      USER_IDS.map((id) =>
        m.request(`https://api.opendota.com/api/players/${id}`, { background: true })
      )
    )
  },
  getMatches: async () => {
    const qs = m.buildQueryString({
      limit: 10,
      included_account_id: USER_IDS
    })
    OpenDotaService.matches = await m.request(
      `https://api.opendota.com/api/players/${USER_IDS[0]}/matches?${qs}`
    )
  }
}
