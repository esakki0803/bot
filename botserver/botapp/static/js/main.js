document.addEventListener("DOMContentLoaded", function() {
    var messageInput = document.getElementById("message-input");
    var chatLog = document.getElementById("chat-log");
    var sendBtn = document.getElementById("send-btn");
    var jokeButtons = document.getElementsByClassName("joke-btn");
    var jokeDisplay = document.getElementById("joke-display");
  
    sendBtn.addEventListener("click", function() {
      var message = messageInput.value;
      if (message.trim() !== "") {
        var messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.textContent = "User: " + message;
        chatLog.appendChild(messageElement);
        messageInput.value = "";
  
        // Send message to the server (you'll implement this using AJAX)
        sendMessageToServer(message);
      }
    });
  
    // Add event listeners to the joke buttons
    for (var i = 0; i < jokeButtons.length; i++) {
      jokeButtons[i].addEventListener("click", function() {
        var joke = getJoke(this.id);
        jokeDisplay.textContent = joke;
      });
    }
  
    // Function to get the appropriate joke based on the button clicked
    function getJoke(buttonId) {
      var joke;
      switch (buttonId) {
        case "stupid-btn":
          joke = "Why don't scientists trust atoms? Because they make up everything!";
          break;
        case "fat-btn":
          joke = "Why don't skeletons fight each other? They don't have the guts!";
          break;
        case "dumb-btn":
          joke = "Why did the scarecrow win an award? Because he was outstanding in his field!";
          break;
        default:
          joke = "No joke available.";
          break;
      }
      return joke;
    }
  
    // Function to send the message to the server (implement AJAX here)
    function sendMessageToServer(message) {
      // Implement your server-side logic to process the message here
      // You can use AJAX to send the message to the server for further processing
    }
  });
  