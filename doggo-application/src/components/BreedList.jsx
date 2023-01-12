import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Styles.module.css";

const getBreedlist=async ()=>{
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    return await res.json();
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
                <div className={styles.container}>
                    <h3>Breed List</h3>
                </div>
                <div className={styles.breedContainer}>
                    <select name="breeds" id="breeds" onChange={(e)=>setBreed(e.target.value)}>
                    <option value="">Select breed</option>    
                    {breedlist && breedlist.map((item,index)=>
                        <option value={item}>{item}</option>
                    )}
                    </select>
                    <button onClick={handleClick}>Get Details</button>
                </div>
            </div>
        </>
    )
}