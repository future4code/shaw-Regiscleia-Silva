import { Express } from "express";

import axios from "axios";
import { stringify } from "querystring";

type users = {
  id: string;
  name: string;
  email: string;
};

//exercicio 1
//a- GET
//b- função do tipo Any

//c-
async function getAssinantes(): Promise<any[]> {
  const response = await axios.get(
    "https://labenews.herokuapp.com/subscribers"
  );
  return response.data;
}

//exercicio 2
//a- na função nomeada o async vem antes da função e na arrow function a async vem depois
//b-

const getAssinates2 = async (): Promise<any[]> => {
  const response = await axios.get(
    "https://labenews.herokuapp.com/subscribers"
  );
  return response.data;
};

//exercicio 3
//a-não, pois no type esta tipado os tipos de cada propriedade que tem no array de assinantes.
//b- é boa pratica quando tem algo em especifico para mapear dentro de um array.
//c-
const getAssinantes3 = async (): Promise<users[]> => {
  const response = await axios.get(
    "https://labenews.herokuapp.com/subscribers"
  );
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

//exercicio 4
//a- função nomeada para realizar
// b-

async function createNews(
  title: string,
  content: string,
  date: number
): Promise<void> {
  await axios.put("https://labenews.herokuapp.com/news", {
    title: title,
    content: content,
    date: date,
  });
}

// exercicio 4
const enviarMsg = async (
  usuarios: users[],
  mensagem: string
): Promise<void> => {
  try {
    for (const user of usuarios) {
      await axios.post("https://labenews.herokuapp.com/notifications", {
        subcriberId: user.id,
        message: mensagem,
      });
    }
    console.log("notificação enviada");
  } catch {
    console.log("erro");
  }
};


//exercicio 5 
// a- faz com que a resposta de varias reuisiçoes seja mais rapida, do que uma a uma.
//b -por ser uma grande quantidade de resposta, o promisse.all iria dar essa resposta mais rapida.

//c -
const enviarMsg2 = async (
    usuarios: users[],
    mensagem: string
  ): Promise<void> => {
    try {
      const promises :any = usuarios.map( user=>{
        return axios.post("https://labenews.herokuapp.com/notifications",{
            subcriberId: user.id,
            message: mensagem,   
        })
      })
      
     await Promise.all(promises)
    } catch {
      console.log("erro");
    }
  };



const main = async (): Promise<void> => {
  try {
    const criar = await createNews("legal", "sera que funfa", 13062022);
    console.log(criar);
    const subscribers = await getAssinantes3();
    console.log(subscribers);
    await enviarMsg(subscribers, "mensagem");
  } catch (error: any) {
    const resp = error.response?.data || error.message;
    console.log(resp);
  }
};

main();
