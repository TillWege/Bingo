import { Button} from "@nextui-org/react";
import type { NextPage } from "next";
import styles from "../styles/Board.module.css";
import { BingoField, PrismaClient } from '@prisma/client'

interface IndexPropy {
  fields: BingoField[]
}

const Board: NextPage<IndexPropy> = (props) => {
  return (
    <>
      <h2 className={styles.header}>Bingo-Board</h2>
      <div className={styles.board}>
        {[...Array(25).keys()].map((i: number)=>{
          let fieldname = ''
          if(i===12){
            fieldname = 'FREE SPACE'
          }else if(i<props.fields.length){
            fieldname = props.fields[i].name
          }
          
          return (<div key={i} className={styles.field}><p>{fieldname}</p></div>)
        })}
      </div>
    </>
  );
};

export default Board;

export async function getServerSideProps(context: any) {
  const prisma = new PrismaClient()
  let fields = await prisma.bingoField.findMany()
  const shuffled = fields.sort(() => 0.5 - Math.random());
  let emptyfield = {} as BingoField
  fields.fill(emptyfield, fields.length, 25)
  return {
    props: {fields}
  }
}