import { fullAddress } from "../endpoints/types/fullAddress";
import connection from "../connection";
import dados from  "./types/dados";

export default async function inseriBd(adress: dados) {

    const {cep, logradouro, numero, complemento, bairro,cidade,estado} = adress

    await connection("adress").insert({
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado
    })

}

