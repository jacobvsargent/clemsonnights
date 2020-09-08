/*import items from "./all.js"; */

var items = items;



const business = document.querySelector('.business-name');
const offer = document.querySelector('.offer');
const day = document.querySelector('.day');
const time = document.querySelector('.time');

const special = document.getElementById('category-list');

for (i=0; i<items.length; i++) {
if (items[i].type === 'special' && items[i].alc == false) {
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
