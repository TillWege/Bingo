// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { BingoField } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Database } from '../../common/database';

type Response = {
  Success: Boolean,
  Message: String
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  let result = {} as Response;
  if(req.method==='PUT'){
    try {
      const newBingoField = JSON.parse(req.body) as BingoField;
      if(!newBingoField.author.startsWith('HKS_')){
        throw 'Invalid User';
      }
      await Database.bingoField.create({
        data: newBingoField,
      });
      result.Success = true;
      result.Message = 'great success';
    } catch (error: any) {
      result.Success = false;
      result.Message = error;
    }
  }else{
    result.Success = false;
    result.Message = ''
  }

  res.status(result.Success ? 200 : 400).json(result);
}
