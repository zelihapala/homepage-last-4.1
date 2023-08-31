

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;


const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;


test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

const console = document.getElementById("tests");
prettify.toHTML(run(), console);



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
