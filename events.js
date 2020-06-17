/*import items from "./all.js";*/

const items = [
  {
    type: 'special',
    business: 'Sushi 365',
    offer: '$3.65 Sushi Rolls',
    day: 'Monday',
    bizlogo: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10474020_832999220074748_6215186670951263134_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=Kxu0B2IaBLcAX_kqw7b&_nc_ht=scontent-iad3-1.xx&oh=006fed725592c222e0d7d1e0fb2b9422&oe=5F0C99B1'
  },
  {
    type: 'special',
    business: 'Itsurwiener',
    offer: '$6 Shipwrecks',
    day: 'Friday',
    time: '5-8pm',
    bizlogo: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/37322716_697868070553651_5167770909007675392_n.png?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=R9lr3Ff8KV0AX_oFf1p&_nc_ht=scontent-iad3-1.xx&oh=c06437832dea7d9df5282ece1e677ba0&oe=5F0CF2FF'
  },
  {
    type: 'special',
    business: 'BGR',
    offer: '$6 Cheeseburger & Fries',
    day: 'Wednesday',
    bizlogo: 'https://www.tigerstogo.com/png/v_58_i101.png'
  },
  {
    type: 'event',
    business: 'Sushi 365',
    reason: 'charity/nonprofit',
    bizevent: 'Eating Sushi off of Cheerleaders',
    day: 'Monday',
    time: '8 pm - 2 am',
    bizlogo: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10474020_832999220074748_6215186670951263134_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=Kxu0B2IaBLcAX_kqw7b&_nc_ht=scontent-iad3-1.xx&oh=006fed725592c222e0d7d1e0fb2b9422&oe=5F0C99B1'
  },
  {
    type: 'event',
    business: 'Itsurwiener',
    reason: 'ladies\' night',
    bizevent: 'Wiener Rally',
    day: 'Friday',
    time: '5-6pm',
    bizlogo: 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/37322716_697868070553651_5167770909007675392_n.png?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=R9lr3Ff8KV0AX_oFf1p&_nc_ht=scontent-iad3-1.xx&oh=c06437832dea7d9df5282ece1e677ba0&oe=5F0CF2FF'
  },
  {
    type: 'event',
    business: 'BGR',
    reason: 'family outing',
    bizevent: 'Pretending Burgers are Not Disgusting',
    day: 'Wednesday',
    time: '8 am - 11 pm',
    bizlogo: 'https://www.tigerstogo.com/png/v_58_i101.png'
  },
];

const business = document.querySelector('.business-name');
const bizevent = document.querySelector('.event');
const day = document.querySelector('.day');
const time = document.querySelector('.time');

const eventList = document.getElementById('category-list');

for (i=0; i<items.length; i++) {
  if (items[i].type === 'event') {
  const item = items[i];

    newEvent = document.createElement("DIV");
    eventList.appendChild(newEvent);
    newEvent.classList += "new-event";

    if (item.hasOwnProperty('business')) {
      newAttr = document.createElement("P");
      newEvent.appendChild(newAttr);
      newAttr.textContent = items[i].business;
      newAttr.classList += "business-name";
    }

    image = document.createElement("DIV");
    newEvent.appendChild(image);
    image.classList += "logocontainer";

    if (item.hasOwnProperty('bizlogo')) {
      newImg = document.createElement("IMG");
      image.appendChild(newImg);
      newImg.src = items[i].bizlogo;
      newImg.classList += "bizlogo";
    }

    dayTime = document.createElement("DIV");
    newEvent.appendChild(dayTime);
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

    reasonevent = document.createElement("DIV");
    newEvent.appendChild(reasonevent);
    reasonevent.classList += "reason-event";

    if (item.hasOwnProperty('reason')) {
      newAttr = document.createElement("P");
      reasonevent.appendChild(newAttr);
      newAttr.textContent = items[i].reason;
      newAttr.classList += "reason";
    }

    if (item.hasOwnProperty('bizevent')) {
      newAttr = document.createElement("P");
      reasonevent.appendChild(newAttr);
      newAttr.textContent = items[i].bizevent;
      newAttr.classList += "bizevent";

    }

}
};
