import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
        <h1>Chik chik found a 404... - Page Not Found</h1>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
    </div>
  )
}