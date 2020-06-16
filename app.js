const specials = [
  {
    business: 'Sushi 365',
    offer: '$3.65 Sushi Rolls',
    day: 'Monday',
  },
  {
    business: 'Itsurwiener',
    offer: '$6 Shipwrecks',
    day: 'Friday',
    time: '5-8pm',
  },
  {
    business: 'BGR',
    offer: '$6 Cheeseburger & Fries',
    day: 'Wednesday',
  },
];

const business = document.querySelector('.business-name');
const offer = document.querySelector('.offer');
const day = document.querySelector('.day');
const time = document.querySelector('.time');

const special = document.getElementById('category-list');

 /*window.addEventListener("DOMContentLoaded", () => {
  showSpecial();
});

 function showSpecial() {
  const item = specials[currentItem];
  business.textContent = item.business;
  offer.textContent = item.offer;
  day.textContent = item.day;
  time.textContent = item.time;
} */

for (i=0; i<specials.length; i++) {
  const item = specials[i];

    newSpecial = document.createElement("DIV");
    special.appendChild(newSpecial);
    newSpecial.classList += "new-special";

    if (item.hasOwnProperty('business')) {
      newAttr = document.createElement("P");
      newSpecial.appendChild(newAttr);
      newAttr.textContent = specials[i].business;
      newAttr.classList += "business-name";
    }

    if (item.hasOwnProperty('offer')) {
      newAttr = document.createElement("P");
      newSpecial.appendChild(newAttr);
      newAttr.textContent = specials[i].offer;
      newAttr.classList += "offer";

    }

    dayTime = document.createElement("DIV");
    newSpecial.appendChild(dayTime);
    dayTime.classList += "daytime";

      if (item.hasOwnProperty('day')) {
        newAttr = document.createElement("P");
        dayTime.appendChild(newAttr);
        newAttr.textContent = specials[i].day;
        newAttr.classList += "day";

      }

      if (item.hasOwnProperty('time')) {
        newAttr = document.createElement("P");
        dayTime.appendChild(newAttr);
        newAttr.textContent = specials[i].time;
        newAttr.classList += "time";

      }
};
