import { Button, Collapse, Input } from '@nextui-org/react'
import { BingoField } from '@prisma/client'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Database } from '../common/database'
import Entry from '../components/entry'
import styles from '../styles/Home.module.css'

interface IndexProp {
  fields: BingoField[]
}

const Home: NextPage<IndexProp> = (props) => {  
  let data = {} as BingoField

  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  }

  async function submitField(){
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/entry`, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
    if(result.status==200){
      refreshData()
      data = {} as BingoField
    }else{
      alert('Error while adding new Entry')
      console.log(result.json);
      
    }
  }
  return (
    <>
      <h2 className={styles.container}>Einträge</h2>
      <Collapse.Group>
        {props.fields.map((field)=>{
          return Entry(field)
        })}
      </Collapse.Group>

      <hr></hr>
      <div className={styles.buttons} key="1">
        <h2>Eintrag</h2>
        <Input aria-label='Name Input' onChange={(event)=>{data.name = event.target.value}}></Input>
        <h2>Kontext</h2>
        <Input aria-label='Context Input' onChange={(event)=>{data.context = event.target.value}}></Input>
        <h2>Author</h2>
        <Input aria-label='Author Input' onChange={(event)=>{data.author = event.target.value}}></Input>
        <br></br>
        <Button aria-label='Add Entry Button' onPress={submitField}>Eintrag hinzufügen</Button>
        <br></br>
        <Link href='/board'>
          <Button aria-label='Generate Board button'>Zufälliges Board erstellen</Button>
        </Link>
      </div>
    </>
  )
}

export default Home

export async function getServerSideProps(context: any) {
  let fields = await Database.bingoField.findMany()

  return {
    props: {fields}
  }
}