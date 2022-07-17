import { Button} from "@nextui-org/react";
import type { NextPage } from "next";
import styles from "../styles/Board.module.css";
import { BingoField, PrismaClient } from '@prisma/client'

const Board: NextPage<BingoField[]> = () => {
  return (
    <>
      <Button>Create Board</Button>
      <div>Bingo-Board</div>
    </>
  );
};

export default Board;

export async function getServerSideProps(context: any) {
  const prisma = new PrismaClient()
  let fields = await prisma.bingoField.findMany()
  return {
    props: fields,
  }
}