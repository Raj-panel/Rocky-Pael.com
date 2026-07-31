// Global State Variables
let currentPlatform = 'instagram';
let currentCategory = 'followers_nondrop';
let currentSelectedCard = null;
let customQuantityValue = 0;
let customCalculatedPrice = 0;

// WhatsApp Number
const WHATSAPP_NUMBER = "919397028344";

// ================= EXACT FULL SERVICE DATABASE =================
const serviceData = {
  instagram: {
    "followers_nondrop": [
      { name: '100 Followers', price: 18, badge: 'Popular', badgeClass: 'badge-best' },
      { name: '200 Followers', price: 35, badge: 'Popular', badgeClass: 'badge-popular' },
      { name: '500 Followers', price: 90, badge: 'Best Value', badgeClass: 'badge-best' },
      { name: '1K Followers', price: 180, badge: 'Popular', badgeClass: 'badge-popular' },
      { name: '2K Followers', price: 360, badge: 'Best Value', badgeClass: 'badge-best' },
      { name: '3K Followers', price: 540, badge: 'Non-Drop', badgeClass: 'badge-nondrop' },
      { name: '5K Followers', price: 900, badge: 'Best Value', badgeClass: 'badge-best' },
      { name: '10K Followers', price: 1800, badge: 'MOST POPULAR', badgeClass: 'badge-best' }
    ],
    "likes_lifetime": [
      { name: '100 Likes', price: 10, badge: 'Starter', badgeClass: 'badge-demo' },
      { name: '200 Likes', price: 20, badge: 'BEST VALUE', badgeClass: 'badge-real' },
      { name: '500 Likes', price: 50, badge: 'Most Popular', badgeClass: 'badge-best' },
      { name: '1K Likes', price: 100, badge: 'Non-Drop', badgeClass: 'badge-best' },
      { name: '2K Likes', price: 200, badge: 'MOST POPULAR', badgeClass: 'badge-best' },
      { name: '5K Likes', price: 500, badge: 'Non-Drop', badgeClass: 'badge-best' },
      { name: '10K Likes', price: 1000, badge: 'Non-Drop', badgeClass: 'badge-best' }
    ],
    "reels_video_views": [
      { name: '100 Views', price: 5, badge: 'DEMO', badgeClass: 'badge-demo' },
      { name: '200 Views', price: 10, badge: 'POPULAR', badgeClass: 'badge-popular' },
      { name: '500 Views', price: 20, badge: 'BEST VALUE', badgeClass: 'badge-best' },
      { name: '1K Views', price: 40, badge: 'Non-Drop', badgeClass: 'badge-nondrop' },
      { name: '2K Views', price: 80, badge: 'Non-Drop', badgeClass: 'badge-best' },
      { name: '5K Views', price: 200, badge: 'MOST POPULAR', badgeClass: 'badge-best' },
      { name: '10K Views', price: 400, badge: 'Non-Drop', badgeClass: 'badge-best' }
    ],
    "comments_lifetime": [
      { name: '10 Comments', price: 15, badge: 'Starter', badgeClass: 'badge-demo' },
      { name: '20 Comments', price: 30, badge: 'Real', badgeClass: 'badge-real' },
      { name: '50 Comments', price: 75, badge: 'Most Popular', badgeClass: 'badge-best' },
      { name: '100 Comments', price: 150, badge: 'Non-Drop', badgeClass: 'badge-best' }
    ],
    "repost_lifetime": [
      { name: '100 Reposts', price: 25, badge: 'Starter', badgeClass: 'badge-demo' },
      { name: '200 Reposts', price: 50, badge: 'Best Value', badgeClass: 'badge-best' },
      { name: '500 Reposts', price: 125, badge: 'Non-Drop', badgeClass: 'badge-best' }
    ],
    "shares_lifetime": [
      { name: '100 Shares', price: 10, badge: 'Starter', badgeClass: 'badge-demo' },
      { name: '200 Shares', price: 20, badge: 'Best Value', badgeClass: 'badge-best' },
      { name: '500 Shares', price: 50, badge: 'MOST POPULAR', badgeClass: 'badge-best' }
    ]
  },
  facebook: {
    "followers_non_drop": [
      { name: '100 Followers', price: 20, badge: 'Popular', badgeClass: 'badge-popular' },
      { name: '200 Followers', price: 40, badge: 'Popular', badgeClass: 'badge-popular' },
      { name: '500 Followers', price: 100, badge: 'Best Value', badgeClass: 'badge-best' },
      { name: '1K Followers', price: 200, badge: 'Popular', badgeClass: 'badge-popular' },
      { name: '2K Followers', price: 400, badge: 'Best Value', badgeClass: 'badge-best' },
      { name: '3K Followers', price: 600, badge: 'Non-Drop', badgeClass: 'badge-nondrop' },
      { name: '5K Followers', price: 1000, badge: 'Best Value', badgeClass: 'badge-best' },
      { name: '10K Followers', price: 2000, badge: 'MOST POPULAR', badgeClass: 'badge-best' }
    ],
    "likes_lifetime": [
      { name: '100 Likes', price: 12, badge: 'Starter', badgeClass: 'badge-demo' },
      { name: '200 Likes', price: 24, badge: 'BEST VALUE', badgeClass: 'badge-real' },
      { name: '500 Likes', price: 60, badge: 'Most Popular', badgeClass: 'badge-best' },
      { name: '1K Likes', price: 120, badge: 'Non-Drop', badgeClass: 'badge-best' }
    ],
    "reels_video_views": [
      { name: '100 Views', price: 6, badge: 'DEMO', badgeClass: 'badge-demo' },
      { name: '200 Views', price: 12, badge: 'POPULAR', badgeClass: 'badge-popular' },
      { name: '500 Views', price: 30, badge: 'BEST VALUE', badgeClass: 'badge-best' },
      { name: '1K Views', price: 60, badge: 'Non-Drop', badgeClass: 'badge-nondrop' }
    ]
  }
};

