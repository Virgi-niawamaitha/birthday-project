
        function enterSite() {
            document.getElementById('whatsapp-entry').style.display = 'none';
            document.getElementById('main-site').style.display = 'block';
        }

        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        function blowCandle() {
            const flame = document.getElementById('flame');
            
            // Add blown class for animation
            flame.classList.add('blown');
            
            // Show smoke effect
            setTimeout(() => {
                showPage('wishes');
            }, 600);
        }

        function openCandlePopup() {
            const popup = document.getElementById('candlePopup');
            popup.classList.add('active');
        }

        function blowPopupCandle() {
            const flame = document.getElementById('popupFlame');
            const popup = document.getElementById('candlePopup');
            
            // Add blown class for animation
            flame.classList.add('blown');
            
            // Wait for animation, then close popup and go to wishes page
            setTimeout(() => {
                popup.classList.remove('active');
                showPage('wishes');
            }, 600);
        }

        async function submitWishes(event) {
            event.preventDefault();

            const formData = new FormData(event.target);
            const wishes = {
                gift: formData.get('gift'),
                girlfriend_wish: formData.get('girlfriend_wish'),
                secret: formData.get('secret'),
                bucket_list: formData.get('bucket_list')
            };

            const submitBtn = event.target.querySelector('.submit-btn');
            submitBtn.textContent = '💌 Sending...';
            submitBtn.disabled = true;

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: 'ec4ebe39-d5aa-4cae-8f21-85ffeff61a69',
                    subject: '🎂 Birthday Wishes from Your Love 💕',
                    from_name: 'Birthday Surprise Website',
                    to: 'wamaithavirginia53@gmail.com',
                    message: `Birthday Wishes from Your Love 💕\n\n🎁 BIRTHDAY GIFT WISH:\n${wishes.gift}\n\n💕 WISH FROM GIRLFRIEND:\n${wishes.girlfriend_wish}\n\n🤫 SECRET TO SHARE:\n${wishes.secret}\n\n🌟 BUCKET LIST (Things to do together):\n${wishes.bucket_list}\n\n---\nSent with love on his birthday! 🎂`
                })
            });

            const result = await response.json();

            if (result.success) {
                submitBtn.textContent = '✅ Wishes Sent!';
                event.target.reset();
                setTimeout(() => {
                    showPage('encouragement');
                }, 1500);
            } else {
                submitBtn.textContent = '✨ Submit My Wishes ✨';
                submitBtn.disabled = false;
                alert('Something went wrong. Please try again 💕');
            }
        }
    

