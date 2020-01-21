var list = document.querySelector('.chat-content');

var form = document.querySelector('.chat-form');
var input = form.querySelector('.chat-form-input');

var template = document.querySelector('#message-template').content;
var templateMessage = template.querySelector('.chat-message');


function addDeleteMessageHandler(message){
  var closeButton = message.querySelector('.chat-message-button');
  closeButton.addEventListener('click', function(){
    message.remove();
  });
}

form.addEventListener('submit', function(evt){
  evt.preventDefault();  
  var inputText = input.value;
  var clonedMessage = templateMessage.cloneNode(true);
  var clonedMessageText = clonedMessage.querySelector('.chat-message-text');
  clonedMessageText.textContent = inputText;
  addDeleteMessageHandler(clonedMessage);
  list.appendChild(clonedMessage);
  input.value = "";
});
