import React, { useEffect, useState } from 'react'
 
function ProgressBar(){

    const[currentPercentage,setPercentage] = useState(1);
    const[massage,SetMassage] = useState('Loading...')

    useEffect(()=>{
          if(currentPercentage < 100){
        setTimeout(()=>{
           setPercentage(currentPercentage + 1);
        },500)
    }
    else{
        SetMassage("completed");
    }
    },[currentPercentage])
    
    return (
        <>
        <div style={{display:'flex',flexDirection:'column',gap:'20px',alignContent:'center',justifyContent:'center',padding:'10px 10%'}}>
            <h1 style={{textAlign:'center' ,backgroundColor:'orangered',color:'white',fontStyle:'italic'}}>
                Progress Bar
            </h1>
            <div style={{marginLeft:'380px'}}>
            <div style={{width:'50%',backgroundColor:'yellow',borderRadius:'20px', display:'flex',border:'2px solid black'}}>
                <div style={{width:`${currentPercentage}%`, backgroundColor:'green',textAlign:'center',padding:'10px 10px',borderRadius:'20px'}}>
                        {currentPercentage}{'%'}
                    </div>
            </div>
            </div>
            <button style={{textAlign:'center', fontStyle:'italic',padding:'10px 20px',border:'none',textDecoration:'underline'
        ,width:'20%',marginLeft:'480px',borderRadius:'20px',backgroundColor:'orangered',color:'white',fontSize:'20px'}}>{massage}</button>
            {/* <h4 style={{textAlign:'center', fontStyle:'italic'}}>{massage}</h4> */}
        </div>
        </>
    )
}
export default ProgressBar