const reviews = [
  {
    name: 'Qais Kaddah',
    date: 'A day ago',
    rating: 5,
    initials: 'Q',
    avatarType: 'teal',
    body: "Great store, will order again. Really happy with my order. Products are solid quality, arrived fast and exactly as described. Since I knew this store I have ordered more than 5 products only last month...",
    fullBody: "Great store, will order again. Really happy with my order. Products are solid quality, arrived fast and exactly as described. Since I knew this store I have ordered more than 5 products only last month and everything arrived properly packed.",
    experienceDate: 'May 14, 2026'
  },
  {
    name: 'Christian Venza',
    date: 'Apr 20, 2026',
    rating: 5,
    initials: 'CV',
    avatarType: 'photo',
    avatarImage: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"><rect width="72" height="72" fill="%23f6efe6"/><circle cx="36" cy="25" r="12" fill="%23d1a77c"/><path d="M18 60c3-12 11-18 18-18s15 6 18 18" fill="%237c9ec2"/><path d="M23 22c4-9 23-10 26 0-2-8-8-14-13-14s-11 6-13 14Z" fill="%234a3323"/><rect x="27" y="25" width="8" height="3" rx="1.5" fill="%23322"/><rect x="37" y="25" width="8" height="3" rx="1.5" fill="%23322"/><path d="M32 31h8" stroke="%23322" stroke-width="2"/></svg>',
    body: "I initially ordered the wrong item by mistake, but the support team handled it very smoothly. They responded the next day, provided a return label, and qu...",
    fullBody: "I initially ordered the wrong item by mistake (iPhone 15 Pro case instead of iPhone 15), but the support team handled it very smoothly. They responded the next day, provided a return label, and quickly arranged the correct replacement.",
    experienceDate: 'Apr 19, 2026',
    reply: 'Company replied'
  },
  {
    name: 'Phone & Vape u',
    date: 'Apr 29, 2026',
    rating: 5,
    initials: 'P',
    avatarType: 'purple',
    body: "We got the case late but extra bonus screen protector as a gift. The preorder wasn't on time but this gift made my day. Many thanks...",
    fullBody: "We got the case late but the extra bonus screen protector as a gift was appreciated. The preorder wasn't on time but the gift made my day, many thanks.",
    experienceDate: 'Apr 28, 2026'
  },
  {
    name: 'Paula Thompson',
    date: 'A day ago',
    rating: 1,
    initials: 'PT',
    avatarType: 'yellow',
    body: "Ordered a MagSafe wallet to attach to iPhone. Order came in the specified time, however it is not working with my phone...",
    fullBody: "Ordered a MagSafe wallet to attach to iPhone. Order came in the specified time, however it is faulty and will not pair to the phone. I emailed their support team immediately and was told a returns process would follow, but it took longer than expected.",
    experienceDate: 'May 15, 2026'
  },
  {
    name: 'Hashim Kazi',
    date: '2 days ago',
    rating: 5,
    initials: 'HK',
    avatarType: 'blue',
    body: 'Fast delivery and clean packaging. The case looked exactly like the photos and the MagSafe connection feels strong.',
    fullBody: 'Fast delivery and clean packaging. The case looked exactly like the photos and the MagSafe connection feels strong. I would order from iPro again.',
    experienceDate: 'May 13, 2026'
  },
  {
    name: 'Sarah C',
    date: 'May 11, 2026',
    rating: 1,
    initials: 'SC',
    avatarType: 'pink',
    body: 'Support replied eventually, but clearer delivery and returns updates are still needed.',
    fullBody: 'Support replied eventually, but clearer delivery and returns updates are still needed. The item itself was acceptable, but the communication was too slow.',
    experienceDate: 'May 10, 2026'
  },
  {
    name: 'Daniel Morgan',
    date: 'May 9, 2026',
    rating: 5,
    initials: 'DM',
    avatarType: 'slate',
    body: 'The silicone case feels premium and the colour is exactly what I expected. Delivery was quicker than the estimate.',
    fullBody: 'The silicone case feels premium and the colour is exactly what I expected. Delivery was quicker than the estimate and the packaging looked professional.',
    experienceDate: 'May 8, 2026'
  },
  {
    name: 'Amira Hassan',
    date: 'May 8, 2026',
    rating: 5,
    initials: 'AH',
    avatarType: 'purple',
    body: 'Ordered an Apple Pencil and a case together. Both arrived safely and the tracking updates were clear.',
    fullBody: 'Ordered an Apple Pencil and a case together. Both arrived safely and the tracking updates were clear. The product quality was better than I expected.',
    experienceDate: 'May 7, 2026'
  },
  {
    name: 'Oliver Brown',
    date: 'May 6, 2026',
    rating: 4,
    initials: 'OB',
    avatarType: 'blue',
    body: 'Good product and good price. Delivery took one extra day but everything arrived in perfect condition.',
    fullBody: 'Good product and good price. Delivery took one extra day but everything arrived in perfect condition, so overall I am happy with the order.',
    experienceDate: 'May 5, 2026'
  },
  {
    name: 'Liam Carter',
    date: 'May 5, 2026',
    rating: 5,
    initials: 'LC',
    avatarType: 'teal',
    body: 'Really nice clear case. It fits perfectly and the buttons feel responsive.',
    fullBody: 'Really nice clear case. It fits perfectly and the buttons feel responsive. I also liked that the order confirmation and delivery emails were simple to understand.',
    experienceDate: 'May 4, 2026'
  },
  {
    name: 'Maya Wilson',
    date: 'May 3, 2026',
    rating: 5,
    initials: 'MW',
    avatarType: 'yellow',
    body: 'The iPad case was exactly as shown. Strong magnet and nice finish.',
    fullBody: 'The iPad case was exactly as shown. Strong magnet and nice finish. It looks clean and works well with the Apple Pencil.',
    experienceDate: 'May 2, 2026'
  },
  {
    name: 'George Adams',
    date: 'May 2, 2026',
    rating: 1,
    initials: 'GA',
    avatarType: 'slate',
    body: 'The item arrived later than expected and I had to ask twice for an update.',
    fullBody: 'The item arrived later than expected and I had to ask twice for an update. The product was fine in the end, but the delivery communication could be better.',
    experienceDate: 'May 1, 2026'
  },
  {
    name: 'Nadia Ali',
    date: 'Apr 30, 2026',
    rating: 5,
    initials: 'NA',
    avatarType: 'pink',
    body: 'Very happy with the case. Looks premium and feels protective without being too bulky.',
    fullBody: 'Very happy with the case. Looks premium and feels protective without being too bulky. I would recommend it for anyone who wants a clean Apple-style look.',
    experienceDate: 'Apr 29, 2026'
  },
  {
    name: 'Ryan Patel',
    date: 'Apr 27, 2026',
    rating: 5,
    initials: 'RP',
    avatarType: 'blue',
    body: 'Great service. I asked a question before ordering and they replied with the exact model I needed.',
    fullBody: 'Great service. I asked a question before ordering and they replied with the exact model I needed. That saved me from ordering the wrong case.',
    experienceDate: 'Apr 26, 2026',
    reply: 'Company replied'
  },
  {
    name: 'Chloe Evans',
    date: 'Apr 25, 2026',
    rating: 5,
    initials: 'CE',
    avatarType: 'purple',
    body: 'The screen protector was easy to apply and came with everything needed.',
    fullBody: 'The screen protector was easy to apply and came with everything needed. No bubbles and the touch sensitivity still feels normal.',
    experienceDate: 'Apr 24, 2026'
  },
  {
    name: 'Tom Richardson',
    date: 'Apr 23, 2026',
    rating: 1,
    initials: 'TR',
    avatarType: 'teal',
    body: 'The wrong colour arrived. Support did reply, but I expected the replacement to be faster.',
    fullBody: 'The wrong colour arrived. Support did reply, but I expected the replacement to be faster. The return process was clear but took longer than I wanted.',
    experienceDate: 'Apr 22, 2026'
  },
  {
    name: 'Yasmin Khan',
    date: 'Apr 21, 2026',
    rating: 5,
    initials: 'YK',
    avatarType: 'yellow',
    body: 'Beautiful wallet and strong magnet. It looks great with my iPhone case.',
    fullBody: 'Beautiful wallet and strong magnet. It looks great with my iPhone case and feels secure when attached.',
    experienceDate: 'Apr 20, 2026'
  },
  {
    name: 'Adam Lewis',
    date: 'Apr 18, 2026',
    rating: 5,
    initials: 'AL',
    avatarType: 'slate',
    body: 'Second order from iPro and both times the products arrived as described.',
    fullBody: 'Second order from iPro and both times the products arrived as described. The quality is consistent and the website is easy to use.',
    experienceDate: 'Apr 17, 2026'
  },
  {
    name: 'Emily Rose',
    date: 'Apr 16, 2026',
    rating: 5,
    initials: 'ER',
    avatarType: 'pink',
    body: 'I bought a case as a gift and it came well packed. The person loved it.',
    fullBody: 'I bought a case as a gift and it came well packed. The person loved it and said the fit was perfect.',
    experienceDate: 'Apr 15, 2026'
  },
  {
    name: 'Hassan Omar',
    date: 'Apr 14, 2026',
    rating: 1,
    initials: 'HO',
    avatarType: 'purple',
    body: 'Tracking did not update for a few days, which made the order feel uncertain.',
    fullBody: 'Tracking did not update for a few days, which made the order feel uncertain. The item arrived eventually, but the tracking experience needs improvement.',
    experienceDate: 'Apr 13, 2026'
  },
  {
    name: 'Sophie White',
    date: 'Apr 12, 2026',
    rating: 5,
    initials: 'SW',
    avatarType: 'blue',
    body: 'The Apple Pencil worked straight away. Very pleased with the price and packaging.',
    fullBody: 'The Apple Pencil worked straight away. Very pleased with the price and packaging. It arrived clean and ready to use.',
    experienceDate: 'Apr 11, 2026'
  },
  {
    name: 'Mohamed Nour',
    date: 'Apr 10, 2026',
    rating: 5,
    initials: 'MN',
    avatarType: 'teal',
    body: 'Nice customer support and quick answer on email. They helped me choose the right iPhone model.',
    fullBody: 'Nice customer support and quick answer on email. They helped me choose the right iPhone model before I placed the order.',
    experienceDate: 'Apr 9, 2026',
    reply: 'Company replied'
  },
  {
    name: 'Rachel Green',
    date: 'Apr 8, 2026',
    rating: 5,
    initials: 'RG',
    avatarType: 'yellow',
    body: 'Product looks premium and the colour matched the website pictures.',
    fullBody: 'Product looks premium and the colour matched the website pictures. I am happy with the overall experience.',
    experienceDate: 'Apr 7, 2026'
  },
  {
    name: 'Jack Miller',
    date: 'Apr 6, 2026',
    rating: 1,
    initials: 'JM',
    avatarType: 'slate',
    body: 'I expected faster dispatch. The product was fine, but delivery was slower than promised.',
    fullBody: 'I expected faster dispatch. The product was fine, but delivery was slower than promised, so I would only order again if I was not in a rush.',
    experienceDate: 'Apr 5, 2026'
  },
  {
    name: 'Aisha Rahman',
    date: 'Apr 4, 2026',
    rating: 5,
    initials: 'AR',
    avatarType: 'pink',
    body: 'Very smooth order. The charger cable feels strong and works with my adapter.',
    fullBody: 'Very smooth order. The charger cable feels strong and works with my adapter. Checkout was easy and confirmation arrived quickly.',
    experienceDate: 'Apr 3, 2026'
  },
  {
    name: 'Ben Cooper',
    date: 'Apr 2, 2026',
    rating: 5,
    initials: 'BC',
    avatarType: 'blue',
    body: 'Case arrived in excellent condition. It feels close to original quality.',
    fullBody: 'Case arrived in excellent condition. It feels close to original quality and the buttons line up perfectly.',
    experienceDate: 'Apr 1, 2026'
  },
  {
    name: 'Megan Hill',
    date: 'Mar 30, 2026',
    rating: 1,
    initials: 'MH',
    avatarType: 'purple',
    body: 'The return process took longer than I expected. Support was polite but not very fast.',
    fullBody: 'The return process took longer than I expected. Support was polite but not very fast, and I had to wait for the next instruction.',
    experienceDate: 'Mar 29, 2026'
  },
  {
    name: 'Omar Saleh',
    date: 'Mar 28, 2026',
    rating: 5,
    initials: 'OS',
    avatarType: 'teal',
    body: 'Excellent packaging and the product matched the description. Would buy again.',
    fullBody: 'Excellent packaging and the product matched the description. Would buy again, especially for Apple accessories.',
    experienceDate: 'Mar 27, 2026'
  },
  {
    name: 'Laura King',
    date: 'Mar 26, 2026',
    rating: 5,
    initials: 'LK',
    avatarType: 'yellow',
    body: 'Good quality case and clean design. It arrived without any damage.',
    fullBody: 'Good quality case and clean design. It arrived without any damage and fits my phone well.',
    experienceDate: 'Mar 25, 2026'
  },
  {
    name: 'Ethan Brooks',
    date: 'Mar 24, 2026',
    rating: 1,
    initials: 'EB',
    avatarType: 'slate',
    body: 'The order was delayed and I could not see enough tracking details.',
    fullBody: 'The order was delayed and I could not see enough tracking details. The product was acceptable, but the waiting time was frustrating.',
    experienceDate: 'Mar 23, 2026'
  }
  ,{
    name: 'Priya Shah',
    date: 'Mar 22, 2026',
    rating: 5,
    initials: 'PS',
    avatarType: 'pink',
    body: 'Excellent case quality and really quick dispatch. The product looked exactly like the photos.',
    fullBody: 'Excellent case quality and really quick dispatch. The product looked exactly like the photos and the packaging felt premium. I will happily order again.',
    experienceDate: 'Mar 21, 2026'
  },
  {
    name: 'Noah Turner',
    date: 'Mar 20, 2026',
    rating: 5,
    initials: 'NT',
    avatarType: 'blue',
    body: 'Bought an iPhone silicone case and it fits perfectly. Nice colour and good MagSafe hold.',
    fullBody: 'Bought an iPhone silicone case and it fits perfectly. Nice colour, good MagSafe hold, and the buttons still feel easy to press.',
    experienceDate: 'Mar 19, 2026'
  },
  {
    name: 'Layla Ahmed',
    date: 'Mar 18, 2026',
    rating: 5,
    initials: 'LA',
    avatarType: 'purple',
    body: 'Very smooth experience from checkout to delivery. The Apple Pencil arrived safely packed.',
    fullBody: 'Very smooth experience from checkout to delivery. The Apple Pencil arrived safely packed and worked straight away with my iPad.',
    experienceDate: 'Mar 17, 2026'
  },
  {
    name: 'Callum Scott',
    date: 'Mar 16, 2026',
    rating: 5,
    initials: 'CS',
    avatarType: 'teal',
    body: 'Good price, fast delivery and the item felt genuine. Very happy overall.',
    fullBody: 'Good price, fast delivery and the item felt genuine. Very happy overall and I would recommend the store for Apple accessories.',
    experienceDate: 'Mar 15, 2026'
  },
  {
    name: 'Ella Thompson',
    date: 'Mar 14, 2026',
    rating: 5,
    initials: 'ET',
    avatarType: 'yellow',
    body: 'Ordered a clear case and screen protector. Both came in great condition and fitted nicely.',
    fullBody: 'Ordered a clear case and screen protector. Both came in great condition and fitted nicely. The case is slim but still feels protective.',
    experienceDate: 'Mar 13, 2026'
  },
  {
    name: 'Zain Malik',
    date: 'Mar 12, 2026',
    rating: 5,
    initials: 'ZM',
    avatarType: 'slate',
    body: 'Customer service helped me confirm the right model before I ordered. Really useful.',
    fullBody: 'Customer service helped me confirm the right model before I ordered. Really useful and saved me from choosing the wrong size.',
    experienceDate: 'Mar 11, 2026',
    reply: 'Company replied'
  },
  {
    name: 'Hannah Clarke',
    date: 'Mar 10, 2026',
    rating: 5,
    initials: 'HC',
    avatarType: 'pink',
    body: 'Lovely Apple-style case. The colour is clean and the finish feels premium.',
    fullBody: 'Lovely Apple-style case. The colour is clean and the finish feels premium. Delivery updates were easy to follow.',
    experienceDate: 'Mar 9, 2026'
  },
  {
    name: 'Ibrahim Saleh',
    date: 'Mar 8, 2026',
    rating: 5,
    initials: 'IS',
    avatarType: 'blue',
    body: 'Everything arrived well packed. The wallet magnet is strong and looks great on the phone.',
    fullBody: 'Everything arrived well packed. The wallet magnet is strong and looks great on the phone. It feels much better than cheaper alternatives.',
    experienceDate: 'Mar 7, 2026'
  },
  {
    name: 'Charlotte Young',
    date: 'Mar 6, 2026',
    rating: 5,
    initials: 'CY',
    avatarType: 'purple',
    body: 'I was surprised by the quality. The case has a nice soft touch and fits tightly.',
    fullBody: 'I was surprised by the quality. The case has a nice soft touch and fits tightly without adding too much bulk.',
    experienceDate: 'Mar 5, 2026'
  },
  {
    name: 'Leo Bennett',
    date: 'Mar 4, 2026',
    rating: 5,
    initials: 'LB',
    avatarType: 'teal',
    body: 'Fast response from support and the order arrived before the weekend. Great service.',
    fullBody: 'Fast response from support and the order arrived before the weekend. Great service and a very simple buying experience.',
    experienceDate: 'Mar 3, 2026',
    reply: 'Company replied'
  },
  {
    name: 'Fatima Noor',
    date: 'Mar 2, 2026',
    rating: 5,
    initials: 'FN',
    avatarType: 'yellow',
    body: 'The iPad folio case looks smart and feels strong. Good value for the quality.',
    fullBody: 'The iPad folio case looks smart and feels strong. Good value for the quality and the magnet holds properly.',
    experienceDate: 'Mar 1, 2026'
  },
  {
    name: 'Matthew Hall',
    date: 'Feb 28, 2026',
    rating: 5,
    initials: 'MH',
    avatarType: 'slate',
    body: 'Second time buying from iPro and no issues again. Reliable and easy to order.',
    fullBody: 'Second time buying from iPro and no issues again. Reliable and easy to order, with clear emails after purchase.',
    experienceDate: 'Feb 27, 2026'
  },
  {
    name: 'Grace Parker',
    date: 'Feb 26, 2026',
    rating: 5,
    initials: 'GP',
    avatarType: 'pink',
    body: 'The product photos were accurate and the item arrived exactly as expected.',
    fullBody: 'The product photos were accurate and the item arrived exactly as expected. The packaging was neat and the product felt premium.',
    experienceDate: 'Feb 25, 2026'
  },
  {
    name: 'Ali Darwish',
    date: 'Feb 24, 2026',
    rating: 5,
    initials: 'AD',
    avatarType: 'blue',
    body: 'Very good accessory store. I ordered a cable and case and both work perfectly.',
    fullBody: 'Very good accessory store. I ordered a cable and case and both work perfectly. Checkout was quick and delivery was smooth.',
    experienceDate: 'Feb 23, 2026'
  },
  {
    name: 'Ruby Foster',
    date: 'Feb 22, 2026',
    rating: 5,
    initials: 'RF',
    avatarType: 'purple',
    body: 'Great finish on the case and the colour is beautiful. I would buy another one.',
    fullBody: 'Great finish on the case and the colour is beautiful. I would buy another one because it feels protective and stylish.',
    experienceDate: 'Feb 21, 2026'
  },
  {
    name: 'Samir Haddad',
    date: 'Feb 20, 2026',
    rating: 5,
    initials: 'SH',
    avatarType: 'teal',
    body: 'The order arrived safely and the product matched the description. No complaints.',
    fullBody: 'The order arrived safely and the product matched the description. No complaints at all and the whole experience felt professional.',
    experienceDate: 'Feb 19, 2026'
  }

];

