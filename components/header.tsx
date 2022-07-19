import { Text, Collapse} from "@nextui-org/react";
import { BingoField } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { FC } from "react";
import styles from '../styles/Header.module.css'

const Entry: FC = () => {

  return (
  <Link href='/'>
    <div className={styles.container} key='0'>
        <a><h1>Bingo-Board Creator</h1></a>
        <hr></hr>
    </div>
  </Link>
  );
};

export default Entry;