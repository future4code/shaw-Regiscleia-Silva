import { GetBusinessUser } from "../business/GetBusinessUser"
import { GetDataUser } from "../data/GetDataUser"
import { IdGeneratorMocks } from "../moks/IdGeneratorMocks"
import { TokenGeneratorMocks } from "../moks/tokenGeneratorMock"

const getBusinessUser = new GetBusinessUser(
    new TokenGeneratorMocks,
    new IdGeneratorMocks
   
)

describe("teste de buscar usuarios", ()=>{
    test("usuario não existe ", async () =>{
expect.assertions(2)

try{
    await getBusinessUser.getUserById("id_mocks")

}catch(error){
expect(error.statusCode).toBe(404)
expect(error.message).toBe("usuario não existe")
}
    })
})

test("todos os campos preenchidos", async() =>{
    expect.assertions(2)
    try{
        const getUserById = jest.fn(
            (id:string)=> getBusinessUser.getUserById(id)

        )
        const result = await getUserById("id_mocks")
        expect(getUserById).toHaveBeenCalledWith("id_mocks")
        expect(result).toEqual({
            id:"id_mocks",
            name:"regiscleia",
            email:"regiscleia@email",
            role:"NORMAL"
        })
    }catch(error){
        console.log(error.message)
    }
})