function clamp(num, min, max){ return Math.max(min, Math.min(max, num)); }

function starsImage(rating, extraClass = ''){
  const safe = Number(rating) || 0;
  const file = safe <= 1 ? 'stars-1.svg' : safe < 4.5 ? 'stars-4.svg' : safe < 5 ? 'stars-4.5.svg' : 'stars-5.svg';
  const label = safe <= 1 ? '1 star rating' : safe < 4.5 ? '4 star rating' : safe < 5 ? '4.5 star rating' : '5 star rating';
  return `<img class="stars-img ${extraClass}" src="assets/${file}" alt="${label}" />`;
}

function ratingBoxes(rating){
  // Top TrustScore area: use the real star SVG assets provided for the school project.
  return starsImage(Number(rating) >= 4.5 ? 4.5 : Number(rating), 'score-stars-img');
}

function starBoxes(rating){
  // Individual review cards: exact assets for 5-star, 4-star, and 1-star reviews.
  return starsImage(rating, 'review-stars-img');
}

function avatarMarkup(review){
  if(review.avatarImage){
    return `<div class="avatar ${review.avatarType}"><img src="${review.avatarImage}" alt="${review.name}" /></div>`;
  }
  return `<div class="avatar ${review.avatarType}">${review.initials}</div>`;
}

