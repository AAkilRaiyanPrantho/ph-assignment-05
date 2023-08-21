// getting the initial Total Amount
let totalAmount = document.getElementById("total-Price");
let totalAmountInString = totalAmount.innerText;
let totalAmountInNumber = parseFloat(totalAmountInString);
// console.log(totalAmountInNumber);

// getting the initial Discounted Amount
let totalDiscount = document.getElementById("discounted-Price");
let totalDiscountInString = totalDiscount.innerText;
let totalDiscountInNumber = parseFloat(totalDiscountInString);
// console.log(totalDiscountInNumber);

// getting the initial Total Amount
let totalAmountWithDiscount = document.getElementById("total-Discounted-Price");
let totalAmountWithDiscountInString = totalAmountWithDiscount.innerText;
let totalAmountWithDiscountInNumber = parseFloat(
  totalAmountWithDiscountInString
);
// console.log(totalAmountWithDiscountInNumber);


// Click and Add Event Part

// 1st Card
let firstCard = document.getElementById("item-Card1");
firstCard.addEventListener("click", function () {
  // title part
  let oL = document.getElementById("card-Title1");
  let orderedList = document.getElementById("cart-list");
  let listItem = oL.innerText;
  let li = document.createElement("li");
  li.innerText = listItem;
  orderedList.appendChild(li);

  // amount part
  totalAmountInNumber = totalAmountInNumber + 39;
  totalDiscountInNumber = 0;
  totalAmountWithDiscountInNumber = totalAmountInNumber;
  totalAmount.innerText = totalAmountInNumber.toFixed(2);
  totalDiscount.innerText = totalDiscountInNumber.toFixed(2);
  totalAmountWithDiscount.innerText =
    totalAmountWithDiscountInNumber.toFixed(2);
  console.log(totalAmountInNumber);

  // Modal part
  if (totalAmountInNumber > 0) {
    let x = document.getElementById("btn-purchase");
    x.classList.remove("btn-disabled");
  }

  if (totalAmountInNumber >= 200) {
    let y = document.getElementById("btn-apply");
    y.classList.remove("btn-disabled");
    y.addEventListener("click", function () {
       let z = document.getElementById("coupon-code");
       let couponCode = z.value;
       console.log(couponCode);
      if (couponCode === "SELL200") {
        totalDiscountInNumber = totalAmountInNumber * 0.2;
        totalAmountWithDiscountInNumber =
          totalAmountInNumber - totalDiscountInNumber;
        totalDiscount.innerText = totalDiscountInNumber.toFixed(2);
        totalAmountWithDiscount.innerText =
          totalAmountWithDiscountInNumber.toFixed(2);
          z.value = '';
          event.stopImmediatePropagation();;
      }
       else if (couponCode === '') {
        alert("Insert a Coupon Code");
        event.stopImmediatePropagation();;
      } 
      else alert("Wrong Coupon Code Entered");
      event.stopImmediatePropagation();;
    });
  }
});


