var nameInput = document.getElementById("name-input");
var startBtn = document.getElementById("start-btn");

startBtn.addEventListener("click", function() {
    var name = nameInput.value;
    if (name.trim() !== "") {
      displayUserMessage("My name is " + name);
      nameInput.disabled = true;
      startBtn.disabled = true;
  
      // Send AJAX request to start the bot
      $.ajax({
        type: "POST",
        url: "/start-bot/",
        data: {
          name: name,
          button: "start"
        },
        success: function(response) {
          console.log("Bot started successfully.");
        },
        error: function(error) {
          console.error("Failed to start the bot.");
        }
      });
    }
  });

var jokeButtonElements = document.getElementsByClassName('btn-dark');
var words
for (var i = 0; i < jokeButtonElements.length; i++) {

  jokeButtonElements[i].addEventListener('click', displayJoke);
}



function getJoke(jokeType) {
  switch (jokeType) {
    case 'Stupid':
      return "Why did the scarecrow win an award? Because he was outstanding in his field!";
    case 'Fat':
      return "Why don't scientists trust atoms? Because they make up everything!";
    case 'Dumb':
      return "Why don't skeletons fight each other? They don't have the guts!";
    default:
      return "Sorry, I don't have a joke for that.";
  }
}


var arr=new Array();
var arr2=new Array();

var inc=0 ;
function displayJoke(event) {

    
    
    // var keType = event.target.getAttribute('data-joke');
    // var ke = getJoke(keType);
    // var addClass= document.getElementById("change");

    // var messageList = document.getElementById('message-list');
    // var listItem = document.createElement('li');
    // listItem.textContent = ke;
    // // listItem.classList.add('chat-bubbleme');
    // messageList.appendChild(listItem);
    // addClass.classList.replace('you',"me")
    // getJoke(event)

    var keType = event.target.getAttribute('data-joke');
   
    if(keType=="stupid" || keType=="fat" || keType=="dumb" ){
        
        var ke = getJoke(keType);
        inc++
        arr.push({name:keType,data:ke , className:"p"+inc})
        arr2.push({name:keType,data:keType , className:"p"+inc})
        var addClass= document.getElementById("heading");
        var messageList = document.getElementById('main');
        var messageList1 = document.getElementById('main');
        var listItem = document.createElement('li');
        listItem.className = "chat-bubble me"
        listItem.textContent =keType[0].toUpperCase() + keType.slice(1);
        messageList.appendChild(listItem);
        // var listItem = document.createElement('span');
        // listItem.textContent = ke;
        // arr.forEach((val)=>{
    

        var div = document.createElement("div");
        div.className = "chat-bubble you "+ arr[arr.length-1].className;
        div.innerHTML = arr[arr.length-1].data;
        messageList.appendChild(div);
        $.ajax({
            type: "POST",
            url: "/start-bot/",
            data: {
              name: name,
              button: "start"
            },
            success: function(response) {
              console.log("Bot started successfully.");
            },
            error: function(error) {
              console.error("Failed to start the bot.");
            }
          });

    // })
//         var listItem =document.createTextNode(ke);
// messageList.appendChild(listItem);

    }

        var keType = event.target.getAttribute('data-joke');
        var ke = getJokeHeading(keType);

        // var addClass= document.getElementById("data");
        // var messageList = document.getElementById('message-data');
        var messageList =  document.getElementById('main');
                // var listItem = document.createElement('span');
                // listItem.textContent = ke;

                // arr.forEach((val)=>{

                    var div = document.createElement("div");
                    div.className ="chat-bubble me "+ arr[arr.length-1].className;
                    div.innerHTML = arr[arr.length-1].name;
                    messageList.appendChild(div);
            
                // })

        //         var listItem =document.createTextNode(ke);
        // messageList.appendChild(listItem);
        // document.getElementById('data').innerHTML = 
        var addClass= document.getElementById("data");
        addClass.classList.replace('you',"me")

        console.log(arr,"-----")
  }

