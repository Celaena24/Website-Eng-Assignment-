import React from 'react'
import { Container } from 'react-bootstrap'

import styles from '../page.module.css';
import styles2 from './index.module.css';
import essay from '../../assets/essay.pdf'

const Essay = () => {
  return (
    <Container fluid className={styles.container}>
        
        
        <iframe width = "100%" height = "100%" border = "None" src={essay}></iframe>
        
        
    </Container>
  )
}

export default Essay