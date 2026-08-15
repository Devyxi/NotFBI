const INVITE_URL = 'https://discord.com/oauth2/authorize?client_id=1065103018212732938&permissions=268560404&integration_type=0&scope=bot'

export default function Invite() {
  window.location.href = INVITE_URL
  return <p>Redirecting...</p>
}