import React,{ useState, useEffect } from "react"

const CountdownTimer:React.FC=()=>{

    const [time,setTime]=useState(0);
    const[isRunning,setIsRunning]= useState(false)
    const[remainingTime,setRemaningTime]=useState(0)

    useEffect(()=>{
        let timer: NodeJS.Timeout;
        if(isRunning&& remainingTime>0){
            timer=setInterval(()=>{
                setRemaningTime((prev) => prev-1)
            },1000)
        }
        else if(remainingTime ===0){
            setIsRunning(false)
        }
        return()=> clearInterval(timer);
    },[isRunning,remainingTime])

const handleStart=()=>{
    if( time>0){
        setRemaningTime(time)
        setIsRunning(true)
    }
}
const handlePause=()=>{
    setIsRunning(false)
}

const handleRestart=()=>{
    setIsRunning(false)
    setRemaningTime(0)
    setTime(0)
    
}
return(
    <div className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br
    from-black to-grey" >

        <h1 className="text-4xl font-extrabold uppercase mb-6"> COUNTDOWN TIMER</h1>


        <input
        type="number"
        className="border-2 border-grey-400 bg-transparent p-3 
        mb-6 text-blue-400 text-xl rounded"
        placeholder="Enter Time In seconds"
        value={time >0 ? time :""}
        onChange={(e) => setTime(Number(e.target.value))}
        />

<div className=" text-3xl font-semibold uppercase mb-6 text-whites" >
    {remainingTime} SECONDS REMAINING
</div>
</div>


   

  













    
)










}












export default CountdownTimer