import { Text, Collapse} from "@nextui-org/react";
import { BingoField } from "@prisma/client";
import React from "react";
import { FC } from "react";

const Entry: FC<BingoField> = (props) => {

  return (
    <Collapse title={props.name} key={props.id}>
      <Text>
        Kontext: {props.context}
        <br></br>
        von {props.author}
      </Text>
    </Collapse>
  );
};

export default Entry;