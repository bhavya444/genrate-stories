
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");


btn.addEventListener("click", function() {

  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json');

  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
      
    } else {
      console.log("error.");
    }
     
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();

});


function renderHTML(data) {
  var htmlString = "";
for(i=0;i<data.length;i++){
 htmlString += "<p>" +i+ ")" + " AUTHOR NAME: " + data[i].author+ "</p>"+ "<p> WIKI BOOK LINK: " + data[i].link+ "</p>"+"<p> TITLE : " + data[i].title ;
   htmlString += '.</p>';
  
}
  animalContainer.insertAdjacentHTML('beforeend', htmlString);

}




