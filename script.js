// Global Variables for Dynamic Functionality
let deferredPrompt;
const installContainer = document.getElementById('installAppContainer');

// Listen for PWA Installation Event
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallBtn();
});

// Trigger App Installation On Click
function triggerPwaInstall() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('App successfully installed');
            }
            deferredPrompt = null;
        });
    } else {
        alert('App Installation Prompt is active! If installed already, check your Home Screen or use Chrome Menu > Add to Home screen.');
    }
}

// Logic: Hide Install App Button
function hideInstallBtn() {
    if (installContainer) {
        installContainer.classList.add('hide-install-btn');
    }
}

// Logic: Show Install App Button
function showInstallBtn() {
    if (installContainer) {
        installContainer.classList.remove('hide-install-btn');
    }
}

// Switch Platform Function (Instagram / Facebook)
function switchPlatform(platform) {
    // Show Install App when on main Instagram or Facebook View
    showInstallBtn();

    const btnInsta = document.getElementById('btnInsta');
    const btnFb = document.getElementById('btnFb');
    const heroTitle = document.getElementById('heroTitle');
    const heroLogoIcon = document.getElementById('heroLogoIcon');

    if (platform === 'instagram') {
        btnInsta.classList.add('active');
        btnFb.classList.remove('active');
        heroTitle.innerText = 'Instagram Boost';
        heroLogoIcon.innerHTML = '<i class="fa-brands fa-instagram"></i>';
    } else if (platform === 'facebook') {
        btnFb.classList.add('active');
        btnInsta.classList.remove('active');
        heroTitle.innerText = 'Facebook Boost';
        heroLogoIcon.innerHTML = '<i class="fa-brands fa-facebook"></i>';
    }

    // Call your category loader here if exists
    if (typeof loadCategories === 'function') {
        loadCategories(platform);
    }
}

// Event Listener: Hide "Install App" whenever any Category or Service is clicked
document.addEventListener('DOMContentLoaded', () => {
    // Click event for Category Tabs and Package Lists
    const categoryContainer = document.getElementById('categoryTabs');
    const packageContainer = document.getElementById('packageList');

    if (categoryContainer) {
        categoryContainer.addEventListener('click', (e) => {
            // Hide install button when clicking on any category button/tab
            hideInstallBtn();
        });
    }

    if (packageContainer) {
        packageContainer.addEventListener('click', (e) => {
            // Hide install button when clicking on any specific service item
            hideInstallBtn();
        });
    }
});
