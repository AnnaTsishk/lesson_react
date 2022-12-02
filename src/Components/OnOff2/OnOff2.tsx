import React, {useState} from "react";

type PropsType={
    // on: boolean
    onChange: (on: boolean)=>void
}

export function OnOff2(props: PropsType) {
    let [on, setOn]=useState(false)



    const onStyle2={
        width:'30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '3px',
        backgroundColor: on ? "green":"white"

    }
    const offStyle2={
        width:'30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '3px',
        backgroundColor: on ? "white":"red"
    }
    const indicatorStyle2={
        width:'10px',
        height: '10px',
        borderRadius: '12px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',

        padding: '3px',
        backgroundColor: on ?"green":"red"

    };

    const onClicked=()=>{
        setOn(true)
        props.onChange(true)
    }

    const offClicked=()=>{
        setOn(false)
        props.onChange(false)
    }
    return(
        <div>
            <div style={onStyle2} onClick={()=>{onClicked()}}>on</div>
            <div style={offStyle2}onClick={()=>{offClicked()}}>off</div>
            <div style={indicatorStyle2}></div>
        </div>
    )
}





