import React from 'react'
import * as Survey from "survey-react";
import "survey-react/survey.css";
import surveyJson from '../../constants/survey'
import styles from '../../css/survey.module.css'
import Title from '../Title'
import image from '../../images/survey.png'

const SurveyComponent = () => {
var model = new Survey.Model(surveyJson);
 return (
   <div className={styles.main}>
     <div className={styles.title}>
       <Title subtitle="anketa"></Title>
     </div>
     <div id="surveySection" className={styles.surveySection}>
       <div className={styles.surveyImage}>
         <img id="surveyPlaceholder" src={image} className={styles.image}></img>
         <div className={styles.survey} id="survey">
           <Survey.Survey model={model} onComplete={sendDataToServer} />
         </div>
         <h1 className={styles.completedText} id="completed">
           Hvala!
         </h1>
       </div>
       <div className={styles.surveyTextButton}>
         <p className={styles.text}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
           corporis, distinctio perspiciatis rem cupiditate nobis, commodi
           similique sed consectetur minima eos fugit quo? Assumenda, ducimus?
         </p>
         <button onClick={showSurvey} type="button" className="btn-primary">
           Popuni Anketu
         </button>
       </div>
     </div>
   </div>
 )
}

 function sendDataToServer(survey) {
  survey.sendResult('ea923b6d-b6bb-4d3f-b393-6e23366543ad');
   document.getElementById("survey").style.display = "none";
   document.getElementById("completed").style.display = "block";
 }

function showSurvey() {  
  document.getElementById("survey").style.display = "block"; 
  document.getElementById("surveyPlaceholder").style.display = "none";  
}

export default SurveyComponent
