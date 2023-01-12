import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styles from "./Styles.module.css";

export const Login=()=>{
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate=useNavigate();

    const handleSubmit = (e)=>{
        navigate("/breedlist",{state:{email:email}})
    }

    return(
        <>
            <div className={styles.container}>
                <h2 className={styles.logo}>Doggy Application</h2>
            </div>
            <div className={styles.loginContainer}>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        </>
    )
}