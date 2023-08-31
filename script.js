

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
