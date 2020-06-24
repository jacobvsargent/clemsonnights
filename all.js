const items = [
  {
    type: 'special',
    business: 'Sushi 365',
    offer: '$3.65 Sushi Rolls',
    alc: false,
    day: 'Monday',
    time: '5 pm - 10pm',
    bizlogo: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10474020_832999220074748_6215186670951263134_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=Kxu0B2IaBLcAX_kqw7b&_nc_ht=scontent-iad3-1.xx&oh=006fed725592c222e0d7d1e0fb2b9422&oe=5F0C99B1'
  },
  {
    type: 'special',
    business: 'TDs',
    offer: '$11.95 All You Can Eat Wings',
    alc: false,
    day: 'Monday',
    time: '5 pm - 9pm',
    bizlogo: 'https://www.tigerstogo.com/v_58_i381m.png'
  },
  {
    type: 'special',
    business: 'Sushi 365',
    offer: 'Half Price Wine Bottles',
    alc: true,
    day: 'Wednesday',
    time: 'All Day',
    bizlogo: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10474020_832999220074748_6215186670951263134_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=Kxu0B2IaBLcAX_kqw7b&_nc_ht=scontent-iad3-1.xx&oh=006fed725592c222e0d7d1e0fb2b9422&oe=5F0C99B1'
  },
  {
    type: 'special',
    business: 'Itsurwiener',
    offer: '$6 Litcher + Taco Bar',
    alc: true,
    day: 'Thursday',
    time: '4-8pm',
    bizlogo: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/37322716_697868070553651_5167770909007675392_n.png?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=R9lr3Ff8KV0AX_oFf1p&_nc_ht=scontent-iad3-1.xx&oh=c06437832dea7d9df5282ece1e677ba0&oe=5F0CF2FF'
  },


  /* DIVIDE BETWEEN SPECIALS AND EVENTS */

  {
    type: 'event',
    business: 'TDs',
    reason: 'karaoke',
    bizevent: 'Karaoke @ TDs',
    day: 'Tuesday',
    time: '10 pm',
    bizlogo: 'https://www.tigerstogo.com/v_58_i381m.png'
  },
  {
    type: 'event',
    business: 'Sushi 365',
    reason: 'trivia',
    bizevent: 'Trivia Night (Pub Trivia)',
    day: 'Wednesday',
    time: '7:30 pm',
    bizlogo: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10474020_832999220074748_6215186670951263134_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=Kxu0B2IaBLcAX_kqw7b&_nc_ht=scontent-iad3-1.xx&oh=006fed725592c222e0d7d1e0fb2b9422&oe=5F0C99B1'
  },
  {
    type: 'event',
    business: 'Itsurwiener',
    reason: 'trivia',
    bizevent: 'Trivia Night (Themed Trivia)',
    day: 'Wednesday',
    time: '8 pm',
    bizlogo: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/37322716_697868070553651_5167770909007675392_n.png?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=R9lr3Ff8KV0AX_oFf1p&_nc_ht=scontent-iad3-1.xx&oh=c06437832dea7d9df5282ece1e677ba0&oe=5F0CF2FF'
  },
];

const business = document.querySelector('.business-name');
const offer = document.querySelector('.offer');
const day = document.querySelector('.day');
const time = document.querySelector('.time');

const special = document.getElementById('category-list');

for (i=0; i<items.length; i++) {
if (items[i].type === 'special' && items[i].alc == true) {
  const item = items[i];

    newSpecial = document.createElement("DIV");
    special.appendChild(newSpecial);
    newSpecial.classList += "new-special";

    if (item.hasOwnProperty('business')) {
      newAttr = document.createElement("P");
      newSpecial.appendChild(newAttr);
      newAttr.textContent = items[i].business;
      newAttr.classList += "business-name";
    }

    image = document.createElement("DIV");
    newSpecial.appendChild(image);
    image.classList += "logocontainer";

    if (item.hasOwnProperty('bizlogo')) {
      newImg = document.createElement("IMG");
      image.appendChild(newImg);
      newImg.src = items[i].bizlogo;
      newImg.classList += "bizlogo";
    }

    dayTime = document.createElement("DIV");
    newSpecial.appendChild(dayTime);
    dayTime.classList += "daytime";

      if (item.hasOwnProperty('day')) {
        newAttr = document.createElement("P");
        dayTime.appendChild(newAttr);
        newAttr.textContent = items[i].day;
        newAttr.classList += "day";

      }

      if (item.hasOwnProperty('time')) {
        newAttr = document.createElement("P");
        dayTime.appendChild(newAttr);
        newAttr.textContent = items[i].time;
        newAttr.classList += "time";

      }

    if (item.hasOwnProperty('offer')) {
      newAttr = document.createElement("P");
      newSpecial.appendChild(newAttr);
      newAttr.textContent = items[i].offer;
      newAttr.classList += "offer";

    }
  }
  var body = document.body;
       html = document.documentElement;
   var big = Math.max(body.scrollHeight, body.offsetHeight,
                        html.clientHeight, html.scrollHeight, html.offsetHeight );
   var hei = big;
   const logobg = document.querySelector('#logobg');
   logobg.style.height = hei + 'px';
};
