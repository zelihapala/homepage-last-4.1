

var commentList;

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


commentList = [];


document.getElementById('submit').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  element_list.innerText = document.getElementById('comment-text').value;
  commentList.unshift(document.getElementById('comment-text').value);
  element_list.replaceChildren();
  element_list.innerText = 'You have submitted your comment!';

});





var imageUrlList;


imageUrlList = ['https://cdn1.ntv.com.tr/gorsel/OEJa83m7B0WOYi2Yc-5ipg.jpg?width=1000&mode=crop&scale=both', 'https://julesverne.com.tr/wp-content/uploads/2020/09/aurora.jpg', 'https://www.turkeyholidaydiary.com/wp-content/uploads/2019/01/uludag-ski-center-2.jpg', 'https://api.time.com/wp-content/uploads/2014/10/451570967.jpg', 'https://img.freepik.com/premium-photo/africa-nature-landscape-with-green-trees-mountains-field-blue-clear-sky-3d-illustration_76964-3120.jpg?w=2000', 'https://wallpapers.com/images/featured/summer-pictures-nyv022soo0r5p1sq.jpg'];
let element_showImage = document.getElementById('showImage');
element_showImage.setAttribute("src", imageUrlList[0]);


document.getElementById('next').addEventListener('click', (event) => {
  let element_showImage2 = document.getElementById('showImage');
  imageUrlList.push(imageUrlList[0]);
  imageUrlList.shift();
  element_showImage2.setAttribute("src", imageUrlList[0]);

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_showImage3 = document.getElementById('showImage');
  imageUrlList.unshift(imageUrlList.slice(-1)[0]);
  imageUrlList.pop();
  element_showImage3.setAttribute("src", imageUrlList[0]);

});


document.getElementById('summer').addEventListener('click', (event) => {
  let element_listOfVacation = document.getElementById('listOfVacation');
  element_listOfVacation.replaceChildren();
  let new_li = document.createElement('li');
  let new_a = document.createElement('a');
  new_a.setAttribute("href", 'https://www.themarmarahotels.com/bodrum?utm_campaign=Google%20My%20Business&utm_source=Google&utm_medium=Local%20Search');
  new_a.innerText = 'Antalya -Bodrum';

  new_li.appendChild(new_a);

  element_listOfVacation.appendChild(new_li);
  let new_li2 = document.createElement('li');
  let new_a2 = document.createElement('a');
  new_a2.setAttribute("href", 'https://wyndhamgardenlara.com/en?gclid=Cj0KCQjwi7GnBhDXARIsAFLvH4n-vJqUTSroRPwDk74cYttmXy0nY0tvvn0_n4nkJRh8Yc1xVwmuusIaAi2pEALw_wcB');
  new_a2.innerText = 'Antalya -Lara';

  new_li2.appendChild(new_a2);

  element_listOfVacation.appendChild(new_li2);
  let new_li3 = document.createElement('li');
  let new_a3 = document.createElement('a');
  new_a3.setAttribute("href", 'https://www.delphinhotel.com/tr/delphin-be-grand-resort');
  new_a3.innerText = 'Antalya-Kemer';

  new_li3.appendChild(new_a3);

  element_listOfVacation.appendChild(new_li3);

});

document.getElementById('winter').addEventListener('click', (event) => {
  let element_listOfVacation2 = document.getElementById('listOfVacation');
  element_listOfVacation2.replaceChildren();
  let new_li4 = document.createElement('li');
  let new_a4 = document.createElement('a');
  new_a4.setAttribute("href", 'https://bofuludag.com/');
  new_a4.innerText = 'Bursa-Uludag';

  new_li4.appendChild(new_a4);

  element_listOfVacation2.appendChild(new_li4);
  let new_li5 = document.createElement('li');
  let new_a5 = document.createElement('a');
  new_a5.setAttribute("href", 'https://www.masalyamacotel.com/');
  new_a5.innerText = 'Sivas -Hobbit Village';

  new_li5.appendChild(new_a5);

  element_listOfVacation2.appendChild(new_li5);
  let new_li6 = document.createElement('li');
  let new_a6 = document.createElement('a');
  new_a6.setAttribute("href", 'https://www.gamirasu.com/');
  new_a6.innerText = 'Nevsehir-Kapadokya';

  new_li6.appendChild(new_a6);

  element_listOfVacation2.appendChild(new_li6);

});