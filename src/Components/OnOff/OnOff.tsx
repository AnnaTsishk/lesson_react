import React from "react";

type PropsType={
    on: boolean
}

export function OnOff(props: PropsType) {
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
            <div style={onStyle}>on</div>
            <div style={offStyle}>of</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

// export function OnOff() {
//     const [onOff, setCount] = useState(0);
//     const handlerOn = () => (
//         setCount(onOff + 1)
//     )
//     const handlerOff = () => (
//         setCount(0)
//     )
//     return (<div>
//         return (
//         <div className={s.style}>
//             <div className={s.style}>
//                 <p className={s.style}>{onOff}</p>
//
//                 <div className={s.style}>
//                     <button onClick={handlerOn}
//                             className={s.style}>on
//                     </button>
//                     <button onClick={handlerOff}
//                             className={s.style}>of
//                     </button>
//                 </div>
//
//             </div>
//         </div>
//         )
//     </div>)
// }