function actionIcon(type){
  const icons = {
    useful:'<svg viewBox="0 0 24 24"><path d="M7 11v9"></path><path d="M11 20h6.7a2 2 0 0 0 1.9-1.4l1.1-3.5a2 2 0 0 0-1.9-2.6H14V6.8a1.8 1.8 0 0 0-1.8-1.8L7 11Z"></path><path d="M3 11h4v9H3z"></path></svg>',
    share:'<svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="2"></circle><circle cx="6" cy="12" r="2"></circle><circle cx="18" cy="19" r="2"></circle><path d="M8 11 16 6.5"></path><path d="M8 13l8 4.5"></path></svg>',
    flag:'<svg viewBox="0 0 24 24"><path d="M6 3v18"></path><path d="M6 4h11l-2.5 4L17 12H6"></path></svg>'
  };
  return icons[type] || '';
}

function previewCard(review){
  return `
    <article class="preview-card">
      <div class="reviewer-row">
        ${avatarMarkup(review)}
        <div>
          <strong>${review.name}</strong>
          <span>${review.date}</span>
        </div>
      </div>
      <div class="preview-stars">${starBoxes(review.rating)}</div>
      <p>${review.body} <a href="#" class="see-more">See more</a></p>
      ${review.reply ? '<div class="reply-line">Company replied</div>' : ''}
      <div class="preview-actions">
        <button type="button">${actionIcon('useful')} Useful</button>
        <button type="button">${actionIcon('share')} Share</button>
        <button type="button">${actionIcon('flag')}</button>
      </div>
    </article>
  `;
}

