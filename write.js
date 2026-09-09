import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({err:"请求方式错误"})
  const { game } = req.body

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  )

  const { error } = await supabase
    .from('game_info')
    .update({ game })
    .eq('id', 1)

  if(error) return res.status(500).json({err:error.message})
  res.json({ok:true})
}
