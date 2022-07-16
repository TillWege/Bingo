import { Avatar, Button, Input, useTheme } from '@nextui-org/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {  

  const theme = useTheme();
  theme.isDark = true;

  return (
    <>
      <div>Bingo-Board Creator</div>
      <hr></hr>
      <h1>Einträge</h1>
      <h2>Eintrag 1:</h2>
      <hr></hr>
      <Input></Input>
      <Button>Add Entry</Button>
      <hr></hr>
      <Button>Create Board</Button>
    </>
  )
}

export default Home
