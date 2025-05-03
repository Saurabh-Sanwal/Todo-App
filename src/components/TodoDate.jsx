import { useEffect,useState } from "react";
export const TodoDate = ()=>{
    const [dataTime, setDateTime]=useState("")
    useEffect(() => {
        const interval=  setInterval(()=>{
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setDateTime(`${formattedDate}-${formattedTime}`)
        },1000)
       
         return () => {
         clearInterval();
         }
       }, [])
        
    return (
        <h2 className="date-time">{dataTime}</h2>
    )
}