import React from 'react'
import Providers from './context/Providers'
import Screens from './screens/Screens'
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <Providers>
      <Screens />
      <StatusBar style="light" backgroundColor="#000" />
    </Providers>
  )
}
