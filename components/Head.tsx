import Head from 'next/head'
import React from 'react'

const Header: React.FC = () => {
  return (
    <Head>
      <title>Gitkard - Your instant Github Profile Card</title>
      <meta property='og:title' content='Gitkard' />
      <meta property='twitter:title' content='Gitkard' />
      <meta
        name='description'
        content='😍 Stunning Github portfolio card instantly with Gitkard'
      />
      <meta
        property='og:description'
        content='😍 Stunning Github portfolio card instantly with Gitkard'
      />
      <meta
        property='twitter:description'
        content='😍 Stunning Github portfolio card instantly with Gitkard'
      />
      <meta property='og:type' content='website' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='theme-color' content='#61C3B' />
      <link
        rel='icon'
        href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👻</text></svg>'
      />
    </Head>
  )
}

export default Header
