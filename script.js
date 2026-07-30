{ type: "custom", name: "Instagram Non-Drop Followers", pricePer1000: 80 }
],
"Followers": [
            { name: "1K Followers", price: 50, badge: "Starter" },
            { name: "1K Followers", price: 50, badge: "Starter", badgeClass: "badge-demo" },
{ name: "2K Followers", price: 90 },
{ name: "3K Followers", price: 129, badge: "⭐ Popular", badgeClass: "badge-popular" },
{ name: "4K Followers", price: 165 },
@@ -19,39 +19,47 @@ const serviceData = {
{ name: "100 Likes", price: 15, badge: "Starter", badgeClass: "badge-demo" },
{ name: "500 Likes", price: 25, badge: "Real", badgeClass: "badge-real" },
{ name: "1K Likes", price: 30, badge: "Fast", badgeClass: "badge-popular" },
            { name: "2K Likes", price: 50, badge: "⭐ Popular", badgeClass: "badge-popular" },
            { name: "3K Likes", price: 69, badge: "⭐ Popular", badgeClass: "badge-popular" },
{ name: "5K Likes", price: 99, badge: "🔥 Best Value", badgeClass: "badge-best" },
{ name: "10K Likes", price: 179, badge: "👑 Most Popular", badgeClass: "badge-best" }
],
"Reels / Video Views": [
            { name: "1K Views", price: 10, badge: "Starter", badgeClass: "badge-demo" },
            { name: "3K Views", price: 25 },
            { name: "5K Views", price: 35, badge: "⭐ Popular", badgeClass: "badge-popular" },
            { name: "10K Views", price: 60 },
            { name: "50K Views", price: 249, badge: "🔥 Best Value", badgeClass: "badge-best" },
            { name: "100K Views", price: 449, badge: "👑 Most Popular", badgeClass: "badge-best" }
            { name: "1K Views", price: 10, badge: "DEMO", badgeClass: "badge-demo" },
            { name: "5K Views", price: 20, badge: "STARTER", badgeClass: "badge-real" },
            { name: "10K Views", price: 30, badge: "BEST VALUE", badgeClass: "badge-best" },
            { name: "20K Views", price: 40, badge: "POPULAR", badgeClass: "badge-popular" },
            { name: "50K Views", price: 70, badge: "RECOMMENDED", badgeClass: "badge-best" },
            { name: "100K Views", price: 99, badge: "🔥 BEST SELLER", badgeClass: "badge-best" },
            { name: "500K Views", price: 299, badge: "👑 MOST POPULAR", badgeClass: "badge-best" },
            { name: "1M Views", price: 499, badge: "💥 MEGA DEAL", badgeClass: "badge-best" }
],
"Comments Lifetime": [
{ name: "50 Comments", price: 15, badge: "Starter", badgeClass: "badge-demo" },
{ name: "100 Comments", price: 20, badge: "Real", badgeClass: "badge-real" },
{ name: "500 Comments", price: 59, badge: "⭐ Popular", badgeClass: "badge-popular" },
{ name: "1K Comments", price: 99, badge: "🔥 Best Value", badgeClass: "badge-best" }
],
        "Repost Lifetime": [
            { name: "50 Reposts", price: 15, badge: "Starter", badgeClass: "badge-demo" },
            { name: "100 Reposts", price: 20, badge: "Real", badgeClass: "badge-real" },
            { name: "500 Reposts", price: 59, badge: "⭐ Popular", badgeClass: "badge-popular" },
            { name: "1K Reposts", price: 99, badge: "🔥 Best Value", badgeClass: "badge-best" },
            { name: "3K Reposts", price: 249, badge: "👑 Most Popular", badgeClass: "badge-best" }
        "Instagram Repost [Non-Drop]": [
            { name: "50 Reposts", price: 15, badge: "STARTER", badgeClass: "badge-demo" },
            { name: "100 Reposts", price: 20, badge: "REAL", badgeClass: "badge-real" },
            { name: "500 Reposts", price: 59, badge: "⭐ POPULAR", badgeClass: "badge-popular" },
            { name: "1K Reposts", price: 99, badge: "🔥 BEST VALUE", badgeClass: "badge-best" },
            { name: "3K Reposts", price: 199, badge: "👑 MOST POPULAR", badgeClass: "badge-best" },
            { name: "5K Reposts", price: 299, badge: "🏆 BEST DEAL", badgeClass: "badge-best" }
],
        "Shares Lifetime": [
            { name: "100 Shares", price: 10, badge: "Starter", badgeClass: "badge-demo" },
            { name: "1K Shares", price: 30, badge: "Fast", badgeClass: "badge-popular" },
            { name: "5K Shares", price: 69, badge: "🔥 Best Value", badgeClass: "badge-best" },
            { name: "10K Shares", price: 99, badge: "👑 Most Popular", badgeClass: "badge-best" }
        "Instagram Shares [Non-Drop]": [
            { name: "100 Shares", price: 15, badge: "STARTER", badgeClass: "badge-demo" },
            { name: "1K Shares", price: 30, badge: "FAST", badgeClass: "badge-popular" },
            { name: "5K Shares", price: 69, badge: "🔥 BEST VALUE", badgeClass: "badge-best" },
            { name: "10K Shares", price: 99, badge: "👑 MOST POPULAR", badgeClass: "badge-best" },
            { name: "20K Shares", price: 149, badge: "🏆 BEST DEAL", badgeClass: "badge-best" },
            { name: "100K Shares", price: 499, badge: "💥 MEGA DEAL", badgeClass: "badge-best" }
]
},
facebook: {
        "Facebook Followers": [
            { type: "custom", name: "Facebook Followers", pricePer1000: 49 }
        ],
"Facebook Likes [Non-Drop]": [
{ name: "100 Likes", price: 10, badge: "STARTER", badgeClass: "badge-demo" },
{ name: "500 Likes", price: 25, badge: "REAL", badgeClass: "badge-real" },
@@ -60,9 +68,6 @@ const serviceData = {
{ name: "5K Likes", price: 99, badge: "🔥 BEST VALUE", badgeClass: "badge-best" },
{ name: "10K Likes", price: 179, badge: "👑 MOST POPULAR", badgeClass: "badge-best" }
],
        "Facebook Followers": [
            { type: "custom", name: "Facebook Followers", pricePer1000: 49 }
        ],
"Facebook Video Views": [
{ name: "1K Views", price: 10, badge: "STARTER", badgeClass: "badge-demo" },
{ name: "3K Views", price: 25 },
@@ -87,6 +92,7 @@ function switchPlatform(platform) {
currentPlatform = platform;
selectedPackage = null;
document.getElementById("checkoutSection").style.display = "none";
    document.getElementById("paymentCard").style.display = "none";

document.getElementById("btnInsta").classList.toggle("active", platform === 'instagram');
document.getElementById("btnFb").classList.toggle("active", platform === 'facebook');
@@ -138,6 +144,7 @@ function renderPackages() {
const packageList = document.getElementById("packageList");
packageList.innerHTML = "";
document.getElementById("checkoutSection").style.display = "none";
    document.getElementById("paymentCard").style.display = "none";
selectedPackage = null;

const packages = serviceData[currentPlatform][currentCategory];
@@ -240,9 +247,6 @@ function generateOrder() {

document.getElementById("qrCodeImg").src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiUrl)}`;

    const usdtAmount = (selectedPackage.price / 95).toFixed(2);
    document.getElementById("binanceUsdtDisplay").innerText = `$${usdtAmount} USDT`;

document.getElementById("paymentCard").style.display = "block";
switchPaymentMethod('upi');
document.getElementById("paymentCard").scrollIntoView({ behavior: 'smooth' });
@@ -264,7 +268,7 @@ function switchPaymentMethod(method) {
utrInput.placeholder = "e.g. 4029XXXXXXXX (12-Digit UTR)";
} else {
utrLabel.innerText = "Transaction ID / TxID:";
        utrInput.placeholder = "e.g. Enter Binance Order ID / TxID";
        utrInput.placeholder = "e.g. Enter Crypto Order ID / TxID";
}
}

@@ -277,22 +281,21 @@ function confirmPaymentWithUTR() {
const utr = document.getElementById("utrNumber").value.trim();
const link = document.getElementById("link").value.trim();

    if (!utr || utr.length < 6) {
        alert("Please enter a valid UTR or TxID!");
    if (!utr || utr.length < 5) {
        alert("Please enter a valid UTR or Transaction ID!");
return;
}

const price = Number(selectedPackage.price).toFixed(2);
    const usdtAmount = (selectedPackage.price / 95).toFixed(2);

const waMsg = `🚀 *NEW ORDER PLACED*%0A%0A` +
`*Platform:* ${currentPlatform.toUpperCase()}%0A` +
`*Category:* ${selectedPackage.category}%0A` +
`*Package:* ${selectedPackage.name}%0A` +
`*Target Link:* ${link}%0A` +
                  `*Amount Paid:* ₹${price} INR ($${usdtAmount} USDT)%0A` +
                  `*Amount Paid:* ₹${price} INR%0A` +
`*Payment Mode:* ${currentPaymentMethod.toUpperCase()}%0A` +
                  `*Transaction UTR:* ${utr}%0A%0A` +
                  `*Transaction ID/UTR:* ${utr}%0A%0A` +
`Please start processing my order!`;

window.open(`https://wa.me/919337028344?text=${waMsg}`, '_blank');
