import { Button, Collapse, Input } from '@nextui-org/react'
import { BingoField, PrismaClient } from '@prisma/client'
import type { NextPage } from 'next'
import Entry from '../components/entry'
import styles from '../styles/Home.module.css'

interface IndexPropy {
  fields: BingoField[]
}

const Home: NextPage<IndexPropy> = (props) => {  
  return (
    <>
      <div className={styles.container}>
      <h1>Bingo-Board Creator</h1>
      <hr></hr>
      <h2>Einträge</h2>
      </div>
      
      <Collapse.Group>
        {props.fields.map((field)=>{
          return Entry(field)
        })}
      </Collapse.Group>

      <hr></hr>
      <div className={styles.buttons}>
        <h2>Eintrag</h2>
        <Input></Input>
        <h2>Kontext</h2>
        <Input></Input>
        <h2>Author</h2>
        <Input></Input>
        <br></br>
        <Button>Eintrag hinzufügen</Button>
        <br></br>
        <Button>Zufälliges Board erstellen</Button>

      </div>
    </>
  )
}

export default Home

export async function getServerSideProps(context: any) {
  const prisma = new PrismaClient()
  let fields = await prisma.bingoField.findMany()

  return {
    props: {fields}
  }
}