// 2nd Card
let secondCard = document.getElementById("item-Card2");
secondCard.addEventListener("click", function () {
  // title part
  let oL = document.getElementById("card-Title2");
  let orderedList = document.getElementById("cart-list");
  let listItem = oL.innerText;
  let li = document.createElement("li");
  li.innerText = listItem;
  orderedList.appendChild(li);

  // amount part
  totalAmountInNumber = totalAmountInNumber + 25;
  totalDiscountInNumber = 0;
  totalAmountWithDiscountInNumber = totalAmountInNumber;
  totalAmount.innerText = totalAmountInNumber.toFixed(2);
  totalDiscount.innerText = totalDiscountInNumber.toFixed(2);
  totalAmountWithDiscount.innerText =
    totalAmountWithDiscountInNumber.toFixed(2);
  console.log(totalAmountInNumber);

  // Modal part
  if (totalAmountInNumber > 0) {
    let x = document.getElementById("btn-purchase");
    x.classList.remove("btn-disabled");
  }

  if (totalAmountInNumber >= 200) {
    let y = document.getElementById("btn-apply");
    y.classList.remove("btn-disabled");
    y.addEventListener("click", function () {
       let z = document.getElementById("coupon-code");
       let couponCode = z.value;
       console.log(couponCode);
      if (couponCode === "SELL200") {
        totalDiscountInNumber = totalAmountInNumber * 0.2;
        totalAmountWithDiscountInNumber =
          totalAmountInNumber - totalDiscountInNumber;
        totalDiscount.innerText = totalDiscountInNumber.toFixed(2);
        totalAmountWithDiscount.innerText =
          totalAmountWithDiscountInNumber.toFixed(2);
          z.value = '';
          event.stopImmediatePropagation();;
      }
       else if (couponCode === '') {
        alert("Insert a Coupon Code");
        event.stopImmediatePropagation();;
      } 
      else alert("Wrong Coupon Code Entered");
      event.stopImmediatePropagation();;
    });
  }
});

