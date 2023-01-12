import { Route, Routes } from "react-router-dom"
import { BreedList } from "../components/BreedList"
import { Login } from "../components/Login"
import { RandomImage } from "../components/RandomImage"

export const AllRoutes=()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/breedlist" element={<BreedList/>}/>
                <Route path="/randomimage" element={<RandomImage/>}/>
            </Routes>
        </>
    )
}