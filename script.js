// Global State Variables
let selectedPlatform = 'instagram'; // Default
let selectedService = 'Followers Non-Drop';
let selectedQuantity = 0;
let calculatedPrice = 0;

// Rate Configuration (Per 1000)
const RATE_PER_1000 = {
  instagram: 180, // ₹180 per 1000
  facebook: 200   // ₹200 per 1000
};

// WhatsApp Admin Phone Number (E.g., 919876543210)
const WHATSAPP_NUMBER = "919397028344";

// Page Load Handling
document.addEventListener("DOMContentLoaded", () => {
  selectPlatform('instagram'); // Default selection rule
});

// Switch Platform Tabs
function selectPlatform(platform) {
  selectedPlatform = platform;
  
  document.getElementById('tabInstagram').classList.toggle('active', platform === 'instagram');
  document.getElementById('tabFacebook').classList.toggle('active', platform === 'facebook');

  // Reset category selection to Non-Drop
  document.getElementById('categorySelect').value = 'followers_nondrop';
  
  // Clear Quantity
  document.getElementById('customQuantity').value = '';
  handleQuantityInput();
}

function onCategoryChange() {
  // Can be expanded if other categories are added later
}

// Custom Quantity Handling
function handleQuantityInput() {
  const qtyInput = document.getElementById('customQuantity').value;
  const readyMadeBox = document.getElementById('readyMadeServices');
  const proceedBtn = document.getElementById('proceedPaymentBtn');

  if (qtyInput && parseInt(qtyInput) > 0) {
    selectedQuantity = parseInt(qtyInput);
    readyMadeBox.classList.add('hidden'); // Hide cards when user types
    proceedBtn.classList.remove('hidden'); // Show Proceed button
  } else {
    selectedQuantity = 0;
    readyMadeBox.classList.remove('hidden'); // Show cards when input is empty
    proceedBtn.classList.add('hidden');
  }
}

// Calculate Price Dynamically
function calculatePrice(qty) {
  const rate = RATE_PER_1000[selectedPlatform] || 180;
  return Math.round((qty / 1000) * rate);
}

// Triggered by Ready-Made Service Cards Click
function selectReadyMadeService(qty) {
  selectedQuantity = qty;
  openPaymentPage();
}

// Triggered by Proceed To Payment Button
function goToPaymentFromCustom() {
  if (selectedQuantity <= 0) {
    alert("Please enter a valid quantity.");
    return;
  }
  openPaymentPage();
}

// Open Full-Screen Payment Page
function openPaymentPage() {
  calculatedPrice = calculatePrice(selectedQuantity);

  // Populate Payment Page UI
  const platformCapitalized = selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1);
  
  document.getElementById('summaryPlatform').innerText = platformCapitalized;
  document.getElementById('summaryQty').innerText = selectedQuantity + " Followers";
  document.getElementById('summaryTotalPrice').innerText = "₹" + calculatedPrice;

  document.getElementById('profileLinkLabel').innerText = `Enter Your ${platformCapitalized} Profile Link`;
  document.getElementById('profileLink').placeholder = `https://www.${selectedPlatform}.com/yourprofile`;

  document.getElementById('breakdownPlatform').innerText = platformCapitalized;
  document.getElementById('breakdownQty').innerText = selectedQuantity;
  document.getElementById('breakdownPrice').innerText = "₹" + calculatedPrice;
  document.getElementById('breakdownTotalPay').innerText = "₹" + calculatedPrice;

  // View Switching
  document.getElementById('homePage').classList.remove('active');
  document.getElementById('paymentPage').classList.add('active');
  window.scrollTo(0, 0);
}

// Back to Home
function goBackToHome() {
  document.getElementById('paymentPage').classList.remove('active');
  document.getElementById('homePage').classList.add('active');
}

// Payment Method Switcher
function switchPaymentMethod(method) {
  const upiView = document.getElementById('upiPaymentView');
  const binanceView = document.getElementById('binancePaymentView');

  document.getElementById('methodUpi').classList.toggle('active', method === 'upi');
  document.getElementById('methodBinance').classList.toggle('active', method === 'binance');

  if (method === 'upi') {
    upiView.classList.remove('hidden');
    binanceView.classList.add('hidden');
  } else {
    upiView.classList.add('hidden');
    binanceView.classList.remove('hidden');
  }
}

// WhatsApp Payload Generator & Submit Order
function submitOrderToWhatsApp() {
  const profileLink = document.getElementById('profileLink').value.trim();
  const txId = document.getElementById('transactionId').value.trim();
  const activeMethod = document.querySelector('input[name="payment_method"]:checked').value;

  if (!profileLink) {
    alert("Please enter your Profile Link!");
    return;
  }

  if (!txId) {
    alert("Please enter the Transaction ID / UTR!");
    return;
  }

  const platformCapitalized = selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1);

  // Generate Message Payload
  const message = `🚨 *NEW ORDER PLACED* 🚨\n\n` +
    `*Platform:* ${platformCapitalized}\n` +
    `*Category:* ${selectedService}\n` +
    `*Package:* ${selectedQuantity} Non-Drop Followers\n` +
    `*Target Link:* ${profileLink}\n` +
    `*Amount Paid:* ₹${calculatedPrice}\n` +
    `*Payment Mode:* ${activeMethod}\n` +
    `*Transaction ID/UTR:* ${txId}\n\n` +
    `Please start processing my order!`;

  const encodedMsg = encodeURIComponent(message);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;

  window.open(waUrl, '_blank');
}
