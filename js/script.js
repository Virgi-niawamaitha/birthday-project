
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

        function submitWishes(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const wishes = {
                gift: formData.get('gift'),
                girlfriend_wish: formData.get('girlfriend_wish'),
                secret: formData.get('secret'),
                bucket_list: formData.get('bucket_list')
            };
            
            // Create email body
            const emailBody = `
Birthday Wishes from Your Love 💕

🎁 BIRTHDAY GIFT WISH:
${wishes.gift}

💕 WISH FROM GIRLFRIEND:
${wishes.girlfriend_wish}

🤫 SECRET TO SHARE:
${wishes.secret}

🌟 BUCKET LIST (Things to do together):
${wishes.bucket_list}

---
Sent with love on his birthday! 🎂
            `;
            
            // Create mailto link
            const mailtoLink = `mailto:your-email@example.com?subject=Birthday Wishes from My Love 🎂💕&body=${encodeURIComponent(emailBody)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show confirmation
            alert('🎉 Your wishes are being sent! Check your email client. Thank you for sharing your heart with me! 💕');
            
            // Optional: Reset form
            event.target.reset();
        }
    