function fullReview(review){
  const reviewCount = review.initials.length > 1 ? '2 reviews' : '1 review';
  return `
    <article class="full-review" data-rating="${review.rating}" data-text="${(review.name + ' ' + review.fullBody).toLowerCase()}">
      <div class="reviewer-row">
        ${avatarMarkup(review)}
        <div>
          <strong>${review.name}</strong>
          <span class="meta">United Kingdom • ${reviewCount}</span>
        </div>
        <span class="meta" style="margin-left:auto;color:#666">${review.date}</span>
      </div>
      <div class="full-stars">${starBoxes(review.rating)}</div>
      <p class="review-body">${review.fullBody}</p>
      <div class="date-exp">Date of experience: ${review.experienceDate}</div>
      ${review.reply ? `<div class="company-reply"><strong>Reply from iPro</strong><span>Thanks for your review. We are glad the replacement process was clear.</span></div>` : ''}
      <div class="review-actions">
        <button type="button">${actionIcon('useful')} Useful</button>
        <button type="button">${actionIcon('share')} Share</button>
        <button type="button">${actionIcon('flag')}</button>
      </div>
    </article>
  `;
}

function renderRatingBoxes(){
  document.querySelectorAll('[data-rating]').forEach(el => {
    const rating = parseFloat(el.getAttribute('data-rating'));
    el.innerHTML = ratingBoxes(rating);
  });
}