// ================= FUNCTIONS & LOGIC =================

document.addEventListener("DOMContentLoaded", () => {
  selectPlatform('instagram');
});

// Select Tab
function selectPlatform(platform) {
  currentPlatform = platform;
  
  const tabInsta = document.getElementById('tabInstagram');
  const tabFb = document.getElementById('tabFacebook');
  
  if(tabInsta) tabInsta.classList.toggle('active', platform === 'instagram');
  if(tabFb) tabFb.classList.toggle('active', platform === 'facebook');

  // Set Default Category
  const catSelect = document.getElementById('categorySelect');
  if(catSelect) {
    catSelect.value = (platform === 'instagram') ? 'followers_nondrop' : 'followers_non_drop';
    currentCategory = catSelect.value;
  }

  resetInputs();
  renderServiceCards();
}

// Category Change
function onCategoryChange() {
  const catSelect = document.getElementById('categorySelect');
  if(catSelect) {
    currentCategory = catSelect.value;
    resetInputs();
    renderServiceCards();
  }
}

function resetInputs() {
  const customQty = document.getElementById('customQuantity');
  if(customQty) customQty.value = '';
  customQuantityValue = 0;
  customCalculatedPrice = 0;
  
  const proceedBtn = document.getElementById('proceedPaymentBtn');
  if(proceedBtn) proceedBtn.classList.add('hidden');

  const readyMadeBox = document.getElementById('readyMadeServices');
  if(readyMadeBox) readyMadeBox.classList.remove('hidden');
}

// Dynamic Card Rendering from Original Database
function renderServiceCards() {
  const container = document.getElementById('readyMadeServices');
  if (!container) return;

  const items = (serviceData[currentPlatform] && serviceData[currentPlatform][currentCategory]) ? serviceData[currentPlatform][currentCategory] : [];
  container.innerHTML = '';

  if (items.length === 0) {
    container.innerHTML = '<p style="text-align:center; grid-column: 1/-1;">No services available in this category.</p>';
    return;
  }

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.onclick = () => selectCardService(item.name, item.price);
    card.innerHTML = `
      <h4>${item.name}</h4>
      <p class="price">₹${item.price}</p>
      <span class="badge ${item.badgeClass || ''}">${item.badge}</span>
    `;
    container.appendChild(card);
  });
}

