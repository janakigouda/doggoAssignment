import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const getBreedlist=()=>{
    return fetch("https://dog.ceo/api/breeds/list/all").then(res=>res.json());
}

export const BreedList=()=>{
    const email=useLocation();
    const [list,setList]=useState([]);
    const [breed,setBreed]=useState("");
    const breedlist=[];
    const navigate=useNavigate();

    useEffect(()=>{
        getBreedlist().then(res=>{
            setList(res.message)
        })
    },[])

    for(let key in list){
        breedlist.push(key)
    }

    const handleClick=()=>{
        navigate("/randomimage",{state:{breedName:breed}})
    }

    return(
        <>
            <div>
                <h3>Breed List</h3>
                <select name="breeds" id="breeds" onChange={(e)=>setBreed(e.target.value)}>
                <option value="">Select breed</option>    
                {breedlist && breedlist.map((item,index)=>
                    <option value={item}>{item}</option>
                )}
                </select>
                <button onClick={handleClick}>Get Details</button>
            </div>
        </>
    )
}