import { createClient } from '@supabase/supabase-js'

export default async function handler(req, res) {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  )
  const { data } = await supabase
    .from('game_info')
    .select('*')
    .eq('id', 1)
    .single()

  res.status(200).json(data)
}
