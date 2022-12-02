import React, {useState} from "react";

// type RatingPropsType={
//     value: 0|1|2|3|4|5
// }
//
export function UncontrolledRating() {
    console.log("Reting rendering")

    let [value, setValue]=useState(0)
    return (
        <div>
            <Star selected={value>0} setValue={()=>{setValue(1)}} />
            <Star selected={value>1} setValue={()=>{setValue(2)}} />
            <Star selected={value>2} setValue={()=>{setValue(3)}} />
            <Star selected={value>3} setValue={()=>{setValue(4)}} />
            <Star selected={value>4 }setValue={()=>{setValue(5)}} />
        </div>
        // <div>
        //     <Star selected={value>0} setValue={setValue} value={1}/>
        //     <Star selected={value>1} setValue={setValue} value={2}/>
        //     <Star selected={value>2} setValue={setValue} value={3}/>
        //     <Star selected={value>3} setValue={setValue} value={4}/>
        //     <Star selected={value>4 }setValue={setValue} value={5}/>
        // </div>

    // <div>
    //     <Star selected={value>0}/><button onClick={()=> {setValue(1)}}>1</button>
    //     <Star selected={value>1}/><button onClick={()=> {setValue(2)}}>2</button>
    //     <Star selected={value>2}/><button onClick={()=> {setValue(3)}}>3</button>
    //     <Star selected={value>3}/><button onClick={()=> {setValue(4)}}>4</button>
    //     <Star selected={value>4}/><button onClick={()=> {setValue(5)}}>5</button>
    // </div>

    )

}

type StarPropsType = {
    selected: boolean
    // value:1|2|3|4|5
    setValue:()=>void
}

function Star(props:StarPropsType ) {
    return  <span onClick={()=>{props.setValue() }}>
    {/*// <span onClick={()=>{props.setValue(props.value)}}>*/}

        {props.selected ? <b>star </b> :'star '}
    </span>

   // return props.selected ?<span><b>star</b></span>:<span>star</span>

    //   if (props.selected === true) {
    //     return <span><b>star</b></span>
    // } else {
    //     return <span>star</span>
    // }
}