const previewReviews = document.getElementById('previewReviews');
const reviewFeed = document.getElementById('reviewFeed');
const keywordSearch = document.getElementById('keywordSearch');
const filterInputs = Array.from(document.querySelectorAll('.filter-row input:not(:disabled)'));
const prevPageBtn = document.getElementById('prevPageBtn');
const nextPageBtn = document.getElementById('nextPageBtn');

function getFilteredReviews(){
  const selectedRatings = filterInputs.filter(input => input.checked).map(input => Number(input.value));
  const keyword = keywordSearch.value.trim().toLowerCase();

  return reviews.filter(review => {
    const ratingMatch = selectedRatings.length ? selectedRatings.includes(review.rating) : true;
    const keywordMatch = keyword ? (review.name + ' ' + review.fullBody).toLowerCase().includes(keyword) : true;
    return ratingMatch && keywordMatch;
  });
}

let currentPage = 1;
const reviewsPerPage = 6;

function updatePaginationControls(totalPages, totalReviews){
  const pagination = document.querySelector('.reviews-pagination');
  if(!pagination || !prevPageBtn || !nextPageBtn) return;

  pagination.hidden = totalReviews === 0;
  prevPageBtn.disabled = currentPage <= 1 || totalReviews === 0;
  nextPageBtn.disabled = currentPage >= totalPages || totalReviews === 0;
}