// Input Typing Logic
function handleQuantityInput() {
  const qtyInput = document.getElementById('customQuantity').value;
  const readyMadeBox = document.getElementById('readyMadeServices');
  const proceedBtn = document.getElementById('proceedPaymentBtn');

  if (qtyInput && parseInt(qtyInput) > 0) {
    customQuantityValue = parseInt(qtyInput);
    
    // Calculate Per Unit Rate based on Platform & Category
    let baseRate = 0.18; // Default Instagram Followers
    if (currentPlatform === 'facebook') baseRate = 0.20;
    if (currentCategory.includes('likes')) baseRate = 0.10;
    if (currentCategory.includes('views')) baseRate = 0.04;

    customCalculatedPrice = Math.round(customQuantityValue * baseRate);

    if(readyMadeBox) readyMadeBox.classList.add('hidden');
    if(proceedBtn) proceedBtn.classList.remove('hidden');
  } else {
    customQuantityValue = 0;
    customCalculatedPrice = 0;
    if(readyMadeBox) readyMadeBox.classList.remove('hidden');
    if(proceedBtn) proceedBtn.classList.add('hidden');
  }
}

// Click on Card
function selectCardService(name, price) {
  currentSelectedCard = { name, price };
  openPaymentPage(name, price);
}

// Click on Proceed Button
function goToPaymentFromCustom() {
  if (customQuantityValue <= 0) {
    alert("Please enter a valid quantity.");
    return;
  }
  openPaymentPage(`${customQuantityValue} Custom Order`, customCalculatedPrice);
}

// Open Full-Screen Payment Interface
function openPaymentPage(serviceName, totalPrice) {
  const platformCapitalized = currentPlatform.charAt(0).toUpperCase() + currentPlatform.slice(1);
  
  // Set values to Payment UI
  document.getElementById('summaryPlatform').innerText = platformCapitalized;
  document.getElementById('summaryService').innerText = serviceName;
  document.getElementById('summaryQty').innerText = serviceName;
  document.getElementById('summaryTotalPrice').innerText = "₹" + totalPrice;

  document.getElementById('profileLinkLabel').innerText = `Enter Your ${platformCapitalized} Target/Profile Link`;
  document.getElementById('profileLink').placeholder = `https://www.${currentPlatform}.com/yourprofile`;

  document.getElementById('breakdownPlatform').innerText = platformCapitalized;
  document.getElementById('breakdownQty').innerText = serviceName;
  document.getElementById('breakdownPrice').innerText = "₹" + totalPrice;
  document.getElementById('breakdownTotalPay').innerText = "₹" + totalPrice;

  // Global hold
  window.finalOrderDetails = {
    platform: platformCapitalized,
    service: serviceName,
    price: totalPrice
  };

  // Switch Screen
  document.getElementById('homePage').classList.remove('active');
  document.getElementById('paymentPage').classList.add('active');
  window.scrollTo(0, 0);
}

// Go Back
function goBackToHome() {
  document.getElementById('paymentPage').classList.remove('active');
  document.getElementById('homePage').classList.add('active');
}

// Switch Payment Method
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

// Submit Order via WhatsApp
function submitOrderToWhatsApp() {
  const profileLink = document.getElementById('profileLink').value.trim();
  const txId = document.getElementById('transactionId').value.trim();
  const activeMethod = document.querySelector('input[name="payment_method"]:checked').value;

  if (!profileLink) {
    alert("Please enter your Target/Profile Link!");
    return;
  }

  if (!txId) {
    alert("Please enter the Transaction ID / UTR!");
    return;
  }

  const details = window.finalOrderDetails;

  const message = `🚨 *NEW ORDER PLACED* 🚨\n\n` +
    `*Platform:* ${details.platform}\n` +
    `*Selected Service:* ${details.service}\n` +
    `*Target Link:* ${profileLink}\n` +
    `*Amount Paid:* ₹${details.price}\n` +
    `*Payment Mode:* ${activeMethod}\n` +
    `*Transaction ID/UTR:* ${txId}\n\n` +
    `Please start processing my order!`;

  const encodedMsg = encodeURIComponent(message);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;

  window.open(waUrl, '_blank');
}
