import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PaginaPesquisa } from "../Pages/PaginaPesquisa"

export const Router =()=>{


<BrowserRouter>
<Routes>
    <Route index element ={<PaginaPesquisa/>}/>
<Route path="/historico" element={<PaginaHistorico/>}/>
    
</Routes>

</BrowserRouter>

}