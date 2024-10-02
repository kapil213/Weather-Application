import { useEffect } from "react"

export default function ApiCheck()
{
    let url="api/auth/login";
    useEffect(()=>{
       async function handleApi()
        {
            const res= await fetch(url);
            const data= await res.json();
            console.log(data.Post);
        }
        handleApi();
    },[])
    return(
        <h1>This is Api Check page for Shaksham</h1>
    )
}