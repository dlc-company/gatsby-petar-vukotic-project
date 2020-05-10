export default {
 title: "Anketa",
 completedHtml: "<h1>Hvala!</h1>",
 pages: [{
   name: "page1",
   elements: [{
    type: "radiogroup",
    name: "question1",
    title: "Pitanje 1",
    isRequired: true,
    choices: [{
      value: "item1",
      text: "Da"
     },
     {
      value: "item2",
      text: "Ne"
     }
    ]
   }]
  },
  {
   name: "page2",
   elements: [{
    type: "radiogroup",
    name: "question2",
    title: "Pitanje 2",
    isRequired: true,
    choices: [{
      value: "item1",
      text: "Da"
     },
     {
      value: "item2",
      text: "Ne"
     }
    ]
   }]
  },
  {
   name: "page3",
   elements: [{
    type: "radiogroup",
    name: "question3",
    title: "Pitanje 3",
    isRequired: true,
    choices: [{
      value: "item1",
      text: "Da"
     },
     {
      value: "item2",
      text: "Ne"
     }
    ]
   }]
  }
 ],
 showProgressBar: "top",
 pagePrevText: "Prethodno",
 pageNextText: "Sledeće",
 completeText: "Završi"
}
