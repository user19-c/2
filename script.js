document.addEventListener('DOMContentLoaded', () => {

    // --- SECTIONS ---
    const landingPage = document.getElementById('landing-page');
    const giftPage = document.getElementById('gift-page');
    const memoriesPage = document.getElementById('memories-page');

    // --- BUTTONS ---
    const btnOpenGift = document.getElementById('btn-open-gift');
    const btnMemories = document.getElementById('btn-memories');
    const btnsBack = document.querySelectorAll('.btn-back');

    // --- NAVIGATION LOGIC ---
    function showSection(sectionToShow) {
        // Hide all sections
        landingPage.classList.remove('active');
        giftPage.classList.remove('active');
        memoriesPage.classList.remove('active');

        // Show requested section
        sectionToShow.classList.add('active');
    }

    btnOpenGift.addEventListener('click', () => showSection(giftPage));
    btnMemories.addEventListener('click', () => showSection(memoriesPage));

    btnsBack.forEach(btn => {
        btn.addEventListener('click', () => showSection(landingPage));
    });

    // --- CONFETTI LOGIC ---
    function fireConfetti() {
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }

    // ==========================================
    // GIFT PAGE LOGIC
    // ==========================================
    const giftPrompt = document.getElementById('gift-prompt');
    const btnGiftYes = document.getElementById('btn-gift-yes');
    const btnGiftNo = document.getElementById('btn-gift-no');

    const cakeSection = document.getElementById('cake-section');
    const btnBlowCandles = document.getElementById('btn-blow-candles');

    const videoSection = document.getElementById('video-section');

    function openGift() {
        giftPrompt.classList.add('hidden');
        cakeSection.classList.remove('hidden');
        fireConfetti();
    }

    btnGiftYes.addEventListener('click', openGift);

    btnGiftNo.addEventListener('click', () => {
        alert("Are you sure?! You have no choice! 😜");
        openGift();
    });

    btnBlowCandles.addEventListener('click', () => {
        cakeSection.classList.add('hidden');
        videoSection.classList.remove('hidden');
        fireConfetti();

        // Autoplay the iframe video if possible by appending autoplay=1
        const iframe = document.getElementById('youtube-video');
        if(iframe.src && !iframe.src.includes('autoplay=1')) {
            // Check if src already has params
            if (iframe.src.includes('?')) {
                iframe.src += '&autoplay=1';
            } else {
                iframe.src += '?autoplay=1';
            }
        }
    });

    // ==========================================
    // MEMORIES MODAL LOGIC
    // ==========================================
    const polaroids = document.querySelectorAll('.polaroid');
    const memoryModal = document.getElementById('memory-modal');
    const modalImg = document.getElementById('modal-img');
    const modalText = document.getElementById('modal-text');
    const closeModal = document.getElementById('close-modal');

    polaroids.forEach(polaroid => {
        polaroid.addEventListener('click', () => {
            const imgSrc = polaroid.querySelector('img').src;
            const textContent = polaroid.querySelector('.memory-caption').innerText;

            modalImg.src = imgSrc;
            modalText.innerText = textContent;

            memoryModal.classList.remove('hidden');
        });
    });

    closeModal.addEventListener('click', () => {
        memoryModal.classList.add('hidden');
    });

    // Close modal when clicking outside the content
    window.addEventListener('click', (e) => {
        if (e.target === memoryModal) {
            memoryModal.classList.add('hidden');
        }
    });
});
