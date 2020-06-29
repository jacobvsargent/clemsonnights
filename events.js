/*import items from "./all.js";*/

var items = items;


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
    } else {
      placeholder = document.createElement("DIV");
      image.appendChild(placeholder);
      placeholder.classList += "placeholder";
      initial = document.createElement("P");
      initial2 = document.createElement("P");
      placeholder.appendChild(initial);
      placeholder.appendChild(initial2);
      bizname = items[i].business;
      initial.textContent = bizname.charAt(0);
      initial2.textContent = bizname;
      initial2.classList += "initial2";
      console.log(initial);
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
    var body = document.body;
         html = document.documentElement;
   var big = Math.max(body.scrollHeight, body.offsetHeight,
                        html.clientHeight, html.scrollHeight, html.offsetHeight );
   var hei = big;
   const logobg = document.querySelector('#logobg');
   logobg.style.height = hei + 'px';
}
};
