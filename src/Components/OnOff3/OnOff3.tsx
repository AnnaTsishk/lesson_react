import React from "react";

type PropsType={
    on: boolean
    onChange: (on:boolean)=>void
}

export function OnOff3(props:PropsType) {



    const onStyle={
        width:'30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '3px',
        backgroundColor: props.on ? "green":"white"

    }
    const offStyle={
        width:'30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '3px',
        backgroundColor: props.on ? "white":"red"
    }
    const indicatorStyle={
        width:'10px',
        height: '10px',
        borderRadius: '12px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',

        padding: '3px',
        backgroundColor: props.on ?"green":"red"

    };

    return(
        <div>
            <div style={onStyle} onClick={()=>{props.onChange(true)}}>on</div>
            <div style={offStyle}onClick={()=>{props.onChange(false)}}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}





