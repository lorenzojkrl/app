import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Providers from './context/Providers'
import Screens from './screens/Screens'

export default function App() {

  return (
    <Providers>
      <Screens />
      <StatusBar style="light" backgroundColor="black" />
    </Providers>
  )
}
