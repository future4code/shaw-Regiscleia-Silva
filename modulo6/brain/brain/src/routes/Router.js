import { BrowserRouter,Route,Routes } from "react-router-dom";
import { MegaSena } from "../pages/MegaSena";
import {Quina} from "../pages/Quina";
import {LotoFacil} from "../pages/LotoFacil";
import {LotoMania} from "../pages/LotoMania";
import {TimeMania} from "../pages/TimeMania";
import {DiaDeSorte} from "../pages/DiaDeSorte"


export const Router =() => {

    return(
    <BrowserRouter>

<Routes>
<Route index element = {<MegaSena/>}/>
{/* <Route path="/quina" element={<Quina/>}/>
<Route path="/lotofacil" element={<LotoFacil/>}/>
<Route path="/lotomania" element={<LotoMania/>}/>
<Route path="/timemania" element={<TimeMania/>}/>
<Route path="/diadesorte" element={<DiaDeSorte/>}/> */}

</Routes>


    </BrowserRouter>
    )
}
