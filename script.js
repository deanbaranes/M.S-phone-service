

// Cart-related functions
let cart = [];

function addToCart(productName, price) {
    let quantityId = 'quantity-' + productName;
    let quantity = parseInt(document.getElementById(quantityId).value);
    
    let existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ name: productName, quantity: quantity, price: price });
    }
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;
    
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.name} x${item.quantity} - ₪${item.price * item.quantity}`;
        
        let removeButton = document.createElement("button");
        removeButton.textContent = "הסר";
        removeButton.onclick = () => removeItem(index);
        
        li.appendChild(removeButton);
        cartItems.appendChild(li);
        
        total += item.price * item.quantity;
    });

    document.getElementById("total-amount").textContent = total.toFixed(2);
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
    document.getElementById("total-amount").textContent = "0.00";
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        alert(`סך הכל לתשלום: ₪${total.toFixed(2)}`);
        clearCart();
        window.location.href='order-details.html'
    }
}

// חזרה לראש הדף
function topFunction() {
    document.body.scrollTop = 0; // התאמה לדפדפן safari
    document.documentElement.scrollTop = 0; // התאמה לכרום ויתר הדפדפנים
}

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}
function InputCheck() {
    var name = document.getElementById('name').value.trim();
    var number = document.getElementById('phonenumber').value.trim(); 
    var alertmsg = "";

    if (name === "") {
        alertmsg += "אנא הזן שם.\n";
    }
    if (number.length !== 10) {
        alertmsg += "אנא הזן מספר נייד בעל 10 ספרות.\n";
    }
    if (alertmsg !== "") {
        alert(alertmsg);
    } else {
        alert("תודה! נציג מכירות יחזור אליכם בהקדם.");
    }
}
function orderDetails() {
    var name = document.getElementById('fname').value.trim();
    var lastname = document.getElementById('lname').value.trim();
    var number = document.getElementById('pnumber').value.trim(); 
    var address = document.getElementById('address').value.trim();
    var creditcard = document.getElementById('creditcard').value.trim(); 
    var expdate = document.getElementById('expdate').value.trim();
    var cvv = document.getElementById('cvv').value.trim();
    var alertmsg = "";
    if (name == "") {
        alertmsg += "אנא הזן שם.\n";
    }
    if (lastname == "") {
        alertmsg += "אנא הזן שם.\n";
    }
    if (number.length !== 10) {
        alertmsg += "אנא הזן מספר נייד בעל 10 ספרות.\n";
    }
    if (address == "") {
        alertmsg += "אנא הזן כתובת.\n";
    }
    if (creditcard.length !== 16) {
        alertmsg += "אנא הזן מספר כרטיס אשראי.\n";
    }    
    if (expdate.length !== 4) {
        alertmsg += "אנא הזן תוקף כרטיס אשראי.\n";
    }    
    if (cvv.length !== 3) {
        alertmsg += "אנא הזן קוד אבטחה.\n";
    }
    if (alertmsg !== "") {
        alert(alertmsg);
    } else {
        alert("תודה!");
    }
}
function checkout2() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        alert(`סך הכל לתשלום: ₪${total.toFixed(2)}`);
        clearCart();
        window.location.href='order-details.html'
    }
}



// Initialize data and set up event listeners when the page loads
window.onload = function() {
    initializeWorkerData();
    initializeFormFields();
    
    // Add event listener for login form
    document.getElementById("loginform").addEventListener("submit", validatelogin);
};


