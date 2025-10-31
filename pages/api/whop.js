import Whop from '@whop/sdk'

export default async function handler(req, res) {
  const { productId } = req.query
  const apiKey = process.env.API_KEY
  const appId = process.env.APP_ID
  if (!apiKey || !appId) {
    return res.status(500).json({ error: 'Missing APP_ID or API_KEY in environment.' })
  }
  try {
    const client = new Whop({ appID: appId, apiKey })
    if (!productId) return res.status(400).json({ error: 'productId required' })
    const product = await client.products.retrieve(productId)
    return res.status(200).json(product)
  } catch (e) {
    console.error(e)
    return res.status(500).json({ error: String(e) })
  }
}