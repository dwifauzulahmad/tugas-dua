import React from 'react'
import Tombol from './Tombol'
import KotakTeks from './KotakTeks'

export default function Login() {
  return (
    <>
        <KotakTeks nama="teks" plc="email..."/>
        <KotakTeks nama="password" plc="password..."/>
        <Tombol/>
    </>
    )
}
