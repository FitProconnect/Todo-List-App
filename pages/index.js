import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [product, setProduct] = useState(null)
  useEffect(() => {
    fetch('/api/whop?productId=prod_example')
      .then(r => r.json())
      .then(setProduct)
      .catch(err => console.error(err))
  }, [])
  return (
    <>
      <Head><title>Whop App</title></Head>
      <main style={{fontFamily:'system-ui, sans-serif', padding:24}}>
        <h1>Whop App (Vercel-ready)</h1>
        <p>Server-side calls use environment variables. Do not commit secrets.</p>
        <pre style={{background:'#f6f6f6', padding:12}}>
          {product ? JSON.stringify(product, null, 2) : 'No product loaded. Set APP_ID and API_KEY in Vercel env.'}
        </pre>
      </main>
    </>
  )
}