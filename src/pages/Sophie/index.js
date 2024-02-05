import React, {useState, useEffect} from 'react'
import {Container} from 'react-bootstrap'

import Tele from '../../components/Tele'
import Character from '../../components/Character'
import Button from '../../components/Button'
import data from './data.json'

import tvOff from '../../assets/tvOff.png'
import tvOn from '../../assets/tvOn.png'
import flag from '../../assets/flag.png'
import preschool from '../../assets/preschool.png'
import preteen from '../../assets/preteen.png'
import teen from '../../assets/teen.png'
import ya from '../../assets/ya.png'
import adult from '../../assets/adult.png'
import prev from '../../assets/back.png'
import next from '../../assets/next.png'

import styles from '../page.module.css'
import styles2 from './index.module.css'

const Sophie = () => {

  const [index, setIndex] = useState(-1)
  const [modal, setModal] = useState(false)
  const [showButton, setShowButton] = useState(true)
  const [modalIndex, setModalIndex] = useState(-1)
  const [btn, setBtn] = useState(0)

  const[textIndex, setTextIndex] = useState(0)
  // const [close, setClose] = useState(true)
  const [disableNext, setDisableNext] = useState(false)
  

  const ages = ["preschool", "preteen", "teen", "young-adult", "adult"]
  const characters = [preschool, preteen, teen, ya, adult]
  const buttons = ["btn-1", "btn0", "btn1", "btn2", "btn3", "btn-end"]

  
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
      return ()=> {
        document.removeEventListener('keydown', keyPress);
      }
 });

 const start = () => {
  setIndex(0)
  setModalIndex(0)
  
}

 const showModal = (event, index) => {
  setModalIndex(index)
  console.log("yes")
  setModal(true)
  setBtn(1)
  // setClose(true)
  setDisableNext(false)
  setTextIndex(0)
}

const showModals = (event, i) => {
  console.log("yes")
  setModalIndex(i)
  setModal(true)
  // setClose(true)
  setDisableNext(false)
  setTextIndex(0)
}


const closeModal = () => {
  console.log("yes")
  setModal(false)
}

const nextSlide = () => {
  if(textIndex===data[ages[modalIndex]].length - 1){
    // setClose(false);
    setDisableNext(true)
  }
  else{
    setTextIndex((textIndex) => textIndex+1)
  }
}

const prevSlide = () => {
  if(textIndex !== 0)
  {
    // setDisablePrev(false)
    setTextIndex((textIndex) => textIndex-1)
  }
  else{
    // setDisablePrev(true)
  }
}

    
const keyPress = (e) => {
  switch(e.which){
    case 38: {
      if(index!==4)
      {
      console.log(modalIndex)
      setIndex((index) => index + 1)
      setModalIndex((modalIndex) => modalIndex+1)
      setShowButton(true)
      setBtn(0)
      }
      break
    }
    case 40: {
      if(index>=0)
      {
        console.log(modalIndex)
      setIndex((index) => index - 1)
      setModalIndex((modalIndex) => modalIndex-1)
      setShowButton(true)
      setBtn(0)
      }
      break
    }
  }
}










  
  return (
    <Container fluid style={{flexDirection: "row", justifyConent: "space-between", position: "relative", backgroundColor: "#fae4c3"}} className={styles.container}>
      <div style={{backgroundImage: "url('https://i.imgur.com/WAc7VVA.png')", width: "50vw", height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", position: "relative"}}>
        <Tele src={index === 0?tvOn:tvOff} className={styles2.tv0} />
        <Tele src={index === 1?tvOn:tvOff} className={styles2.tv1} />
        <Tele src={index === 2?tvOn:tvOff} className={styles2.tv2} />
        <Tele src={index === 3?tvOn:tvOff} className={styles2.tv3} />
        <img src={flag} className={styles2.flag}></img>
        <Character src={characters[index]} className={styles2[ages[index]]} /> 
        {showButton && (btn === 0 || index >= 4) ? 
          (<Button onClick={index===-1? start: (event)=>showModal(event, index)} className={styles2[buttons[index+1]]} disabled={false}>{index===-1? "Follow Bella's journey through different phases of her life. Click me!": `${index===4? "Sophie's all grown up!": "Click me!"}`}</Button>)
          : (<Button onClick={()=>{setIndex((index) => index+1); setModalIndex((modalIndex) => modalIndex+1); setBtn(0); index!==3 ? setModal(false) : setTextIndex(0)}} className={styles2[buttons[index+1]]} disabled={((textIndex == data[ages[modalIndex]].length - 1) || (modal===false)) ? false : true}>Next</Button>)}

      </div>
      
      <div style={{width: "50vw", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative"}}>
       <div style={{height: "50%", backgroundColor: "yelow", display: "flex"}}>
        <div onClick={(event)=>showModals(event, 0)} className={styles2.card}>
          PRESCHOOLER
        </div>
        <div onClick={(event)=>showModals(event, 1)} className={styles2.card}>
          PRETEEN
        </div>
       </div>
       <div style={{height: "50%", backgroundColor: "yelow", display: "flex"}}>
        <div onClick={(event)=>showModals(event, 2)} className={styles2.card}>
          TEEN
        </div>
        <div onClick = {(event)=>showModals(event, 3)} className={styles2.card}>
          YOUNG ADULT
        </div>
        {/* <div onClick = {(event)=>showModals(event, 4)} className={styles2.card}>
          ADULT
        </div> */}
       </div>
       {modal && (<div style={{position: "absolute", height: "64%", backgroundColor: "#ffffff", width: "76%", top: "18%", left: "12%", overflow:"scroll"}}>
          {/* <div style={{position: "fixed", display: "flex", justifyContent: "space-between", alignItems: "space-between", width: "37.4%", backgroundColor: "#472126"}}> */}
          
          <div style={{display: "block", padding: "10px", backgroundColor: "#472126", color: "white"}}>{textIndex+1}/{data[ages[modalIndex]].length}</div>
          <button disabled={false} onClick={closeModal} style={{position: "absolute", top: "8px", right: 0, display: "block",  backgroundColor: "#d11717", color: "#ffffff"}}>X</button>
          
          {/* </div> */}
          
          <button disabled={textIndex != data[ages[modalIndex]].length - 1 ? false : true} onClick={nextSlide} className={styles2.nextBtn}>&#62;</button>
          <button disabled={textIndex != 0 ? false : true} onClick={prevSlide} className={styles2.prevBtn}>&#60;</button>
          

          <div className={styles2.modal}>
            <div style={{fontSize: "1.5rem", fontWeight: 600}}>{(ages[modalIndex]).toUpperCase()}</div>
            {/* <div className={styles2.modalText}>{data['data'][modalIndex]}</div> */}
            <div className={styles2.modalText}>{data[ages[modalIndex]][textIndex]}</div>
          </div>
       </div>)}
      </div>
      
    </Container>
  )
}

export default Sophie
