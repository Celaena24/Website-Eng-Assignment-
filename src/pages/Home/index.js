import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'

import styles from '../page.module.css';
import styles2 from './index.module.css';

import arrow from '../../assets/left-arrow.png'

import preschool from '../../assets/preschool.png'
import preteen from '../../assets/preteen.png'
import teen from '../../assets/teen.png'
import ya from '../../assets/ya.png'
import adult from '../../assets/adult.png'


const Home = () => {

  const [degree, setDegree] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const ages = ["new-adult", "adult", "preschooler", "Try again", "preteen", "teen", "new-adult"];
  const [index, setIndex] = useState(-1);


  
  useEffect(() => {
    document.getElementById('box').style.transform = "rotate("+degree+"deg)";
    console.log("degree" + degree);
    setIndex(Math.ceil((degree/60))%6);
    console.log(index)
    
  }, [rotateFunction])

  function rotateFunction(){
    setShowModal(false)
    const min = 1024;
    const max = 9999;
    const deg = Math.floor(Math.random() * (max - min)) + min;
    console.log(deg)
    if(deg > degree){
      setDegree(deg)
      
    }
    else
    {
      setDegree((degree) => degree+deg)
    }
    
    // setShowModal(true)
  }

  const transition = document.querySelector("#box");
  console.log(transition)

  transition && transition.addEventListener("transitionend", () => {
    
    if(transition.style.transform != `rotate(0deg)`){
      setShowModal(true);
    }
  });

  

  return (
    <Container fluid className={styles.container}>
       
       <div className={styles2.profileContainer}>
        <div className={styles2.left}>
          <div className={styles2.heading}>The Effects of Gender Representation in Media on Young Girls.</div>
          <div className={styles2.text}>
          "Exposure to stereotyping representations appears to strengthen beliefs in gender stereotypes and endorsement of gender role norms, as well as fostering sexism, harassment and violence in men and stifling career-related ambitions in women." <br/> -National Center of Biotechnological Information
          </div>
          <button className={styles2.button}><a href='/survey' style={{textDecoration: "None", color: "#ffffff", display: "block"}}>Let's start this journey!</a></button>
          {/* <div>{index}</div> */}
          
        </div>
        <div className={styles2.right}>
          <div id="mainbox" className={styles2.mainbox}>
            <div id="box" className={styles2.box}>    
              <div className={styles.box1}>
                <span className={styles2.span1}><img src={preschool} style={{top: "25%", left: "35%", height: "12vh", width: "35px"}} className={styles2.img}/></span>
                <span className={styles2.span2}><img src={preteen} style={{top: "20%", left: "15%", height: "15vh"}} className={styles2.img}/></span>
                <span className={styles2.span3}><div style={{color: "#ffffff", fontSize: "1.2rem", marginTop: "20%", textAlign: "center"}}>Try<br/>Again!</div></span>
                
              </div>
              <div className={styles2.box2}>
                <span className={styles2.span1}><img src={teen} style={{top: "15%", left: "30%", height: "15vh"}} className={styles2.img2}/></span>
                <span className={styles2.span2}><img src={adult} style={{top: "10%", left: "50%", height: "22vh"}} className={styles2.img2}/></span>
                <span className={styles2.span3}><img src={ya} style={{top: "30%", left: "40%"}} className={styles2.img2}/></span>
              </div>
              
            </div>
            {(showModal) && (index==3? (<div className={styles2.modal}>OOps! I'm not born yet. Try again</div>): (<div className={styles2.modal}>Hey I'm {ages[index]} Bella!</div>))}
            <button className={styles2.spin} onClick={rotateFunction}>MEET ME</button>
          </div>
         
        </div>
    
       </div>

    </Container>
  )
}

export default Home