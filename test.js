let thumb = document.getElementById('thumb');

let pic1 = document.getElementById('pic1');
let pic2 = document.getElementById('pic2');
let pic3 = document.getElementById('pic3');
let pic4 = document.getElementById('pic4');
let pic5 = document.getElementById('pic5');

let btnLink = document.getElementById('btnLink');
let btnLinkHref = btnLink.href;

// getting the picture id from the link
let btnLinkHrefArray = btnLinkHref.split("/");
let adsId = btnLinkHrefArray[6];


pic1.addEventListener('click', changePictureAndLink);
pic2.addEventListener('click', changePictureAndLink);
pic3.addEventListener('click', changePictureAndLink);
pic4.addEventListener('click', changePictureAndLink);
pic5.addEventListener('click', changePictureAndLink);

function changePictureAndLink(e){
    
    let changingPicture = e.target.id;
    
    let mySrc = e.target.src;

    thumb.src = mySrc;
    
    let entryArray = thumb.src;
    
    entryArray = entryArray.split("/");
    
    console.log(entryArray);
    
    let newThumb = entryArray[7];
    let cat = entryArray[5];
    let subCat = entryArray[6];
    console.log(newThumb);
    
    
    
    alert(btnLinkHref);
    