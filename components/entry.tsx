import { Text, Collapse} from "@nextui-org/react";
import { BingoField } from "@prisma/client";
import React from "react";
import { FC } from "react";

const Entry: FC<BingoField> = (props) => {

  function getContext(){
    if(props.context !== ''){
      return(<><p>{props.context}</p><br></br></>)
    }else{
      return <></>
    }
  }

  return (
    <Collapse title={props.name}>
    <Text>
      {getContext()}
      von {props.author}
    </Text>
  </Collapse>
  );
};

export default Entry;