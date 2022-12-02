import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {OnOff2} from "./Components/OnOff2/OnOff2";
import UncontrolledAccordion from "./Components/SelfControlledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/Rating/UnconrtulledRating";
import Accordion from "./Components/Accordion/Accordion";
import {OnOff3} from "./Components/OnOff3/OnOff3";


type PageTiylePripsType={
  title:string
}

function App(props:any) {
    let[ratingValue, setRatingValue]= useState<RatingValueType>(0)
    let[accordionCollapsed, setAccordionCollapsed] =useState<boolean>(false)
    let [switchOn, setSwitchOn]=useState<boolean>(false)


    return (
      <div className={"App"}>
          <Rating value={ratingValue} onClick={setRatingValue}/>
          {/*<Rating value={1}/>*/}
          {/*<Rating value={2}/>*/}
          {/*<Rating value={3}/>*/}
          {/*<Rating value={4}/>*/}
          {/*<Rating value={5}/>*/}
          {/*<hr/>*/}
          {/*<OnOff on={false}/>*/}
          {/*<OnOff on={true}/>*/}
          {/*<OnOff on={false}/>*/}
          {/*<hr/>*/}
          {/*<OnOff2 />*/}
          <hr/>
          <OnOff2 onChange={setSwitchOn}/> {switchOn.toString()}
          <hr/>
          {/*<OnOff3 on={switchOn} onChange={(on)=>{setSwitchOn(on)}}/>*/}
          <hr/>
          <Accordion titleValue={"Menu"}
                     collapsed={accordionCollapsed}
                     onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>
          <hr/>
          {/*<Accordion titleValue={"Users"}*/}
          {/*           collapsed={accordionCollapsed}*/}
          {/*           onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>*/}
          {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
          <hr/>
          {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
          <hr/>
          <UncontrolledAccordion titleValue={"Menu"} />
          {/*<UncontrolledAccordion titleValue={"Users"}/>*/}
          <hr/>
          <UncontrolledRating />
          <hr/>


      </div>
  );
}
function PageTitle(props: PageTiylePripsType){
  console.log("PageTitle rendering")
  return <h1>(props.title)</h1>
}
export default App;
