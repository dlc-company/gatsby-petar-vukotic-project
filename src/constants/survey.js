export default {
  title: "Anketa",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  logoWidth: 50,
  logoHeight: 50,
  completedHtml: "<h1>Hvala</h1>",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "question1",
          title: "Pitanje 1",
          isRequired: true,
          choices: [
            {
              value: "item1",
              text: "Da"
            },
            {
              value: "item2",
              text: "Ne"
            }
          ]
        },
        {
          type: "radiogroup",
          name: "question3",
          title: "Pitanje 2",
          isRequired: true,
          choices: [
            {
              value: "item1",
              text: "Da"
            },
            {
              value: "item2",
              text: "Ne"
            }
          ]
        },
        {
          type: "radiogroup",
          name: "question2",
          title: "Pitanje 3",
          isRequired: true,
          choices: [
            {
              value: "item1",
              text: "Da"
            },
            {
              value: "item2",
              text: "Ne"
            }
          ]
        }
      ]
    }
  ],
  showPrevButton: false,
  showTitle: false,
  showPageTitles: false,
  pagePrevText: "Prethodno",
  pageNextText: "Sledeće",
  completeText: "Završi"
}
