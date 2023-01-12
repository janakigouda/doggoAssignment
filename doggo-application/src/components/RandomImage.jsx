import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Styles.module.css";


export const RandomImage=()=>{
    const breed=useLocation();
    const [image,setImage]=useState();
    const navigate=useNavigate();

    useEffect(()=>{
        fetch(`https://dog.ceo/api/breed/${breed.state.breedName}/images/random`).then(res=>{
            res.json().then(data=>{
                setImage(data.message)
            })
        })
    },[]);

    const clickBack=()=>{
        navigate("/breedlist");
    }

    return(
        <>
            <h1>
                Breed Details
            </h1>
            <img src={image} alt="img"/>
            <button onClick={clickBack}>Go Back</button>
        </>
    )
}