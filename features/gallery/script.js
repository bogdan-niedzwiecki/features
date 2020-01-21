var pictures = [
  'gallery-tomato/tomato-red-large.jpg',
  'gallery-tomato/tomato-yellow-large.jpg',
  'gallery-tomato/tomato-strange-large.jpg'
];

var fullPhoto = document.querySelector('.full-picture');
var thumbnails = document.querySelectorAll('.gallery__picture-preview');

function addThumbnailClickHandler(thumbnail, picture){
  thumbnail.addEventListener('click', function(){
    fullPhoto.src = picture;
  });
}

for(var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], pictures[i]);
}