// 3rd Card
let thirdCard = document.getElementById("item-Card3");
thirdCard.addEventListener("click", function () {
  // title part
  let oL = document.getElementById("card-Title3");
  let orderedList = document.getElementById("cart-list");
  let listItem = oL.innerText;
  let li = document.createElement("li");
  li.innerText = listItem;
  orderedList.appendChild(li);

  // amount part
  totalAmountInNumber = totalAmountInNumber + 49;
  totalDiscountInNumber = 0;
  totalAmountWithDiscountInNumber = totalAmountInNumber;
  totalAmount.innerText = totalAmountInNumber.toFixed(2);
  totalDiscount.innerText = totalDiscountInNumber.toFixed(2);
  totalAmountWithDiscount.innerText =
    totalAmountWithDiscountInNumber.toFixed(2);
  console.log(totalAmountInNumber);

  // Modal part
  if (totalAmountInNumber > 0) {
    let x = document.getElementById("btn-purchase");
    x.classList.remove("btn-disabled");
  }

  if (totalAmountInNumber >= 200) {
    let y = document.getElementById("btn-apply");
    y.classList.remove("btn-disabled");
    y.addEventListener("click", function () {
       let z = document.getElementById("coupon-code");
       let couponCode = z.value;
       console.log(couponCode);
      if (couponCode === "SELL200") {
        totalDiscountInNumber = totalAmountInNumber * 0.2;
        totalAmountWithDiscountInNumber =
          totalAmountInNumber - totalDiscountInNumber;
        totalDiscount.innerText = totalDiscountInNumber.toFixed(2);
        totalAmountWithDiscount.innerText =
          totalAmountWithDiscountInNumber.toFixed(2);
          z.value = '';
          event.stopImmediatePropagation();;
      }
       else if (couponCode === '') {
        alert("Insert a Coupon Code");
        event.stopImmediatePropagation();;
      } 
      else alert("Wrong Coupon Code Entered");
      event.stopImmediatePropagation();;
    });
  }
});
// 4th Card
let fourthCard = document.getElementById("item-Card4");
fourthCard.addEventListener("click", function () {
  // title part
  let oL = document.getElementById("card-Title4");
  let orderedList = document.getElementById("cart-list");
  let listItem = oL.innerText;
  let li = document.createElement("li");
  li.innerText = listItem;
  orderedList.appendChild(li);

  // amount part
  totalAmountInNumber = totalAmountInNumber + 49;
  totalDiscountInNumber = 0;
  totalAmountWithDiscountInNumber = totalAmountInNumber;
  totalAmount.innerText = totalAmountInNumber.toFixed(2);
  totalDiscount.innerText = totalDiscountInNumber.toFixed(2);
  totalAmountWithDiscount.innerText =
    totalAmountWithDiscountInNumber.toFixed(2);
  console.log(totalAmountInNumber);

  // Modal part
  if (totalAmountInNumber > 0) {
    let x = document.getElementById("btn-purchase");
    x.classList.remove("btn-disabled");
  }

  if (totalAmountInNumber >= 200) {
    let y = document.getElementById("btn-apply");
    y.classList.remove("btn-disabled");
    y.addEventListener("click", function () {
       let z = document.getElementById("coupon-code");
       let couponCode = z.value;
       console.log(couponCode);
      if (couponCode === "SELL200") {
        totalDiscountInNumber = totalAmountInNumber * 0.2;
        totalAmountWithDiscountInNumber =
          totalAmountInNumber - totalDiscountInNumber;
        totalDiscount.innerText = totalDiscountInNumber.toFixed(2);
        totalAmountWithDiscount.innerText =
          totalAmountWithDiscountInNumber.toFixed(2);
          z.value = '';
          event.stopImmediatePropagation();;
      }
       else if (couponCode === '') {
        alert("Insert a Coupon Code");
        event.stopImmediatePropagation();;
      } 
      else alert("Wrong Coupon Code Entered");
      event.stopImmediatePropagation();;
    });
  }
});
// 5th Card
let fifthCard = document.getElementById("item-Card5");
fifthCard.addEventListener("click", function () {
  // title part
  let oL = document.getElementById("card-Title5");
  let orderedList = document.getElementById("cart-list");
  let listItem = oL.innerText;
  let li = document.createElement("li");
  li.innerText = listItem;
  orderedList.appendChild(li);

  // amount part
  totalAmountInNumber = totalAmountInNumber + 69;
  totalDiscountInNumber = 0;
  totalAmountWithDiscountInNumber = totalAmountInNumber;
  totalAmount.innerText = totalAmountInNumber.toFixed(2);
  totalDiscount.innerText = totalDiscountInNumber.toFixed(2);
  totalAmountWithDiscount.innerText =
    totalAmountWithDiscountInNumber.toFixed(2);
  console.log(totalAmountInNumber);

  // Modal part
  if (totalAmountInNumber > 0) {
    let x = document.getElementById("btn-purchase");
    x.classList.remove("btn-disabled");
  }

  if (totalAmountInNumber >= 200) {
    let y = document.getElementById("btn-apply");
    y.classList.remove("btn-disabled");
    y.addEventListener("click", function () {
       let z = document.getElementById("coupon-code");
       let couponCode = z.value;
       console.log(couponCode);
      if (couponCode === "SELL200") {
        totalDiscountInNumber = totalAmountInNumber * 0.2;
        totalAmountWithDiscountInNumber =
          totalAmountInNumber - totalDiscountInNumber;
        totalDiscount.innerText = totalDiscountInNumber.toFixed(2);
        totalAmountWithDiscount.innerText =
          totalAmountWithDiscountInNumber.toFixed(2);
          z.value = '';
          event.stopImmediatePropagation();;
      }
       else if (couponCode === '') {
        alert("Insert a Coupon Code");
        event.stopImmediatePropagation();;
      } 
      else alert("Wrong Coupon Code Entered");
      event.stopImmediatePropagation();;
    });
  }
});
// 6th Card
let sixthCard = document.getElementById("item-Card6");
sixthCard.addEventListener("click", function () {
  // title part
  let oL = document.getElementById("card-Title6");
  let orderedList = document.getElementById("cart-list");
  let listItem = oL.innerText;
  let li = document.createElement("li");
  li.innerText = listItem;
  orderedList.appendChild(li);

  // amount part
  totalAmountInNumber = totalAmountInNumber + 159;
  totalDiscountInNumber = 0;
  totalAmountWithDiscountInNumber = totalAmountInNumber;
  totalAmount.innerText = totalAmountInNumber.toFixed(2);
  totalDiscount.innerText = totalDiscountInNumber.toFixed(2);
  totalAmountWithDiscount.innerText =
    totalAmountWithDiscountInNumber.toFixed(2);
  console.log(totalAmountInNumber);

  // Modal part
  if (totalAmountInNumber > 0) {
    let x = document.getElementById("btn-purchase");
    x.classList.remove("btn-disabled");
  }

  if (totalAmountInNumber >= 200) {
    let y = document.getElementById("btn-apply");
    y.classList.remove("btn-disabled");
    y.addEventListener("click", function () {
       let z = document.getElementById("coupon-code");
       let couponCode = z.value;
       console.log(couponCode);
      if (couponCode === "SELL200") {
        totalDiscountInNumber = totalAmountInNumber * 0.2;
        totalAmountWithDiscountInNumber =
          totalAmountInNumber - totalDiscountInNumber;
        totalDiscount.innerText = totalDiscountInNumber.toFixed(2);
        totalAmountWithDiscount.innerText =
          totalAmountWithDiscountInNumber.toFixed(2);
          z.value = '';
          event.stopImmediatePropagation();;
      }
       else if (couponCode === '') {
        alert("Insert a Coupon Code");
        event.stopImmediatePropagation();;
      } 
      else alert("Wrong Coupon Code Entered");
      event.stopImmediatePropagation();;
    });
  }
});
// 7th Card
let seventhCard = document.getElementById("item-Card7");
seventhCard.addEventListener("click", function () {
  // title part
  let oL = document.getElementById("card-Title7");
  let orderedList = document.getElementById("cart-list");
  let listItem = oL.innerText;
  let li = document.createElement("li");
  li.innerText = listItem;
  orderedList.appendChild(li);

  // amount part
  totalAmountInNumber = totalAmountInNumber + 185;
  totalDiscountInNumber = 0;
  totalAmountWithDiscountInNumber = totalAmountInNumber;
  totalAmount.innerText = totalAmountInNumber.toFixed(2);
  totalDiscount.innerText = totalDiscountInNumber.toFixed(2);
  totalAmountWithDiscount.innerText =
    totalAmountWithDiscountInNumber.toFixed(2);
  console.log(totalAmountInNumber);

  // Modal part
  if (totalAmountInNumber > 0) {
    let x = document.getElementById("btn-purchase");
    x.classList.remove("btn-disabled");
  }

  if (totalAmountInNumber >= 200) {
    let y = document.getElementById("btn-apply");
    y.classList.remove("btn-disabled");
    y.addEventListener("click", function () {
       let z = document.getElementById("coupon-code");
       let couponCode = z.value;
       console.log(couponCode);
      if (couponCode === "SELL200") {
        totalDiscountInNumber = totalAmountInNumber * 0.2;
        totalAmountWithDiscountInNumber =
          totalAmountInNumber - totalDiscountInNumber;
        totalDiscount.innerText = totalDiscountInNumber.toFixed(2);
        totalAmountWithDiscount.innerText =
          totalAmountWithDiscountInNumber.toFixed(2);
          z.value = '';
          event.stopImmediatePropagation();;
      }
       else if (couponCode === '') {
        alert("Insert a Coupon Code");
        event.stopImmediatePropagation();;
      } 
      else alert("Wrong Coupon Code Entered");
      event.stopImmediatePropagation();;
    });
  }
});
// 8th Card
let eighthCard = document.getElementById("item-Card8");
eighthCard.addEventListener("click", function () {
  // title part
  let oL = document.getElementById("card-Title8");
  let orderedList = document.getElementById("cart-list");
  let listItem = oL.innerText;
  let li = document.createElement("li");
  li.innerText = listItem;
  orderedList.appendChild(li);

  // amount part
  totalAmountInNumber = totalAmountInNumber + 299;
  totalDiscountInNumber = 0;
  totalAmountWithDiscountInNumber = totalAmountInNumber;
  totalAmount.innerText = totalAmountInNumber.toFixed(2);
  totalDiscount.innerText = totalDiscountInNumber.toFixed(2);
  totalAmountWithDiscount.innerText =
    totalAmountWithDiscountInNumber.toFixed(2);
  console.log(totalAmountInNumber);

  // Modal part
  if (totalAmountInNumber > 0) {
    let x = document.getElementById("btn-purchase");
    x.classList.remove("btn-disabled");
  }

  if (totalAmountInNumber >= 200) {
    let y = document.getElementById("btn-apply");
    y.classList.remove("btn-disabled");
    y.addEventListener("click", function () {
       let z = document.getElementById("coupon-code");
       let couponCode = z.value;
       console.log(couponCode);
      if (couponCode === "SELL200") {
        totalDiscountInNumber = totalAmountInNumber * 0.2;
        totalAmountWithDiscountInNumber =
          totalAmountInNumber - totalDiscountInNumber;
        totalDiscount.innerText = totalDiscountInNumber.toFixed(2);
        totalAmountWithDiscount.innerText =
          totalAmountWithDiscountInNumber.toFixed(2);
          z.value = '';
          event.stopImmediatePropagation();;
      }
       else if (couponCode === '') {
        alert("Insert a Coupon Code");
        event.stopImmediatePropagation();;
      } 
      else alert("Wrong Coupon Code Entered");
      event.stopImmediatePropagation();;
    });
  }
});

