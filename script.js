// function sendMessage() { 
//     let input = document.getElementById("userinput");
//     let message = input.value.toLowerCase();
//     let chatbox=document.getElementById("chatbox");

//     chatbox.innerHTML += `<div class="user">${input.value}</div>`;
//     let reply="";
    

//     if (message.includes("hello")) {
//         reply = "Hello! How can I assist you today?";
//     }
//         else if (message.includes("Where is my order?,Order status")) {
//         reply = "Your order is currently being processed and will be shipped soon.";
//     }
//        else if (message.includes("How do I return an order?,what is your the return policy")) {
//         reply = "You can return an item within 30 days of purchase. Please visit our returns page for more information.";
//     }
//        else if (message.includes("How much does delivery cost?,Do you offer free shipping?")) {
//         reply = "Standard shipping takes 3-5 business days and free on orders over $50.express shipping is available for an additional fee.";
//     }
//        else if (message.includes("What payment methods do you accept?,Do you have payment on delivery as well?,Is UPI available for payment?,Do you offer EMI or Instalment plans?")) {
//         reply = "We accept all major credit cards, debit cards, and PayPal. Payment on delivery is also available for select items. UPI is accepted as well,we also offer EMI and Instalment plans.";
//     }
//       else if (message.includes("Do you have this item in stock?")) {
//         reply = "let me check that for you! can you please provide me the exact product name or SKU number?";
//     }
//       else if (message.includes("SKU number:123456789")) {
//         reply = "Yes, this item is currently in stock and available for purchase.";
//     }
//      else if (message.includes("Can you recommend a product for me?,I am looking for a gift for my friend")) {
//         reply = "yes, I can recommend some products based on your friend's interests. Can you please provide me with more information about what they like?";
//          }
//         else if (message.includes("I need real help with my order,Can I speak to a customer service representative?,what is your costumer care number?")) {
//         reply = "I'm sorry to hear that you're having issues with your order. You can speak to a customer service representative by calling our support line at 1-800-123-4567.";
//      }
//         else if (message.includes("You are useless,i want my money back NOW,This is the worst service ever")) {
//         reply = "I am sorry for frustration. Please provide me your order number and I will connect you to a senior human agent right now.please give me a moment while i pull up your order details.";
//      }
//         else if (message.includes("Do you ship internationally?")) {
//         reply = "Yes, we do ship internationally. ";
//     }
//         else if (message.includes("What happens if i'm not at home when the delivery arrives?,Can I change my delivery address after placing an order?")) {
//         reply = "If you miss your delivery,our courier will make two more delivery attempts on working buisness days.you can also reschedule your delivery or change your delivery address by directly using your tracking link or contacting our customer service.";
//     }
//         else if (message.includes("My payment failed but money was deducted from my account,where can it download my tax invoice for my order?")) {
//         reply = "If your money was deducted but the order failed,the amount will automatically be refunded to your account within 3-5 business days. You can download your tax invoice from your order history page on our website.";
//     }
//         else if (message.includes("i forgot my passsword,How do i update my email address on my account?")) {
//         reply = "To reset your password,please enter the email address associated with your account, and i will send you a secure password reset link right away.";
//      }
//         else if (message.includes("How do i redeem my reward points or gift cards?,Can i use multiple gift cards or reward points for a single purchase?"))
//              {
//         reply = "You can redeem your reward points or gift cards at checkout section and also you can use multiple gift cards or reward points for a single purchase.";
//      }
//         else if (message.includes("What is your return policy?"))
//              {
//         reply = "We have a 30-day return policy for most items. Please ensure the items are in their original condition with all tags attached."; 
//     }
//         else if (message.includes("?")) {
//         reply = "yes, How can i help you?";
//      }
     
      