function renderReviews(){
  const filtered = getFilteredReviews();
  const totalPages = Math.max(1, Math.ceil(filtered.length / reviewsPerPage));

  if(currentPage > totalPages) currentPage = totalPages;
  if(currentPage < 1) currentPage = 1;

  const start = (currentPage - 1) * reviewsPerPage;
  const visibleReviews = filtered.slice(start, start + reviewsPerPage);

  reviewFeed.innerHTML = filtered.length
    ? visibleReviews.map(fullReview).join('')
    : '<div class="no-results">No reviews match the selected filters.</div>';

  updatePaginationControls(totalPages, filtered.length);
}

function resetAndRenderReviews(){
  currentPage = 1;
  renderReviews();
}

previewReviews.innerHTML = reviews.slice(0, 4).map(previewCard).join('');
renderRatingBoxes();
renderReviews();

keywordSearch.addEventListener('input', resetAndRenderReviews);
filterInputs.forEach(input => input.addEventListener('change', resetAndRenderReviews));

if(prevPageBtn && nextPageBtn){
  prevPageBtn.addEventListener('click', () => {
    if(currentPage > 1){
      currentPage -= 1;
      renderReviews();
      document.getElementById('allreviews')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  nextPageBtn.addEventListener('click', () => {
    const totalPages = Math.max(1, Math.ceil(getFilteredReviews().length / reviewsPerPage));
    if(currentPage < totalPages){
      currentPage += 1;
      renderReviews();
      document.getElementById('allreviews')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

document.querySelectorAll('a[href="#"], button').forEach(el => {
  el.addEventListener('click', (event) => {
    if(el.classList.contains('page-btn')) return;
    if(el.tagName.toLowerCase() === 'button' || el.getAttribute('href') === '#') event.preventDefault();
  });
});