// 9th Card
let ninthCard = document.getElementById("item-Card9");
ninthCard.addEventListener("click", function () {
  // title part
  let oL = document.getElementById("card-Title9");
  let orderedList = document.getElementById("cart-list");
  let listItem = oL.innerText;
  let li = document.createElement("li");
  li.innerText = listItem;
  orderedList.appendChild(li);

  // amount part
  totalAmountInNumber = totalAmountInNumber + 339;
  totalDiscountInNumber = 0;
  totalAmountWithDiscountInNumber = totalAmountInNumber;
  totalAmount.innerText = totalAmountInNumber.toFixed(2);
  totalDiscount.innerText = totalDiscountInNumber.toFixed(2);
  totalAmountWithDiscount.innerText =
    totalAmountWithDiscountInNumber.toFixed(2);
  console.log(totalAmountInNumber);

  // Modal part
  if (totalAmountInNumber > 0) {
    let x = document.getElementById("btn-purchase");
    x.classList.remove("btn-disabled");
  }

  if (totalAmountInNumber >= 200) {
    let y = document.getElementById("btn-apply");
    y.classList.remove("btn-disabled");
    y.addEventListener("click", function () {
       let z = document.getElementById("coupon-code");
       let couponCode = z.value;
       console.log(couponCode);
      if (couponCode === "SELL200") {
        totalDiscountInNumber = totalAmountInNumber * 0.2;
        totalAmountWithDiscountInNumber =
          totalAmountInNumber - totalDiscountInNumber;
        totalDiscount.innerText = totalDiscountInNumber.toFixed(2);
        totalAmountWithDiscount.innerText =
          totalAmountWithDiscountInNumber.toFixed(2);
          z.value = '';
          event.stopImmediatePropagation();
      }
       else if (couponCode === '') {
        alert("Insert a Coupon Code");
        event.stopImmediatePropagation();
      } 
      else alert("Wrong Coupon Code Entered");
      event.stopImmediatePropagation();
    });
  }
});




// The Modal Button Part
let modalButton = document.getElementById('modal-button');
modalButton.addEventListener('click',function(){
  totalAmount.innerText = "0.00";
  totalAmountInNumber = 0;
  totalDiscount.innerText = "0.00";
  totalDiscountInNumber = 0;
  totalAmountWithDiscount.innerText = "0.00";
  totalAmountWithDiscountInNumber = 0;

  let couponInput = document.getElementById('coupon-code');
  couponInput.value = "";

  let cartClear = document.getElementById('cart-list');
  cartClear.innerHTML = "";

  let couponReset = document.getElementById("coupon-code");
       couponReset.value = '';

  let x = document.getElementById("btn-purchase");
  x.classList.add("btn-disabled");

  let y = document.getElementById("btn-apply");
    y.classList.add("btn-disabled");

})
