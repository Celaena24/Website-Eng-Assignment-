import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import styles from '../page.module.css'
import styles2 from './index.module.css'




const Survey = () => {

  const [ans, setAns] = useState(-1)
  const [submitted, setSubmitted] = useState(false)
  const [current, setCurrent] = useState(0)

  const ages = ["preschoolers", "teenagers", "adults"]
  const answers = [20, 7, 3]
  

  const onOptionChange = e => {
    setAns(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    console.log(submitted)
  }

  const handleNext = () => {
    if(current<=1)
    {
      setCurrent((current) => current+1)
      setSubmitted(false)
      setAns(-1)
    }
  }

  // https://i.imgur.com/S0xzlbW.png

  return (
    <Container style={{ backgroundPosition: "center", backgroundRepeat: "no-repeat", justifyContent: "center", alignItems: "center"}} fluid className={styles.container}>
        <div className={styles2.survey}>
          {/* <div className={styles2.borderBox}></div> */}
          <div className={styles2.question} >
            <div>On an average</div> 
            <div>how many <strong>{current==0? "hours": "days"}</strong> do <strong>{ages[current]}</strong> spend</div>
            <div>watching television?</div>
          </div>
        <div>

          </div>
            <form style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", fontSize: "1.3rem", marginLeft: "2rem"}} onSubmit={handleOnSubmit}>
              <div>
                <input className={styles2.radioButton} 
                type="radio" 
                name="hours" 
                value="0"
                disabled={submitted}
                checked = {ans==0}
                onChange={onOptionChange}
                />
                <label>0</label>
                {submitted && (answers[current] == 0? 
                (<span style={{margin: "20px", fontSize: "1.5rem", color: "green"}}>&#10003;</span>)
                : ans==0 && (<span style={{margin: "20px", fontSize: "0.8rem"}}>&#10060;</span>)
                )}
              </div>
              <div>
                <input className={styles2.radioButton} 
                type="radio" 
                name="hours" 
                value="3"
                disabled={submitted}
                checked = {ans==3}
                onChange={onOptionChange}
                />
                <label>3</label>
                {submitted && (answers[current] == 3? 
                (<span style={{margin: "20px", fontSize: "1.5rem", color: "green"}}>&#10003;</span>)
                : ans==3 && (<span style={{margin: "20px", fontSize: "0.8rem"}}>&#10060;</span>)
                )}
              </div>
              <div>
                <input className={styles2.radioButton} 
                type="radio" 
                name="hours" 
                value="7"
                disabled={submitted}
                checked = {ans==7}
                onChange={onOptionChange}
                />
                <label>7</label>
                {submitted && (answers[current] == 7? 
                (<span style={{margin: "20px", fontSize: "1.5rem", color: "green"}}>&#10003;</span>)
                : ans==7 && (<span style={{margin: "20px", fontSize: "0.8rem"}}>&#10060;</span>)
                )}
              </div>
              <div>
                <input className={styles2.radioButton} 
                type="radio" 
                name="hours" 
                value="20"
                disabled={submitted}
                checked = {ans==20}
                onChange={onOptionChange}
                />
                <label>20</label>
                {submitted && (answers[current] == 20? 
                (<span style={{margin: "20px", fontSize: "1.5rem", color: "green"}}>&#10003;</span>)
                : ans==20 && (<span style={{margin: "20px", fontSize: "0.8rem"}}>&#10060;</span>)
                )}
                

              </div>
              <div className={styles2.submit}>
                <input className={styles2.button} type="submit" value="Submit" disabled={submitted || ans==-1}/>
                {(submitted && current <= 1) ? 
                (<button className={styles2.button} onClick={handleNext}>Next</button>)
                : 
                submitted && (<button className={styles2.button}><a href="/sophie" style={{textDecoration: "None", color: "#ffffff"}}>Let's go!</a></button>)
                } 
              </div>
            </form>
            
            

        </div>
    </Container>
    
  )
}

export default Survey