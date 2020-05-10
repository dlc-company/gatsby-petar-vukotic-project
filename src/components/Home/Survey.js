import React from 'react'
import * as Survey from "survey-react";
import "survey-react/survey.css";
import surveyJson from '../../constants/survey'

const SurveyComponent = () => {
var model = new Survey.Model(surveyJson);
 return (
   < Survey.Survey model = {model} onComplete = {sendDataToServer}/>
 )
}

 function sendDataToServer(survey) {
  survey.sendResult('ea923b6d-b6bb-4d3f-b393-6e23366543ad');
 }


export default SurveyComponent