//      else {
//     reply = "Sorry, I didn't understand that. Please try again.";
// }
//     }
function sendMessage() {

    let input = document.getElementById("userInput");
    let message = input.value.toLowerCase().trim();
    let chatbox = document.getElementById("chatbox");

    
    if (message === "") {
        return;
    }

    
    chatbox.innerHTML += `
        <div class="user">${input.value}</div>
    `;

    let reply = "";

    
    if (message.includes("hello") || message.includes("hi")) {

        reply = "Hello! How can I assist you today?";

    }

    
    else if (
        message.includes("where is my order") ||
        message.includes("order status") ||
        message.includes("track my order")
    ) {

        reply = "Your order is currently being processed and will be shipped soon.";

    }

    
    else if (
        message.includes("how do i return my order") ||
        message.includes("what is your return policy")
    ) {

        reply = "You can return an item within 30 days of purchase. Please visit our returns page for more information.";

    }

  
    else if (
        message.includes("what does delivery cost") ||
        message.includes("free shipping is available?")
    ) {

        reply = "Standard shipping takes 3-5 business days and is free on orders over $50. Express shipping is available for an additional fee.";

    }

   
    else if (
        message.includes("what are the payment methods") ||
        message.includes("can i pay on delivery") ||
        message.includes("can i pay with upi") ||
        message.includes("emi otions are available?") ||
        message.includes("what are installment plans")
    ) {

        reply = "We accept major credit cards, debit cards, PayPal and UPI. Payment on delivery is available for select items. We also offer EMI and installment plans.";

    }

    
    else if (
        message.includes("is the product in stock") ||
        message.includes("is the item in stock")
    ) {

        reply = "Let me check that for you! Can you please provide the exact product name or SKU number?";

    }

   
    else if (
        message.includes("product name") ||
        message.includes("123456789")
    ) {

        reply = "Yes, this item is currently in stock and available for purchase.";

    }

    
    else if (
        message.includes("can you suggest the best product available") ||
        message.includes("i want a gift for my friend")
    ) {

        reply = "Yes, I can recommend some products. <products list>";

    }

    
    else if (
        message.includes("i want to talk to a human representative") ||
        message.includes("i need to speak to customer service") ||
        message.includes("what is the customer care number")
    ) {

        reply = "I'm sorry to hear that if you're having issues with your order. You can speak to a customer service representative by calling 1-800-123-4567.";

    }

  
    else if (
        message.includes("you are useless") ||
        message.includes("i want my money back") ||
        message.includes("worst service ever")
    ) {

        reply = "I'm sorry for the frustration. Please provide your order number and I will connect you to a senior human agent.";

    }

   
    else if (
        message.includes("do you ship internationally?") ||
        message.includes("how much international shipping costs?")
    ) {

        reply = "Yes, we do ship internationally. It costs $15 for standard international shipping and $30 for express international shipping.";

    }

    
    else if (
        message.includes("i am not at home") ||
        message.includes("i want tochange my delivery address")
    ) {

        reply = "If you miss your delivery, our courier will make two more delivery attempts on working business days. You can also reschedule your delivery or change your delivery address using your tracking link or by contacting customer service.";

    }

    
    else if (
        message.includes("my payment failed") ||
        message.includes("money was deducted but order failed") ||
        message.includes("where can i download my tax invoice for my order?")
    ) {

        reply = "If your money was deducted but the order failed, the amount will automatically be refunded to your account within 3-5 business days. you can download your tax invoice from your order history page on our website.";

    }

  
    else if (
        message.includes("i want my tax invoice") ||
        message.includes("download my invoice")
    ) {

        reply = "You can download your tax invoice from the order history page on our website.";

    }

   
    else if (
        message.includes("i forgot my password") ||
        message.includes("i want to update my email address")
    ) {

        reply = "To reset your password, please enter the email address associated with your account and I will send you a secure password reset link.";

    }

    
    else if (
        message.includes("i want to redeem my reward points") ||
        message.includes("i want to use my gift cards") ||
        message.includes("i want to check my reward points")
    ) {

        reply = "You can redeem your reward points or gift cards during checkout. Multiple gift cards or reward points can also be used for a single purchase where supported.";

    }

    
    else if (message.includes("?")) {

        reply = "Yes! How can I help you?";

    }

   
    else {

        reply = "Sorry, I didn't understand that. Please try again.";

    }

       
    chatbox.innerHTML += `
        <div class="bot">${reply}</div>
    `;

    
//     // chatbox.scrollTop = chatbox.scrollHeight;
//     setTimeout(() => {
//     chatbox.scrollTop = chatbox.scrollHeight;
// }, 0);
requestAnimationFrame(() => {
    chatbox.scrollTo({
        top: chatbox.scrollHeight,
        behavior: "smooth"
    });
});

   
    input.value = "";

}



document.getElementById("userInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

  

