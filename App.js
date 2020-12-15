import React from 'react'
import Providers from './context/Providers'
import Screens from './screens/Screens'

export default function App() {
  return (
    <Providers>
      <Screens />
    </Providers>
  )
}
