import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Styles.module.css";


export const RandomImage=()=>{
    let email=sessionStorage.getItem("email");
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

    const logout=()=>{
        sessionStorage.setItem("email","");
        navigate("/")
    }

    if(email){
    return(
        <>
            <div className={styles.randomContainer}>
            <h1>
                Breed Details
            </h1>
            <button onClick={logout}>Logout</button>
            </div>
            <div>
            <img src={image} alt="img" className={styles.randomimg}/>
            </div>
            <button onClick={clickBack} className={styles.goback}>Go Back</button>
        </>
    )}else{
        alert("please login first")
    }
}