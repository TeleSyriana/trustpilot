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
    avatarType: 'blue',
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

// Fictional exam sample reviews; added names are visibly marked (Sample).
// The original review records above remain unchanged.
reviews.push(
  {
    name: "Casey Q. (Sample)",
    date: "May 18, 2026",
    rating: 1,
    initials: "CQ",
    avatarType: "teal",
    body: "The case I received was for the wrong model and sorting out a replacement took too much back and forth. Ended up asking for a refund. A frustrating order from start to finish.",
    fullBody: "The case I received was for the wrong model and sorting out a replacement took too much back and forth. Ended up asking for a refund. A frustrating order from start to finish.",
    experienceDate: "May 17, 2026"
  },
  {
    name: "Dana Z. (Sample)",
    date: "May 18, 2026",
    rating: 2,
    initials: "DZ",
    avatarType: "blue",
    body: "Case fits fine, but it arrived after the birthday I needed it for. I had to chase the tracking twice. Would have preferred a clearer delivery estimate when I ordered.",
    fullBody: "Case fits fine, but it arrived after the birthday I needed it for. I had to chase the tracking twice. Would have preferred a clearer delivery estimate when I ordered.",
    experienceDate: "May 16, 2026"
  },
  {
    name: "Ellis Q. (Sample)",
    date: "May 18, 2026",
    rating: 2,
    initials: "EQ",
    avatarType: "purple",
    body: "The wallet looked good but kept shifting against my case when I put the phone in my pocket. Support explained how to return it, although the extra postage made it a...",
    fullBody: "The wallet looked good but kept shifting against my case when I put the phone in my pocket. Support explained how to return it, although the extra postage made it a disappointing purchase.",
    experienceDate: "May 15, 2026"
  },
  {
    name: "Finley Z. (Sample)",
    date: "May 18, 2026",
    rating: 3,
    initials: "FZ",
    avatarType: "yellow",
    body: "Nice colour and a decent fit. The buttons feel firmer than on my old case, which I am still getting used to. Happy enough to keep it, just not quite what I expected.",
    fullBody: "Nice colour and a decent fit. The buttons feel firmer than on my old case, which I am still getting used to. Happy enough to keep it, just not quite what I expected.",
    experienceDate: "May 17, 2026"
  },
  {
    name: "Greer Q. (Sample)",
    date: "May 17, 2026",
    rating: 3,
    initials: "GQ",
    avatarType: "slate",
    body: "The screen protector looks fine now, but fitting it took two attempts and the instructions were tiny. A clearer guide would help. Delivery and packaging were both okay.",
    fullBody: "The screen protector looks fine now, but fitting it took two attempts and the instructions were tiny. A clearer guide would help. Delivery and packaging were both okay.",
    experienceDate: "May 15, 2026"
  },
  {
    name: "Harper Z. (Sample)",
    date: "May 17, 2026",
    rating: 4,
    initials: "HZ",
    avatarType: "pink",
    body: "Good length charging cable and it works as expected. The parcel arrived a day later than the tracking first suggested, so four stars from me. Otherwise a straightforward order.",
    fullBody: "Good length charging cable and it works as expected. The parcel arrived a day later than the tracking first suggested, so four stars from me. Otherwise a straightforward order.",
    experienceDate: "May 14, 2026"
  },
  {
    name: "Aaron B. (Sample)",
    date: "May 17, 2026",
    rating: 5,
    initials: "AB",
    avatarType: "teal",
    body: "Good fit and easy to press the buttons. Happy with my new case.",
    fullBody: "Good fit and easy to press the buttons. Happy with my new case.",
    experienceDate: "May 16, 2026"
  },
  {
    name: "Mabel G. (Sample)",
    date: "May 17, 2026",
    rating: 5,
    initials: "MG",
    avatarType: "blue",
    body: "The pale blue case is lovely in person. I can still find the side buttons without looking, which sounds small but my previous case made that surprisingly difficult.",
    fullBody: "The pale blue case is lovely in person. I can still find the side buttons without looking, which sounds small but my previous case made that surprisingly difficult.",
    experienceDate: "May 15, 2026"
  },
  {
    name: "Aisha D. (Sample)",
    date: "May 16, 2026",
    rating: 5,
    initials: "AD",
    avatarType: "purple",
    body: "I usually make a mess of screen protectors but managed this one first time. The little cleaning kit helped and I can barely see it on the screen.",
    fullBody: "I usually make a mess of screen protectors but managed this one first time. The little cleaning kit helped and I can barely see it on the screen.",
    experienceDate: "May 13, 2026"
  },
  {
    name: "Magnus T. (Sample)",
    date: "May 16, 2026",
    rating: 5,
    initials: "MT",
    avatarType: "yellow",
    body: "Needed a longer cable for the socket behind my desk. This reaches comfortably and coils away neatly afterwards. Exactly the practical upgrade I was after.",
    fullBody: "Needed a longer cable for the socket behind my desk. This reaches comfortably and coils away neatly afterwards. Exactly the practical upgrade I was after.",
    experienceDate: "May 15, 2026"
  },
  {
    name: "Alan F. (Sample)",
    date: "May 16, 2026",
    rating: 5,
    initials: "AF",
    avatarType: "slate",
    body: "Bought a longer cable for the sofa. Finally reaches the socket without me having to sit at the edge. Does the job.",
    fullBody: "Bought a longer cable for the sofa. Finally reaches the socket without me having to sit at the edge. Does the job.",
    experienceDate: "May 14, 2026"
  },
  {
    name: "Mariam K. (Sample)",
    date: "May 16, 2026",
    rating: 5,
    initials: "MK",
    avatarType: "pink",
    body: "Put the screen protector on at the kitchen table and managed it first time. The little cleaning cloth was useful. Screen still looks clear when reading outside.",
    fullBody: "Put the screen protector on at the kitchen table and managed it first time. The little cleaning cloth was useful. Screen still looks clear when reading outside.",
    experienceDate: "May 13, 2026"
  },
  {
    name: "Alina R. (Sample)",
    date: "May 15, 2026",
    rating: 5,
    initials: "AR",
    avatarType: "teal",
    body: "Lovely muted colour on the tablet cover. The folding stand is useful when I have a recipe open in the kitchen. It was a small upgrade but I use it every day now.",
    fullBody: "Lovely muted colour on the tablet cover. The folding stand is useful when I have a recipe open in the kitchen. It was a small upgrade but I use it every day now.",
    experienceDate: "May 14, 2026"
  },
  {
    name: "Marcus V. (Sample)",
    date: "May 15, 2026",
    rating: 5,
    initials: "MV",
    avatarType: "blue",
    body: "The magnetic wallet holds the two cards I actually use. Much nicer than carrying my old stuffed wallet just to pop to the shop.",
    fullBody: "The magnetic wallet holds the two cards I actually use. Much nicer than carrying my old stuffed wallet just to pop to the shop.",
    experienceDate: "May 13, 2026"
  },
  {
    name: "Amelia S. (Sample)",
    date: "May 15, 2026",
    rating: 5,
    initials: "AS",
    avatarType: "purple",
    body: "Ordered a wallet for my phone because I keep forgetting my cards. Fits the two I actually need and looks neat on the back.",
    fullBody: "Ordered a wallet for my phone because I keep forgetting my cards. Fits the two I actually need and looks neat on the back.",
    experienceDate: "May 12, 2026"
  },
  {
    name: "Martha J. (Sample)",
    date: "May 15, 2026",
    rating: 5,
    initials: "MJ",
    avatarType: "yellow",
    body: "I wasn't sure which tablet cover to choose so sent the model number before ordering. The reply explained the options clearly. The one I picked fits and the folding stand is...",
    fullBody: "I wasn't sure which tablet cover to choose so sent the model number before ordering. The reply explained the options clearly. The one I picked fits and the folding stand is handy for recipes.",
    experienceDate: "May 14, 2026"
  },
  {
    name: "Andrew K. (Sample)",
    date: "May 14, 2026",
    rating: 5,
    initials: "AK",
    avatarType: "slate",
    body: "I had the wrong tablet model in my basket. Sent a question with the model number and got a clear answer before ordering. The cover that arrived fits, so that was useful.",
    fullBody: "I had the wrong tablet model in my basket. Sent a question with the model number and got a clear answer before ordering. The cover that arrived fits, so that was useful.",
    experienceDate: "May 12, 2026"
  },
  {
    name: "Mateo R. (Sample)",
    date: "May 14, 2026",
    rating: 5,
    initials: "MR",
    avatarType: "pink",
    body: "Really pleased with the black case. Plain, tidy and comfortable to hold. That was all I wanted.",
    fullBody: "Really pleased with the black case. Plain, tidy and comfortable to hold. That was all I wanted.",
    experienceDate: "May 11, 2026"
  },
  {
    name: "Anika P. (Sample)",
    date: "May 14, 2026",
    rating: 5,
    initials: "AP",
    avatarType: "teal",
    body: "Lovely soft lining in the laptop sleeve. A neat fit and a smooth zip.",
    fullBody: "Lovely soft lining in the laptop sleeve. A neat fit and a smooth zip.",
    experienceDate: "May 13, 2026"
  },
  {
    name: "Meera S. (Sample)",
    date: "May 14, 2026",
    rating: 5,
    initials: "MS",
    avatarType: "blue",
    body: "Bought a stylus for marking up my course notes. The compatibility information helped me choose and it connected without any trouble. My handwritten notes are still messy, but...",
    fullBody: "Bought a stylus for marking up my course notes. The compatibility information helped me choose and it connected without any trouble. My handwritten notes are still messy, but at least they are all in one place now.",
    experienceDate: "May 12, 2026"
  },
  {
    name: "Arjun T. (Sample)",
    date: "May 13, 2026",
    rating: 5,
    initials: "AT",
    avatarType: "purple",
    body: "The stylus is comfortable for taking notes in class. I am not doing serious artwork with it, but for diagrams and handwriting it has been just what I needed.",
    fullBody: "The stylus is comfortable for taking notes in class. I am not doing serious artwork with it, but for diagrams and handwriting it has been just what I needed.",
    experienceDate: "May 10, 2026"
  },
  {
    name: "Megan D. (Sample)",
    date: "May 13, 2026",
    rating: 5,
    initials: "MD",
    avatarType: "yellow",
    body: "Ordered two different case colours for me and my sister. Both were labelled properly so I could wrap hers without opening it. Nice little detail.",
    fullBody: "Ordered two different case colours for me and my sister. Both were labelled properly so I could wrap hers without opening it. Nice little detail.",
    experienceDate: "May 12, 2026"
  },
  {
    name: "Ava M. (Sample)",
    date: "May 13, 2026",
    rating: 5,
    initials: "AM",
    avatarType: "slate",
    body: "Really like this case. Easier to hold than the slippery one I had before and it still goes into my coat pocket easily.",
    fullBody: "Really like this case. Easier to hold than the slippery one I had before and it still goes into my coat pocket easily.",
    experienceDate: "May 11, 2026"
  },
  {
    name: "Milo P. (Sample)",
    date: "May 13, 2026",
    rating: 5,
    initials: "MP",
    avatarType: "pink",
    body: "The laptop sleeve slips into my backpack without taking over the whole bag. Soft inside and the zip moves smoothly. Very happy with it for the commute.",
    fullBody: "The laptop sleeve slips into my backpack without taking over the whole bag. Soft inside and the zip moves smoothly. Very happy with it for the commute.",
    experienceDate: "May 10, 2026"
  },
  {
    name: "Beatrice H. (Sample)",
    date: "May 12, 2026",
    rating: 5,
    initials: "BH",
    avatarType: "teal",
    body: "Bought a case and protector together. Both were packed properly, and the case edge does not lift the protector like my old combination did. Would happily order the same again.",
    fullBody: "Bought a case and protector together. Both were packed properly, and the case edge does not lift the protector like my old combination did. Would happily order the same again.",
    experienceDate: "May 11, 2026"
  },
  {
    name: "Mina H. (Sample)",
    date: "May 12, 2026",
    rating: 5,
    initials: "MH",
    avatarType: "blue",
    body: "I entered my old address by habit and noticed straight after paying. Support corrected it before dispatch and confirmed the change. Relieved I caught it and grateful they made...",
    fullBody: "I entered my old address by habit and noticed straight after paying. Support corrected it before dispatch and confirmed the change. Relieved I caught it and grateful they made it simple.",
    experienceDate: "May 10, 2026"
  },
  {
    name: "Ben V. (Sample)",
    date: "May 12, 2026",
    rating: 5,
    initials: "BV",
    avatarType: "purple",
    body: "Cable works fine and is long enough for my desk. Just what I needed.",
    fullBody: "Cable works fine and is long enough for my desk. Just what I needed.",
    experienceDate: "May 9, 2026"
  },
  {
    name: "Moira B. (Sample)",
    date: "May 12, 2026",
    rating: 5,
    initials: "MB",
    avatarType: "yellow",
    body: "This tablet stand has made video calls much easier. It stays where I put it and folds away when the grandchildren have finished waving at the screen.",
    fullBody: "This tablet stand has made video calls much easier. It stays where I put it and folds away when the grandchildren have finished waving at the screen.",
    experienceDate: "May 11, 2026"
  },
  {
    name: "Bethany J. (Sample)",
    date: "May 11, 2026",
    rating: 5,
    initials: "BJ",
    avatarType: "slate",
    body: "I changed my mind about the colour after placing the order. Support confirmed the change and the colour I wanted arrived. Appreciated someone actually reading the request.",
    fullBody: "I changed my mind about the colour after placing the order. Support confirmed the change and the colour I wanted arrived. Appreciated someone actually reading the request.",
    experienceDate: "May 9, 2026"
  },
  {
    name: "Murad F. (Sample)",
    date: "May 11, 2026",
    rating: 5,
    initials: "MF",
    avatarType: "pink",
    body: "Happy with the cable. The length listed was accurate and it fits through the opening in my case.",
    fullBody: "Happy with the cable. The length listed was accurate and it fits through the opening in my case.",
    experienceDate: "May 8, 2026"
  },
  {
    name: "Bilal N. (Sample)",
    date: "May 11, 2026",
    rating: 5,
    initials: "BN",
    avatarType: "teal",
    body: "MagSafe stand keeps the phone in a comfortable position for video calls. My desk looks less cluttered too. Happy with how straightforward it was to set up.",
    fullBody: "MagSafe stand keeps the phone in a comfortable position for video calls. My desk looks less cluttered too. Happy with how straightforward it was to set up.",
    experienceDate: "May 10, 2026"
  },
  {
    name: "Nadia E. (Sample)",
    date: "May 11, 2026",
    rating: 5,
    initials: "NE",
    avatarType: "blue",
    body: "My parcel had a dent in the outer box, but everything inside was cushioned and the case was perfect. The plum colour is especially nice against my silver phone.",
    fullBody: "My parcel had a dent in the outer box, but everything inside was cushioned and the case was perfect. The plum colour is especially nice against my silver phone.",
    experienceDate: "May 9, 2026"
  },
  {
    name: "Bonnie E. (Sample)",
    date: "May 10, 2026",
    rating: 5,
    initials: "BE",
    avatarType: "purple",
    body: "A replacement for my battered tablet cover. This one closes neatly and the inside feels soft. Very pleased with it so far.",
    fullBody: "A replacement for my battered tablet cover. This one closes neatly and the inside feels soft. Very pleased with it so far.",
    experienceDate: "May 7, 2026"
  },
  {
    name: "Nathan C. (Sample)",
    date: "May 10, 2026",
    rating: 5,
    initials: "NC",
    avatarType: "yellow",
    body: "Changed from a bulky case to this slimmer one. It slides into my jacket pocket properly and doesn't wobble when I'm typing at my desk. Pleased with that.",
    fullBody: "Changed from a bulky case to this slimmer one. It slides into my jacket pocket properly and doesn't wobble when I'm typing at my desk. Pleased with that.",
    experienceDate: "May 9, 2026"
  },
  {
    name: "Bradley C. (Sample)",
    date: "May 10, 2026",
    rating: 5,
    initials: "BC",
    avatarType: "slate",
    body: "Had a question about the connector before I ordered. The reply was clear and saved me buying the wrong cable. Everything worked when I plugged it in.",
    fullBody: "Had a question about the connector before I ordered. The reply was clear and saved me buying the wrong cable. Everything worked when I plugged it in.",
    experienceDate: "May 8, 2026"
  },
  {
    name: "Neha L. (Sample)",
    date: "May 10, 2026",
    rating: 5,
    initials: "NL",
    avatarType: "pink",
    body: "There were several similar-looking screen protectors and I nearly chose the wrong size. Asked for help and got a straightforward answer with the right link. Fits my screen neatly.",
    fullBody: "There were several similar-looking screen protectors and I nearly chose the wrong size. Asked for help and got a straightforward answer with the right link. Fits my screen neatly.",
    experienceDate: "May 7, 2026"
  },
  {
    name: "Callum D. (Sample)",
    date: "May 9, 2026",
    rating: 5,
    initials: "CD",
    avatarType: "teal",
    body: "Good everyday case. No huge branding, no bulky corners, just a tidy fit and a colour I like. That is all I was looking for.",
    fullBody: "Good everyday case. No huge branding, no bulky corners, just a tidy fit and a colour I like. That is all I was looking for.",
    experienceDate: "May 8, 2026"
  },
  {
    name: "Neil A. (Sample)",
    date: "May 9, 2026",
    rating: 5,
    initials: "NA",
    avatarType: "blue",
    body: "Simple order from start to finish. The clear case lets the phone colour show through and the corners fit snugly.",
    fullBody: "Simple order from start to finish. The clear case lets the phone colour show through and the corners fit snugly.",
    experienceDate: "May 7, 2026"
  },
  {
    name: "Carla W. (Sample)",
    date: "May 9, 2026",
    rating: 5,
    initials: "CW",
    avatarType: "purple",
    body: "The screen protector instructions were easy enough to follow. Took my time lining it up and the result looks good. My finger still moves across the screen smoothly.",
    fullBody: "The screen protector instructions were easy enough to follow. Took my time lining it up and the result looks good. My finger still moves across the screen smoothly.",
    experienceDate: "May 6, 2026"
  },
  {
    name: "Niamh W. (Sample)",
    date: "May 9, 2026",
    rating: 5,
    initials: "NW",
    avatarType: "yellow",
    body: "Treated myself to a matching case and wallet. The shades work nicely together without looking too identical. I like being able to remove the wallet when I'm at home.",
    fullBody: "Treated myself to a matching case and wallet. The shades work nicely together without looking too identical. I like being able to remove the wallet when I'm at home.",
    experienceDate: "May 8, 2026"
  },
  {
    name: "Catherine R. (Sample)",
    date: "May 8, 2026",
    rating: 5,
    initials: "CR",
    avatarType: "slate",
    body: "Ordered the sleeve for carrying my laptop between rooms and to the office. I already have a bag I like and did not want to replace it with a laptop bag. This fits inside...",
    fullBody: "Ordered the sleeve for carrying my laptop between rooms and to the office. I already have a bag I like and did not want to replace it with a laptop bag. This fits inside without taking up loads of space. The lining is nicer than I expected as well.",
    experienceDate: "May 6, 2026"
  },
  {
    name: "Nico M. (Sample)",
    date: "May 8, 2026",
    rating: 5,
    initials: "NM",
    avatarType: "pink",
    body: "The short cable keeps my charging setup tidier. No spare length hanging off the shelf now.",
    fullBody: "The short cable keeps my charging setup tidier. No spare length hanging off the shelf now.",
    experienceDate: "May 5, 2026"
  },
  {
    name: "Cedric L. (Sample)",
    date: "May 8, 2026",
    rating: 5,
    initials: "CL",
    avatarType: "teal",
    body: "The charging cable feels tidy and flexible rather than stiff. Replaced the short cable by my bedside with this one and it is much more practical.",
    fullBody: "The charging cable feels tidy and flexible rather than stiff. Replaced the short cable by my bedside with this one and it is much more practical.",
    experienceDate: "May 7, 2026"
  },
  {
    name: "Noor I. (Sample)",
    date: "May 8, 2026",
    rating: 5,
    initials: "NI",
    avatarType: "blue",
    body: "I'm quite fussy about how a case feels round the bottom edge. This one is smooth where my little finger rests, and I can plug the cable in without taking it off. Really...",
    fullBody: "I'm quite fussy about how a case feels round the bottom edge. This one is smooth where my little finger rests, and I can plug the cable in without taking it off. Really comfortable.",
    experienceDate: "May 6, 2026"
  },
  {
    name: "Ciara S. (Sample)",
    date: "May 7, 2026",
    rating: 5,
    initials: "CS",
    avatarType: "purple",
    body: "Love the colour of the wallet. I only carry a couple of cards so the size suits me, and it comes off easily when I want to use my stand.",
    fullBody: "Love the colour of the wallet. I only carry a couple of cards so the size suits me, and it comes off easily when I want to use my stand.",
    experienceDate: "May 4, 2026"
  },
  {
    name: "Norbert Z. (Sample)",
    date: "May 7, 2026",
    rating: 5,
    initials: "NZ",
    avatarType: "yellow",
    body: "The order email went into spam, so I asked whether payment had gone through. Support sent the details again and helped me locate the tracking. Everything arrived in good order.",
    fullBody: "The order email went into spam, so I asked whether payment had gone through. Support sent the details again and helped me locate the tracking. Everything arrived in good order.",
    experienceDate: "May 6, 2026"
  },
  {
    name: "Connor H. (Sample)",
    date: "May 7, 2026",
    rating: 5,
    initials: "CH",
    avatarType: "slate",
    body: "I picked the wrong case size myself and only realised when I opened it. Support asked me to check the model number before sorting the replacement, which was sensible. The...",
    fullBody: "I picked the wrong case size myself and only realised when I opened it. Support asked me to check the model number before sorting the replacement, which was sensible. The return instructions made sense and the new case fits correctly. Glad I did not have to start the whole conversation again each time.",
    experienceDate: "May 5, 2026"
  },
  {
    name: "Ola U. (Sample)",
    date: "May 7, 2026",
    rating: 5,
    initials: "OU",
    avatarType: "pink",
    body: "Nice texture on the tablet cover. It doesn't feel slippery on my lap and the pencil holder is actually useful.",
    fullBody: "Nice texture on the tablet cover. It doesn't feel slippery on my lap and the pencil holder is actually useful.",
    experienceDate: "May 4, 2026"
  },
  {
    name: "Dahlia P. (Sample)",
    date: "May 6, 2026",
    rating: 5,
    initials: "DP",
    avatarType: "teal",
    body: "My tablet is mainly used for reading. This cover is comfortable to hold open and the stand is a nice extra for watching something at the table.",
    fullBody: "My tablet is mainly used for reading. This cover is comfortable to hold open and the stand is a nice extra for watching something at the table.",
    experienceDate: "May 5, 2026"
  },
  {
    name: "Oliver N. (Sample)",
    date: "May 6, 2026",
    rating: 5,
    initials: "ON",
    avatarType: "blue",
    body: "Bought a spare cable to leave in my travel pouch. It takes up very little room and the connector sits firmly in my phone. Saves moving the bedside cable every time I go away.",
    fullBody: "Bought a spare cable to leave in my travel pouch. It takes up very little room and the connector sits firmly in my phone. Saves moving the bedside cable every time I go away.",
    experienceDate: "May 4, 2026"
  },
  {
    name: "Damien F. (Sample)",
    date: "May 6, 2026",
    rating: 5,
    initials: "DF",
    avatarType: "purple",
    body: "Bought two cables to stop moving the same one around the house. Both fit the devices I bought them for. A useful little order.",
    fullBody: "Bought two cables to stop moving the same one around the house. Both fit the devices I bought them for. A useful little order.",
    experienceDate: "May 3, 2026"
  },
  {
    name: "Omar Q. (Sample)",
    date: "May 6, 2026",
    rating: 5,
    initials: "OQ",
    avatarType: "yellow",
    body: "The magnetic stand is a useful addition to my desk. Easy to glance at messages while working and I can lift the phone off with one hand.",
    fullBody: "The magnetic stand is a useful addition to my desk. Easy to glance at messages while working and I can lift the phone off with one hand.",
    experienceDate: "May 5, 2026"
  },
  {
    name: "Daria K. (Sample)",
    date: "May 5, 2026",
    rating: 5,
    initials: "DK",
    avatarType: "slate",
    body: "The clear case lets the phone colour show through, which was the whole reason I chose it. Edges sit neatly and I can reach all the buttons.",
    fullBody: "The clear case lets the phone colour show through, which was the whole reason I chose it. Edges sit neatly and I can reach all the buttons.",
    experienceDate: "May 3, 2026"
  },
  {
    name: "Orla F. (Sample)",
    date: "May 5, 2026",
    rating: 5,
    initials: "OF",
    avatarType: "pink",
    body: "Lovely green case, a softer shade than most I've seen. It arrived clean with no little marks on it.",
    fullBody: "Lovely green case, a softer shade than most I've seen. It arrived clean with no little marks on it.",
    experienceDate: "May 2, 2026"
  },
  {
    name: "Dean M. (Sample)",
    date: "May 5, 2026",
    rating: 5,
    initials: "DM",
    avatarType: "teal",
    body: "Useful stand for my laptop when I am using a separate keyboard. It folds away neatly at the end of the day. Looks quite tidy on the desk as well.",
    fullBody: "Useful stand for my laptop when I am using a separate keyboard. It folds away neatly at the end of the day. Looks quite tidy on the desk as well.",
    experienceDate: "May 4, 2026"
  },
  {
    name: "Otis D. (Sample)",
    date: "May 5, 2026",
    rating: 5,
    initials: "OD",
    avatarType: "blue",
    body: "I managed to order a cover for the larger tablet. Entirely my mistake. The return instructions were easy to follow and the refund appeared after they confirmed receipt. Would...",
    fullBody: "I managed to order a cover for the larger tablet. Entirely my mistake. The return instructions were easy to follow and the refund appeared after they confirmed receipt. Would feel comfortable ordering again.",
    experienceDate: "May 3, 2026"
  },
  {
    name: "Denise T. (Sample)",
    date: "May 4, 2026",
    rating: 5,
    initials: "DT",
    avatarType: "purple",
    body: "Needed a straightforward cover for my tablet, nothing fancy. This is easy to open and the cutouts line up. Happy I chose it.",
    fullBody: "Needed a straightforward cover for my tablet, nothing fancy. This is easy to open and the cutouts line up. Happy I chose it.",
    experienceDate: "May 1, 2026"
  },
  {
    name: "Paige S. (Sample)",
    date: "May 4, 2026",
    rating: 5,
    initials: "PS",
    avatarType: "yellow",
    body: "Used the alignment guide for the screen protector and it went on straight. Usually I spend ages adjusting these, so that was a pleasant change.",
    fullBody: "Used the alignment guide for the screen protector and it went on straight. Usually I spend ages adjusting these, so that was a pleasant change.",
    experienceDate: "May 3, 2026"
  },
  {
    name: "Dexter B. (Sample)",
    date: "May 4, 2026",
    rating: 5,
    initials: "DB",
    avatarType: "slate",
    body: "The stylus has made marking up documents much easier. I checked my tablet model first and followed the setup instructions. It was ready to use without much fuss.",
    fullBody: "The stylus has made marking up documents much easier. I checked my tablet model first and followed the setup instructions. It was ready to use without much fuss.",
    experienceDate: "May 2, 2026"
  },
  {
    name: "Pavel K. (Sample)",
    date: "May 4, 2026",
    rating: 5,
    initials: "PK",
    avatarType: "pink",
    body: "The laptop stand lifts my screen to a more comfortable height. The hinges needed a firm push initially but hold the position well. My desk also has room underneath for a...",
    fullBody: "The laptop stand lifts my screen to a more comfortable height. The hinges needed a firm push initially but hold the position well. My desk also has room underneath for a notebook now.",
    experienceDate: "May 1, 2026"
  },
  {
    name: "Eden C. (Sample)",
    date: "May 3, 2026",
    rating: 5,
    initials: "EC",
    avatarType: "teal",
    body: "Really pleased with the soft feel of this phone case. It does pick up a little pocket lint, but that wipes off and the colour is lovely.",
    fullBody: "Really pleased with the soft feel of this phone case. It does pick up a little pocket lint, but that wipes off and the colour is lovely.",
    experienceDate: "May 2, 2026"
  },
  {
    name: "Pearl T. (Sample)",
    date: "May 3, 2026",
    rating: 5,
    initials: "PT",
    avatarType: "blue",
    body: "Bought the cream case for my mum. She likes the colour and says it is easier to grip than her old shiny one.",
    fullBody: "Bought the cream case for my mum. She likes the colour and says it is easier to grip than her old shiny one.",
    experienceDate: "May 1, 2026"
  },
  {
    name: "Eleanor V. (Sample)",
    date: "May 3, 2026",
    rating: 5,
    initials: "EV",
    avatarType: "purple",
    body: "I bought the wrong item as a present. Support explained the return steps plainly and kept me updated while it was being sorted. I appreciated the helpful response.",
    fullBody: "I bought the wrong item as a present. Support explained the return steps plainly and kept me updated while it was being sorted. I appreciated the helpful response.",
    experienceDate: "Apr 30, 2026"
  },
  {
    name: "Peter Y. (Sample)",
    date: "May 3, 2026",
    rating: 5,
    initials: "PY",
    avatarType: "yellow",
    body: "Tracking paused for a bit and I wondered if the parcel was stuck. The reply explained where it was rather than just copying the tracking link back. It turned up fine and the...",
    fullBody: "Tracking paused for a bit and I wondered if the parcel was stuck. The reply explained where it was rather than just copying the tracking link back. It turned up fine and the cable works as expected.",
    experienceDate: "May 2, 2026"
  },
  {
    name: "Elias N. (Sample)",
    date: "May 2, 2026",
    rating: 5,
    initials: "EN",
    avatarType: "slate",
    body: "The cable reaches my desk without stretching across the keyboard now. Small thing, but it has made the setup a lot more convenient.",
    fullBody: "The cable reaches my desk without stretching across the keyboard now. Small thing, but it has made the setup a lot more convenient.",
    experienceDate: "Apr 30, 2026"
  },
  {
    name: "Pia C. (Sample)",
    date: "May 2, 2026",
    rating: 5,
    initials: "PC",
    avatarType: "pink",
    body: "I use the stylus for little sketches during my lunch break. Comfortable enough for that and easy to put away in the tablet cover afterwards. A nice purchase.",
    fullBody: "I use the stylus for little sketches during my lunch break. Comfortable enough for that and easy to put away in the tablet cover afterwards. A nice purchase.",
    experienceDate: "Apr 29, 2026"
  },
  {
    name: "Elodie J. (Sample)",
    date: "May 2, 2026",
    rating: 5,
    initials: "EJ",
    avatarType: "teal",
    body: "Nice little wallet and a clean finish around the edges. I wanted something for short trips when I leave my bag at home. This suits that nicely.",
    fullBody: "Nice little wallet and a clean finish around the edges. I wanted something for short trips when I leave my bag at home. This suits that nicely.",
    experienceDate: "May 1, 2026"
  },
  {
    name: "Priya B. (Sample)",
    date: "May 2, 2026",
    rating: 5,
    initials: "PB",
    avatarType: "blue",
    body: "The replacement case buttons feel much better than the stiff ones on my old cover. Everything lines up, including the camera opening. Happy with the fit.",
    fullBody: "The replacement case buttons feel much better than the stiff ones on my old cover. Everything lines up, including the camera opening. Happy with the fit.",
    experienceDate: "Apr 30, 2026"
  },
  {
    name: "Eric R. (Sample)",
    date: "May 1, 2026",
    rating: 5,
    initials: "ER",
    avatarType: "purple",
    body: "The order was easy to follow from the confirmation email. Case arrived in good condition and fitted the model I selected. No problems here.",
    fullBody: "The order was easy to follow from the confirmation email. Case arrived in good condition and fitted the model I selected. No problems here.",
    experienceDate: "Apr 28, 2026"
  },
  {
    name: "Quinn R. (Sample)",
    date: "May 1, 2026",
    rating: 5,
    initials: "QR",
    avatarType: "yellow",
    body: "The wallet is slim enough that my phone still fits in the pocket I normally use. Cards are easy to get out but don't rattle around.",
    fullBody: "The wallet is slim enough that my phone still fits in the pocket I normally use. Cards are easy to get out but don't rattle around.",
    experienceDate: "Apr 30, 2026"
  },
  {
    name: "Erin D. (Sample)",
    date: "May 1, 2026",
    rating: 5,
    initials: "ED",
    avatarType: "slate",
    body: "Was worried the tablet cover would feel heavy, but it is comfortable to carry around. The stand stays in position while I watch videos. Really happy with my choice.",
    fullBody: "Was worried the tablet cover would feel heavy, but it is comfortable to carry around. The stand stays in position while I watch videos. Really happy with my choice.",
    experienceDate: "Apr 29, 2026"
  },
  {
    name: "Rafael H. (Sample)",
    date: "May 1, 2026",
    rating: 5,
    initials: "RH",
    avatarType: "pink",
    body: "Needed a basic tablet cover for watching films on the train. This stands at a sensible angle on the little table and closes flat in my bag. Does the job nicely.",
    fullBody: "Needed a basic tablet cover for watching films on the train. This stands at a sensible angle on the little table and closes flat in my bag. Does the job nicely.",
    experienceDate: "Apr 28, 2026"
  },
  {
    name: "Esme W. (Sample)",
    date: "Apr 30, 2026",
    rating: 5,
    initials: "EW",
    avatarType: "teal",
    body: "My old protector had a chipped corner so I replaced it with this one. Clean finish once fitted and the edges sit nicely under my case.",
    fullBody: "My old protector had a chipped corner so I replaced it with this one. Clean finish once fitted and the edges sit nicely under my case.",
    experienceDate: "Apr 29, 2026"
  },
  {
    name: "Rania M. (Sample)",
    date: "Apr 30, 2026",
    rating: 5,
    initials: "RM",
    avatarType: "blue",
    body: "The wrong colour was packed in my order. I sent a photo and they arranged an exchange without making me repeat everything. The correct case looks lovely, and the helpful...",
    fullBody: "The wrong colour was packed in my order. I sent a photo and they arranged an exchange without making me repeat everything. The correct case looks lovely, and the helpful response earned the rating.",
    experienceDate: "Apr 28, 2026"
  },
  {
    name: "Farah L. (Sample)",
    date: "Apr 30, 2026",
    rating: 5,
    initials: "FL",
    avatarType: "purple",
    body: "Ordered a case for myself and one for my sister. Different models, both fit properly. The colours are easy to tell apart when our phones are on the table.",
    fullBody: "Ordered a case for myself and one for my sister. Different models, both fit properly. The colours are easy to tell apart when our phones are on the table.",
    experienceDate: "Apr 27, 2026"
  },
  {
    name: "Rebecca P. (Sample)",
    date: "Apr 30, 2026",
    rating: 5,
    initials: "RP",
    avatarType: "yellow",
    body: "I like the matte finish on this case. It doesn't show every fingerprint like my previous cover did.",
    fullBody: "I like the matte finish on this case. It doesn't show every fingerprint like my previous cover did.",
    experienceDate: "Apr 29, 2026"
  },
  {
    name: "Felix S. (Sample)",
    date: "Apr 29, 2026",
    rating: 5,
    initials: "FS",
    avatarType: "slate",
    body: "The magnetic stand is useful beside my monitor. I can glance at the phone without picking it up all the time. Feels like a sensible addition to my desk.",
    fullBody: "The magnetic stand is useful beside my monitor. I can glance at the phone without picking it up all the time. Feels like a sensible addition to my desk.",
    experienceDate: "Apr 27, 2026"
  },
  {
    name: "Reuben V. (Sample)",
    date: "Apr 29, 2026",
    rating: 5,
    initials: "RV",
    avatarType: "pink",
    body: "Ordered a cable and screen protector together. Each was in its own packaging and the size labels were clear. Both fitted, nothing missing, no need to contact anyone.",
    fullBody: "Ordered a cable and screen protector together. Each was in its own packaging and the size labels were clear. Both fitted, nothing missing, no need to contact anyone.",
    experienceDate: "Apr 26, 2026"
  },
  {
    name: "Fiona H. (Sample)",
    date: "Apr 29, 2026",
    rating: 5,
    initials: "FH",
    avatarType: "teal",
    body: "I asked about a tablet accessory and got an answer I could actually understand. Bought the suggested size and it fits. Nice to have a bit of help choosing.",
    fullBody: "I asked about a tablet accessory and got an answer I could actually understand. Bought the suggested size and it fits. Nice to have a bit of help choosing.",
    experienceDate: "Apr 28, 2026"
  },
  {
    name: "Rina L. (Sample)",
    date: "Apr 29, 2026",
    rating: 5,
    initials: "RL",
    avatarType: "blue",
    body: "The sleeve has enough space for my laptop without feeling loose. I checked the measurements before ordering and they were a useful guide. The dark lining looks smart too.",
    fullBody: "The sleeve has enough space for my laptop without feeling loose. I checked the measurements before ordering and they were a useful guide. The dark lining looks smart too.",
    experienceDate: "Apr 27, 2026"
  },
  {
    name: "Francis P. (Sample)",
    date: "Apr 28, 2026",
    rating: 5,
    initials: "FP",
    avatarType: "purple",
    body: "Happy with the laptop sleeve. The zip runs smoothly and the fit is snug without forcing it closed. Exactly the sort of simple cover I wanted.",
    fullBody: "Happy with the laptop sleeve. The zip runs smoothly and the fit is snug without forcing it closed. Exactly the sort of simple cover I wanted.",
    experienceDate: "Apr 25, 2026"
  },
  {
    name: "Rory G. (Sample)",
    date: "Apr 28, 2026",
    rating: 5,
    initials: "RG",
    avatarType: "yellow",
    body: "My magnetic charger sits properly against this case. Glad I checked compatibility before buying because my old cover was too thick.",
    fullBody: "My magnetic charger sits properly against this case. Glad I checked compatibility before buying because my old cover was too thick.",
    experienceDate: "Apr 27, 2026"
  },
  {
    name: "Freya K. (Sample)",
    date: "Apr 28, 2026",
    rating: 5,
    initials: "FK",
    avatarType: "slate",
    body: "This case is a much nicer colour in daylight than my old one. Easy to put on and the side buttons still have a good click.",
    fullBody: "This case is a much nicer colour in daylight than my old one. Easy to put on and the side buttons still have a good click.",
    experienceDate: "Apr 26, 2026"
  },
  {
    name: "Rowan J. (Sample)",
    date: "Apr 28, 2026",
    rating: 5,
    initials: "RJ",
    avatarType: "pink",
    body: "I ordered the orange strap mainly so I could find my phone more easily in my bag. It has already saved me a lot of rummaging. The colour is cheerful without being fluorescent.",
    fullBody: "I ordered the orange strap mainly so I could find my phone more easily in my bag. It has already saved me a lot of rummaging. The colour is cheerful without being fluorescent.",
    experienceDate: "Apr 25, 2026"
  },
  {
    name: "Gabriel E. (Sample)",
    date: "Apr 27, 2026",
    rating: 5,
    initials: "GE",
    avatarType: "teal",
    body: "I use the stylus for rough sketches and making lists. Comfortable enough for a longer session and easy to keep with the tablet. So far it has been a good buy.",
    fullBody: "I use the stylus for rough sketches and making lists. Comfortable enough for a longer session and easy to keep with the tablet. So far it has been a good buy.",
    experienceDate: "Apr 26, 2026"
  },
  {
    name: "Ruth E. (Sample)",
    date: "Apr 27, 2026",
    rating: 5,
    initials: "RE",
    avatarType: "blue",
    body: "Instructions for fitting the screen protector were clear enough for me to do it myself. Quite proud of the result, no trapped dust this time.",
    fullBody: "Instructions for fitting the screen protector were clear enough for me to do it myself. Quite proud of the result, no trapped dust this time.",
    experienceDate: "Apr 25, 2026"
  },
  {
    name: "Gemma C. (Sample)",
    date: "Apr 27, 2026",
    rating: 5,
    initials: "GC",
    avatarType: "purple",
    body: "The package was compact and everything inside was in good condition. Fitted the case straight away. Pleased with the texture and the way it sits around the screen.",
    fullBody: "The package was compact and everything inside was in good condition. Fitted the case straight away. Pleased with the texture and the way it sits around the screen.",
    experienceDate: "Apr 24, 2026"
  },
  {
    name: "Sabrina W. (Sample)",
    date: "Apr 27, 2026",
    rating: 5,
    initials: "SW",
    avatarType: "yellow",
    body: "I had a question about cleaning the silicone case after getting makeup on it. Support gave me a simple suggestion and the marks came off. Still pleased with the case after...",
    fullBody: "I had a question about cleaning the silicone case after getting makeup on it. Support gave me a simple suggestion and the marks came off. Still pleased with the case after using it every day.",
    experienceDate: "Apr 26, 2026"
  },
  {
    name: "Grace T. (Sample)",
    date: "Apr 26, 2026",
    rating: 5,
    initials: "GT",
    avatarType: "slate",
    body: "Went for a brighter case because I keep losing my phone around the house. Much easier to spot now, and it feels nice in the hand too.",
    fullBody: "Went for a brighter case because I keep losing my phone around the house. Much easier to spot now, and it feels nice in the hand too.",
    experienceDate: "Apr 24, 2026"
  },
  {
    name: "Saeed N. (Sample)",
    date: "Apr 26, 2026",
    rating: 5,
    initials: "SN",
    avatarType: "pink",
    body: "The spare stylus tip fitted correctly and my notes feel smoother again. Glad I didn't need to replace the whole pen.",
    fullBody: "The spare stylus tip fitted correctly and my notes feel smoother again. Glad I didn't need to replace the whole pen.",
    experienceDate: "Apr 23, 2026"
  },
  {
    name: "Hamza B. (Sample)",
    date: "Apr 26, 2026",
    rating: 5,
    initials: "HB",
    avatarType: "teal",
    body: "A cable and a screen protector, both doing what I bought them for. Clear choices on the product page helped me pick the right versions.",
    fullBody: "A cable and a screen protector, both doing what I bought them for. Clear choices on the product page helped me pick the right versions.",
    experienceDate: "Apr 25, 2026"
  },
  {
    name: "Sally D. (Sample)",
    date: "Apr 26, 2026",
    rating: 5,
    initials: "SD",
    avatarType: "blue",
    body: "A very tidy little charging stand. My bedside table looks less cluttered and I can see the clock on my phone without picking it up.",
    fullBody: "A very tidy little charging stand. My bedside table looks less cluttered and I can see the clock on my phone without picking it up.",
    experienceDate: "Apr 24, 2026"
  },
  {
    name: "Hannah M. (Sample)",
    date: "Apr 25, 2026",
    rating: 5,
    initials: "HM",
    avatarType: "purple",
    body: "The first cover had a small mark. I sent a photo and support arranged a replacement. The new one looks good and I am happy with how the issue was handled.",
    fullBody: "The first cover had a small mark. I sent a photo and support arranged a replacement. The new one looks good and I am happy with how the issue was handled.",
    experienceDate: "Apr 22, 2026"
  },
  {
    name: "Samir A. (Sample)",
    date: "Apr 25, 2026",
    rating: 5,
    initials: "SA",
    avatarType: "yellow",
    body: "The camera cutout was what I worried about when ordering this case. It lines up neatly and there is enough space to wipe the lenses. The sides feel secure too.",
    fullBody: "The camera cutout was what I worried about when ordering this case. It lines up neatly and there is enough space to wipe the lenses. The sides feel secure too.",
    experienceDate: "Apr 24, 2026"
  },
  {
    name: "Harvey R. (Sample)",
    date: "Apr 25, 2026",
    rating: 5,
    initials: "HR",
    avatarType: "slate",
    body: "The phone wallet sits neatly on my case and holds the cards I take to work. It is handy being able to remove it when I get home.",
    fullBody: "The phone wallet sits neatly on my case and holds the cards I take to work. It is handy being able to remove it when I get home.",
    experienceDate: "Apr 23, 2026"
  },
  {
    name: "Saskia T. (Sample)",
    date: "Apr 25, 2026",
    rating: 5,
    initials: "ST",
    avatarType: "pink",
    body: "Returned an unopened accessory because I'd bought the same thing as my partner. The instructions were clear and I received confirmation when the return was processed. A...",
    fullBody: "Returned an unopened accessory because I'd bought the same thing as my partner. The instructions were clear and I received confirmation when the return was processed. A straightforward experience.",
    experienceDate: "Apr 22, 2026"
  },
  {
    name: "Hazel D. (Sample)",
    date: "Apr 24, 2026",
    rating: 5,
    initials: "HD",
    avatarType: "teal",
    body: "I am quite fussy about screen protectors looking straight. Put this one on at the kitchen table with good light and took a bit longer cleaning the screen than fitting it. The...",
    fullBody: "I am quite fussy about screen protectors looking straight. Put this one on at the kitchen table with good light and took a bit longer cleaning the screen than fitting it. The guide helped and it sits evenly all the way around. Happy with the result.",
    experienceDate: "Apr 23, 2026"
  },
  {
    name: "Serena K. (Sample)",
    date: "Apr 24, 2026",
    rating: 5,
    initials: "SK",
    avatarType: "blue",
    body: "Lovely finish on the burgundy wallet. The stitching is neat and it goes really well with the dark case I already had.",
    fullBody: "Lovely finish on the burgundy wallet. The stitching is neat and it goes really well with the dark case I already had.",
    experienceDate: "Apr 22, 2026"
  },
  {
    name: "Imogen N. (Sample)",
    date: "Apr 24, 2026",
    rating: 5,
    initials: "IN",
    avatarType: "purple",
    body: "Bought the tablet cover for university. Easy to prop up for reading notes and it closes neatly before going into my bag. The pencil holder is useful too.",
    fullBody: "Bought the tablet cover for university. Easy to prop up for reading notes and it closes neatly before going into my bag. The pencil holder is useful too.",
    experienceDate: "Apr 21, 2026"
  },
  {
    name: "Sofia H. (Sample)",
    date: "Apr 24, 2026",
    rating: 5,
    initials: "SH",
    avatarType: "yellow",
    body: "Bought a tablet cover for my daughter to use with her homework. She likes the colour and I like that the stylus finally has somewhere to live. Less searching under the sofa.",
    fullBody: "Bought a tablet cover for my daughter to use with her homework. She likes the colour and I like that the stylus finally has somewhere to live. Less searching under the sofa.",
    experienceDate: "Apr 23, 2026"
  },
  {
    name: "Isaac W. (Sample)",
    date: "Apr 23, 2026",
    rating: 5,
    initials: "IW",
    avatarType: "slate",
    body: "I wanted a spare cable to leave in my travel bag. This one coils up easily and is the right length for how I use it.",
    fullBody: "I wanted a spare cable to leave in my travel bag. This one coils up easily and is the right length for how I use it.",
    experienceDate: "Apr 21, 2026"
  },
  {
    name: "Stefan R. (Sample)",
    date: "Apr 23, 2026",
    rating: 5,
    initials: "SR",
    avatarType: "pink",
    body: "The cable bends comfortably round the edge of my desk without pulling on the phone. Good length for my setup.",
    fullBody: "The cable bends comfortably round the edge of my desk without pulling on the phone. Good length for my setup.",
    experienceDate: "Apr 20, 2026"
  },
  {
    name: "Isla P. (Sample)",
    date: "Apr 23, 2026",
    rating: 5,
    initials: "IP",
    avatarType: "teal",
    body: "The order page was easy to use, even with several phone models to choose from. My case fits properly and I like the slightly raised edge around the camera.",
    fullBody: "The order page was easy to use, even with several phone models to choose from. My case fits properly and I like the slightly raised edge around the camera.",
    experienceDate: "Apr 22, 2026"
  },
  {
    name: "Tara M. (Sample)",
    date: "Apr 23, 2026",
    rating: 5,
    initials: "TM",
    avatarType: "blue",
    body: "I prefer a quiet-looking case without a huge design on the back. This grey one is exactly my sort of thing. Good fit and easy to wipe clean after a day out.",
    fullBody: "I prefer a quiet-looking case without a huge design on the back. This grey one is exactly my sort of thing. Good fit and easy to wipe clean after a day out.",
    experienceDate: "Apr 21, 2026"
  },
  {
    name: "Jacob F. (Sample)",
    date: "Apr 22, 2026",
    rating: 5,
    initials: "JF",
    avatarType: "purple",
    body: "Picked up a laptop stand after getting tired of balancing mine on books. This is easier to adjust and much tidier when I need the table back.",
    fullBody: "Picked up a laptop stand after getting tired of balancing mine on books. This is easier to adjust and much tidier when I need the table back.",
    experienceDate: "Apr 19, 2026"
  },
  {
    name: "Tobias B. (Sample)",
    date: "Apr 22, 2026",
    rating: 5,
    initials: "TB",
    avatarType: "yellow",
    body: "Asked whether the tablet stand would fold flat enough for a small bag. The answer included the folded measurements, which helped. It now comes with me to the library.",
    fullBody: "Asked whether the tablet stand would fold flat enough for a small bag. The answer included the folded measurements, which helped. It now comes with me to the library.",
    experienceDate: "Apr 21, 2026"
  },
  {
    name: "Jasmine V. (Sample)",
    date: "Apr 22, 2026",
    rating: 5,
    initials: "JV",
    avatarType: "slate",
    body: "The case and wallet colours work really well together. I chose them separately so I was pleased with how they look as a pair. Everything feels neatly finished.",
    fullBody: "The case and wallet colours work really well together. I chose them separately so I was pleased with how they look as a pair. Everything feels neatly finished.",
    experienceDate: "Apr 20, 2026"
  },
  {
    name: "Uma C. (Sample)",
    date: "Apr 22, 2026",
    rating: 5,
    initials: "UC",
    avatarType: "pink",
    body: "This is my second colour of the same case. The first one fits well, so choosing another was easy.",
    fullBody: "This is my second colour of the same case. The first one fits well, so choosing another was easy.",
    experienceDate: "Apr 19, 2026"
  },
  {
    name: "Joanna K. (Sample)",
    date: "Apr 21, 2026",
    rating: 5,
    initials: "JK",
    avatarType: "teal",
    body: "Checked my tablet model with the guide. Cover fits properly and looks nice.",
    fullBody: "Checked my tablet model with the guide. Cover fits properly and looks nice.",
    experienceDate: "Apr 20, 2026"
  },
  {
    name: "Vera S. (Sample)",
    date: "Apr 21, 2026",
    rating: 5,
    initials: "VS",
    avatarType: "blue",
    body: "The screen protector arrived with the corners protected inside the packaging. It fitted cleanly and hasn't interfered with the way I swipe or type. Happy to have it sorted.",
    fullBody: "The screen protector arrived with the corners protected inside the packaging. It fitted cleanly and hasn't interfered with the way I swipe or type. Happy to have it sorted.",
    experienceDate: "Apr 19, 2026"
  },
  {
    name: "Karim L. (Sample)",
    date: "Apr 21, 2026",
    rating: 5,
    initials: "KL",
    avatarType: "purple",
    body: "Good clear communication when I asked where to find the order details. Found what I needed and the accessory itself has been working well for my setup.",
    fullBody: "Good clear communication when I asked where to find the order details. Found what I needed and the accessory itself has been working well for my setup.",
    experienceDate: "Apr 18, 2026"
  },
  {
    name: "Wesley F. (Sample)",
    date: "Apr 21, 2026",
    rating: 5,
    initials: "WF",
    avatarType: "yellow",
    body: "I thought part of my order was missing, then found it tucked under the cardboard insert. Support had already offered to check the packing details. Nice to receive a helpful...",
    fullBody: "I thought part of my order was missing, then found it tucked under the cardboard insert. Support had already offered to check the packing details. Nice to receive a helpful response even though the mistake was mine.",
    experienceDate: "Apr 20, 2026"
  },
  {
    name: "Leila S. (Sample)",
    date: "Apr 20, 2026",
    rating: 5,
    initials: "LS",
    avatarType: "slate",
    body: "Really happy with this simple phone stand. I used to lean the phone against a mug when following recipes and it kept sliding down. This has a small footprint and keeps the...",
    fullBody: "Really happy with this simple phone stand. I used to lean the phone against a mug when following recipes and it kept sliding down. This has a small footprint and keeps the screen at a useful angle. Easy to move out of the way when I need to clear the worktop afterwards.",
    experienceDate: "Apr 18, 2026"
  },
  {
    name: "Zara P. (Sample)",
    date: "Apr 20, 2026",
    rating: 5,
    initials: "ZP",
    avatarType: "pink",
    body: "The tablet sleeve feels nicer than I expected for the price. Fits inside my work tote and the opening is wide enough to get the tablet out without a struggle.",
    fullBody: "The tablet sleeve feels nicer than I expected for the price. Fits inside my work tote and the opening is wide enough to get the tablet out without a struggle.",
    experienceDate: "Apr 17, 2026"
  }
);

// Additional multilingual exam fixtures; every new name retains the English (Sample) label.
reviews.push(
  {
    "name": "شادي ي. (Sample)",
    "date": "Jul 20, 2025",
    "rating": 5,
    "initials": "شي",
    "avatarType": "teal",
    "body": "طلب بسيط ووصلتني رسائل واضحة عن حالته. الكفر مناسب وفتحاته في المكان الصحيح. كل شيء تمام.",
    "fullBody": "طلب بسيط ووصلتني رسائل واضحة عن حالته. الكفر مناسب وفتحاته في المكان الصحيح. كل شيء تمام.",
    "experienceDate": "Jul 19, 2025",
    "country": "Denmark",
    "language": "ar"
  },
  {
    "name": "Lucie R. (Sample)",
    "date": "Jul 17, 2025",
    "rating": 5,
    "initials": "LR",
    "avatarType": "teal",
    "body": "Housse d’ordinateur achetée pour les déplacements en train. Elle reste assez fine pour mon sac et la fermeture ne coince pas. C’est exactement l’usage que je cherchais.",
    "fullBody": "Housse d’ordinateur achetée pour les déplacements en train. Elle reste assez fine pour mon sac et la fermeture ne coince pas. C’est exactement l’usage que je cherchais.",
    "experienceDate": "Jul 16, 2025",
    "country": "Switzerland",
    "language": "fr"
  },
  {
    "name": "Samuel Carrillo (Sample)",
    "date": "Jul 14, 2025",
    "rating": 5,
    "initials": "SC",
    "avatarType": "teal",
    "body": "Mandé una pregunta sobre dos fundas que se parecían mucho. Me explicaron la diferencia de modelos sin enredarme y elegí la correcta. El recorte de la cámara queda donde debe.",
    "fullBody": "Mandé una pregunta sobre dos fundas que se parecían mucho. Me explicaron la diferencia de modelos sin enredarme y elegí la correcta. El recorte de la cámara queda donde debe.",
    "experienceDate": "Jul 13, 2025",
    "country": "United States",
    "language": "es"
  },
  {
    "name": "Alessandro Mancini (Sample)",
    "date": "Jul 11, 2025",
    "rating": 5,
    "initials": "AM",
    "avatarType": "slate",
    "body": "Cercavo una custodia per usare il tablet durante le riunioni. Questa resta aperta nell'inclinazione che mi serve e si richiude bene prima di metterla nella borsa.",
    "fullBody": "Cercavo una custodia per usare il tablet durante le riunioni. Questa resta aperta nell'inclinazione che mi serve e si richiude bene prima di metterla nella borsa.",
    "experienceDate": "Jul 10, 2025",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Sven M. (Sample)",
    "date": "Jul 8, 2025",
    "rating": 5,
    "initials": "SM",
    "avatarType": "slate",
    "body": "Die längere Lieferung war vorher angegeben, damit konnte ich planen. Alles kam zusammen an und der Tabletständer macht einen ordentlichen Eindruck. Gut, dass die gefalteten Maße auf der...",
    "fullBody": "Die längere Lieferung war vorher angegeben, damit konnte ich planen. Alles kam zusammen an und der Tabletständer macht einen ordentlichen Eindruck. Gut, dass die gefalteten Maße auf der Produktseite standen.",
    "experienceDate": "Jul 7, 2025",
    "country": "United States",
    "language": "de"
  },
  {
    "name": "Koen Visser (Sample)",
    "date": "Jul 6, 2025",
    "rating": 4,
    "initials": "KV",
    "avatarType": "teal",
    "body": "Kabel doet wat hij moet doen. De bezorging schoof een dag op zonder duidelijke melding, daarom geen vijf sterren. Met het product zelf is niets mis.",
    "fullBody": "Kabel doet wat hij moet doen. De bezorging schoof een dag op zonder duidelijke melding, daarom geen vijf sterren. Met het product zelf is niets mis.",
    "experienceDate": "Jul 5, 2025",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "فادي ت. (Sample)",
    "date": "Jul 3, 2025",
    "rating": 3,
    "initials": "فت",
    "avatarType": "blue",
    "body": "الطلب وصل متأخراً عن التقدير الظاهر عند الشراء. متابعة الشحنة لم تكن واضحة واضطررت أسأل عنها. حماية الشاشة جيدة بعد التركيب، لذلك تقييمي متوسط.",
    "fullBody": "الطلب وصل متأخراً عن التقدير الظاهر عند الشراء. متابعة الشحنة لم تكن واضحة واضطررت أسأل عنها. حماية الشاشة جيدة بعد التركيب، لذلك تقييمي متوسط.",
    "experienceDate": "Jul 2, 2025",
    "country": "France",
    "language": "ar"
  },
  {
    "name": "Baptiste C. (Sample)",
    "date": "Jun 30, 2025",
    "rating": 5,
    "initials": "BC",
    "avatarType": "teal",
    "body": "J’en avais marre de déplacer mon seul câble entre le bureau et la chambre. Celui-ci reste au bureau. Bonne longueur et branchement sans problème.",
    "fullBody": "J’en avais marre de déplacer mon seul câble entre le bureau et la chambre. Celui-ci reste au bureau. Bonne longueur et branchement sans problème.",
    "experienceDate": "Jun 29, 2025",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Esteban Rosales (Sample)",
    "date": "Jun 27, 2025",
    "rating": 5,
    "initials": "ER",
    "avatarType": "slate",
    "body": "Me gustó el tarjetero oscuro. Las tarjetas no quedan sueltas y puedo sacar la que necesito sin quitarlo todo. Se siente cómodo en el bolsillo.",
    "fullBody": "Me gustó el tarjetero oscuro. Las tarjetas no quedan sueltas y puedo sacar la que necesito sin quitarlo todo. Se siente cómodo en el bolsillo.",
    "experienceDate": "Jun 26, 2025",
    "country": "United States",
    "language": "es"
  },
  {
    "name": "Lorenzo De Luca (Sample)",
    "date": "Jun 24, 2025",
    "rating": 3,
    "initials": "LD",
    "avatarType": "blue",
    "body": "Il portacarte è carino e si aggancia alla mia cover, però con due tessere faccio un po' fatica a estrarle. Lo uso, ma non è comodo quanto speravo.",
    "fullBody": "Il portacarte è carino e si aggancia alla mia cover, però con due tessere faccio un po' fatica a estrarle. Lo uso, ma non è comodo quanto speravo.",
    "experienceDate": "Jun 23, 2025",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Reto Baumann (Sample)",
    "date": "Jun 22, 2025",
    "rating": 5,
    "initials": "RB",
    "avatarType": "yellow",
    "body": "Kartenetui gefällt mir. Die Karten sitzen ordentlich drin, lassen sich aber ohne Gefummel herausnehmen. Für meinen Alltag reicht der Platz.",
    "fullBody": "Kartenetui gefällt mir. Die Karten sitzen ordentlich drin, lassen sich aber ohne Gefummel herausnehmen. Für meinen Alltag reicht der Platz.",
    "experienceDate": "Jun 21, 2025",
    "country": "Switzerland",
    "language": "de"
  },
  {
    "name": "Pieter de Graaf (Sample)",
    "date": "Jun 19, 2025",
    "rating": 5,
    "initials": "PG",
    "avatarType": "pink",
    "body": "Mijn betaalpas en rijbewijs passen prima in de magnetische kaarthouder. Voor een rondje wandelen neem ik verder toch niets mee. Bevalt beter dan een volle portemonnee in mijn broekzak.",
    "fullBody": "Mijn betaalpas en rijbewijs passen prima in de magnetische kaarthouder. Voor een rondje wandelen neem ik verder toch niets mee. Bevalt beter dan een volle portemonnee in mijn broekzak.",
    "experienceDate": "Jun 18, 2025",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "جلال س. (Sample)",
    "date": "Jun 16, 2025",
    "rating": 5,
    "initials": "جس",
    "avatarType": "slate",
    "body": "حصل خطأ مني في عنوان التوصيل وتواصلت معهم فوراً. أكدوا لي التعديل قبل إرسال الطلب، وهذا أراحني. القطع وصلت سليمة.",
    "fullBody": "حصل خطأ مني في عنوان التوصيل وتواصلت معهم فوراً. أكدوا لي التعديل قبل إرسال الطلب، وهذا أراحني. القطع وصلت سليمة.",
    "experienceDate": "Jun 15, 2025",
    "country": "United States",
    "language": "ar"
  },
  {
    "name": "Inès F. (Sample)",
    "date": "Jun 13, 2025",
    "rating": 3,
    "initials": "IF",
    "avatarType": "pink",
    "body": "Le kit de pose est complet et le verre est bien transparent. Par contre, le bord se sent beaucoup sous le doigt quand je fais les gestes depuis les côtés de l’écran. Je l’ai gardé pour...",
    "fullBody": "Le kit de pose est complet et le verre est bien transparent. Par contre, le bord se sent beaucoup sous le doigt quand je fais les gestes depuis les côtés de l’écran. Je l’ai gardé pour le moment, sans être vraiment convaincue.",
    "experienceDate": "Jun 12, 2025",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Elena Marín (Sample)",
    "date": "Jun 10, 2025",
    "rating": 1,
    "initials": "EM",
    "avatarType": "pink",
    "body": "La funda que recibí era para otro modelo. Mandé fotos y el número de pedido, pero sigo sin una solución clara para devolverla. No puedo usar lo que he comprado.",
    "fullBody": "La funda que recibí era para otro modelo. Mandé fotos y el número de pedido, pero sigo sin una solución clara para devolverla. No puedo usar lo que he comprado.",
    "experienceDate": "Jun 9, 2025",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Giulia Conti (Sample)",
    "date": "Jun 8, 2025",
    "rating": 4,
    "initials": "GC",
    "avatarType": "purple",
    "body": "La cover mi piace e si impugna bene. Trattiene un po’ di pelucchi quando la metto nella tasca del cappotto, ma con un panno si pulisce. Nel complesso la ricomprerei.",
    "fullBody": "La cover mi piace e si impugna bene. Trattiene un po’ di pelucchi quando la metto nella tasca del cappotto, ma con un panno si pulisce. Nel complesso la ricomprerei.",
    "experienceDate": "Jun 7, 2025",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Nadine Frei (Sample)",
    "date": "Jun 5, 2025",
    "rating": 5,
    "initials": "NF",
    "avatarType": "pink",
    "body": "Hülle in Dunkelblau bestellt und genauso erhalten. Keine scharfen Kanten, die Öffnungen sitzen richtig. Würde ich wieder nehmen.",
    "fullBody": "Hülle in Dunkelblau bestellt und genauso erhalten. Keine scharfen Kanten, die Öffnungen sitzen richtig. Würde ich wieder nehmen.",
    "experienceDate": "Jun 4, 2025",
    "country": "Switzerland",
    "language": "de"
  },
  {
    "name": "Bas Hendriks (Sample)",
    "date": "Jun 2, 2025",
    "rating": 5,
    "initials": "BH",
    "avatarType": "yellow",
    "body": "De compacte telefoonstandaard gaat mee in mijn werktas. Kost nauwelijks ruimte en is snel uitgeklapt als ik ergens anders werk. Handiger dan ik vooraf dacht.",
    "fullBody": "De compacte telefoonstandaard gaat mee in mijn werktas. Kost nauwelijks ruimte en is snel uitgeklapt als ik ergens anders werk. Handiger dan ik vooraf dacht.",
    "experienceDate": "Jun 1, 2025",
    "country": "United States",
    "language": "nl"
  },
  {
    "name": "ريم ف. (Sample)",
    "date": "May 30, 2025",
    "rating": 5,
    "initials": "رف",
    "avatarType": "pink",
    "body": "ترددت قبل تركيب حماية الشاشة لأنني أفسدت واحدة سابقاً. هذه المرة اتبعت الخطوات بهدوء واستعنت بدليل المحاذاة. النتيجة نظيفة حتى حول الكاميرا الأمامية.",
    "fullBody": "ترددت قبل تركيب حماية الشاشة لأنني أفسدت واحدة سابقاً. هذه المرة اتبعت الخطوات بهدوء واستعنت بدليل المحاذاة. النتيجة نظيفة حتى حول الكاميرا الأمامية.",
    "experienceDate": "May 29, 2025",
    "country": "United States",
    "language": "ar"
  },
  {
    "name": "Loïc T. (Sample)",
    "date": "May 27, 2025",
    "rating": 5,
    "initials": "LT",
    "avatarType": "blue",
    "body": "Le support se replie facilement quand je libère la table. Bien plus pratique que de caler mon téléphone contre une tasse pour les appels vidéo.",
    "fullBody": "Le support se replie facilement quand je libère la table. Bien plus pratique que de caler mon téléphone contre une tasse pour les appels vidéo.",
    "experienceDate": "May 26, 2025",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Víctor Escudero (Sample)",
    "date": "May 25, 2025",
    "rating": 5,
    "initials": "VE",
    "avatarType": "slate",
    "body": "El soporte magnético queda discreto junto al monitor y me permite ver las notificaciones sin apartar los papeles.",
    "fullBody": "El soporte magnético queda discreto junto al monitor y me permite ver las notificaciones sin apartar los papeles.",
    "experienceDate": "May 24, 2025",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Davide Greco (Sample)",
    "date": "May 22, 2025",
    "rating": 4,
    "initials": "DG",
    "avatarType": "teal",
    "body": "La custodia del portatile è ben fatta e la misura è giusta. La tasca esterna, però, contiene meno di quanto pensassi: ci metto solo un cavetto. Per il resto mi trovo bene.",
    "fullBody": "La custodia del portatile è ben fatta e la misura è giusta. La tasca esterna, però, contiene meno di quanto pensassi: ci metto solo un cavetto. Per il resto mi trovo bene.",
    "experienceDate": "May 21, 2025",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Hendrik Voss (Sample)",
    "date": "May 19, 2025",
    "rating": 5,
    "initials": "HV",
    "avatarType": "slate",
    "body": "Die Kartenhülle ist für mich eine gute Ergänzung zur normalen Geldbörse. Für die Mittagspause nehme ich jetzt nur Handy und zwei Karten mit. Sitzt an meiner magnetischen Hülle gut.",
    "fullBody": "Die Kartenhülle ist für mich eine gute Ergänzung zur normalen Geldbörse. Für die Mittagspause nehme ich jetzt nur Handy und zwei Karten mit. Sitzt an meiner magnetischen Hülle gut.",
    "experienceDate": "May 18, 2025",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Sanne de Vries (Sample)",
    "date": "May 16, 2025",
    "rating": 2,
    "initials": "SV",
    "avatarType": "yellow",
    "body": "Het hoesje kwam later dan verwacht en er zat een vlek op die ik niet weg kreeg. De klantenservice reageerde wel, maar ik moest opnieuw dezelfde foto's sturen. Inmiddels teruggestuurd...",
    "fullBody": "Het hoesje kwam later dan verwacht en er zat een vlek op die ik niet weg kreeg. De klantenservice reageerde wel, maar ik moest opnieuw dezelfde foto's sturen. Inmiddels teruggestuurd. Viel me tegen.",
    "experienceDate": "May 15, 2025",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "نور ص. (Sample)",
    "date": "May 13, 2025",
    "rating": 4,
    "initials": "نص",
    "avatarType": "purple",
    "body": "غطاء التابلت مرتب ويمكن طيه كحامل. وصل الكرتون مضغوطاً من طرفه فقلقت قليلاً، لكن الغطاء داخله كان سليماً.",
    "fullBody": "غطاء التابلت مرتب ويمكن طيه كحامل. وصل الكرتون مضغوطاً من طرفه فقلقت قليلاً، لكن الغطاء داخله كان سليماً.",
    "experienceDate": "May 12, 2025",
    "country": "Belgium",
    "language": "ar"
  },
  {
    "name": "Florian V. (Sample)",
    "date": "May 11, 2025",
    "rating": 5,
    "initials": "FV",
    "avatarType": "blue",
    "body": "Il manquait une petite pièce dans le sachet du support. J’ai transmis une photo du contenu et le service client a identifié ce qui manquait sans me demander de renvoyer le tout. Une fois...",
    "fullBody": "Il manquait une petite pièce dans le sachet du support. J’ai transmis une photo du contenu et le service client a identifié ce qui manquait sans me demander de renvoyer le tout. Une fois la pièce reçue, le montage était simple.",
    "experienceDate": "May 10, 2025",
    "country": "Switzerland",
    "language": "fr"
  },
  {
    "name": "Javier Leal (Sample)",
    "date": "May 8, 2025",
    "rating": 5,
    "initials": "JL",
    "avatarType": "blue",
    "body": "Soy bastante torpe colocando protectores, pero con la guía conseguí dejar este recto. Limpié la pantalla con calma antes de empezar y quedó sin motas. Satisfecho.",
    "fullBody": "Soy bastante torpe colocando protectores, pero con la guía conseguí dejar este recto. Limpié la pantalla con calma antes de empezar y quedó sin motas. Satisfecho.",
    "experienceDate": "May 7, 2025",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Alice Caruso (Sample)",
    "date": "May 5, 2025",
    "rating": 5,
    "initials": "AC",
    "avatarType": "yellow",
    "body": "Mi piace il rivestimento interno della custodia del tablet. Non fa pieghe quando la chiudo e c'è posto per la penna. Adesso non la perdo sul fondo dello zaino.",
    "fullBody": "Mi piace il rivestimento interno della custodia del tablet. Non fa pieghe quando la chiudo e c'è posto per la penna. Adesso non la perdo sul fondo dello zaino.",
    "experienceDate": "May 4, 2025",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Lukas E. (Sample)",
    "date": "May 2, 2025",
    "rating": 5,
    "initials": "LE",
    "avatarType": "slate",
    "body": "Das geflochtene Kabel verheddert sich in meinem Rucksack weniger als das alte. Die bestellte Länge passt für Uni und Bibliothek. Bin zufrieden.",
    "fullBody": "Das geflochtene Kabel verheddert sich in meinem Rucksack weniger als das alte. Die bestellte Länge passt für Uni und Bibliothek. Bin zufrieden.",
    "experienceDate": "May 1, 2025",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Jeroen Bakker (Sample)",
    "date": "Apr 29, 2025",
    "rating": 3,
    "initials": "JB",
    "avatarType": "pink",
    "body": "De kaarthouder ziet er netjes uit. Met mijn twee kaarten zit hij alleen behoorlijk strak, waardoor ik ze er lastig uit krijg. Misschien wordt dat nog soepeler, maar voorlopig vind ik hem...",
    "fullBody": "De kaarthouder ziet er netjes uit. Met mijn twee kaarten zit hij alleen behoorlijk strak, waardoor ik ze er lastig uit krijg. Misschien wordt dat nog soepeler, maar voorlopig vind ik hem vooral mooi en minder handig.",
    "experienceDate": "Apr 28, 2025",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "فرح ح. (Sample)",
    "date": "Apr 27, 2025",
    "rating": 5,
    "initials": "فح",
    "avatarType": "pink",
    "body": "ظهر أثر صغير على الغطاء الأول. أرسلت صورة وساعدوني في استبداله من دون تعقيد. البديل وصل نظيفاً وأنا راضية عن التعامل.",
    "fullBody": "ظهر أثر صغير على الغطاء الأول. أرسلت صورة وساعدوني في استبداله من دون تعقيد. البديل وصل نظيفاً وأنا راضية عن التعامل.",
    "experienceDate": "Apr 26, 2025",
    "country": "Spain",
    "language": "ar"
  },
  {
    "name": "Hugo L. (Sample)",
    "date": "Apr 24, 2025",
    "rating": 2,
    "initials": "HL",
    "avatarType": "slate",
    "body": "J’ai acheté la housse surtout pour utiliser la tablette en position debout. Le pli se défait dès que je touche l’écran, même après avoir revu les instructions. Elle couvre le dos, mais...",
    "fullBody": "J’ai acheté la housse surtout pour utiliser la tablette en position debout. Le pli se défait dès que je touche l’écran, même après avoir revu les instructions. Elle couvre le dos, mais je ne peux pas m’en servir comme prévu.",
    "experienceDate": "Apr 23, 2025",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Celia Rivas (Sample)",
    "date": "Apr 21, 2025",
    "rating": 5,
    "initials": "CR",
    "avatarType": "purple",
    "body": "No sabía si mi tableta era la versión pequeña o la siguiente. Les mandé el número de modelo y me indicaron la funda adecuada. Ha encajado perfectamente, incluso la abertura de la cámara.",
    "fullBody": "No sabía si mi tableta era la versión pequeña o la siguiente. Les mandé el número de modelo y me indicaron la funda adecuada. Ha encajado perfectamente, incluso la abertura de la cámara.",
    "experienceDate": "Apr 20, 2025",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Beatrice Riva (Sample)",
    "date": "Apr 18, 2025",
    "rating": 5,
    "initials": "BR",
    "avatarType": "pink",
    "body": "La pellicola resta liscia ai bordi anche con la cover montata. Scrivo e scorro le pagine normalmente. Per ora non ho nulla da ridire.",
    "fullBody": "La pellicola resta liscia ai bordi anche con la cover montata. Scrivo e scorro le pagine normalmente. Per ora non ho nulla da ridire.",
    "experienceDate": "Apr 17, 2025",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Leonie F. (Sample)",
    "date": "Apr 15, 2025",
    "rating": 4,
    "initials": "LF",
    "avatarType": "purple",
    "body": "Mit dem Kabel bin ich zufrieden. Nur die Sendungsverfolgung blieb lange auf demselben Stand, da war ich schon etwas ungeduldig. Angekommen ist es dann doch im angekündigten Zeitraum.",
    "fullBody": "Mit dem Kabel bin ich zufrieden. Nur die Sendungsverfolgung blieb lange auf demselben Stand, da war ich schon etwas ungeduldig. Angekommen ist es dann doch im angekündigten Zeitraum.",
    "experienceDate": "Apr 14, 2025",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Annelies Peeters (Sample)",
    "date": "Apr 13, 2025",
    "rating": 5,
    "initials": "AP",
    "avatarType": "purple",
    "body": "Een eenvoudige blauwe hoes voor mijn mama besteld. De knopjes blijven goed voelbaar en ze vindt hem prettig vasthouden. Meer moest dat niet zijn.",
    "fullBody": "Een eenvoudige blauwe hoes voor mijn mama besteld. De knopjes blijven goed voelbaar en ze vindt hem prettig vasthouden. Meer moest dat niet zijn.",
    "experienceDate": "Apr 12, 2025",
    "country": "Belgium",
    "language": "nl"
  },
  {
    "name": "عبير ق. (Sample)",
    "date": "Apr 10, 2025",
    "rating": 5,
    "initials": "عق",
    "avatarType": "purple",
    "body": "طلبت كفرين لموديلين مختلفين، واحد لي والثاني لأختي. كلاهما مناسب والألوان كما توقعتها. التغليف كان مرتباً.",
    "fullBody": "طلبت كفرين لموديلين مختلفين، واحد لي والثاني لأختي. كلاهما مناسب والألوان كما توقعتها. التغليف كان مرتباً.",
    "experienceDate": "Apr 9, 2025",
    "country": "Netherlands",
    "language": "ar"
  },
  {
    "name": "Zoé H. (Sample)",
    "date": "Apr 7, 2025",
    "rating": 5,
    "initials": "ZH",
    "avatarType": "yellow",
    "body": "J’utilise la tablette pour lire et regarder des recettes. Cette housse est confortable à tenir ouverte, puis se transforme en support sur la table. C’est devenu un accessoire du quotidien.",
    "fullBody": "J’utilise la tablette pour lire et regarder des recettes. Cette housse est confortable à tenir ouverte, puis se transforme en support sur la table. C’est devenu un accessoire du quotidien.",
    "experienceDate": "Apr 6, 2025",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Marisol Vega (Sample)",
    "date": "Apr 4, 2025",
    "rating": 5,
    "initials": "MV",
    "avatarType": "pink",
    "body": "Este cable entra por la abertura de mi funda sin tener que quitársela al celular cada vez.",
    "fullBody": "Este cable entra por la abertura de mi funda sin tener que quitársela al celular cada vez.",
    "experienceDate": "Apr 3, 2025",
    "country": "United States",
    "language": "es"
  },
  {
    "name": "Emanuele Santoro (Sample)",
    "date": "Apr 1, 2025",
    "rating": 5,
    "initials": "ES",
    "avatarType": "teal",
    "body": "Avevo fatto due ordini separati e temevo di aver pagato due volte lo stesso carrello. L’assistenza ha controllato i riferimenti e mi ha spiegato cosa c’era in ciascuno. Era tutto...",
    "fullBody": "Avevo fatto due ordini separati e temevo di aver pagato due volte lo stesso carrello. L’assistenza ha controllato i riferimenti e mi ha spiegato cosa c’era in ciascuno. Era tutto corretto, mi ero confuso io.",
    "experienceDate": "Mar 31, 2025",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Annika Busch (Sample)",
    "date": "Mar 30, 2025",
    "rating": 5,
    "initials": "AB",
    "avatarType": "purple",
    "body": "Die durchsichtige Hülle verdeckt die Handyfarbe kaum. Genau deshalb hatte ich sie ausgesucht. Sie sitzt an den Ecken fest und ließ sich trotzdem leicht anbringen.",
    "fullBody": "Die durchsichtige Hülle verdeckt die Handyfarbe kaum. Genau deshalb hatte ich sie ausgesucht. Sie sitzt an den Ecken fest und ließ sich trotzdem leicht anbringen.",
    "experienceDate": "Mar 29, 2025",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Maaike Vermeer (Sample)",
    "date": "Mar 27, 2025",
    "rating": 5,
    "initials": "MV",
    "avatarType": "blue",
    "body": "De tablethoes kan in een fijne hoek staan als ik notities maak. Ik hoef het scherm niet meer tegen mijn waterfles te zetten. Ook handig dat de pen een eigen plekje heeft.",
    "fullBody": "De tablethoes kan in een fijne hoek staan als ik notities maak. Ik hoef het scherm niet meer tegen mijn waterfles te zetten. Ook handig dat de pen een eigen plekje heeft.",
    "experienceDate": "Mar 26, 2025",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "حسام هـ. (Sample)",
    "date": "Mar 24, 2025",
    "rating": 1,
    "initials": "حه",
    "avatarType": "slate",
    "body": "وصلني غطاء لا يناسب الموديل الموجود في طلبي. أرسلت الصور ورقم الطلب، لكن إلى الآن لم أحصل على حل واضح. لا أستطيع استخدام القطعة وتجربتي للأسف سيئة.",
    "fullBody": "وصلني غطاء لا يناسب الموديل الموجود في طلبي. أرسلت الصور ورقم الطلب، لكن إلى الآن لم أحصل على حل واضح. لا أستطيع استخدام القطعة وتجربتي للأسف سيئة.",
    "experienceDate": "Mar 23, 2025",
    "country": "Sweden",
    "language": "ar"
  },
  {
    "name": "Maëlle G. (Sample)",
    "date": "Mar 21, 2025",
    "rating": 5,
    "initials": "MG",
    "avatarType": "yellow",
    "body": "La coque est facile à tenir et ne rend pas mon téléphone trop gros. J’aime bien la petite bordure autour de la caméra. Beau choix de couleur aussi.",
    "fullBody": "La coque est facile à tenir et ne rend pas mon téléphone trop gros. J’aime bien la petite bordure autour de la caméra. Beau choix de couleur aussi.",
    "experienceDate": "Mar 20, 2025",
    "country": "Canada",
    "language": "fr"
  },
  {
    "name": "Marta Olivares (Sample)",
    "date": "Mar 18, 2025",
    "rating": 4,
    "initials": "MO",
    "avatarType": "yellow",
    "body": "Contenta con el soporte para la tableta. Al principio cuesta un poco mover la bisagra, pero una vez ajustado mantiene la posición. Me habría gustado una pequeña guía en la caja.",
    "fullBody": "Contenta con el soporte para la tableta. Al principio cuesta un poco mover la bisagra, pero una vez ajustado mantiene la posición. Me habría gustado una pequeña guía en la caja.",
    "experienceDate": "Mar 17, 2025",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Niccolò Longo (Sample)",
    "date": "Mar 16, 2025",
    "rating": 5,
    "initials": "NL",
    "avatarType": "blue",
    "body": "Mi hanno avvisato che il colore scelto non era disponibile. Potevo aspettare, cambiarlo o chiedere il rimborso. Ho preferito un altro colore e mi hanno confermato la modifica prima di...",
    "fullBody": "Mi hanno avvisato che il colore scelto non era disponibile. Potevo aspettare, cambiarlo o chiedere il rimborso. Ho preferito un altro colore e mi hanno confermato la modifica prima di spedire. Ho apprezzato poter decidere con informazioni chiare.",
    "experienceDate": "Mar 15, 2025",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Yvonne D. (Sample)",
    "date": "Mar 13, 2025",
    "rating": 5,
    "initials": "YD",
    "avatarType": "purple",
    "body": "Ich hatte ein Zubehörteil doppelt gekauft und eines ungeöffnet zurückgeschickt. Die Rücksendung war verständlich erklärt und der Eingang wurde bestätigt. Die behaltene Hülle gefällt mir...",
    "fullBody": "Ich hatte ein Zubehörteil doppelt gekauft und eines ungeöffnet zurückgeschickt. Die Rücksendung war verständlich erklärt und der Eingang wurde bestätigt. Die behaltene Hülle gefällt mir nach wie vor.",
    "experienceDate": "Mar 12, 2025",
    "country": "Canada",
    "language": "de"
  },
  {
    "name": "Thijs Meijer (Sample)",
    "date": "Mar 10, 2025",
    "rating": 5,
    "initials": "TM",
    "avatarType": "teal",
    "body": "De screenprotector valt nauwelijks op als ik foto's bekijk. Geen vervelende rand in beeld en mijn hoesje past er nog goed omheen.",
    "fullBody": "De screenprotector valt nauwelijks op als ik foto's bekijk. Geen vervelende rand in beeld en mijn hoesje past er nog goed omheen.",
    "experienceDate": "Mar 9, 2025",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "كريم د. (Sample)",
    "date": "Mar 7, 2025",
    "rating": 5,
    "initials": "كد",
    "avatarType": "teal",
    "body": "اشتريت غطاء للتابلت لاستخدامه في المطبخ مع الوصفات. يثبت وهو مفتوح ولا أحتاج إلى إسناده على أي شيء آخر.",
    "fullBody": "اشتريت غطاء للتابلت لاستخدامه في المطبخ مع الوصفات. يثبت وهو مفتوح ولا أحتاج إلى إسناده على أي شيء آخر.",
    "experienceDate": "Mar 6, 2025",
    "country": "France",
    "language": "ar"
  },
  {
    "name": "Camille D. (Sample)",
    "date": "Mar 4, 2025",
    "rating": 5,
    "initials": "CD",
    "avatarType": "pink",
    "body": "Coque offerte à ma mère, qui voulait surtout retrouver son téléphone dans son grand sac. La couleur vive lui plaît beaucoup. Elle a réussi à la mettre seule et la garde depuis.",
    "fullBody": "Coque offerte à ma mère, qui voulait surtout retrouver son téléphone dans son grand sac. La couleur vive lui plaît beaucoup. Elle a réussi à la mettre seule et la garde depuis.",
    "experienceDate": "Mar 3, 2025",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Silvia Montes (Sample)",
    "date": "Mar 2, 2025",
    "rating": 5,
    "initials": "SM",
    "avatarType": "yellow",
    "body": "Elegí un cable corto para llevar en el coche y ya no tengo tanto cable enrollado junto al cambio. Conecta bien con la funda puesta.",
    "fullBody": "Elegí un cable corto para llevar en el coche y ya no tengo tanto cable enrollado junto al cambio. Conecta bien con la funda puesta.",
    "experienceDate": "Mar 1, 2025",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Laura Bellini (Sample)",
    "date": "Feb 27, 2025",
    "rating": 5,
    "initials": "LB",
    "avatarType": "yellow",
    "body": "Ho scelto la cover trasparente per mettere sul retro una piccola foto di mia figlia. Si vede bene e la cover continua a chiudersi correttamente. Mi piace questo risultato semplice.",
    "fullBody": "Ho scelto la cover trasparente per mettere sul retro una piccola foto di mia figlia. Si vede bene e la cover continua a chiudersi correttamente. Mi piace questo risultato semplice.",
    "experienceDate": "Feb 26, 2025",
    "country": "United States",
    "language": "it"
  },
  {
    "name": "Anja Richter (Sample)",
    "date": "Feb 24, 2025",
    "rating": 4,
    "initials": "AR",
    "avatarType": "pink",
    "body": "Das Grün sieht etwas dunkler aus als auf meinem Bildschirm. Gefällt mir trotzdem und die Hülle liegt angenehm in der Hand. Einen Stern ziehe ich wegen der Farbe ab.",
    "fullBody": "Das Grün sieht etwas dunkler aus als auf meinem Bildschirm. Gefällt mir trotzdem und die Hülle liegt angenehm in der Hand. Einen Stern ziehe ich wegen der Farbe ab.",
    "experienceDate": "Feb 23, 2025",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Wouter Smit (Sample)",
    "date": "Feb 21, 2025",
    "rating": 5,
    "initials": "WS",
    "avatarType": "pink",
    "body": "Het korte kabeltje is ideaal voor mijn bureau. Geen lange lus meer tussen het toetsenbord en de oplader. Past ook gewoon terwijl het hoesje om mijn telefoon zit.",
    "fullBody": "Het korte kabeltje is ideaal voor mijn bureau. Geen lange lus meer tussen het toetsenbord en de oplader. Past ook gewoon terwijl het hoesje om mijn telefoon zit.",
    "experienceDate": "Feb 20, 2025",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "جود ع. (Sample)",
    "date": "Feb 18, 2025",
    "rating": 5,
    "initials": "جع",
    "avatarType": "yellow",
    "body": "السلك الطويل حل لي مشكلة مكان المقبس بجانب السرير. الآن أقدر أستخدم الهاتف من دون شد السلك كل مرة.",
    "fullBody": "السلك الطويل حل لي مشكلة مكان المقبس بجانب السرير. الآن أقدر أستخدم الهاتف من دون شد السلك كل مرة.",
    "experienceDate": "Feb 17, 2025",
    "country": "Germany",
    "language": "ar"
  },
  {
    "name": "Julien M. (Sample)",
    "date": "Feb 16, 2025",
    "rating": 5,
    "initials": "JM",
    "avatarType": "teal",
    "body": "J’ai choisi cette coque pour son dos assez plat. Mon téléphone ne bascule plus sur la table quand je tape un message sans le prendre en main. C’est un petit détail, mais je le remarque...",
    "fullBody": "J’ai choisi cette coque pour son dos assez plat. Mon téléphone ne bascule plus sur la table quand je tape un message sans le prendre en main. C’est un petit détail, mais je le remarque tous les jours.",
    "experienceDate": "Feb 15, 2025",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Anaïs Serrano (Sample)",
    "date": "Feb 13, 2025",
    "rating": 5,
    "initials": "AS",
    "avatarType": "purple",
    "body": "Uso el tarjetero magnético cuando salgo a pasear con el perro. Llevo lo justo y se mantiene bien sujeto a mi funda. Para ese uso me resulta muy práctico.",
    "fullBody": "Uso el tarjetero magnético cuando salgo a pasear con el perro. Llevo lo justo y se mantiene bien sujeto a mi funda. Para ese uso me resulta muy práctico.",
    "experienceDate": "Feb 12, 2025",
    "country": "France",
    "language": "es"
  },
  {
    "name": "Irene Pellegrini (Sample)",
    "date": "Feb 10, 2025",
    "rating": 5,
    "initials": "IP",
    "avatarType": "pink",
    "body": "La cover color sabbia non ha cuciture o rilievi sotto il dito quando tengo il telefono. La uso molto per leggere e mi risulta comoda.",
    "fullBody": "La cover color sabbia non ha cuciture o rilievi sotto il dito quando tengo il telefono. La uso molto per leggere e mi risulta comoda.",
    "experienceDate": "Feb 9, 2025",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Franziska Berg (Sample)",
    "date": "Feb 7, 2025",
    "rating": 5,
    "initials": "FB",
    "avatarType": "teal",
    "body": "Wollte eine schlichte Hülle ohne Glitzer und ohne riesigen Aufdruck. Genau so eine habe ich bekommen. Auch die Tasten lassen sich angenehm drücken.",
    "fullBody": "Wollte eine schlichte Hülle ohne Glitzer und ohne riesigen Aufdruck. Genau so eine habe ich bekommen. Auch die Tasten lassen sich angenehm drücken.",
    "experienceDate": "Feb 6, 2025",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Esther Kuiper (Sample)",
    "date": "Feb 4, 2025",
    "rating": 5,
    "initials": "EK",
    "avatarType": "slate",
    "body": "Mooie donkerrode kaarthouder. De stiksels zien er verzorgd uit en de kleur staat goed bij mijn zwarte hoes.",
    "fullBody": "Mooie donkerrode kaarthouder. De stiksels zien er verzorgd uit en de kleur staat goed bij mijn zwarte hoes.",
    "experienceDate": "Feb 3, 2025",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "سارة و. (Sample)",
    "date": "Feb 2, 2025",
    "rating": 4,
    "initials": "سو",
    "avatarType": "pink",
    "body": "لون الكفر جميل وملمسه مريح. يجمع بعض الوبر في جيب المعطف، لكنه ينظف بسهولة. بشكل عام راضية عنه.",
    "fullBody": "لون الكفر جميل وملمسه مريح. يجمع بعض الوبر في جيب المعطف، لكنه ينظف بسهولة. بشكل عام راضية عنه.",
    "experienceDate": "Feb 1, 2025",
    "country": "Netherlands",
    "language": "ar"
  },
  {
    "name": "Nadia F. (Sample)",
    "date": "Jan 30, 2025",
    "rating": 5,
    "initials": "NF",
    "avatarType": "purple",
    "body": "Ma tablette me sert à afficher des partitions pendant les répétitions. Avec ce rabat, elle reste dans le bon angle sur mon bureau et je peux tourner les pages sans la tenir. C’est bien...",
    "fullBody": "Ma tablette me sert à afficher des partitions pendant les répétitions. Avec ce rabat, elle reste dans le bon angle sur mon bureau et je peux tourner les pages sans la tenir. C’est bien plus confortable.",
    "experienceDate": "Jan 29, 2025",
    "country": "Belgium",
    "language": "fr"
  },
  {
    "name": "Sergio Pardo (Sample)",
    "date": "Jan 27, 2025",
    "rating": 4,
    "initials": "SP",
    "avatarType": "teal",
    "body": "Pedí una funda y un tarjetero. La funda llegó primero y tuve que escribir para saber qué pasaba con el resto. Me lo explicaron y el tarjetero llegó después. Los dos me gustan.",
    "fullBody": "Pedí una funda y un tarjetero. La funda llegó primero y tuve que escribir para saber qué pasaba con el resto. Me lo explicaron y el tarjetero llegó después. Los dos me gustan.",
    "experienceDate": "Jan 26, 2025",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Monica Basile (Sample)",
    "date": "Jan 24, 2025",
    "rating": 5,
    "initials": "MB",
    "avatarType": "pink",
    "body": "Ho preso il vetro protettivo anche per il telefono di mia madre. Aveva paura che il bordo si sentisse passando il dito, invece lo trova liscio. Mi ha chiesto dove l’avessi comprato.",
    "fullBody": "Ho preso il vetro protettivo anche per il telefono di mia madre. Aveva paura che il bordo si sentisse passando il dito, invece lo trova liscio. Mi ha chiesto dove l’avessi comprato.",
    "experienceDate": "Jan 23, 2025",
    "country": "United States",
    "language": "it"
  },
  {
    "name": "Florian Seidel (Sample)",
    "date": "Jan 21, 2025",
    "rating": 4,
    "initials": "FS",
    "avatarType": "slate",
    "body": "Displayschutz sitzt jetzt ordentlich. Die Anleitung könnte größer gedruckt sein, ich musste erst die Brille holen. Mit etwas Geduld hat es geklappt.",
    "fullBody": "Displayschutz sitzt jetzt ordentlich. Die Anleitung könnte größer gedruckt sein, ich musste erst die Brille holen. Mit etwas Geduld hat es geklappt.",
    "experienceDate": "Jan 20, 2025",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Bram van Dijk (Sample)",
    "date": "Jan 19, 2025",
    "rating": 4,
    "initials": "BD",
    "avatarType": "purple",
    "body": "Screenprotector zit netjes en voelt prettig. Ik vond de uitleg over het laatste lipje verwijderen niet helemaal duidelijk. Een extra afbeelding zou helpen, maar het is gelukt.",
    "fullBody": "Screenprotector zit netjes en voelt prettig. Ik vond de uitleg over het laatste lipje verwijderen niet helemaal duidelijk. Een extra afbeelding zou helpen, maar het is gelukt.",
    "experienceDate": "Jan 18, 2025",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "ياسر ك. (Sample)",
    "date": "Jan 16, 2025",
    "rating": 4,
    "initials": "يك",
    "avatarType": "blue",
    "body": "الحامل جيد وثابت على مكتبي. تمنيت لو كان يرتفع أكثر قليلاً، لكن الزاوية الحالية مناسبة لمكالمات الفيديو.",
    "fullBody": "الحامل جيد وثابت على مكتبي. تمنيت لو كان يرتفع أكثر قليلاً، لكن الزاوية الحالية مناسبة لمكالمات الفيديو.",
    "experienceDate": "Jan 15, 2025",
    "country": "Germany",
    "language": "ar"
  },
  {
    "name": "Laurent K. (Sample)",
    "date": "Jan 13, 2025",
    "rating": 5,
    "initials": "LK",
    "avatarType": "teal",
    "body": "La commande était facile à suivre depuis le mail de confirmation. Coque reçue en bon état et bien ajustée. Ça me va.",
    "fullBody": "La commande était facile à suivre depuis le mail de confirmation. Coque reçue en bon état et bien ajustée. Ça me va.",
    "experienceDate": "Jan 12, 2025",
    "country": "Belgium",
    "language": "fr"
  },
  {
    "name": "Óscar Bermúdez (Sample)",
    "date": "Jan 10, 2025",
    "rating": 5,
    "initials": "ÓB",
    "avatarType": "blue",
    "body": "La funda transparente deja ver el color del celular. No tiene rebabas que molesten en la mano y fue fácil colocarla. Me gustó más de lo que esperaba.",
    "fullBody": "La funda transparente deja ver el color del celular. No tiene rebabas que molesten en la mano y fue fácil colocarla. Me gustó más de lo que esperaba.",
    "experienceDate": "Jan 9, 2025",
    "country": "Canada",
    "language": "es"
  },
  {
    "name": "Martina Costa (Sample)",
    "date": "Jan 7, 2025",
    "rating": 5,
    "initials": "MC",
    "avatarType": "purple",
    "body": "Il vecchio vetro si era scheggiato in un angolo e mi dava fastidio. Questo lascia spazio alla cover senza accavallarsi ai bordi. Anche la fotocamera anteriore resta libera. Contentissima...",
    "fullBody": "Il vecchio vetro si era scheggiato in un angolo e mi dava fastidio. Questo lascia spazio alla cover senza accavallarsi ai bordi. Anche la fotocamera anteriore resta libera. Contentissima di averlo finalmente sostituito.",
    "experienceDate": "Jan 6, 2025",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Jonas Feld (Sample)",
    "date": "Jan 5, 2025",
    "rating": 5,
    "initials": "JF",
    "avatarType": "blue",
    "body": "Hatte ein Ladekabel fürs Auto gesucht, das nicht ständig im Fußraum herumliegt. Die kürzere Variante war genau richtig. Stecker sitzen fest und das Kabel lässt sich gut verstauen.",
    "fullBody": "Hatte ein Ladekabel fürs Auto gesucht, das nicht ständig im Fußraum herumliegt. Die kürzere Variante war genau richtig. Stecker sitzen fest und das Kabel lässt sich gut verstauen.",
    "experienceDate": "Jan 4, 2025",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Eline Jansen (Sample)",
    "date": "Jan 2, 2025",
    "rating": 5,
    "initials": "EJ",
    "avatarType": "yellow",
    "body": "Lekker simpel hoesje, precies de kleur die ik zocht. Mijn telefoon ligt nu fijner in de hand.",
    "fullBody": "Lekker simpel hoesje, precies de kleur die ik zocht. Mijn telefoon ligt nu fijner in de hand.",
    "experienceDate": "Jan 1, 2025",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "نائل ج. (Sample)",
    "date": "Dec 30, 2024",
    "rating": 5,
    "initials": "نج",
    "avatarType": "teal",
    "body": "الحامل جعل ترتيب الطاولة أفضل بكثير. أضع الهاتف بجانب الشاشة خلال العمل وأطويه عندما أحتاج المساحة. حجمه مناسب لمكتبي الصغير.",
    "fullBody": "الحامل جعل ترتيب الطاولة أفضل بكثير. أضع الهاتف بجانب الشاشة خلال العمل وأطويه عندما أحتاج المساحة. حجمه مناسب لمكتبي الصغير.",
    "experienceDate": "Dec 29, 2024",
    "country": "Netherlands",
    "language": "ar"
  },
  {
    "name": "Vincent J. (Sample)",
    "date": "Dec 27, 2024",
    "rating": 5,
    "initials": "VJ",
    "avatarType": "teal",
    "body": "Un câble plus long pour le coin lecture et une coque pour mon téléphone. Les deux correspondent à ma commande. Emballage compact, sans pièces qui se promenaient dans le colis.",
    "fullBody": "Un câble plus long pour le coin lecture et une coque pour mon téléphone. Les deux correspondent à ma commande. Emballage compact, sans pièces qui se promenaient dans le colis.",
    "experienceDate": "Dec 26, 2024",
    "country": "United States",
    "language": "fr"
  },
  {
    "name": "Carolina Méndez (Sample)",
    "date": "Dec 24, 2024",
    "rating": 5,
    "initials": "CM",
    "avatarType": "teal",
    "body": "Quería una funda sencilla para el celular, sin dibujos ni cosas brillantes. La gris se ve muy bien y no resbala tanto como la que tenía.",
    "fullBody": "Quería una funda sencilla para el celular, sin dibujos ni cosas brillantes. La gris se ve muy bien y no resbala tanto como la que tenía.",
    "experienceDate": "Dec 23, 2024",
    "country": "United States",
    "language": "es"
  },
  {
    "name": "Riccardo Marini (Sample)",
    "date": "Dec 22, 2024",
    "rating": 5,
    "initials": "RM",
    "avatarType": "blue",
    "body": "Mi serviva una copia della ricevuta e non riuscivo a recuperarla dal mio telefono. L’assistenza me l’ha rimandata in un formato che potevo salvare. Anche il piccolo ordine di accessori...",
    "fullBody": "Mi serviva una copia della ricevuta e non riuscivo a recuperarla dal mio telefono. L’assistenza me l’ha rimandata in un formato che potevo salvare. Anche il piccolo ordine di accessori era tutto a posto.",
    "experienceDate": "Dec 21, 2024",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Ralf Zimmer (Sample)",
    "date": "Dec 19, 2024",
    "rating": 5,
    "initials": "RZ",
    "avatarType": "yellow",
    "body": "Der Handyhalter steht jetzt neben meinem Monitor. Ich kann Benachrichtigungen sehen, ohne das Telefon jedes Mal anzuheben. Bleibt auch beim Antippen an seinem Platz.",
    "fullBody": "Der Handyhalter steht jetzt neben meinem Monitor. Ich kann Benachrichtigungen sehen, ohne das Telefon jedes Mal anzuheben. Bleibt auch beim Antippen an seinem Platz.",
    "experienceDate": "Dec 18, 2024",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Pieterjan Wouters (Sample)",
    "date": "Dec 16, 2024",
    "rating": 5,
    "initials": "PW",
    "avatarType": "blue",
    "body": "De bestelling kwam binnen de opgegeven termijn aan. De screenprotector zat goed beschermd in de verpakking en paste zoals verwacht. Tevreden.",
    "fullBody": "De bestelling kwam binnen de opgegeven termijn aan. De screenprotector zat goed beschermd in de verpakking en paste zoals verwacht. Tevreden.",
    "experienceDate": "Dec 15, 2024",
    "country": "Belgium",
    "language": "nl"
  },
  {
    "name": "رنا س. (Sample)",
    "date": "Dec 13, 2024",
    "rating": 5,
    "initials": "رس",
    "avatarType": "purple",
    "body": "سألتهم عن موديل التابلت قبل الطلب لأن أسماء الموديلات تتشابه عليّ. أعطوني طريقة واضحة لأتأكد، والغطاء الذي وصل مناسب تماماً.",
    "fullBody": "سألتهم عن موديل التابلت قبل الطلب لأن أسماء الموديلات تتشابه عليّ. أعطوني طريقة واضحة لأتأكد، والغطاء الذي وصل مناسب تماماً.",
    "experienceDate": "Dec 12, 2024",
    "country": "Germany",
    "language": "ar"
  },
  {
    "name": "Ariane L. (Sample)",
    "date": "Dec 10, 2024",
    "rating": 5,
    "initials": "AL",
    "avatarType": "pink",
    "body": "Le support garde ma tablette à un angle confortable pour suivre mes cours. Il se range facilement quand je termine. Contente de cet achat tout simple.",
    "fullBody": "Le support garde ma tablette à un angle confortable pour suivre mes cours. Il se range facilement quand je termine. Contente de cet achat tout simple.",
    "experienceDate": "Dec 9, 2024",
    "country": "Canada",
    "language": "fr"
  },
  {
    "name": "Tomás Acosta (Sample)",
    "date": "Dec 8, 2024",
    "rating": 5,
    "initials": "TA",
    "avatarType": "blue",
    "body": "Le puse el protector al celular de mi papá. La guía ayudó a centrarlo y él dice que sigue viendo las letras igual de claras. Todo bien.",
    "fullBody": "Le puse el protector al celular de mi papá. La guía ayudó a centrarlo y él dice que sigue viendo las letras igual de claras. Todo bien.",
    "experienceDate": "Dec 7, 2024",
    "country": "United States",
    "language": "es"
  },
  {
    "name": "Serena Leone (Sample)",
    "date": "Dec 5, 2024",
    "rating": 5,
    "initials": "SL",
    "avatarType": "purple",
    "body": "Ho riordinato la stessa custodia per il tablet di mio marito, cambiando solo colore. Avevo già trovato comoda la chiusura della mia e anche questa calza bene.",
    "fullBody": "Ho riordinato la stessa custodia per il tablet di mio marito, cambiando solo colore. Avevo già trovato comoda la chiusura della mia e anche questa calza bene.",
    "experienceDate": "Dec 4, 2024",
    "country": "Canada",
    "language": "it"
  },
  {
    "name": "Céline Meier (Sample)",
    "date": "Dec 2, 2024",
    "rating": 5,
    "initials": "CM",
    "avatarType": "purple",
    "body": "Der Displayschutz liegt schön gerade auf. An den Rändern sammelt sich bisher nichts und meine Hülle hebt ihn auch nicht an. Hatte bei der alten Kombination ständig Ärger damit.",
    "fullBody": "Der Displayschutz liegt schön gerade auf. An den Rändern sammelt sich bisher nichts und meine Hülle hebt ihn auch nicht an. Hatte bei der alten Kombination ständig Ärger damit.",
    "experienceDate": "Dec 1, 2024",
    "country": "Switzerland",
    "language": "de"
  },
  {
    "name": "Lotte van Leeuwen (Sample)",
    "date": "Nov 29, 2024",
    "rating": 5,
    "initials": "LL",
    "avatarType": "blue",
    "body": "De roze hoes is wat zachter van kleur dan ik dacht, wat ik juist mooi vind. Hij voelt niet plakkerig en schuift makkelijk in mijn jaszak.",
    "fullBody": "De roze hoes is wat zachter van kleur dan ik dacht, wat ik juist mooi vind. Hij voelt niet plakkerig en schuift makkelijk in mijn jaszak.",
    "experienceDate": "Nov 28, 2024",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "رانيا ز. (Sample)",
    "date": "Nov 26, 2024",
    "rating": 5,
    "initials": "رز",
    "avatarType": "pink",
    "body": "حماية الشاشة القديمة كانت مكسورة من الطرف. استبدلتها بهذه وأعجبني أن حوافها لا ترتفع عندما أضع الكفر. اللمس طبيعي أيضاً.",
    "fullBody": "حماية الشاشة القديمة كانت مكسورة من الطرف. استبدلتها بهذه وأعجبني أن حوافها لا ترتفع عندما أضع الكفر. اللمس طبيعي أيضاً.",
    "experienceDate": "Nov 25, 2024",
    "country": "Denmark",
    "language": "ar"
  },
  {
    "name": "Anaïs J. (Sample)",
    "date": "Nov 24, 2024",
    "rating": 5,
    "initials": "AJ",
    "avatarType": "pink",
    "body": "La coque transparente laisse bien voir la couleur du téléphone. Elle ne soulève pas ma protection d’écran sur les côtés, contrairement à l’ancienne.",
    "fullBody": "La coque transparente laisse bien voir la couleur du téléphone. Elle ne soulève pas ma protection d’écran sur les côtés, contrairement à l’ancienne.",
    "experienceDate": "Nov 23, 2024",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Diego Salcedo (Sample)",
    "date": "Nov 21, 2024",
    "rating": 3,
    "initials": "DS",
    "avatarType": "blue",
    "body": "El protector encaja bien, aunque las instrucciones de colocación se me quedaron cortas. Me costó quitar una burbuja de una esquina. Una vez puesto funciona, pero esperaba que fuera más...",
    "fullBody": "El protector encaja bien, aunque las instrucciones de colocación se me quedaron cortas. Me costó quitar una burbuja de una esquina. Una vez puesto funciona, pero esperaba que fuera más sencillo.",
    "experienceDate": "Nov 20, 2024",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Andrea Galli (Sample)",
    "date": "Nov 18, 2024",
    "rating": 5,
    "initials": "AG",
    "avatarType": "blue",
    "body": "Ho preso un cavo da lasciare nello zaino perché dimenticavo sempre quello di casa. Si arrotola senza fare troppo ingombro. Finalmente ho smesso di cercarlo ogni mattina.",
    "fullBody": "Ho preso un cavo da lasciare nello zaino perché dimenticavo sempre quello di casa. Si arrotola senza fare troppo ingombro. Finalmente ho smesso di cercarlo ogni mattina.",
    "experienceDate": "Nov 17, 2024",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Bastian Keller (Sample)",
    "date": "Nov 15, 2024",
    "rating": 4,
    "initials": "BK",
    "avatarType": "yellow",
    "body": "Solider Tabletständer, lässt sich gut zusammenklappen. Der Winkel könnte für meinen Schreibtisch noch eine Stufe flacher sein. Ansonsten passt alles.",
    "fullBody": "Solider Tabletständer, lässt sich gut zusammenklappen. Der Winkel könnte für meinen Schreibtisch noch eine Stufe flacher sein. Ansonsten passt alles.",
    "experienceDate": "Nov 14, 2024",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Arjan V. (Sample)",
    "date": "Nov 12, 2024",
    "rating": 5,
    "initials": "AV",
    "avatarType": "slate",
    "body": "Reservekabel voor in de logeerkamer. Geen ingewikkelde aankoop, gewoon de juiste aansluitingen gekozen. Werkt goed en is lang genoeg voor het tafeltje naast het bed.",
    "fullBody": "Reservekabel voor in de logeerkamer. Geen ingewikkelde aankoop, gewoon de juiste aansluitingen gekozen. Werkt goed en is lang genoeg voor het tafeltje naast het bed.",
    "experienceDate": "Nov 11, 2024",
    "country": "Canada",
    "language": "nl"
  },
  {
    "name": "سليم و. (Sample)",
    "date": "Nov 10, 2024",
    "rating": 5,
    "initials": "سو",
    "avatarType": "slate",
    "body": "كنت أسند اللابتوب على كتب عند استخدام لوحة مفاتيح منفصلة. الحامل الجديد أرتب وأسهل في الإزالة عندما أنتهي من العمل.",
    "fullBody": "كنت أسند اللابتوب على كتب عند استخدام لوحة مفاتيح منفصلة. الحامل الجديد أرتب وأسهل في الإزالة عندما أنتهي من العمل.",
    "experienceDate": "Nov 9, 2024",
    "country": "Spain",
    "language": "ar"
  },
  {
    "name": "Simon D. (Sample)",
    "date": "Nov 7, 2024",
    "rating": 5,
    "initials": "SD",
    "avatarType": "yellow",
    "body": "Le porte-cartes tient bien sur ma coque. Je l’enlève le soir pour poser le téléphone sur son support. Pratique pour les petits trajets.",
    "fullBody": "Le porte-cartes tient bien sur ma coque. Je l’enlève le soir pour poser le téléphone sur son support. Pratique pour les petits trajets.",
    "experienceDate": "Nov 6, 2024",
    "country": "Belgium",
    "language": "fr"
  },
  {
    "name": "Gonzalo Arias (Sample)",
    "date": "Nov 4, 2024",
    "rating": 5,
    "initials": "GA",
    "avatarType": "slate",
    "body": "Me fijé en los botones antes de nada. Con mi funda vieja tenía que apretar muchísimo para bajar el volumen. En esta se nota cada pulsación y no tengo que recolocar los dedos. El tacto...",
    "fullBody": "Me fijé en los botones antes de nada. Con mi funda vieja tenía que apretar muchísimo para bajar el volumen. En esta se nota cada pulsación y no tengo que recolocar los dedos. El tacto también me gusta.",
    "experienceDate": "Nov 3, 2024",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Elisa Romano (Sample)",
    "date": "Nov 1, 2024",
    "rating": 5,
    "initials": "ER",
    "avatarType": "pink",
    "body": "Bella cover sottile, riesco ancora a tenere il telefono con una mano senza che mi scivoli.",
    "fullBody": "Bella cover sottile, riesco ancora a tenere il telefono con una mano senza che mi scivoli.",
    "experienceDate": "Oct 31, 2024",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Maren Hoffmann (Sample)",
    "date": "Oct 29, 2024",
    "rating": 1,
    "initials": "MH",
    "avatarType": "teal",
    "body": "Leider die falsche Hülle bekommen. Ich hatte die Modellnummer extra kontrolliert und dann trotzdem zweimal erklären müssen, was nicht passt. Habe am Ende eine Rückerstattung verlangt. So...",
    "fullBody": "Leider die falsche Hülle bekommen. Ich hatte die Modellnummer extra kontrolliert und dann trotzdem zweimal erklären müssen, was nicht passt. Habe am Ende eine Rückerstattung verlangt. So macht Bestellen keinen Spaß.",
    "experienceDate": "Oct 28, 2024",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Ruben Maas (Sample)",
    "date": "Oct 27, 2024",
    "rating": 5,
    "initials": "RM",
    "avatarType": "teal",
    "body": "Stevige aansluiting en de kabel is lang genoeg voor naast het bed. Gewoon een goede aankoop.",
    "fullBody": "Stevige aansluiting en de kabel is lang genoeg voor naast het bed. Gewoon een goede aankoop.",
    "experienceDate": "Oct 26, 2024",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "زيد م. (Sample)",
    "date": "Oct 24, 2024",
    "rating": 5,
    "initials": "زم",
    "avatarType": "teal",
    "body": "المحفظة تثبت بشكل جيد على الكفر الذي عندي. أستخدمها لبطاقة البنك وبطاقة المواصلات، وحجمها مناسب لهذا الغرض.",
    "fullBody": "المحفظة تثبت بشكل جيد على الكفر الذي عندي. أستخدمها لبطاقة البنك وبطاقة المواصلات، وحجمها مناسب لهذا الغرض.",
    "experienceDate": "Oct 23, 2024",
    "country": "Italy",
    "language": "ar"
  },
  {
    "name": "Yasmine E. (Sample)",
    "date": "Oct 21, 2024",
    "rating": 5,
    "initials": "YE",
    "avatarType": "purple",
    "body": "Porte-cartes choisi pour ne plus emporter mon gros portefeuille à chaque promenade. Il accueille les cartes dont j’ai besoin et se retire facilement à la maison. Le format me plaît beaucoup.",
    "fullBody": "Porte-cartes choisi pour ne plus emporter mon gros portefeuille à chaque promenade. Il accueille les cartes dont j’ai besoin et se retire facilement à la maison. Le format me plaît beaucoup.",
    "experienceDate": "Oct 20, 2024",
    "country": "United States",
    "language": "fr"
  },
  {
    "name": "Mateo Lozano (Sample)",
    "date": "Oct 18, 2024",
    "rating": 5,
    "initials": "ML",
    "avatarType": "slate",
    "body": "Necesitaba pasar el cable por detrás del escritorio. La medida larga me ha permitido dejarlo recogido sin que tire del conector. Ahora tengo la mesa bastante más ordenada.",
    "fullBody": "Necesitaba pasar el cable por detrás del escritorio. La medida larga me ha permitido dejarlo recogido sin que tire del conector. Ahora tengo la mesa bastante más ordenada.",
    "experienceDate": "Oct 17, 2024",
    "country": "Germany",
    "language": "es"
  },
  {
    "name": "Claudio Bernasconi (Sample)",
    "date": "Oct 15, 2024",
    "rating": 5,
    "initials": "CB",
    "avatarType": "blue",
    "body": "La custodia del portatile non aveva quell’odore forte che avevo trovato in altre. Ho potuto usarla appena aperta. Le cuciture sono pulite anche negli angoli e il tessuto non si impiglia...",
    "fullBody": "La custodia del portatile non aveva quell’odore forte che avevo trovato in altre. Ho potuto usarla appena aperta. Le cuciture sono pulite anche negli angoli e il tessuto non si impiglia nella cerniera.",
    "experienceDate": "Oct 14, 2024",
    "country": "Switzerland",
    "language": "it"
  },
  {
    "name": "Valentina Huber (Sample)",
    "date": "Oct 13, 2024",
    "rating": 5,
    "initials": "VH",
    "avatarType": "teal",
    "body": "Mag die weiche Innenseite der Hülle und die unauffällige Farbe. Passt gut zu meinem Handy, ohne viel zusätzliches Gewicht.",
    "fullBody": "Mag die weiche Innenseite der Hülle und die unauffällige Farbe. Passt gut zu meinem Handy, ohne viel zusätzliches Gewicht.",
    "experienceDate": "Oct 12, 2024",
    "country": "Austria",
    "language": "de"
  },
  {
    "name": "Femke S. (Sample)",
    "date": "Oct 10, 2024",
    "rating": 4,
    "initials": "FS",
    "avatarType": "slate",
    "body": "Fijn hoesje en de kleur is mooi. De knoppen gaan wat zwaarder dan ik gewend ben. Verder past het goed, dus ik houd het.",
    "fullBody": "Fijn hoesje en de kleur is mooi. De knoppen gaan wat zwaarder dan ik gewend ben. Verder past het goed, dus ik houd het.",
    "experienceDate": "Oct 9, 2024",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "بلال ف. (Sample)",
    "date": "Oct 7, 2024",
    "rating": 2,
    "initials": "بف",
    "avatarType": "slate",
    "body": "طلبت لوناً غامقاً ووصل لون مختلف. راسلت الدعم واضطررت أشرح الموضوع أكثر من مرة قبل أن تصلني خطوات الإرجاع. الكفر نفسه مقبول، لكن التجربة كانت متعبة.",
    "fullBody": "طلبت لوناً غامقاً ووصل لون مختلف. راسلت الدعم واضطررت أشرح الموضوع أكثر من مرة قبل أن تصلني خطوات الإرجاع. الكفر نفسه مقبول، لكن التجربة كانت متعبة.",
    "experienceDate": "Oct 6, 2024",
    "country": "Germany",
    "language": "ar"
  },
  {
    "name": "Amélie N. (Sample)",
    "date": "Oct 4, 2024",
    "rating": 5,
    "initials": "AN",
    "avatarType": "purple",
    "body": "Jolie couleur pour cette coque. Elle se met facilement et les ouvertures sont bien placées. Contente de mon choix.",
    "fullBody": "Jolie couleur pour cette coque. Elle se met facilement et les ouvertures sont bien placées. Contente de mon choix.",
    "experienceDate": "Oct 3, 2024",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Lucía Ferrer (Sample)",
    "date": "Oct 1, 2024",
    "rating": 4,
    "initials": "LF",
    "avatarType": "purple",
    "body": "La funda me gusta y los botones se pulsan bien. El verde es algo más apagado que en mi pantalla, por eso no pongo cinco estrellas.",
    "fullBody": "La funda me gusta y los botones se pulsan bien. El verde es algo más apagado que en mi pantalla, por eso no pongo cinco estrellas.",
    "experienceDate": "Sep 30, 2024",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Noemi Soldati (Sample)",
    "date": "Sep 29, 2024",
    "rating": 5,
    "initials": "NS",
    "avatarType": "purple",
    "body": "Ho abbinato il portacarte marrone a una cover chiara che avevo già. Sta bene e si toglie facilmente quando non mi serve.",
    "fullBody": "Ho abbinato il portacarte marrone a una cover chiara che avevo già. Sta bene e si toglie facilmente quando non mi serve.",
    "experienceDate": "Sep 28, 2024",
    "country": "Switzerland",
    "language": "it"
  },
  {
    "name": "Markus Leitner (Sample)",
    "date": "Sep 26, 2024",
    "rating": 5,
    "initials": "ML",
    "avatarType": "blue",
    "body": "Für den Urlaub ein zweites Ladekabel gekauft. Es lässt sich klein aufrollen und hat jetzt einen festen Platz im Reisebeutel. Funktioniert bisher problemlos.",
    "fullBody": "Für den Urlaub ein zweites Ladekabel gekauft. Es lässt sich klein aufrollen und hat jetzt einen festen Platz im Reisebeutel. Funktioniert bisher problemlos.",
    "experienceDate": "Sep 25, 2024",
    "country": "Austria",
    "language": "de"
  },
  {
    "name": "Tessa van Loon (Sample)",
    "date": "Sep 23, 2024",
    "rating": 5,
    "initials": "TL",
    "avatarType": "pink",
    "body": "Ik wist dat de bezorging wat langer zou duren. De updates kwamen binnen en het hoesje is netjes aangekomen. De zachte binnenkant en rustige kleur bevallen goed.",
    "fullBody": "Ik wist dat de bezorging wat langer zou duren. De updates kwamen binnen en het hoesje is netjes aangekomen. De zachte binnenkant en rustige kleur bevallen goed.",
    "experienceDate": "Sep 22, 2024",
    "country": "Canada",
    "language": "nl"
  },
  {
    "name": "يمنى أ. (Sample)",
    "date": "Sep 20, 2024",
    "rating": 5,
    "initials": "يأ",
    "avatarType": "yellow",
    "body": "كنت مترددة بخصوص حجم المحفظة، فسألت قبل الشراء. التوضيح كان مفيداً. تناسب البطاقات التي أحملها ولا تجعل الهاتف ثقيلاً بيدي.",
    "fullBody": "كنت مترددة بخصوص حجم المحفظة، فسألت قبل الشراء. التوضيح كان مفيداً. تناسب البطاقات التي أحملها ولا تجعل الهاتف ثقيلاً بيدي.",
    "experienceDate": "Sep 19, 2024",
    "country": "Sweden",
    "language": "ar"
  },
  {
    "name": "Olivier N. (Sample)",
    "date": "Sep 17, 2024",
    "rating": 5,
    "initials": "ON",
    "avatarType": "slate",
    "body": "J’avais posé une question sur les dimensions de la housse. La réponse m’a permis de comparer avec mon portable avant de payer. Ça rentre bien, sans devoir forcer sur la fermeture.",
    "fullBody": "J’avais posé une question sur les dimensions de la housse. La réponse m’a permis de comparer avec mon portable avant de payer. Ça rentre bien, sans devoir forcer sur la fermeture.",
    "experienceDate": "Sep 16, 2024",
    "country": "Canada",
    "language": "fr"
  },
  {
    "name": "Álvaro Nieto (Sample)",
    "date": "Sep 15, 2024",
    "rating": 4,
    "initials": "ÁN",
    "avatarType": "slate",
    "body": "El cable está bien y tiene el largo que necesitaba. El seguimiento pasó varios días sin cambios y tuve que preguntar, aunque al final llegó todo correctamente.",
    "fullBody": "El cable está bien y tiene el largo que necesitaba. El seguimiento pasó varios días sin cambios y tuve que preguntar, aunque al final llegó todo correctamente.",
    "experienceDate": "Sep 14, 2024",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Federico Barbieri (Sample)",
    "date": "Sep 12, 2024",
    "rating": 5,
    "initials": "FB",
    "avatarType": "teal",
    "body": "La cover blu scuro ha proprio la tonalità sobria che cercavo per il telefono che uso al lavoro.",
    "fullBody": "La cover blu scuro ha proprio la tonalità sobria che cercavo per il telefono che uso al lavoro.",
    "experienceDate": "Sep 11, 2024",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Malte S. (Sample)",
    "date": "Sep 9, 2024",
    "rating": 5,
    "initials": "MS",
    "avatarType": "yellow",
    "body": "Kabel bestellt, angekommen, angeschlossen. Lädt und reicht bis zum Nachttisch. Mehr brauche ich nicht.",
    "fullBody": "Kabel bestellt, angekommen, angeschlossen. Lädt und reicht bis zum Nachttisch. Mehr brauche ich nicht.",
    "experienceDate": "Sep 8, 2024",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Fleur Brouwer (Sample)",
    "date": "Sep 6, 2024",
    "rating": 5,
    "initials": "FB",
    "avatarType": "blue",
    "body": "Alles uit mijn bestelling zat erbij en de hoes had geen rare geur bij het uitpakken. Meteen om mijn telefoon gedaan. Fijn materiaal.",
    "fullBody": "Alles uit mijn bestelling zat erbij en de hoes had geen rare geur bij het uitpakken. Meteen om mijn telefoon gedaan. Fijn materiaal.",
    "experienceDate": "Sep 5, 2024",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "مريم ن. (Sample)",
    "date": "Sep 3, 2024",
    "rating": 5,
    "initials": "من",
    "avatarType": "pink",
    "body": "الجراب الشفاف يظهر لون الهاتف بشكل جميل. الحواف مرتبة ولا تعيق تركيب سلك الشحن. سعيدة بالاختيار.",
    "fullBody": "الجراب الشفاف يظهر لون الهاتف بشكل جميل. الحواف مرتبة ولا تعيق تركيب سلك الشحن. سعيدة بالاختيار.",
    "experienceDate": "Sep 2, 2024",
    "country": "France",
    "language": "ar"
  },
  {
    "name": "Adrien B. (Sample)",
    "date": "Sep 1, 2024",
    "rating": 5,
    "initials": "AB",
    "avatarType": "blue",
    "body": "J’ai pris le support pour surélever mon ordinateur avec un clavier séparé. Mon bureau est plus rangé et je peux tout replier en fin de journée.",
    "fullBody": "J’ai pris le support pour surélever mon ordinateur avec un clavier séparé. Mon bureau est plus rangé et je peux tout replier en fin de journée.",
    "experienceDate": "Aug 31, 2024",
    "country": "Belgium",
    "language": "fr"
  },
  {
    "name": "Natalia Rojas (Sample)",
    "date": "Aug 29, 2024",
    "rating": 5,
    "initials": "NR",
    "avatarType": "yellow",
    "body": "La funda de mi tableta se ve bonita sobre el escritorio y cierra sin forzar las esquinas. El color crema combina con la bolsa donde la llevo.",
    "fullBody": "La funda de mi tableta se ve bonita sobre el escritorio y cierra sin forzar las esquinas. El color crema combina con la bolsa donde la llevo.",
    "experienceDate": "Aug 28, 2024",
    "country": "Canada",
    "language": "es"
  },
  {
    "name": "Camilla Ferraro (Sample)",
    "date": "Aug 26, 2024",
    "rating": 5,
    "initials": "CF",
    "avatarType": "purple",
    "body": "Il cordino colorato mi aiuta a trovare il telefono nella borsa. È una cosa piccola ma la sto apprezzando ogni giorno.",
    "fullBody": "Il cordino colorato mi aiuta a trovare il telefono nella borsa. È una cosa piccola ma la sto apprezzando ogni giorno.",
    "experienceDate": "Aug 25, 2024",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Matthias Koch (Sample)",
    "date": "Aug 23, 2024",
    "rating": 5,
    "initials": "MK",
    "avatarType": "blue",
    "body": "Der Ständer nimmt auf meinem kleinen Schreibtisch wenig Platz weg. Das Tablet bleibt beim Lesen im richtigen Winkel stehen. Für mich eine gute Lösung.",
    "fullBody": "Der Ständer nimmt auf meinem kleinen Schreibtisch wenig Platz weg. Das Tablet bleibt beim Lesen im richtigen Winkel stehen. Für mich eine gute Lösung.",
    "experienceDate": "Aug 22, 2024",
    "country": "Canada",
    "language": "de"
  },
  {
    "name": "Sander Kok (Sample)",
    "date": "Aug 20, 2024",
    "rating": 5,
    "initials": "SK",
    "avatarType": "purple",
    "body": "Ik zocht een transparant hoesje zonder dikke rand. Deze laat de telefoon goed zien en voelt netjes afgewerkt. De oplaadkabel past er makkelijk in.",
    "fullBody": "Ik zocht een transparant hoesje zonder dikke rand. Deze laat de telefoon goed zien en voelt netjes afgewerkt. De oplaadkabel past er makkelijk in.",
    "experienceDate": "Aug 19, 2024",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "ليلى ك. (Sample)",
    "date": "Aug 18, 2024",
    "rating": 4,
    "initials": "لك",
    "avatarType": "purple",
    "body": "الجراب جيد لكن درجته أغمق قليلاً مما ظهرت عندي على الشاشة. قررت الاحتفاظ به لأن المقاس والملمس أعجباني.",
    "fullBody": "الجراب جيد لكن درجته أغمق قليلاً مما ظهرت عندي على الشاشة. قررت الاحتفاظ به لأن المقاس والملمس أعجباني.",
    "experienceDate": "Aug 17, 2024",
    "country": "Italy",
    "language": "ar"
  },
  {
    "name": "Romain G. (Sample)",
    "date": "Aug 15, 2024",
    "rating": 5,
    "initials": "RG",
    "avatarType": "slate",
    "body": "La housse de mon ordinateur rentre dans mon sac habituel. Je voulais éviter d’acheter une sacoche entière. La fermeture glisse bien et la doublure est agréable.",
    "fullBody": "La housse de mon ordinateur rentre dans mon sac habituel. Je voulais éviter d’acheter une sacoche entière. La fermeture glisse bien et la doublure est agréable.",
    "experienceDate": "Aug 14, 2024",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Beatriz Cano (Sample)",
    "date": "Aug 12, 2024",
    "rating": 5,
    "initials": "BC",
    "avatarType": "pink",
    "body": "La compré para ver series en el tren. No quería ir sujetando la tableta todo el trayecto. La tapa plegada mantiene una inclinación cómoda sobre la mesita y luego cabe en mi bolsa. Era...",
    "fullBody": "La compré para ver series en el tren. No quería ir sujetando la tableta todo el trayecto. La tapa plegada mantiene una inclinación cómoda sobre la mesita y luego cabe en mi bolsa. Era justo el uso que tenía en mente.",
    "experienceDate": "Aug 11, 2024",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Arianna Gentile (Sample)",
    "date": "Aug 9, 2024",
    "rating": 5,
    "initials": "AG",
    "avatarType": "yellow",
    "body": "Uso il piccolo supporto per leggere sul tablet mentre faccio colazione. Si piega e lo metto nel cassetto quando sparecchio. Comodo e poco ingombrante.",
    "fullBody": "Uso il piccolo supporto per leggere sul tablet mentre faccio colazione. Si piega e lo metto nel cassetto quando sparecchio. Comodo e poco ingombrante.",
    "experienceDate": "Aug 8, 2024",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Theresa Gruber (Sample)",
    "date": "Aug 6, 2024",
    "rating": 5,
    "initials": "TG",
    "avatarType": "pink",
    "body": "Die kleine Handyhalterung ist beim Backen wirklich praktisch. Das Rezept bleibt gut lesbar und das Handy liegt nicht mehr neben dem Mehl auf der Arbeitsfläche.",
    "fullBody": "Die kleine Handyhalterung ist beim Backen wirklich praktisch. Das Rezept bleibt gut lesbar und das Handy liegt nicht mehr neben dem Mehl auf der Arbeitsfläche.",
    "experienceDate": "Aug 5, 2024",
    "country": "Austria",
    "language": "de"
  },
  {
    "name": "Anouk Dekker (Sample)",
    "date": "Aug 4, 2024",
    "rating": 5,
    "initials": "AD",
    "avatarType": "slate",
    "body": "Ik had na het bestellen nog een vraag over het schoonmaken van de hoes. Daar kreeg ik een normaal en bruikbaar antwoord op. Hij bevalt goed, ook na een paar weken in mijn handtas.",
    "fullBody": "Ik had na het bestellen nog een vraag over het schoonmaken van de hoes. Daar kreeg ik een normaal en bruikbaar antwoord op. Hij bevalt goed, ook na een paar weken in mijn handtas.",
    "experienceDate": "Aug 3, 2024",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "هيثم غ. (Sample)",
    "date": "Aug 1, 2024",
    "rating": 5,
    "initials": "هغ",
    "avatarType": "blue",
    "body": "تأكدت من نوع المدخل قبل أن أشتري السلك. الوصف والصور ساعداني، ولم أحتج إلى قطعة تحويل عند وصوله. شراء موفق بالنسبة لي.",
    "fullBody": "تأكدت من نوع المدخل قبل أن أشتري السلك. الوصف والصور ساعداني، ولم أحتج إلى قطعة تحويل عند وصوله. شراء موفق بالنسبة لي.",
    "experienceDate": "Jul 31, 2024",
    "country": "Belgium",
    "language": "ar"
  },
  {
    "name": "Manon E. (Sample)",
    "date": "Jul 29, 2024",
    "rating": 5,
    "initials": "ME",
    "avatarType": "purple",
    "body": "Deux coques achetées pour deux téléphones différents. Les tailles sont bonnes et les couleurs permettent de les repérer facilement à la maison. Rien à redire.",
    "fullBody": "Deux coques achetées pour deux téléphones différents. Les tailles sont bonnes et les couleurs permettent de les repérer facilement à la maison. Rien à redire.",
    "experienceDate": "Jul 28, 2024",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Andrés Molina (Sample)",
    "date": "Jul 26, 2024",
    "rating": 5,
    "initials": "AM",
    "avatarType": "blue",
    "body": "Regalé la funda lila a mi pareja y le encantó el color, así que acerté.",
    "fullBody": "Regalé la funda lila a mi pareja y le encantó el color, así que acerté.",
    "experienceDate": "Jul 25, 2024",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Francesca Moretti (Sample)",
    "date": "Jul 23, 2024",
    "rating": 4,
    "initials": "FM",
    "avatarType": "yellow",
    "body": "Mancava il panno nel kit del vetro protettivo. Ho usato quello degli occhiali e l'applicazione è andata bene. L'assistenza mi ha risposto quando l'ho segnalato, ma controllerei meglio le...",
    "fullBody": "Mancava il panno nel kit del vetro protettivo. Ho usato quello degli occhiali e l'applicazione è andata bene. L'assistenza mi ha risposto quando l'ho segnalato, ma controllerei meglio le confezioni.",
    "experienceDate": "Jul 22, 2024",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Dennis Brandt (Sample)",
    "date": "Jul 21, 2024",
    "rating": 5,
    "initials": "DB",
    "avatarType": "blue",
    "body": "Endlich ein Kabel, dessen Stecker durch die Aussparung meiner dicken Hülle passt. Ich muss zum Laden nichts mehr abnehmen.",
    "fullBody": "Endlich ein Kabel, dessen Stecker durch die Aussparung meiner dicken Hülle passt. Ich muss zum Laden nichts mehr abnehmen.",
    "experienceDate": "Jul 20, 2024",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Merijn Jacobs (Sample)",
    "date": "Jul 18, 2024",
    "rating": 5,
    "initials": "MJ",
    "avatarType": "teal",
    "body": "Ik zet mijn tablet op de standaard als ik op mijn keyboard oefen. De bladmuziek blijft zo goed zichtbaar en het scherm schuift niet weg als ik een pagina aantik. Veel fijner dan plat op...",
    "fullBody": "Ik zet mijn tablet op de standaard als ik op mijn keyboard oefen. De bladmuziek blijft zo goed zichtbaar en het scherm schuift niet weg als ik een pagina aantik. Veel fijner dan plat op tafel.",
    "experienceDate": "Jul 17, 2024",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "سامر ح. (Sample)",
    "date": "Jul 15, 2024",
    "rating": 5,
    "initials": "سح",
    "avatarType": "teal",
    "body": "الكفر مقاسه مضبوط والأزرار سهلة الضغط. كنت أبحث عن شيء بسيط لا يزيد حجم الهاتف كثيراً، وهذا مناسب لي.",
    "fullBody": "الكفر مقاسه مضبوط والأزرار سهلة الضغط. كنت أبحث عن شيء بسيط لا يزيد حجم الهاتف كثيراً، وهذا مناسب لي.",
    "experienceDate": "Jul 14, 2024",
    "country": "Germany",
    "language": "ar"
  },
  {
    "name": "Mehdi B. (Sample)",
    "date": "Jul 12, 2024",
    "rating": 4,
    "initials": "MB",
    "avatarType": "blue",
    "body": "Le câble passe bien dans la petite encoche de ma table de nuit. Le lien fourni pour le ranger est un peu court, il faut le plier soigneusement. Bon achat malgré ce détail.",
    "fullBody": "Le câble passe bien dans la petite encoche de ma table de nuit. Le lien fourni pour le ranger est un peu court, il faut le plier soigneusement. Bon achat malgré ce détail.",
    "experienceDate": "Jul 11, 2024",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Hugo Soler (Sample)",
    "date": "Jul 9, 2024",
    "rating": 5,
    "initials": "HS",
    "avatarType": "teal",
    "body": "Me equivoqué al poner el número del portal y lo vi en el correo del pedido. Avisé enseguida y me confirmaron la corrección antes del envío. Agradezco que fuera tan fácil.",
    "fullBody": "Me equivoqué al poner el número del portal y lo vi en el correo del pedido. Avisé enseguida y me confirmaron la corrección antes del envío. Agradezco que fuera tan fácil.",
    "experienceDate": "Jul 8, 2024",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Sara Lombardi (Sample)",
    "date": "Jul 7, 2024",
    "rating": 5,
    "initials": "SL",
    "avatarType": "yellow",
    "body": "Avevo scelto la misura sbagliata per il portatile. Ho chiesto il cambio lasciando la custodia nella confezione e mi hanno spiegato come procedere. Quella sostitutiva è della misura giusta.",
    "fullBody": "Avevo scelto la misura sbagliata per il portatile. Ho chiesto il cambio lasciando la custodia nella confezione e mi hanno spiegato come procedere. Quella sostitutiva è della misura giusta.",
    "experienceDate": "Jul 6, 2024",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Holger Mertens (Sample)",
    "date": "Jul 4, 2024",
    "rating": 5,
    "initials": "HM",
    "avatarType": "yellow",
    "body": "Bestellung war vollständig, ordentlich verpackt und kam im angegebenen Zeitraum. Die Tablethülle ist mittlerweile jeden Tag im Einsatz.",
    "fullBody": "Bestellung war vollständig, ordentlich verpackt und kam im angegebenen Zeitraum. Die Tablethülle ist mittlerweile jeden Tag im Einsatz.",
    "experienceDate": "Jul 3, 2024",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Marieke Bos (Sample)",
    "date": "Jul 1, 2024",
    "rating": 4,
    "initials": "MB",
    "avatarType": "blue",
    "body": "De tabletstandaard staat stevig op tafel. Voor meenemen had ik hem iets lichter verwacht. Thuis gebruik ik hem met plezier.",
    "fullBody": "De tabletstandaard staat stevig op tafel. Voor meenemen had ik hem iets lichter verwacht. Thuis gebruik ik hem met plezier.",
    "experienceDate": "Jun 30, 2024",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "آية ب. (Sample)",
    "date": "Jun 28, 2024",
    "rating": 5,
    "initials": "آب",
    "avatarType": "purple",
    "body": "أقرأ على التابلت كثيراً، والغطاء مريح عندما أمسكه مفتوحاً. الحامل مفيد أيضاً وقت متابعة الدروس. سعيدة به حتى الآن.",
    "fullBody": "أقرأ على التابلت كثيراً، والغطاء مريح عندما أمسكه مفتوحاً. الحامل مفيد أيضاً وقت متابعة الدروس. سعيدة به حتى الآن.",
    "experienceDate": "Jun 27, 2024",
    "country": "Canada",
    "language": "ar"
  },
  {
    "name": "Étienne S. (Sample)",
    "date": "Jun 25, 2024",
    "rating": 5,
    "initials": "ÉS",
    "avatarType": "blue",
    "body": "J’ai installé la protection en prenant mon temps pour enlever la poussière. Le guide de pose fait une bonne différence. Les bords restent en place avec ma coque.",
    "fullBody": "J’ai installé la protection en prenant mon temps pour enlever la poussière. Le guide de pose fait une bonne différence. Les bords restent en place avec ma coque.",
    "experienceDate": "Jun 24, 2024",
    "country": "Canada",
    "language": "fr"
  },
  {
    "name": "Nuria Beltrán (Sample)",
    "date": "Jun 23, 2024",
    "rating": 5,
    "initials": "NB",
    "avatarType": "pink",
    "body": "La funda del portátil entra en mi mochila de trabajo sin abultarla demasiado. El interior es suave y la cremallera no se engancha. Justo lo que buscaba.",
    "fullBody": "La funda del portátil entra en mi mochila de trabajo sin abultarla demasiado. El interior es suave y la cremallera no se engancha. Justo lo que buscaba.",
    "experienceDate": "Jun 22, 2024",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Matteo Rinaldi (Sample)",
    "date": "Jun 20, 2024",
    "rating": 4,
    "initials": "MR",
    "avatarType": "slate",
    "body": "Il supporto per tablet funziona bene, ma la base è più larga di quanto immaginassi. Ho dovuto spostare il portapenne per fargli posto. Ora che ho sistemato la scrivania lo uso volentieri.",
    "fullBody": "Il supporto per tablet funziona bene, ma la base è più larga di quanto immaginassi. Ho dovuto spostare il portapenne per fargli posto. Ora che ho sistemato la scrivania lo uso volentieri.",
    "experienceDate": "Jun 19, 2024",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Timo Wagner (Sample)",
    "date": "Jun 17, 2024",
    "rating": 3,
    "initials": "TW",
    "avatarType": "blue",
    "body": "Die Hülle sitzt gut, allerdings hatte ich mir die Oberfläche etwas griffiger vorgestellt. Für mich ist sie ziemlich glatt. Behalte sie erst mal, würde beim nächsten Mal aber ein anderes...",
    "fullBody": "Die Hülle sitzt gut, allerdings hatte ich mir die Oberfläche etwas griffiger vorgestellt. Für mich ist sie ziemlich glatt. Behalte sie erst mal, würde beim nächsten Mal aber ein anderes Material nehmen.",
    "experienceDate": "Jun 16, 2024",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Daan Vos (Sample)",
    "date": "Jun 14, 2024",
    "rating": 5,
    "initials": "DV",
    "avatarType": "purple",
    "body": "Gebruik de telefoonstandaard tijdens online overleg. Het scherm staat nu recht voor me en ik hoef de telefoon niet vast te houden. Na afloop klap ik hem op en leg ik hem in een lade.",
    "fullBody": "Gebruik de telefoonstandaard tijdens online overleg. Het scherm staat nu recht voor me en ik hoef de telefoon niet vast te houden. Na afloop klap ik hem op en leg ik hem in een lade.",
    "experienceDate": "Jun 13, 2024",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "باسل ر. (Sample)",
    "date": "Jun 11, 2024",
    "rating": 5,
    "initials": "بر",
    "avatarType": "blue",
    "body": "حامل الهاتف صغير بما يكفي ليبقى على طرف الطاولة. أستخدمه للمكالمات مع العائلة، ومريح أكثر من حمل الهاتف طوال الوقت.",
    "fullBody": "حامل الهاتف صغير بما يكفي ليبقى على طرف الطاولة. أستخدمه للمكالمات مع العائلة، ومريح أكثر من حمل الهاتف طوال الوقت.",
    "experienceDate": "Jun 10, 2024",
    "country": "United States",
    "language": "ar"
  },
  {
    "name": "Aline T. (Sample)",
    "date": "Jun 9, 2024",
    "rating": 4,
    "initials": "AT",
    "avatarType": "pink",
    "body": "Le porte-cartes tient bien et le format me plaît. Mes cartes sont encore un peu difficiles à sortir, surtout celle du fond. Cela commence à s’assouplir avec l’usage, donc je lui laisse...",
    "fullBody": "Le porte-cartes tient bien et le format me plaît. Mes cartes sont encore un peu difficiles à sortir, surtout celle du fond. Cela commence à s’assouplir avec l’usage, donc je lui laisse un peu de temps.",
    "experienceDate": "Jun 8, 2024",
    "country": "Switzerland",
    "language": "fr"
  },
  {
    "name": "Rocío Esteban (Sample)",
    "date": "Jun 6, 2024",
    "rating": 5,
    "initials": "RE",
    "avatarType": "purple",
    "body": "Pedí cables de dos medidas y cada paquete venía bien identificado. Así pude repartirlos sin abrirlo todo. Funcionan bien en casa.",
    "fullBody": "Pedí cables de dos medidas y cada paquete venía bien identificado. Así pude repartirlos sin abrirlo todo. Funcionan bien en casa.",
    "experienceDate": "Jun 5, 2024",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Simone Rizzi (Sample)",
    "date": "Jun 3, 2024",
    "rating": 5,
    "initials": "SR",
    "avatarType": "slate",
    "body": "Il connettore del vecchio cavo era diventato lento e si sfilava appena muovevo il telefono. Questo resta inserito senza dover trovare una posizione particolare sul tavolo. Un sollievo...",
    "fullBody": "Il connettore del vecchio cavo era diventato lento e si sfilava appena muovevo il telefono. Questo resta inserito senza dover trovare una posizione particolare sul tavolo. Un sollievo, davvero.",
    "experienceDate": "Jun 2, 2024",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Katrin Weber (Sample)",
    "date": "May 31, 2024",
    "rating": 5,
    "initials": "KW",
    "avatarType": "purple",
    "body": "Ich wollte die Tablethülle eigentlich nur zum Schutz in der Tasche. Inzwischen nutze ich die Aufstellfunktion dauernd beim Stricken, damit ich die Anleitung neben mir habe. Eine...",
    "fullBody": "Ich wollte die Tablethülle eigentlich nur zum Schutz in der Tasche. Inzwischen nutze ich die Aufstellfunktion dauernd beim Stricken, damit ich die Anleitung neben mir habe. Eine praktische Anschaffung.",
    "experienceDate": "May 30, 2024",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Jelle Post (Sample)",
    "date": "May 28, 2024",
    "rating": 5,
    "initials": "JP",
    "avatarType": "pink",
    "body": "Mijn pakket lag bij een afhaalpunt en ik had het bericht over het hoofd gezien. De klantenservice stuurde de informatie nog eens door. Het lag er gelukkig nog, en alles zat erbij.",
    "fullBody": "Mijn pakket lag bij een afhaalpunt en ik had het bericht over het hoofd gezien. De klantenservice stuurde de informatie nog eens door. Het lag er gelukkig nog, en alles zat erbij.",
    "experienceDate": "May 27, 2024",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "طارق ل. (Sample)",
    "date": "May 26, 2024",
    "rating": 5,
    "initials": "طل",
    "avatarType": "blue",
    "body": "غلاف اللابتوب يدخل في حقيبة العمل بسهولة، والسحاب لا يعلق. لا أحتاج أكثر من ذلك لحمله معي كل يوم.",
    "fullBody": "غلاف اللابتوب يدخل في حقيبة العمل بسهولة، والسحاب لا يعلق. لا أحتاج أكثر من ذلك لحمله معي كل يوم.",
    "experienceDate": "May 25, 2024",
    "country": "Sweden",
    "language": "ar"
  },
  {
    "name": "Sarah V. (Sample)",
    "date": "May 23, 2024",
    "rating": 5,
    "initials": "SV",
    "avatarType": "yellow",
    "body": "Petit porte-cartes très pratique pour sortir sans sac. Mes deux cartes habituelles y tiennent et l’ensemble reste assez fin derrière le téléphone.",
    "fullBody": "Petit porte-cartes très pratique pour sortir sans sac. Mes deux cartes habituelles y tiennent et l’ensemble reste assez fin derrière le téléphone.",
    "experienceDate": "May 22, 2024",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Inés Robles (Sample)",
    "date": "May 20, 2024",
    "rating": 5,
    "initials": "IR",
    "avatarType": "pink",
    "body": "Muy bonita la funda azul, con el borde suave y suficiente espacio para que el móvil entre en mi bolsillo.",
    "fullBody": "Muy bonita la funda azul, con el borde suave y suficiente espacio para que el móvil entre en mi bolsillo.",
    "experienceDate": "May 19, 2024",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Paolo Gatti (Sample)",
    "date": "May 17, 2024",
    "rating": 5,
    "initials": "PG",
    "avatarType": "blue",
    "body": "Il cavo corto va benissimo con la batteria esterna nella borsa, senza grovigli insieme alle chiavi.",
    "fullBody": "Il cavo corto va benissimo con la batteria esterna nella borsa, senza grovigli insieme alle chiavi.",
    "experienceDate": "May 16, 2024",
    "country": "Canada",
    "language": "it"
  },
  {
    "name": "Petra Fuchs (Sample)",
    "date": "May 14, 2024",
    "rating": 5,
    "initials": "PF",
    "avatarType": "teal",
    "body": "Meine erste Lieferung hatte einen kleinen Kratzer auf der Hülle. Nach einem Foto wurde ein Austausch organisiert. Die neue ist einwandfrei. Dass die Reklamation so unkompliziert geklappt...",
    "fullBody": "Meine erste Lieferung hatte einen kleinen Kratzer auf der Hülle. Nach einem Foto wurde ein Austausch organisiert. Die neue ist einwandfrei. Dass die Reklamation so unkompliziert geklappt hat, fand ich gut.",
    "experienceDate": "May 13, 2024",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Liesbeth Mertens (Sample)",
    "date": "May 12, 2024",
    "rating": 5,
    "initials": "LM",
    "avatarType": "pink",
    "body": "Bij het uitpakken bleek ik zelf de verkeerde aansluiting gekozen te hebben. De medewerker wees me op het verschil en legde uit hoe ik het ongebruikte kabeltje kon terugsturen. Dat ging...",
    "fullBody": "Bij het uitpakken bleek ik zelf de verkeerde aansluiting gekozen te hebben. De medewerker wees me op het verschil en legde uit hoe ik het ongebruikte kabeltje kon terugsturen. Dat ging zonder onduidelijke stappen.",
    "experienceDate": "May 11, 2024",
    "country": "Belgium",
    "language": "nl"
  },
  {
    "name": "عمار ش. (Sample)",
    "date": "May 9, 2024",
    "rating": 5,
    "initials": "عش",
    "avatarType": "slate",
    "body": "لا يوجد الكثير لأقوله عن السلك. يركب جيداً وطوله مناسب للمكتب، ولم أعد أنقل السلك الوحيد بين الغرف.",
    "fullBody": "لا يوجد الكثير لأقوله عن السلك. يركب جيداً وطوله مناسب للمكتب، ولم أعد أنقل السلك الوحيد بين الغرف.",
    "experienceDate": "May 8, 2024",
    "country": "Netherlands",
    "language": "ar"
  },
  {
    "name": "Émilie C. (Sample)",
    "date": "May 6, 2024",
    "rating": 5,
    "initials": "ÉC",
    "avatarType": "slate",
    "body": "J’ai pris le support pour garder une photo de référence sous les yeux quand je dessine. Il ne cache pas le bas de l’écran en position horizontale. Facile à déplacer entre mon carnet et...",
    "fullBody": "J’ai pris le support pour garder une photo de référence sous les yeux quand je dessine. Il ne cache pas le bas de l’écran en position horizontale. Facile à déplacer entre mon carnet et ma boîte de crayons.",
    "experienceDate": "May 5, 2024",
    "country": "Belgium",
    "language": "fr"
  },
  {
    "name": "Valeria Ibarra (Sample)",
    "date": "May 3, 2024",
    "rating": 5,
    "initials": "VI",
    "avatarType": "purple",
    "body": "El soporte de la laptop se dobla y cabe en mi mochila. Lo llevo cuando trabajo fuera de casa. Revisé las medidas antes de comprarlo y sí era del tamaño que esperaba.",
    "fullBody": "El soporte de la laptop se dobla y cabe en mi mochila. Lo llevo cuando trabajo fuera de casa. Revisé las medidas antes de comprarlo y sí era del tamaño que esperaba.",
    "experienceDate": "May 2, 2024",
    "country": "United States",
    "language": "es"
  },
  {
    "name": "Chiara Bianchi (Sample)",
    "date": "Apr 30, 2024",
    "rating": 2,
    "initials": "CB",
    "avatarType": "pink",
    "body": "Mi è arrivato un cavo con il connettore sbagliato. L'assistenza ha riconosciuto l'errore, ma sto ancora aspettando le indicazioni per il cambio dopo averle sollecitate. Per ora sono delusa.",
    "fullBody": "Mi è arrivato un cavo con il connettore sbagliato. L'assistenza ha riconosciuto l'errore, ma sto ancora aspettando le indicazioni per il cambio dopo averle sollecitate. Per ora sono delusa.",
    "experienceDate": "Apr 29, 2024",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Silke Neumann (Sample)",
    "date": "Apr 28, 2024",
    "rating": 5,
    "initials": "SN",
    "avatarType": "pink",
    "body": "Zum ersten Mal selbst einen Displayschutz angebracht und es sieht ordentlich aus. Habe mir beim Reinigen Zeit gelassen. Die Kamera vorne ist frei und beim Tippen merke ich keinen...",
    "fullBody": "Zum ersten Mal selbst einen Displayschutz angebracht und es sieht ordentlich aus. Habe mir beim Reinigen Zeit gelassen. Die Kamera vorne ist frei und beim Tippen merke ich keinen Unterschied.",
    "experienceDate": "Apr 27, 2024",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Hanne De Smet (Sample)",
    "date": "Apr 25, 2024",
    "rating": 5,
    "initials": "HS",
    "avatarType": "teal",
    "body": "Mijn oude tablethoes bleef niet meer rechtop staan. Deze vouwt netjes en blijft staan terwijl ik een aflevering kijk. De groene kleur is ook mooi.",
    "fullBody": "Mijn oude tablethoes bleef niet meer rechtop staan. Deze vouwt netjes en blijft staan terwijl ik een aflevering kijk. De groene kleur is ook mooi.",
    "experienceDate": "Apr 24, 2024",
    "country": "Belgium",
    "language": "nl"
  },
  {
    "name": "إيمان د. (Sample)",
    "date": "Apr 22, 2024",
    "rating": 5,
    "initials": "إد",
    "avatarType": "yellow",
    "body": "اشتريت غلافاً للابتوب كهدية. راجعت الأبعاد قبل الطلب وكان المقاس مناسباً. أعجبني أن شكله بسيط من دون تفاصيل كثيرة.",
    "fullBody": "اشتريت غلافاً للابتوب كهدية. راجعت الأبعاد قبل الطلب وكان المقاس مناسباً. أعجبني أن شكله بسيط من دون تفاصيل كثيرة.",
    "experienceDate": "Apr 21, 2024",
    "country": "United States",
    "language": "ar"
  },
  {
    "name": "Élise R. (Sample)",
    "date": "Apr 19, 2024",
    "rating": 5,
    "initials": "ÉR",
    "avatarType": "purple",
    "body": "Je ne savais plus quelle version de tablette j’avais. Le service client m’a expliqué où trouver la référence. La housse reçue est à la bonne taille, merci pour le coup de main.",
    "fullBody": "Je ne savais plus quelle version de tablette j’avais. Le service client m’a expliqué où trouver la référence. La housse reçue est à la bonne taille, merci pour le coup de main.",
    "experienceDate": "Apr 18, 2024",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Alba Cerezo (Sample)",
    "date": "Apr 16, 2024",
    "rating": 5,
    "initials": "AC",
    "avatarType": "yellow",
    "body": "Solo llevo dos tarjetas y este tarjetero me evita cargar con la cartera grande. Se quita fácilmente cuando llego a casa. El acabado me ha gustado.",
    "fullBody": "Solo llevo dos tarjetas y este tarjetero me evita cargar con la cartera grande. Se quita fácilmente cuando llego a casa. El acabado me ha gustado.",
    "experienceDate": "Apr 15, 2024",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Daniele Caputo (Sample)",
    "date": "Apr 14, 2024",
    "rating": 5,
    "initials": "DC",
    "avatarType": "teal",
    "body": "Condivido la scrivania e devo liberarla spesso. Questo supporto si chiude in un attimo. Lo infilo nel cassetto insieme al mouse e quando torno lo rimetto nella stessa posizione. È comodo...",
    "fullBody": "Condivido la scrivania e devo liberarla spesso. Questo supporto si chiude in un attimo. Lo infilo nel cassetto insieme al mouse e quando torno lo rimetto nella stessa posizione. È comodo per come lavoro io.",
    "experienceDate": "Apr 13, 2024",
    "country": "United States",
    "language": "it"
  },
  {
    "name": "Georg Auer (Sample)",
    "date": "Apr 11, 2024",
    "rating": 5,
    "initials": "GA",
    "avatarType": "slate",
    "body": "Habe versehentlich die alte Lieferadresse ausgewählt. Eine kurze Nachricht hat gereicht, sie wurde vor dem Versand geändert. Das Paket ist an der richtigen Adresse angekommen.",
    "fullBody": "Habe versehentlich die alte Lieferadresse ausgewählt. Eine kurze Nachricht hat gereicht, sie wurde vor dem Versand geändert. Das Paket ist an der richtigen Adresse angekommen.",
    "experienceDate": "Apr 10, 2024",
    "country": "Austria",
    "language": "de"
  },
  {
    "name": "Mireille N. (Sample)",
    "date": "Apr 8, 2024",
    "rating": 5,
    "initials": "MN",
    "avatarType": "purple",
    "body": "Dit hoesje blijft niet aan de voering van mijn sporttas hangen. Mijn vorige had van die stroeve randen. Klinkt als een klein ding, maar ik pak mijn telefoon er nu veel makkelijker uit.",
    "fullBody": "Dit hoesje blijft niet aan de voering van mijn sporttas hangen. Mijn vorige had van die stroeve randen. Klinkt als een klein ding, maar ik pak mijn telefoon er nu veel makkelijker uit.",
    "experienceDate": "Apr 7, 2024",
    "country": "United States",
    "language": "nl"
  },
  {
    "name": "ندى م. (Sample)",
    "date": "Apr 5, 2024",
    "rating": 5,
    "initials": "نم",
    "avatarType": "pink",
    "body": "أول مرة أركب حماية شاشة بنفسي وتطلع بهذا الشكل المرتب. أخذت وقتي بالتنظيف قبل التركيب ولم تظهر فقاعات.",
    "fullBody": "أول مرة أركب حماية شاشة بنفسي وتطلع بهذا الشكل المرتب. أخذت وقتي بالتنظيف قبل التركيب ولم تظهر فقاعات.",
    "experienceDate": "Apr 4, 2024",
    "country": "Germany",
    "language": "ar"
  },
  {
    "name": "Nicolas W. (Sample)",
    "date": "Apr 2, 2024",
    "rating": 5,
    "initials": "NW",
    "avatarType": "slate",
    "body": "Les photos des connecteurs m’ont aidé à choisir le bon câble. Il correspond à ce dont j’avais besoin, sans adaptateur supplémentaire.",
    "fullBody": "Les photos des connecteurs m’ont aidé à choisir le bon câble. Il correspond à ce dont j’avais besoin, sans adaptateur supplémentaire.",
    "experienceDate": "Apr 1, 2024",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Raúl Peñalver (Sample)",
    "date": "Mar 31, 2024",
    "rating": 5,
    "initials": "RP",
    "avatarType": "teal",
    "body": "Buen protector. No noto diferencia al escribir y los bordes quedan bien pegados. Lo puse hace unos días y de momento estoy contento.",
    "fullBody": "Buen protector. No noto diferencia al escribir y los bordes quedan bien pegados. Lo puse hace unos días y de momento estoy contento.",
    "experienceDate": "Mar 30, 2024",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Silvia Marchetti (Sample)",
    "date": "Mar 28, 2024",
    "rating": 5,
    "initials": "SM",
    "avatarType": "purple",
    "body": "La cover resta ben aderente agli angoli: nella vecchia entrava sempre polvere. Si sfila comunque senza fare una lotta ogni volta. Sono contenta della misura.",
    "fullBody": "La cover resta ben aderente agli angoli: nella vecchia entrava sempre polvere. Si sfila comunque senza fare una lotta ogni volta. Sono contenta della misura.",
    "experienceDate": "Mar 27, 2024",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Alina Voigt (Sample)",
    "date": "Mar 25, 2024",
    "rating": 5,
    "initials": "AV",
    "avatarType": "purple",
    "body": "Schöner Farbton, sauber verarbeitet. Mein Handy lässt sich mit der Hülle weiterhin gut in die kleine Umhängetasche schieben.",
    "fullBody": "Schöner Farbton, sauber verarbeitet. Mein Handy lässt sich mit der Hülle weiterhin gut in die kleine Umhängetasche schieben.",
    "experienceDate": "Mar 24, 2024",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Ilse Willems (Sample)",
    "date": "Mar 22, 2024",
    "rating": 5,
    "initials": "IW",
    "avatarType": "yellow",
    "body": "Het hoesje heeft voldoende ruimte rond de schakelaar aan de zijkant van mijn telefoon. Bij mijn vorige zat ik daar steeds met mijn nagel te prutsen. Dat kleine verschil merk ik elke dag.",
    "fullBody": "Het hoesje heeft voldoende ruimte rond de schakelaar aan de zijkant van mijn telefoon. Bij mijn vorige zat ik daar steeds met mijn nagel te prutsen. Dat kleine verschil merk ik elke dag.",
    "experienceDate": "Mar 21, 2024",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "هبة ر. (Sample)",
    "date": "Mar 19, 2024",
    "rating": 5,
    "initials": "هر",
    "avatarType": "purple",
    "body": "المحفظة صغيرة وخفيفة، وهذا بالضبط ما كنت أريده. أضع فيها بطاقتين وأطلع للمشاوير القريبة من دون حقيبة.",
    "fullBody": "المحفظة صغيرة وخفيفة، وهذا بالضبط ما كنت أريده. أضع فيها بطاقتين وأطلع للمشاوير القريبة من دون حقيبة.",
    "experienceDate": "Mar 18, 2024",
    "country": "France",
    "language": "ar"
  },
  {
    "name": "Clara P. (Sample)",
    "date": "Mar 17, 2024",
    "rating": 4,
    "initials": "CP",
    "avatarType": "yellow",
    "body": "La housse se ferme correctement et reste bien en place. J’aurais aimé une petite languette pour soulever plus facilement le rabat avec les ongles courts. Ce détail mis à part, elle fait...",
    "fullBody": "La housse se ferme correctement et reste bien en place. J’aurais aimé une petite languette pour soulever plus facilement le rabat avec les ongles courts. Ce détail mis à part, elle fait le travail.",
    "experienceDate": "Mar 16, 2024",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Nerea Vidal (Sample)",
    "date": "Mar 14, 2024",
    "rating": 5,
    "initials": "NV",
    "avatarType": "purple",
    "body": "Por fin puedo cargar el móvil desde el sofá sin tener que dejarlo colgando del enchufe. Elegí el cable largo y me viene estupendo.",
    "fullBody": "Por fin puedo cargar el móvil desde el sofá sin tener que dejarlo colgando del enchufe. Elegí el cable largo y me viene estupendo.",
    "experienceDate": "Mar 13, 2024",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Fabio Vitale (Sample)",
    "date": "Mar 11, 2024",
    "rating": 5,
    "initials": "FV",
    "avatarType": "slate",
    "body": "Ho restituito una custodia ancora chiusa perché nel frattempo avevo cambiato tablet. Mi hanno confermato la ricezione del reso e poi il rimborso. Procedura comprensibile, senza dover...",
    "fullBody": "Ho restituito una custodia ancora chiusa perché nel frattempo avevo cambiato tablet. Mi hanno confermato la ricezione del reso e poi il rimborso. Procedura comprensibile, senza dover inseguire nessuno.",
    "experienceDate": "Mar 10, 2024",
    "country": "Germany",
    "language": "it"
  },
  {
    "name": "Carolin Herzog (Sample)",
    "date": "Mar 8, 2024",
    "rating": 5,
    "initials": "CH",
    "avatarType": "teal",
    "body": "Habe meiner Schwester die gleiche Hülle in einer anderen Farbe bestellt. Meine sitzt gut und die neue passt bei ihr ebenfalls. Einfach und schön.",
    "fullBody": "Habe meiner Schwester die gleiche Hülle in einer anderen Farbe bestellt. Meine sitzt gut und die neue passt bei ihr ebenfalls. Einfach und schön.",
    "experienceDate": "Mar 7, 2024",
    "country": "United States",
    "language": "de"
  },
  {
    "name": "Stijn Claes (Sample)",
    "date": "Mar 5, 2024",
    "rating": 5,
    "initials": "SC",
    "avatarType": "yellow",
    "body": "Extra kabel gekocht om op kantoor te laten liggen. De lengte is juist voor het stopcontact naast mijn bureau en hij rolt makkelijk op. Tot nu toe geen problemen.",
    "fullBody": "Extra kabel gekocht om op kantoor te laten liggen. De lengte is juist voor het stopcontact naast mijn bureau en hij rolt makkelijk op. Tot nu toe geen problemen.",
    "experienceDate": "Mar 4, 2024",
    "country": "Belgium",
    "language": "nl"
  },
  {
    "name": "لينا ب. (Sample)",
    "date": "Mar 3, 2024",
    "rating": 5,
    "initials": "لب",
    "avatarType": "yellow",
    "body": "كنت قد اخترت المقاس الخطأ لغلاف اللابتوب. انتبهت قبل التجهيز وتواصلت معهم، وعدلوا الاختيار بعد التأكد من الأبعاد. وصل المقاس المناسب.",
    "fullBody": "كنت قد اخترت المقاس الخطأ لغلاف اللابتوب. انتبهت قبل التجهيز وتواصلت معهم، وعدلوا الاختيار بعد التأكد من الأبعاد. وصل المقاس المناسب.",
    "experienceDate": "Mar 2, 2024",
    "country": "France",
    "language": "ar"
  },
  {
    "name": "Sébastien P. (Sample)",
    "date": "Feb 29, 2024",
    "rating": 5,
    "initials": "SP",
    "avatarType": "purple",
    "body": "Câble de rechange laissé dans ma valise. Il s’enroule facilement et prend peu de place. Ça évite de débrancher celui de la maison au dernier moment.",
    "fullBody": "Câble de rechange laissé dans ma valise. Il s’enroule facilement et prend peu de place. Ça évite de débrancher celui de la maison au dernier moment.",
    "experienceDate": "Feb 28, 2024",
    "country": "Switzerland",
    "language": "fr"
  },
  {
    "name": "Pablo Cuenca (Sample)",
    "date": "Feb 26, 2024",
    "rating": 5,
    "initials": "PC",
    "avatarType": "slate",
    "body": "Compré el soporte para mirar recetas en la tableta. Ocupa poco en la encimera y puedo leer desde donde corto las verduras. Una compra sencilla que estoy usando mucho.",
    "fullBody": "Compré el soporte para mirar recetas en la tableta. Ocupa poco en la encimera y puedo leer desde donde corto las verduras. Una compra sencilla que estoy usando mucho.",
    "experienceDate": "Feb 25, 2024",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Gabriele Serra (Sample)",
    "date": "Feb 23, 2024",
    "rating": 5,
    "initials": "GS",
    "avatarType": "teal",
    "body": "La base del supporto non balla quando tocco lo schermo per fermare un video. Era il difetto di quello che avevo prima, quindi per me è già un bel miglioramento.",
    "fullBody": "La base del supporto non balla quando tocco lo schermo per fermare un video. Era il difetto di quello che avevo prima, quindi per me è già un bel miglioramento.",
    "experienceDate": "Feb 22, 2024",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Jasmin Scholz (Sample)",
    "date": "Feb 20, 2024",
    "rating": 5,
    "initials": "JS",
    "avatarType": "pink",
    "body": "Zwei Hüllen für unterschiedliche Modelle bestellt. Auf den Verpackungen stand klar, welche welche ist. Konnte die für meine Mutter direkt einpacken und verschenken.",
    "fullBody": "Zwei Hüllen für unterschiedliche Modelle bestellt. Auf den Verpackungen stand klar, welche welche ist. Konnte die für meine Mutter direkt einpacken und verschenken.",
    "experienceDate": "Feb 19, 2024",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Roos van Beek (Sample)",
    "date": "Feb 18, 2024",
    "rating": 5,
    "initials": "RB",
    "avatarType": "yellow",
    "body": "Eindelijk zelf een screenprotector geplakt zonder stofje in het midden. Het schoonmaaksetje hielp en ik heb de tijd genomen. Het scherm blijft prettig reageren.",
    "fullBody": "Eindelijk zelf een screenprotector geplakt zonder stofje in het midden. Het schoonmaaksetje hielp en ik heb de tijd genomen. Het scherm blijft prettig reageren.",
    "experienceDate": "Feb 17, 2024",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "نديم ع. (Sample)",
    "date": "Feb 15, 2024",
    "rating": 5,
    "initials": "نع",
    "avatarType": "blue",
    "body": "ثاني طلب لي، واخترت هذه المرة كفراً مع حماية شاشة. القطعتان مناسبتان لبعضهما والحواف بقيت ثابتة بعد التركيب.",
    "fullBody": "ثاني طلب لي، واخترت هذه المرة كفراً مع حماية شاشة. القطعتان مناسبتان لبعضهما والحواف بقيت ثابتة بعد التركيب.",
    "experienceDate": "Feb 14, 2024",
    "country": "Canada",
    "language": "ar"
  },
  {
    "name": "Théo A. (Sample)",
    "date": "Feb 12, 2024",
    "rating": 5,
    "initials": "TA",
    "avatarType": "blue",
    "body": "Support stable sur mon petit bureau. Je peux poser le téléphone à côté du clavier sans qu’il prenne toute la place. Simple et utile.",
    "fullBody": "Support stable sur mon petit bureau. Je peux poser le téléphone à côté du clavier sans qu’il prenne toute la place. Simple et utile.",
    "experienceDate": "Feb 11, 2024",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Adrián Fuentes (Sample)",
    "date": "Feb 9, 2024",
    "rating": 5,
    "initials": "AF",
    "avatarType": "blue",
    "body": "Compramos el mismo accesorio mi pareja y yo sin hablarlo. Devolví el mío sin abrir y recibí la confirmación del reembolso cuando lo revisaron. Las instrucciones eran claras.",
    "fullBody": "Compramos el mismo accesorio mi pareja y yo sin hablarlo. Devolví el mío sin abrir y recibí la confirmación del reembolso cuando lo revisaron. Las instrucciones eran claras.",
    "experienceDate": "Feb 8, 2024",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Valentina Fontana (Sample)",
    "date": "Feb 6, 2024",
    "rating": 5,
    "initials": "VF",
    "avatarType": "pink",
    "body": "Avevo dubbi sullo spessore del portacarte. Alla fine ho deciso di provarlo. Lo tengo sul telefono durante il giorno e lo stacco quando uso il supporto in macchina. Questa possibilità mi...",
    "fullBody": "Avevo dubbi sullo spessore del portacarte. Alla fine ho deciso di provarlo. Lo tengo sul telefono durante il giorno e lo stacco quando uso il supporto in macchina. Questa possibilità mi sta tornando più utile del previsto.",
    "experienceDate": "Feb 5, 2024",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Nele Braun (Sample)",
    "date": "Feb 4, 2024",
    "rating": 5,
    "initials": "NB",
    "avatarType": "teal",
    "body": "Die gelbe Hülle macht richtig gute Laune. Passt auf mein Handy und ist nicht so klobig wie meine alte.",
    "fullBody": "Die gelbe Hülle macht richtig gute Laune. Passt auf mein Handy und ist nicht so klobig wie meine alte.",
    "experienceDate": "Feb 3, 2024",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Nienke K. (Sample)",
    "date": "Feb 1, 2024",
    "rating": 5,
    "initials": "NK",
    "avatarType": "slate",
    "body": "Ik gebruik mijn tablet veel in de trein. De hoes sluit netjes en laat ruimte om de kabel aan te sluiten zonder alles open te vouwen. Precies wat ik nodig had voor onderweg.",
    "fullBody": "Ik gebruik mijn tablet veel in de trein. De hoes sluit netjes en laat ruimte om de kabel aan te sluiten zonder alles open te vouwen. Precies wat ik nodig had voor onderweg.",
    "experienceDate": "Jan 31, 2024",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "ديمة خ. (Sample)",
    "date": "Jan 29, 2024",
    "rating": 5,
    "initials": "دخ",
    "avatarType": "yellow",
    "body": "اخترت لوناً فاتحاً للكفر هذه المرة وأعجبني كثيراً. ليس ثقيلاً على الهاتف وأقدر أمسكه براحة بيد واحدة.",
    "fullBody": "اخترت لوناً فاتحاً للكفر هذه المرة وأعجبني كثيراً. ليس ثقيلاً على الهاتف وأقدر أمسكه براحة بيد واحدة.",
    "experienceDate": "Jan 28, 2024",
    "country": "Belgium",
    "language": "ar"
  },
  {
    "name": "Chloé M. (Sample)",
    "date": "Jan 26, 2024",
    "rating": 4,
    "initials": "CM",
    "avatarType": "pink",
    "body": "La coque me plaît et les découpes tombent juste. Le bord autour de l’appareil photo dépasse un peu, donc mon téléphone rentre moins facilement dans ma petite pochette. Je la garde quand...",
    "fullBody": "La coque me plaît et les découpes tombent juste. Le bord autour de l’appareil photo dépasse un peu, donc mon téléphone rentre moins facilement dans ma petite pochette. Je la garde quand même, la prise en main est bonne.",
    "experienceDate": "Jan 25, 2024",
    "country": "Belgium",
    "language": "fr"
  },
  {
    "name": "Eva Navarro (Sample)",
    "date": "Jan 23, 2024",
    "rating": 5,
    "initials": "EN",
    "avatarType": "yellow",
    "body": "No encontraba la confirmación del pedido. Pensé que había puesto mal el correo, pero estaba en la carpeta de no deseado. Desde atención al cliente me ayudaron a localizarla y me...",
    "fullBody": "No encontraba la confirmación del pedido. Pensé que había puesto mal el correo, pero estaba en la carpeta de no deseado. Desde atención al cliente me ayudaron a localizarla y me reenviaron los datos. La funda llegó bien y tiene un tacto agradable.",
    "experienceDate": "Jan 22, 2024",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Tommaso Fabbri (Sample)",
    "date": "Jan 21, 2024",
    "rating": 5,
    "initials": "TF",
    "avatarType": "slate",
    "body": "Ho preso il cavo arancione perché in casa quelli neri finiscono sempre per mescolarsi. Adesso riconosco subito il mio. Il rivestimento è flessibile e si raccoglie facilmente.",
    "fullBody": "Ho preso il cavo arancione perché in casa quelli neri finiscono sempre per mescolarsi. Adesso riconosco subito il mio. Il rivestimento è flessibile e si raccoglie facilmente.",
    "experienceDate": "Jan 20, 2024",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Uwe Lindner (Sample)",
    "date": "Jan 18, 2024",
    "rating": 5,
    "initials": "UL",
    "avatarType": "blue",
    "body": "Ich war bei der Tabletgröße unsicher. Habe die Nummer aus den Einstellungen geschickt und bekam eine verständliche Antwort. Die empfohlene Hülle passt, das hat mir eine Rücksendung erspart.",
    "fullBody": "Ich war bei der Tabletgröße unsicher. Habe die Nummer aus den Einstellungen geschickt und bekam eine verständliche Antwort. Die empfohlene Hülle passt, das hat mir eine Rücksendung erspart.",
    "experienceDate": "Jan 17, 2024",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Bert Verstraete (Sample)",
    "date": "Jan 15, 2024",
    "rating": 5,
    "initials": "BV",
    "avatarType": "slate",
    "body": "De kaarthouder zit goed op mijn magnetische hoes en is makkelijk af te nemen. Handig om mijn gewone portefeuille af en toe thuis te laten.",
    "fullBody": "De kaarthouder zit goed op mijn magnetische hoes en is makkelijk af te nemen. Handig om mijn gewone portefeuille af en toe thuis te laten.",
    "experienceDate": "Jan 14, 2024",
    "country": "Belgium",
    "language": "nl"
  },
  {
    "name": "ماهر ن. (Sample)",
    "date": "Jan 12, 2024",
    "rating": 5,
    "initials": "من",
    "avatarType": "teal",
    "body": "السلك مرن ويسهل لفه داخل حقيبة السفر. أخذته ليبقى في الحقيبة بدلاً من نسيان سلك البيت كل مرة.",
    "fullBody": "السلك مرن ويسهل لفه داخل حقيبة السفر. أخذته ليبقى في الحقيبة بدلاً من نسيان سلك البيت كل مرة.",
    "experienceDate": "Jan 11, 2024",
    "country": "Canada",
    "language": "ar"
  },
  {
    "name": "Malik S. (Sample)",
    "date": "Jan 9, 2024",
    "rating": 5,
    "initials": "MS",
    "avatarType": "teal",
    "body": "J’utilise le petit anneau au dos de la coque dans les transports. Le téléphone tient plus facilement d’une main quand je suis debout. Une fois replié, l’anneau ne me gêne pas dans la poche.",
    "fullBody": "J’utilise le petit anneau au dos de la coque dans les transports. Le téléphone tient plus facilement d’une main quand je suis debout. Une fois replié, l’anneau ne me gêne pas dans la poche.",
    "experienceDate": "Jan 8, 2024",
    "country": "France",
    "language": "fr"
  }
);

// Further international exam fixtures; the English (Sample) label stays visible.
const additionalInternationalReviews = [
  {
    "name": "حنان ل. (Sample)",
    "date": "Jan 7, 2024",
    "rating": 5,
    "initials": "حل",
    "avatarType": "yellow",
    "body": "اخترت الكفر من أجل ملمس الحواف أكثر من شكله. أمسك الهاتف طويلاً خلال مكالمات العائلة، والحافة السفلية لا تزعج إصبعي. راضية عنه.",
    "fullBody": "اخترت الكفر من أجل ملمس الحواف أكثر من شكله. أمسك الهاتف طويلاً خلال مكالمات العائلة، والحافة السفلية لا تزعج إصبعي. راضية عنه.",
    "experienceDate": "Jan 6, 2024",
    "country": "Italy",
    "language": "ar"
  },
  {
    "name": "Tristan D. (Sample)",
    "date": "Jan 4, 2024",
    "rating": 5,
    "initials": "TD",
    "avatarType": "slate",
    "body": "Mon support reste sur une étagère peu profonde. J’ai vérifié la taille du socle avant de commander et il tient sans dépasser. Il ne gêne pas les livres à côté, c’était mon principal critère.",
    "fullBody": "Mon support reste sur une étagère peu profonde. J’ai vérifié la taille du socle avant de commander et il tient sans dépasser. Il ne gêne pas les livres à côté, c’était mon principal critère.",
    "experienceDate": "Jan 3, 2024",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Damián Hidalgo (Sample)",
    "date": "Jan 1, 2024",
    "rating": 5,
    "initials": "DH",
    "avatarType": "purple",
    "body": "El protector incluye unas pegatinas para retirar las motas antes de colocarlo. Encontré una justo al final y pude quitarla sin volver a limpiar todo. Ese detalle me vino muy bien.",
    "fullBody": "El protector incluye unas pegatinas para retirar las motas antes de colocarlo. Encontré una justo al final y pude quitarla sin volver a limpiar todo. Ese detalle me vino muy bien.",
    "experienceDate": "Dec 31, 2023",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Massimo Lanzi (Sample)",
    "date": "Dec 29, 2023",
    "rating": 5,
    "initials": "ML",
    "avatarType": "slate",
    "body": "Le foto dei fori sul fondo mi hanno aiutato a confrontare le due cover che stavo guardando. Ho scelto quella corretta senza andare a tentativi. Dal vivo corrisponde alle immagini.",
    "fullBody": "Le foto dei fori sul fondo mi hanno aiutato a confrontare le due cover che stavo guardando. Ho scelto quella corretta senza andare a tentativi. Dal vivo corrisponde alle immagini.",
    "experienceDate": "Dec 28, 2023",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Benedikt Schulz (Sample)",
    "date": "Dec 26, 2023",
    "rating": 4,
    "initials": "BS",
    "avatarType": "blue",
    "body": "Mit dem Kabel ist alles gut. Die Versandkiste war für so ein kleines Teil allerdings ziemlich groß und voller Füllpapier. Das hätte wirklich kompakter sein können.",
    "fullBody": "Mit dem Kabel ist alles gut. Die Versandkiste war für so ein kleines Teil allerdings ziemlich groß und voller Füllpapier. Das hätte wirklich kompakter sein können.",
    "experienceDate": "Dec 25, 2023",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Henk Brouwer (Sample)",
    "date": "Dec 24, 2023",
    "rating": 5,
    "initials": "HB",
    "avatarType": "blue",
    "body": "De afbeeldingen lieten ook de binnenkant van de hoes zien. Daardoor wist ik vooraf hoe het tablet vastgezet wordt. Geen verrassingen toen hij binnenkwam.",
    "fullBody": "De afbeeldingen lieten ook de binnenkant van de hoes zien. Daardoor wist ik vooraf hoe het tablet vastgezet wordt. Geen verrassingen toen hij binnenkwam.",
    "experienceDate": "Dec 23, 2023",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "أمل ي. (Sample)",
    "date": "Dec 21, 2023",
    "rating": 5,
    "initials": "أي",
    "avatarType": "pink",
    "body": "أعجبني أن غلاف حماية الشاشة صلب وسهل الفتح. أبقيت الحماية الاحتياطية داخله في الدرج، بدلاً من تركها مع الأدوات الصغيرة وتضييعها.",
    "fullBody": "أعجبني أن غلاف حماية الشاشة صلب وسهل الفتح. أبقيت الحماية الاحتياطية داخله في الدرج، بدلاً من تركها مع الأدوات الصغيرة وتضييعها.",
    "experienceDate": "Dec 20, 2023",
    "country": "Germany",
    "language": "ar"
  },
  {
    "name": "Corentin S. (Sample)",
    "date": "Dec 18, 2023",
    "rating": 5,
    "initials": "CS",
    "avatarType": "slate",
    "body": "Ma commande a été envoyée en deux colis. J’avais reçu un message expliquant la séparation avant que le premier arrive, donc je ne me suis pas inquiété pour la pièce manquante. Tout est...",
    "fullBody": "Ma commande a été envoyée en deux colis. J’avais reçu un message expliquant la séparation avant que le premier arrive, donc je ne me suis pas inquiété pour la pièce manquante. Tout est arrivé ensuite.",
    "experienceDate": "Dec 17, 2023",
    "country": "United States",
    "language": "fr"
  },
  {
    "name": "Marcos Aguilar (Sample)",
    "date": "Dec 15, 2023",
    "rating": 5,
    "initials": "MA",
    "avatarType": "purple",
    "body": "Compré el tarjetero para llevar la tarjeta del aparcamiento separada de la cartera. La saco varias veces al día y la abertura permite empujarla con el pulgar. Más cómodo de lo que pensaba.",
    "fullBody": "Compré el tarjetero para llevar la tarjeta del aparcamiento separada de la cartera. La saco varias veces al día y la abertura permite empujarla con el pulgar. Más cómodo de lo que pensaba.",
    "experienceDate": "Dec 14, 2023",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Angela Farina (Sample)",
    "date": "Dec 12, 2023",
    "rating": 5,
    "initials": "AF",
    "avatarType": "pink",
    "body": "Il bordo rialzato della cover tiene le lenti lontane dal piano quando appoggio il telefono sulla scrivania. Non è enorme e il retro resta gradevole da vedere.",
    "fullBody": "Il bordo rialzato della cover tiene le lenti lontane dal piano quando appoggio il telefono sulla scrivania. Non è enorme e il retro resta gradevole da vedere.",
    "experienceDate": "Dec 11, 2023",
    "country": "United States",
    "language": "it"
  },
  {
    "name": "Torsten Bergmann (Sample)",
    "date": "Dec 10, 2023",
    "rating": 5,
    "initials": "TB",
    "avatarType": "yellow",
    "body": "Ich habe nur einen kleinen Kabeladapter bestellt und trotzdem eine klare Bestellübersicht bekommen. Anschluss passt und das Teil ist ordentlich verpackt angekommen. Mehr war nicht nötig.",
    "fullBody": "Ich habe nur einen kleinen Kabeladapter bestellt und trotzdem eine klare Bestellübersicht bekommen. Anschluss passt und das Teil ist ordentlich verpackt angekommen. Mehr war nicht nötig.",
    "experienceDate": "Dec 9, 2023",
    "country": "Canada",
    "language": "de"
  },
  {
    "name": "Sebastiaan de Wit (Sample)",
    "date": "Dec 7, 2023",
    "rating": 4,
    "initials": "SW",
    "avatarType": "slate",
    "body": "Mijn vraag over twee beschermglazen werd goed beantwoord. Er stond alleen geen productlink bij, dus ik moest nog eens vragen welk artikel precies bedoeld werd. Daarna het juiste besteld...",
    "fullBody": "Mijn vraag over twee beschermglazen werd goed beantwoord. Er stond alleen geen productlink bij, dus ik moest nog eens vragen welk artikel precies bedoeld werd. Daarna het juiste besteld en dat past.",
    "experienceDate": "Dec 6, 2023",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "نسرين ع. (Sample)",
    "date": "Dec 4, 2023",
    "rating": 5,
    "initials": "نع",
    "avatarType": "purple",
    "body": "أحفظ التابلت في درج مشترك مع دفاتر وأقلام. الغطاء الجديد يغلق من دون أن تبقى زاوية مكشوفة، ولا يحتاج إلى ضغط حتى يستقر. استخدام بسيط لكنه مناسب لي.",
    "fullBody": "أحفظ التابلت في درج مشترك مع دفاتر وأقلام. الغطاء الجديد يغلق من دون أن تبقى زاوية مكشوفة، ولا يحتاج إلى ضغط حتى يستقر. استخدام بسيط لكنه مناسب لي.",
    "experienceDate": "Dec 3, 2023",
    "country": "Canada",
    "language": "ar"
  },
  {
    "name": "Raphaël J. (Sample)",
    "date": "Dec 1, 2023",
    "rating": 5,
    "initials": "RJ",
    "avatarType": "blue",
    "body": "Le stylet me sert à ajouter des mesures sur mes patrons de couture numérisés. Je peux écrire dans les petits espaces sans zoomer autant qu’avec le doigt. Content de l’avoir essayé.",
    "fullBody": "Le stylet me sert à ajouter des mesures sur mes patrons de couture numérisés. Je peux écrire dans les petits espaces sans zoomer autant qu’avec le doigt. Content de l’avoir essayé.",
    "experienceDate": "Nov 30, 2023",
    "country": "Switzerland",
    "language": "fr"
  },
  {
    "name": "Paula Otero (Sample)",
    "date": "Nov 28, 2023",
    "rating": 5,
    "initials": "PO",
    "avatarType": "slate",
    "body": "La funda que miraba no estaba disponible en mi tamaño. Pregunté y me indicaron otra opción compatible, explicando la diferencia de acabado. Preferí esa y estoy contenta con cómo queda.",
    "fullBody": "La funda que miraba no estaba disponible en mi tamaño. Pregunté y me indicaron otra opción compatible, explicando la diferencia de acabado. Preferí esa y estoy contenta con cómo queda.",
    "experienceDate": "Nov 27, 2023",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Michele De Santis (Sample)",
    "date": "Nov 26, 2023",
    "rating": 5,
    "initials": "MD",
    "avatarType": "purple",
    "body": "Ho controllato il riepilogo dal telefono e ho riconosciuto subito ogni variante grazie ai nomi dei colori. Tre cover simili, nessuna scambiata nel pacco. Mi è stato facile verificare tutto.",
    "fullBody": "Ho controllato il riepilogo dal telefono e ho riconosciuto subito ogni variante grazie ai nomi dei colori. Tre cover simili, nessuna scambiata nel pacco. Mi è stato facile verificare tutto.",
    "experienceDate": "Nov 25, 2023",
    "country": "United States",
    "language": "it"
  },
  {
    "name": "Meike Schuster (Sample)",
    "date": "Nov 23, 2023",
    "rating": 5,
    "initials": "MS",
    "avatarType": "purple",
    "body": "Für mein privates und mein berufliches Handy habe ich unterschiedliche Hüllenfarben genommen. Jetzt greife ich morgens gleich zum richtigen. Beide Modelle passen und fühlen sich ähnlich an.",
    "fullBody": "Für mein privates und mein berufliches Handy habe ich unterschiedliche Hüllenfarben genommen. Jetzt greife ich morgens gleich zum richtigen. Beide Modelle passen und fühlen sich ähnlich an.",
    "experienceDate": "Nov 22, 2023",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Elke De Clercq (Sample)",
    "date": "Nov 20, 2023",
    "rating": 5,
    "initials": "EC",
    "avatarType": "pink",
    "body": "Ik wou maar één artikel uit mijn bestelling terugsturen. De uitleg maakte duidelijk wat ik moest vermelden, zodat de andere producten erbuiten bleven. Dat is nadien ook correct verwerkt.",
    "fullBody": "Ik wou maar één artikel uit mijn bestelling terugsturen. De uitleg maakte duidelijk wat ik moest vermelden, zodat de andere producten erbuiten bleven. Dat is nadien ook correct verwerkt.",
    "experienceDate": "Nov 19, 2023",
    "country": "Belgium",
    "language": "nl"
  },
  {
    "name": "غادة س. (Sample)",
    "date": "Nov 17, 2023",
    "rating": 5,
    "initials": "غس",
    "avatarType": "purple",
    "body": "أحتاج القلم أساساً للتوقيع وكتابة ملاحظات قصيرة على المستندات. الكتابة أوضح من استخدام الإصبع بكثير، وحجمه مريح عندما أنقله بين يدي ولوحة المفاتيح.",
    "fullBody": "أحتاج القلم أساساً للتوقيع وكتابة ملاحظات قصيرة على المستندات. الكتابة أوضح من استخدام الإصبع بكثير، وحجمه مريح عندما أنقله بين يدي ولوحة المفاتيح.",
    "experienceDate": "Nov 16, 2023",
    "country": "Belgium",
    "language": "ar"
  },
  {
    "name": "Noémie V. (Sample)",
    "date": "Nov 14, 2023",
    "rating": 3,
    "initials": "NV",
    "avatarType": "pink",
    "body": "La housse est jolie, mais un bord recouvre en partie les ouvertures du haut-parleur de ma tablette. J’entends une différence quand je l’enlève. Je peux m’en servir pour lire, moins...",
    "fullBody": "La housse est jolie, mais un bord recouvre en partie les ouvertures du haut-parleur de ma tablette. J’entends une différence quand je l’enlève. Je peux m’en servir pour lire, moins volontiers pour regarder une vidéo.",
    "experienceDate": "Nov 13, 2023",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Luis Montoya (Sample)",
    "date": "Nov 12, 2023",
    "rating": 4,
    "initials": "LM",
    "avatarType": "pink",
    "body": "La funda del portátil tiene buen tamaño y cierra sin apretar. El tirador de la cremallera hace algo de ruido cuando lo apoyo sobre la mesa. Un detalle pequeño, pero preferiría que fuera...",
    "fullBody": "La funda del portátil tiene buen tamaño y cierra sin apretar. El tirador de la cremallera hace algo de ruido cuando lo apoyo sobre la mesa. Un detalle pequeño, pero preferiría que fuera más discreto.",
    "experienceDate": "Nov 11, 2023",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Luigi Morelli (Sample)",
    "date": "Nov 9, 2023",
    "rating": 5,
    "initials": "LM",
    "avatarType": "slate",
    "body": "Con la custodia nuova il tablet entra ancora nel divisorio della mia borsa, anche tenendo il taccuino accanto.",
    "fullBody": "Con la custodia nuova il tablet entra ancora nel divisorio della mia borsa, anche tenendo il taccuino accanto.",
    "experienceDate": "Nov 8, 2023",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Julian Thiel (Sample)",
    "date": "Nov 6, 2023",
    "rating": 5,
    "initials": "JT",
    "avatarType": "teal",
    "body": "Ein Kabel mit gut erkennbaren Anschlüssen auf den Produktbildern. Ich konnte sofort sehen, dass beide Enden zu meinen Geräten passen. Geliefert wurde genau diese Variante.",
    "fullBody": "Ein Kabel mit gut erkennbaren Anschlüssen auf den Produktbildern. Ich konnte sofort sehen, dass beide Enden zu meinen Geräten passen. Geliefert wurde genau diese Variante.",
    "experienceDate": "Nov 5, 2023",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Fenne Kamphuis (Sample)",
    "date": "Nov 3, 2023",
    "rating": 5,
    "initials": "FK",
    "avatarType": "yellow",
    "body": "Ik wilde een hoes waarmee mijn tablet op een stoffen poef kan liggen zonder dat de sluiting aan de bekleding blijft hangen. Deze heeft een gladde buitenkant. Precies wat ik zocht voor...",
    "fullBody": "Ik wilde een hoes waarmee mijn tablet op een stoffen poef kan liggen zonder dat de sluiting aan de bekleding blijft hangen. Deze heeft een gladde buitenkant. Precies wat ik zocht voor thuis op de bank.",
    "experienceDate": "Nov 2, 2023",
    "country": "Canada",
    "language": "nl"
  },
  {
    "name": "سحر م. (Sample)",
    "date": "Oct 31, 2023",
    "rating": 5,
    "initials": "سم",
    "avatarType": "purple",
    "body": "اختيار سلك بلون مختلف كان فكرة بسيطة ومفيدة. صار معروفاً في البيت أي سلك لي، ولم أعد أبحث عنه بين الأسلاك المتشابهة.",
    "fullBody": "اختيار سلك بلون مختلف كان فكرة بسيطة ومفيدة. صار معروفاً في البيت أي سلك لي، ولم أعد أبحث عنه بين الأسلاك المتشابهة.",
    "experienceDate": "Oct 30, 2023",
    "country": "France",
    "language": "ar"
  },
  {
    "name": "Benoît E. (Sample)",
    "date": "Oct 29, 2023",
    "rating": 5,
    "initials": "BE",
    "avatarType": "teal",
    "body": "Le câble court relie mon téléphone à la batterie externe sans faire une grande boucle dans mon sac. Beaucoup plus agréable quand je dois sortir les deux ensemble.",
    "fullBody": "Le câble court relie mon téléphone à la batterie externe sans faire une grande boucle dans mon sac. Beaucoup plus agréable quand je dois sortir les deux ensemble.",
    "experienceDate": "Oct 28, 2023",
    "country": "Canada",
    "language": "fr"
  },
  {
    "name": "Iván Gallego (Sample)",
    "date": "Oct 26, 2023",
    "rating": 5,
    "initials": "IG",
    "avatarType": "yellow",
    "body": "El cable antiguo se salía al mover ligeramente el teléfono. Este conector queda bien asentado y puedo dejarlo cargando sin estar comprobándolo a cada rato. Era lo que necesitaba cambiar.",
    "fullBody": "El cable antiguo se salía al mover ligeramente el teléfono. Este conector queda bien asentado y puedo dejarlo cargando sin estar comprobándolo a cada rato. Era lo que necesitaba cambiar.",
    "experienceDate": "Oct 25, 2023",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Teresa Donati (Sample)",
    "date": "Oct 23, 2023",
    "rating": 5,
    "initials": "TD",
    "avatarType": "yellow",
    "body": "Il pacchetto è entrato nella cassetta della posta, cosa comodissima visto che ero fuori. Dentro il cavetto era ben fermo nella sua confezione. Nessun problema al primo utilizzo.",
    "fullBody": "Il pacchetto è entrato nella cassetta della posta, cosa comodissima visto che ero fuori. Dentro il cavetto era ben fermo nella sua confezione. Nessun problema al primo utilizzo.",
    "experienceDate": "Oct 22, 2023",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Miriam Falk (Sample)",
    "date": "Oct 20, 2023",
    "rating": 4,
    "initials": "MF",
    "avatarType": "purple",
    "body": "Die dunkle Hülle sitzt sauber, zeigt aber Fingerabdrücke deutlicher als erwartet. Einmal abwischen hilft. Ich mag sie trotzdem, würde beim nächsten Mal nur eine hellere Oberfläche wählen.",
    "fullBody": "Die dunkle Hülle sitzt sauber, zeigt aber Fingerabdrücke deutlicher als erwartet. Einmal abwischen hilft. Ich mag sie trotzdem, würde beim nächsten Mal nur eine hellere Oberfläche wählen.",
    "experienceDate": "Oct 19, 2023",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Dries Goossens (Sample)",
    "date": "Oct 17, 2023",
    "rating": 5,
    "initials": "DG",
    "avatarType": "teal",
    "body": "Op mijn houten tafel laten de voetjes van de standaard geen strepen achter. Hij verschuift ook niet zodra ik mijn gsm erop zet. Daar ben ik content mee.",
    "fullBody": "Op mijn houten tafel laten de voetjes van de standaard geen strepen achter. Hij verschuift ook niet zodra ik mijn gsm erop zet. Daar ben ik content mee.",
    "experienceDate": "Oct 16, 2023",
    "country": "Belgium",
    "language": "nl"
  },
  {
    "name": "وفاء ز. (Sample)",
    "date": "Oct 15, 2023",
    "rating": 5,
    "initials": "وز",
    "avatarType": "pink",
    "body": "بطاقة النادي أصغر قليلاً من بطاقة البنك، وكنت أخشى أن تضيع داخل المحفظة. ما زلت أستطيع الوصول للبطاقتين بسهولة. أعجبني أن فتحة الإخراج عملية وليست مجرد شكل.",
    "fullBody": "بطاقة النادي أصغر قليلاً من بطاقة البنك، وكنت أخشى أن تضيع داخل المحفظة. ما زلت أستطيع الوصول للبطاقتين بسهولة. أعجبني أن فتحة الإخراج عملية وليست مجرد شكل.",
    "experienceDate": "Oct 14, 2023",
    "country": "United States",
    "language": "ar"
  },
  {
    "name": "Marianne T. (Sample)",
    "date": "Oct 12, 2023",
    "rating": 4,
    "initials": "MT",
    "avatarType": "purple",
    "body": "L’étui tient bien fermé et le crayon reste en place. Comme je suis gauchère, sa boucle à droite n’est pas idéale pour moi. Ça reste un bon étui, il faut juste prendre le pli.",
    "fullBody": "L’étui tient bien fermé et le crayon reste en place. Comme je suis gauchère, sa boucle à droite n’est pas idéale pour moi. Ça reste un bon étui, il faut juste prendre le pli.",
    "experienceDate": "Oct 11, 2023",
    "country": "Switzerland",
    "language": "fr"
  },
  {
    "name": "Patricia Domínguez (Sample)",
    "date": "Oct 9, 2023",
    "rating": 5,
    "initials": "PD",
    "avatarType": "blue",
    "body": "Elegí una funda con los bordes más oscuros porque ahí se me ensuciaba siempre la anterior. La combinación queda bonita y no veo cada pequeña marca al coger el móvil. Contenta con ella.",
    "fullBody": "Elegí una funda con los bordes más oscuros porque ahí se me ensuciaba siempre la anterior. La combinación queda bonita y no veo cada pequeña marca al coger el móvil. Contenta con ella.",
    "experienceDate": "Oct 8, 2023",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Dario Neri (Sample)",
    "date": "Oct 6, 2023",
    "rating": 5,
    "initials": "DN",
    "avatarType": "teal",
    "body": "Dovevo annullare un accessorio prima che partisse. Ho scritto e mi hanno confermato che erano ancora in tempo. L’altro articolo è rimasto nell’ordine. Ho ricevuto il rimborso della parte...",
    "fullBody": "Dovevo annullare un accessorio prima che partisse. Ho scritto e mi hanno confermato che erano ancora in tempo. L’altro articolo è rimasto nell’ordine. Ho ricevuto il rimborso della parte annullata senza dover cancellare tutto.",
    "experienceDate": "Oct 5, 2023",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Klaus Reuter (Sample)",
    "date": "Oct 3, 2023",
    "rating": 5,
    "initials": "KR",
    "avatarType": "slate",
    "body": "Den Displayschutz konnte ich vor dem Abziehen der Folie ordentlich auflegen und die Aussparungen prüfen. Alles stimmte. Danach war das Anbringen deutlich weniger nervig, als ich...",
    "fullBody": "Den Displayschutz konnte ich vor dem Abziehen der Folie ordentlich auflegen und die Aussparungen prüfen. Alles stimmte. Danach war das Anbringen deutlich weniger nervig, als ich befürchtet hatte.",
    "experienceDate": "Oct 2, 2023",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Floris Mulder (Sample)",
    "date": "Oct 1, 2023",
    "rating": 5,
    "initials": "FM",
    "avatarType": "teal",
    "body": "Ik heb de standaard gebruikt om mijn tablet naast het beeldscherm te zetten als tweede plek voor aantekeningen. De hoogte is prettig. Mijn bureau is er overzichtelijker door geworden.",
    "fullBody": "Ik heb de standaard gebruikt om mijn tablet naast het beeldscherm te zetten als tweede plek voor aantekeningen. De hoogte is prettig. Mijn bureau is er overzichtelijker door geworden.",
    "experienceDate": "Sep 30, 2023",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "أسامة ق. (Sample)",
    "date": "Sep 28, 2023",
    "rating": 5,
    "initials": "أق",
    "avatarType": "slate",
    "body": "سألت عن الفرق بين طولَي السلك لأنني أقيس المسافة حول حافة المكتب وليس بخط مستقيم. طلبوا مني التأكد من القياس قبل الاختيار. أخذت الأطول وكان الأنسب فعلاً.",
    "fullBody": "سألت عن الفرق بين طولَي السلك لأنني أقيس المسافة حول حافة المكتب وليس بخط مستقيم. طلبوا مني التأكد من القياس قبل الاختيار. أخذت الأطول وكان الأنسب فعلاً.",
    "experienceDate": "Sep 27, 2023",
    "country": "Spain",
    "language": "ar"
  },
  {
    "name": "Justine G. (Sample)",
    "date": "Sep 25, 2023",
    "rating": 5,
    "initials": "JG",
    "avatarType": "pink",
    "body": "J’aime pouvoir rabattre complètement la couverture de ma tablette sans avoir une grosse épaisseur dans la main. Je l’utilise surtout debout pendant mes présentations. Elle revient bien...",
    "fullBody": "J’aime pouvoir rabattre complètement la couverture de ma tablette sans avoir une grosse épaisseur dans la main. Je l’utilise surtout debout pendant mes présentations. Elle revient bien en place une fois refermée.",
    "experienceDate": "Sep 24, 2023",
    "country": "Canada",
    "language": "fr"
  },
  {
    "name": "Rubén Salas (Sample)",
    "date": "Sep 22, 2023",
    "rating": 1,
    "initials": "RS",
    "avatarType": "yellow",
    "body": "El protector ya venía partido dentro del envase. Envié fotos antes de tocarlo y pedí una solución, pero mi consulta sigue sin resolverse. No he podido utilizarlo y sigo esperando que se...",
    "fullBody": "El protector ya venía partido dentro del envase. Envié fotos antes de tocarlo y pedí una solución, pero mi consulta sigue sin resolverse. No he podido utilizarlo y sigo esperando que se hagan cargo.",
    "experienceDate": "Sep 21, 2023",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Marco Pini (Sample)",
    "date": "Sep 19, 2023",
    "rating": 5,
    "initials": "MP",
    "avatarType": "blue",
    "body": "Quando non carico il telefono, lo spinotto non cade più dietro il mobile perché questo cavo resta appoggiato dove lo lascio. Piccola cosa, ma mi risparmia parecchie ricerche per terra.",
    "fullBody": "Quando non carico il telefono, lo spinotto non cade più dietro il mobile perché questo cavo resta appoggiato dove lo lascio. Piccola cosa, ma mi risparmia parecchie ricerche per terra.",
    "experienceDate": "Sep 18, 2023",
    "country": "Switzerland",
    "language": "it"
  },
  {
    "name": "Nils Petersen (Sample)",
    "date": "Sep 17, 2023",
    "rating": 5,
    "initials": "NP",
    "avatarType": "purple",
    "body": "Beim ersten Anbringen saß die Ecke meiner Hülle nicht richtig. Ich dachte schon, sie passt nicht. Der Support erklärte mir kurz die Reihenfolge beim Einsetzen. Jetzt sitzt sie rundherum...",
    "fullBody": "Beim ersten Anbringen saß die Ecke meiner Hülle nicht richtig. Ich dachte schon, sie passt nicht. Der Support erklärte mir kurz die Reihenfolge beim Einsetzen. Jetzt sitzt sie rundherum ordentlich.",
    "experienceDate": "Sep 16, 2023",
    "country": "United States",
    "language": "de"
  },
  {
    "name": "Simone van der Meer (Sample)",
    "date": "Sep 14, 2023",
    "rating": 5,
    "initials": "SM",
    "avatarType": "pink",
    "body": "De buitenkant van mijn pakket was nat van de regen. Ik schrok even bij het uitpakken. De kabel zat binnenin nog droog in zijn eigen verpakking. Meteen geprobeerd en alles werkt.",
    "fullBody": "De buitenkant van mijn pakket was nat van de regen. Ik schrok even bij het uitpakken. De kabel zat binnenin nog droog in zijn eigen verpakking. Meteen geprobeerd en alles werkt.",
    "experienceDate": "Sep 13, 2023",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "تالا ر. (Sample)",
    "date": "Sep 11, 2023",
    "rating": 2,
    "initials": "تر",
    "avatarType": "yellow",
    "body": "الحامل يحجب مدخل الشحن عندما أضع هاتفي بالطول. اشتريته تحديداً ليبقى الهاتف أمامي أثناء الشحن، واضطررت إلى وضعه بالعرض كل مرة. لم يناسب استخدامي للأسف.",
    "fullBody": "الحامل يحجب مدخل الشحن عندما أضع هاتفي بالطول. اشتريته تحديداً ليبقى الهاتف أمامي أثناء الشحن، واضطررت إلى وضعه بالعرض كل مرة. لم يناسب استخدامي للأسف.",
    "experienceDate": "Sep 10, 2023",
    "country": "Netherlands",
    "language": "ar"
  },
  {
    "name": "Rémi C. (Sample)",
    "date": "Sep 8, 2023",
    "rating": 5,
    "initials": "RC",
    "avatarType": "teal",
    "body": "Je voulais une coque dont les boutons se distinguent au toucher. Avec celle-ci, je trouve le volume sans retourner le téléphone pendant mes appels. C’est surtout pour ça que je la garde.",
    "fullBody": "Je voulais une coque dont les boutons se distinguent au toucher. Avec celle-ci, je trouve le volume sans retourner le téléphone pendant mes appels. C’est surtout pour ça que je la garde.",
    "experienceDate": "Sep 7, 2023",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Teresa Solís (Sample)",
    "date": "Sep 5, 2023",
    "rating": 5,
    "initials": "TS",
    "avatarType": "slate",
    "body": "La correa se puede acortar lo suficiente para mi altura. Con otras me quedaba el móvil demasiado abajo y terminaba quitándolas. Esta la llevo cómoda cruzada sobre el abrigo.",
    "fullBody": "La correa se puede acortar lo suficiente para mi altura. Con otras me quedaba el móvil demasiado abajo y terminaba quitándolas. Esta la llevo cómoda cruzada sobre el abrigo.",
    "experienceDate": "Sep 4, 2023",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Veronica Balestra (Sample)",
    "date": "Sep 3, 2023",
    "rating": 5,
    "initials": "VB",
    "avatarType": "teal",
    "body": "Il portacarte ha un’apertura che permette di spingere fuori la tessera con il pollice. Per me è molto più comoda dei modelli da cui bisogna tirarla per il bordo.",
    "fullBody": "Il portacarte ha un’apertura che permette di spingere fuori la tessera con il pollice. Per me è molto più comoda dei modelli da cui bisogna tirarla per il bordo.",
    "experienceDate": "Sep 2, 2023",
    "country": "Switzerland",
    "language": "it"
  },
  {
    "name": "Andreas Pichler (Sample)",
    "date": "Aug 31, 2023",
    "rating": 5,
    "initials": "AP",
    "avatarType": "teal",
    "body": "Ich brauchte die genauen Maße eines Kabelsteckers für eine enge Durchführung am Schreibtisch. Die Antwort war konkret und hat mir weitergeholfen. Er passt durch, ohne dass ich etwas...",
    "fullBody": "Ich brauchte die genauen Maße eines Kabelsteckers für eine enge Durchführung am Schreibtisch. Die Antwort war konkret und hat mir weitergeholfen. Er passt durch, ohne dass ich etwas umbauen musste.",
    "experienceDate": "Aug 30, 2023",
    "country": "Austria",
    "language": "de"
  },
  {
    "name": "Vera Zijlstra (Sample)",
    "date": "Aug 28, 2023",
    "rating": 5,
    "initials": "VZ",
    "avatarType": "purple",
    "body": "De klantenservice wees me erop dat de kaarthouder apart van het afgebeelde hoesje werd verkocht. Goed dat ik dat vroeg. Ik kon zo bewust alleen bestellen wat ik nodig had.",
    "fullBody": "De klantenservice wees me erop dat de kaarthouder apart van het afgebeelde hoesje werd verkocht. Goed dat ik dat vroeg. Ik kon zo bewust alleen bestellen wat ik nodig had.",
    "experienceDate": "Aug 27, 2023",
    "country": "United States",
    "language": "nl"
  },
  {
    "name": "مراد ح. (Sample)",
    "date": "Aug 25, 2023",
    "rating": 5,
    "initials": "مح",
    "avatarType": "blue",
    "body": "احتجت نسخة من تفاصيل الطلب لإرفاقها مع مصروفات العمل. أرسلوها بوضوح مع أسماء القطع، ولم أضطر لشرح الطلب من جديد. السلكان اللذان اشتريتهما مناسبَان لمكان العمل.",
    "fullBody": "احتجت نسخة من تفاصيل الطلب لإرفاقها مع مصروفات العمل. أرسلوها بوضوح مع أسماء القطع، ولم أضطر لشرح الطلب من جديد. السلكان اللذان اشتريتهما مناسبَان لمكان العمل.",
    "experienceDate": "Aug 24, 2023",
    "country": "Canada",
    "language": "ar"
  },
  {
    "name": "Solène P. (Sample)",
    "date": "Aug 22, 2023",
    "rating": 5,
    "initials": "SP",
    "avatarType": "pink",
    "body": "J’ai retourné un accessoire et gardé le reste de ma commande. Le récapitulatif précisait bien quelle ligne était remboursée. Je craignais de devoir tout renvoyer, mais les explications...",
    "fullBody": "J’ai retourné un accessoire et gardé le reste de ma commande. Le récapitulatif précisait bien quelle ligne était remboursée. Je craignais de devoir tout renvoyer, mais les explications étaient simples.",
    "experienceDate": "Aug 21, 2023",
    "country": "Belgium",
    "language": "fr"
  },
  {
    "name": "Daniela Castaño (Sample)",
    "date": "Aug 20, 2023",
    "rating": 5,
    "initials": "DC",
    "avatarType": "purple",
    "body": "El seguimiento decía entregado y yo no veía el paquete. Atención al cliente revisó el comprobante y pude localizarlo en recepción. Agradezco que me ayudaran a aclararlo en vez de cerrar...",
    "fullBody": "El seguimiento decía entregado y yo no veía el paquete. Atención al cliente revisó el comprobante y pude localizarlo en recepción. Agradezco que me ayudaran a aclararlo en vez de cerrar la consulta sin más.",
    "experienceDate": "Aug 19, 2023",
    "country": "Canada",
    "language": "es"
  },
  {
    "name": "Eleonora Villa (Sample)",
    "date": "Aug 17, 2023",
    "rating": 5,
    "initials": "EV",
    "avatarType": "pink",
    "body": "La custodia del tablet si ripiega bene dietro lo schermo quando lo tengo in mano. Non resta una linguetta a penzoloni mentre leggo sul divano. Era il dettaglio che cercavo.",
    "fullBody": "La custodia del tablet si ripiega bene dietro lo schermo quando lo tengo in mano. Non resta una linguetta a penzoloni mentre leggo sul divano. Era il dettaglio che cercavo.",
    "experienceDate": "Aug 16, 2023",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Dorothea Albrecht (Sample)",
    "date": "Aug 14, 2023",
    "rating": 5,
    "initials": "DA",
    "avatarType": "pink",
    "body": "Die Lasche meiner neuen Tablethülle lässt sich öffnen, ohne dass ich jedes Mal unter den Rand greifen muss. Angenehm unkompliziert.",
    "fullBody": "Die Lasche meiner neuen Tablethülle lässt sich öffnen, ohne dass ich jedes Mal unter den Rand greifen muss. Angenehm unkompliziert.",
    "experienceDate": "Aug 13, 2023",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Yara Schouten (Sample)",
    "date": "Aug 11, 2023",
    "rating": 3,
    "initials": "YS",
    "avatarType": "pink",
    "body": "Het hoesje past, maar er zit een randje bij de uitsparing dat ik met mijn vinger blijf voelen. Niet scherp, wel irritant bij lang vasthouden. Ik ga kijken of een ander model fijner is.",
    "fullBody": "Het hoesje past, maar er zit een randje bij de uitsparing dat ik met mijn vinger blijf voelen. Niet scherp, wel irritant bij lang vasthouden. Ik ga kijken of een ander model fijner is.",
    "experienceDate": "Aug 10, 2023",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "أدهم ن. (Sample)",
    "date": "Aug 8, 2023",
    "rating": 5,
    "initials": "أن",
    "avatarType": "teal",
    "body": "أستخدم الحامل لتصوير خطوات تركيب المجسمات على طاولتي. يمكنني تعديل موضع الهاتف بين الخطوات من دون إعادة ترتيب المكان كله. وفّر عليّ الكثير من المحاولات.",
    "fullBody": "أستخدم الحامل لتصوير خطوات تركيب المجسمات على طاولتي. يمكنني تعديل موضع الهاتف بين الخطوات من دون إعادة ترتيب المكان كله. وفّر عليّ الكثير من المحاولات.",
    "experienceDate": "Aug 7, 2023",
    "country": "United States",
    "language": "ar"
  },
  {
    "name": "Valentine L. (Sample)",
    "date": "Aug 6, 2023",
    "rating": 5,
    "initials": "VL",
    "avatarType": "yellow",
    "body": "La housse a passé une semaine au milieu de mes dossiers et de mes carnets. Un coup de chiffon a suffi pour enlever les traces de poussière. J’aime bien ce tissu sans effet brillant.",
    "fullBody": "La housse a passé une semaine au milieu de mes dossiers et de mes carnets. Un coup de chiffon a suffi pour enlever les traces de poussière. J’aime bien ce tissu sans effet brillant.",
    "experienceDate": "Aug 5, 2023",
    "country": "Belgium",
    "language": "fr"
  },
  {
    "name": "Noelia Pizarro (Sample)",
    "date": "Aug 3, 2023",
    "rating": 5,
    "initials": "NP",
    "avatarType": "yellow",
    "body": "Pedí cancelar solo una pieza antes del envío. Me confirmaron cuál retiraban y el resto del pedido siguió adelante. Todo quedó claro en el resumen actualizado que recibí.",
    "fullBody": "Pedí cancelar solo una pieza antes del envío. Me confirmaron cuál retiraban y el resto del pedido siguió adelante. Todo quedó claro en el resumen actualizado que recibí.",
    "experienceDate": "Aug 2, 2023",
    "country": "France",
    "language": "es"
  },
  {
    "name": "Stefania Palmieri (Sample)",
    "date": "Jul 31, 2023",
    "rating": 2,
    "initials": "SP",
    "avatarType": "pink",
    "body": "La linguetta della custodia ha cominciato a scollarsi dopo pochi utilizzi. Ho mandato le foto richieste e aspetto ancora di sapere come risolvere. Peccato, perché la misura era giusta.",
    "fullBody": "La linguetta della custodia ha cominciato a scollarsi dopo pochi utilizzi. Ho mandato le foto richieste e aspetto ancora di sapere come risolvere. Peccato, perché la misura era giusta.",
    "experienceDate": "Jul 30, 2023",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Verena Moser (Sample)",
    "date": "Jul 28, 2023",
    "rating": 5,
    "initials": "VM",
    "avatarType": "yellow",
    "body": "Die kleine Öffnung für meine Handschlaufe ist sauber gearbeitet, ich konnte sie ohne Nadel oder sonstige Hilfsmittel durchfädeln.",
    "fullBody": "Die kleine Öffnung für meine Handschlaufe ist sauber gearbeitet, ich konnte sie ohne Nadel oder sonstige Hilfsmittel durchfädeln.",
    "experienceDate": "Jul 27, 2023",
    "country": "Austria",
    "language": "de"
  },
  {
    "name": "Michiel Prins (Sample)",
    "date": "Jul 25, 2023",
    "rating": 4,
    "initials": "MP",
    "avatarType": "blue",
    "body": "De kabel is prima. Op de verpakking stond de lengte heel klein, waardoor ik even dacht dat ik de verkeerde had. Na uitrollen bleek het gewoon goed te zijn.",
    "fullBody": "De kabel is prima. Op de verpakking stond de lengte heel klein, waardoor ik even dacht dat ik de verkeerde had. Na uitrollen bleek het gewoon goed te zijn.",
    "experienceDate": "Jul 24, 2023",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "أمجد ف. (Sample)",
    "date": "Jul 23, 2023",
    "rating": 5,
    "initials": "أف",
    "avatarType": "teal",
    "body": "أستخدم غلاف اللابتوب داخل حقيبة أضع فيها أيضاً ملفات بسحاب معدني. الغلاف يغطي الجهاز كله، وبقي الوصول إليه سهلاً من دون إخراج بقية الأغراض.",
    "fullBody": "أستخدم غلاف اللابتوب داخل حقيبة أضع فيها أيضاً ملفات بسحاب معدني. الغلاف يغطي الجهاز كله، وبقي الوصول إليه سهلاً من دون إخراج بقية الأغراض.",
    "experienceDate": "Jul 22, 2023",
    "country": "Netherlands",
    "language": "ar"
  },
  {
    "name": "Pauline B. (Sample)",
    "date": "Jul 20, 2023",
    "rating": 4,
    "initials": "PB",
    "avatarType": "yellow",
    "body": "Le câble est conforme et les connecteurs tiennent bien. Le petit capuchon de transport était vraiment serré à retirer, j’ai dû m’y reprendre. Aucun souci une fois branché.",
    "fullBody": "Le câble est conforme et les connecteurs tiennent bien. Le petit capuchon de transport était vraiment serré à retirer, j’ai dû m’y reprendre. Aucun souci une fois branché.",
    "experienceDate": "Jul 19, 2023",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Irene Valdés (Sample)",
    "date": "Jul 17, 2023",
    "rating": 5,
    "initials": "IV",
    "avatarType": "blue",
    "body": "Llevo la funda clara incluso cuando salgo a la terraza con crema en las manos. Las marcas que le he hecho han salido con un paño ligeramente húmedo. Me resulta fácil mantenerla presentable.",
    "fullBody": "Llevo la funda clara incluso cuando salgo a la terraza con crema en las manos. Las marcas que le he hecho han salido con un paño ligeramente húmedo. Me resulta fácil mantenerla presentable.",
    "experienceDate": "Jul 16, 2023",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Enrico Carli (Sample)",
    "date": "Jul 14, 2023",
    "rating": 4,
    "initials": "EC",
    "avatarType": "blue",
    "body": "Portacarte comodo, ma c’era un piccolo filo sporgente vicino alla cucitura. Non sembra compromettere l’uso, però su un articolo nuovo mi aspettavo una rifinitura più precisa.",
    "fullBody": "Portacarte comodo, ma c’era un piccolo filo sporgente vicino alla cucitura. Non sembra compromettere l’uso, però su un articolo nuovo mi aspettavo una rifinitura più precisa.",
    "experienceDate": "Jul 13, 2023",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Heike Schulte (Sample)",
    "date": "Jul 11, 2023",
    "rating": 5,
    "initials": "HS",
    "avatarType": "slate",
    "body": "Der Laptopständer passt bei uns unter den niedrigen Regalboden, obwohl das Gerät darauf höher steht. Die Höhenangabe auf der Seite war dafür wirklich hilfreich.",
    "fullBody": "Der Laptopständer passt bei uns unter den niedrigen Regalboden, obwohl das Gerät darauf höher steht. Die Höhenangabe auf der Seite war dafür wirklich hilfreich.",
    "experienceDate": "Jul 10, 2023",
    "country": "Canada",
    "language": "de"
  },
  {
    "name": "Lien Vermeulen (Sample)",
    "date": "Jul 9, 2023",
    "rating": 5,
    "initials": "LV",
    "avatarType": "yellow",
    "body": "De hoes schuift niet van mijn tablet af wanneer ik hem uit mijn tas haal. Bij de vorige bleef er altijd een hoek loszitten. Deze zit gewoon goed.",
    "fullBody": "De hoes schuift niet van mijn tablet af wanneer ik hem uit mijn tas haal. Bij de vorige bleef er altijd een hoek loszitten. Deze zit gewoon goed.",
    "experienceDate": "Jul 8, 2023",
    "country": "Belgium",
    "language": "nl"
  },
  {
    "name": "منى ك. (Sample)",
    "date": "Jul 6, 2023",
    "rating": 5,
    "initials": "مك",
    "avatarType": "pink",
    "body": "فتحة مفتاح الصامت واسعة بما يكفي لأصل إليه بأظافري القصيرة. لم أنتبه لهذه النقطة عند الشراء لكنها أراحتني كثيراً مقارنة بالكفر السابق.",
    "fullBody": "فتحة مفتاح الصامت واسعة بما يكفي لأصل إليه بأظافري القصيرة. لم أنتبه لهذه النقطة عند الشراء لكنها أراحتني كثيراً مقارنة بالكفر السابق.",
    "experienceDate": "Jul 5, 2023",
    "country": "Sweden",
    "language": "ar"
  },
  {
    "name": "Gaspard R. (Sample)",
    "date": "Jul 3, 2023",
    "rating": 5,
    "initials": "GR",
    "avatarType": "blue",
    "body": "J’ai pris le cordon pour un salon où je devais souvent montrer un billet sur mon téléphone. Il se règle facilement par-dessus une veste. Bien pratique quand on a déjà les mains occupées.",
    "fullBody": "J’ai pris le cordon pour un salon où je devais souvent montrer un billet sur mon téléphone. Il se règle facilement par-dessus une veste. Bien pratique quand on a déjà les mains occupées.",
    "experienceDate": "Jul 2, 2023",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Alicia Varela (Sample)",
    "date": "Jun 30, 2023",
    "rating": 5,
    "initials": "AV",
    "avatarType": "teal",
    "body": "Uso la funda de la tableta en la inclinación baja para escribir con el teclado de la pantalla. Las muñecas me quedan en una posición más cómoda. No la compré para ver vídeos, pero...",
    "fullBody": "Uso la funda de la tableta en la inclinación baja para escribir con el teclado de la pantalla. Las muñecas me quedan en una posición más cómoda. No la compré para ver vídeos, pero también he probado esa posición y se mantiene bien.",
    "experienceDate": "Jun 29, 2023",
    "country": "Spain",
    "language": "es"
  },
  {
    "name": "Federica Testa (Sample)",
    "date": "Jun 27, 2023",
    "rating": 4,
    "initials": "FT",
    "avatarType": "purple",
    "body": "Il cavo funziona bene. Lo trovo un po’ rigido quando devo arrotolarlo stretto nella pochette, quindi lo lascerò fisso sulla scrivania. Per quell’uso va benissimo.",
    "fullBody": "Il cavo funziona bene. Lo trovo un po’ rigido quando devo arrotolarlo stretto nella pochette, quindi lo lascerò fisso sulla scrivania. Per quell’uso va benissimo.",
    "experienceDate": "Jun 26, 2023",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Pascal Hartmann (Sample)",
    "date": "Jun 25, 2023",
    "rating": 4,
    "initials": "PH",
    "avatarType": "slate",
    "body": "Das Kartenetui ist schön, nur der Schlitz für meine Karte ist am Anfang recht kantig. Mit etwas Übung bekomme ich sie gut heraus. Die Verarbeitung macht sonst einen ordentlichen Eindruck.",
    "fullBody": "Das Kartenetui ist schön, nur der Schlitz für meine Karte ist am Anfang recht kantig. Mit etwas Übung bekomme ich sie gut heraus. Die Verarbeitung macht sonst einen ordentlichen Eindruck.",
    "experienceDate": "Jun 24, 2023",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Kees van Os (Sample)",
    "date": "Jun 22, 2023",
    "rating": 5,
    "initials": "KO",
    "avatarType": "slate",
    "body": "Het kabeluiteinde heeft genoeg ruimte om beet te pakken. Ik hoef niet meer aan de draad zelf te trekken wanneer ik hem losmaak. Bevalt me beter dan mijn dunne oude kabel.",
    "fullBody": "Het kabeluiteinde heeft genoeg ruimte om beet te pakken. Ik hoef niet meer aan de draad zelf te trekken wanneer ik hem losmaak. Bevalt me beter dan mijn dunne oude kabel.",
    "experienceDate": "Jun 21, 2023",
    "country": "Canada",
    "language": "nl"
  },
  {
    "name": "رائد ج. (Sample)",
    "date": "Jun 19, 2023",
    "rating": 4,
    "initials": "رج",
    "avatarType": "blue",
    "body": "المحفظة مرتبة وتثبت جيداً على الهاتف. كنت أتمنى وجود مكان منفصل لتذكرة ورقية حتى لا تختلط بالبطاقات، لكن حجمها مناسب لي.",
    "fullBody": "المحفظة مرتبة وتثبت جيداً على الهاتف. كنت أتمنى وجود مكان منفصل لتذكرة ورقية حتى لا تختلط بالبطاقات، لكن حجمها مناسب لي.",
    "experienceDate": "Jun 18, 2023",
    "country": "Germany",
    "language": "ar"
  },
  {
    "name": "Agathe N. (Sample)",
    "date": "Jun 16, 2023",
    "rating": 5,
    "initials": "AN",
    "avatarType": "yellow",
    "body": "J’utilise souvent le minuteur du téléphone en faisant du sport à la maison. Le support ne masque pas les chiffres du bas et je peux appuyer sur pause sans le déplacer. Petit achat utile.",
    "fullBody": "J’utilise souvent le minuteur du téléphone en faisant du sport à la maison. Le support ne masque pas les chiffres du bas et je peux appuyer sur pause sans le déplacer. Petit achat utile.",
    "experienceDate": "Jun 15, 2023",
    "country": "United States",
    "language": "fr"
  },
  {
    "name": "Verónica Ponce (Sample)",
    "date": "Jun 13, 2023",
    "rating": 5,
    "initials": "VP",
    "avatarType": "blue",
    "body": "El bolsillo exterior de la funda me sirve para guardar una memoria y un adaptador pequeño. Antes acababan sueltos en la mochila. La computadora sigue entrando sin que tenga que sacar...",
    "fullBody": "El bolsillo exterior de la funda me sirve para guardar una memoria y un adaptador pequeño. Antes acababan sueltos en la mochila. La computadora sigue entrando sin que tenga que sacar esas cosas.",
    "experienceDate": "Jun 12, 2023",
    "country": "United States",
    "language": "es"
  },
  {
    "name": "Pietro Amato (Sample)",
    "date": "Jun 11, 2023",
    "rating": 5,
    "initials": "PA",
    "avatarType": "slate",
    "body": "Volevo capire se avessero ricevuto il reso. Mi hanno risposto con il riferimento della consegna al magazzino. Poi è arrivata la conferma del rimborso. Ho apprezzato che controllassero...",
    "fullBody": "Volevo capire se avessero ricevuto il reso. Mi hanno risposto con il riferimento della consegna al magazzino. Poi è arrivata la conferma del rimborso. Ho apprezzato che controllassero davvero la mia spedizione.",
    "experienceDate": "Jun 10, 2023",
    "country": "Germany",
    "language": "it"
  },
  {
    "name": "Felix Sommer (Sample)",
    "date": "Jun 8, 2023",
    "rating": 5,
    "initials": "FS",
    "avatarType": "blue",
    "body": "Ich hatte eine Lieferung als zugestellt markiert gesehen, war aber nicht zu Hause. Der Support hat mir den Ablagehinweis herausgesucht. Mein Nachbar hatte das Päckchen angenommen. Inhalt...",
    "fullBody": "Ich hatte eine Lieferung als zugestellt markiert gesehen, war aber nicht zu Hause. Der Support hat mir den Ablagehinweis herausgesucht. Mein Nachbar hatte das Päckchen angenommen. Inhalt vollständig, Aufregung umsonst.",
    "experienceDate": "Jun 7, 2023",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Evelien van Dam (Sample)",
    "date": "Jun 5, 2023",
    "rating": 5,
    "initials": "ED",
    "avatarType": "purple",
    "body": "Dit kaarthoudertje kraakt niet als ik mijn pas eruit haal, iets waar ik me bij mijn oude steeds aan ergerde.",
    "fullBody": "Dit kaarthoudertje kraakt niet als ik mijn pas eruit haal, iets waar ik me bij mijn oude steeds aan ergerde.",
    "experienceDate": "Jun 4, 2023",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "وائل د. (Sample)",
    "date": "Jun 2, 2023",
    "rating": 5,
    "initials": "ود",
    "avatarType": "slate",
    "body": "هذا أول جراب بغطاء أمامي أستخدمه للهاتف. يعجبني أنني أستطيع إغلاقه ووضعه على الطاولة خلال الاجتماعات. الغطاء يرجع للخلف بسهولة عند الرد على مكالمة.",
    "fullBody": "هذا أول جراب بغطاء أمامي أستخدمه للهاتف. يعجبني أنني أستطيع إغلاقه ووضعه على الطاولة خلال الاجتماعات. الغطاء يرجع للخلف بسهولة عند الرد على مكالمة.",
    "experienceDate": "Jun 1, 2023",
    "country": "France",
    "language": "ar"
  },
  {
    "name": "Guillaume F. (Sample)",
    "date": "May 30, 2023",
    "rating": 4,
    "initials": "GF",
    "avatarType": "teal",
    "body": "Protection bien découpée et agréable au toucher. Elle reflète davantage ma lampe de bureau que je ne l’espérais, donc je change un peu l’angle du téléphone. Le reste me convient.",
    "fullBody": "Protection bien découpée et agréable au toucher. Elle reflète davantage ma lampe de bureau que je ne l’espérais, donc je change un peu l’angle du téléphone. Le reste me convient.",
    "experienceDate": "May 29, 2023",
    "country": "Belgium",
    "language": "fr"
  },
  {
    "name": "Héctor Valiente (Sample)",
    "date": "May 28, 2023",
    "rating": 5,
    "initials": "HV",
    "avatarType": "teal",
    "body": "Puedo levantar el soporte con una mano para pasar el paño por el escritorio y volver a dejarlo en la misma posición. No tiene patas que se enganchen con los papeles. Me está resultando...",
    "fullBody": "Puedo levantar el soporte con una mano para pasar el paño por el escritorio y volver a dejarlo en la misma posición. No tiene patas que se enganchen con los papeles. Me está resultando práctico para una mesa que compartimos.",
    "experienceDate": "May 27, 2023",
    "country": "Germany",
    "language": "es"
  },
  {
    "name": "Roberto Ferretti (Sample)",
    "date": "May 25, 2023",
    "rating": 5,
    "initials": "RF",
    "avatarType": "blue",
    "body": "Il supporto del portatile mi lascia spazio per far passare i cavi sotto. Ho smesso di spostarli ogni volta che apro il quaderno davanti alla tastiera.",
    "fullBody": "Il supporto del portatile mi lascia spazio per far passare i cavi sotto. Ho smesso di spostarli ogni volta che apro il quaderno davanti alla tastiera.",
    "experienceDate": "May 24, 2023",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Saskia Winter (Sample)",
    "date": "May 22, 2023",
    "rating": 3,
    "initials": "SW",
    "avatarType": "pink",
    "body": "Zum Lesen hält der Ständer mein Tablet ordentlich. Wenn ich es hochkant stelle und darauf tippe, wackelt es mir aber zu stark. Für Videos okay, zum längeren Schreiben nehme ich ihn nicht.",
    "fullBody": "Zum Lesen hält der Ständer mein Tablet ordentlich. Wenn ich es hochkant stelle und darauf tippe, wackelt es mir aber zu stark. Für Videos okay, zum längeren Schreiben nehme ich ihn nicht.",
    "experienceDate": "May 21, 2023",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Jasper Driessen (Sample)",
    "date": "May 19, 2023",
    "rating": 5,
    "initials": "JD",
    "avatarType": "slate",
    "body": "Had bij het bestellen per ongeluk drie kabels aangevinkt. De bestelling was nog niet verwerkt en ze konden het aantal terugzetten naar twee. De bevestiging klopte daarna ook. Fijn geregeld.",
    "fullBody": "Had bij het bestellen per ongeluk drie kabels aangevinkt. De bestelling was nog niet verwerkt en ze konden het aantal terugzetten naar twee. De bevestiging klopte daarna ook. Fijn geregeld.",
    "experienceDate": "May 18, 2023",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "نزار ب. (Sample)",
    "date": "May 16, 2023",
    "rating": 4,
    "initials": "نب",
    "avatarType": "blue",
    "body": "حماية الشاشة مناسبة والنتيجة جيدة. قطعة القماش المرفقة صغيرة جداً بالنسبة لي، فاستخدمت قطعة عندي لتنظيف الشاشة قبل التركيب. بقية الأدوات كانت مفيدة.",
    "fullBody": "حماية الشاشة مناسبة والنتيجة جيدة. قطعة القماش المرفقة صغيرة جداً بالنسبة لي، فاستخدمت قطعة عندي لتنظيف الشاشة قبل التركيب. بقية الأدوات كانت مفيدة.",
    "experienceDate": "May 15, 2023",
    "country": "Denmark",
    "language": "ar"
  },
  {
    "name": "Aurore M. (Sample)",
    "date": "May 14, 2023",
    "rating": 5,
    "initials": "AM",
    "avatarType": "purple",
    "body": "Le bord supérieur du porte-cartes laisse juste assez dépasser ma carte pour la saisir. Je n’ai plus besoin de tout vider à la caisse. Le format me convient mieux que mon ancien modèle.",
    "fullBody": "Le bord supérieur du porte-cartes laisse juste assez dépasser ma carte pour la saisir. Je n’ai plus besoin de tout vider à la caisse. Le format me convient mieux que mon ancien modèle.",
    "experienceDate": "May 13, 2023",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Bruno Sepúlveda (Sample)",
    "date": "May 11, 2023",
    "rating": 5,
    "initials": "BS",
    "avatarType": "slate",
    "body": "La funda se abre lo suficiente por abajo para conectar el accesorio que uso con mi celular. Había comprobado las fotos de esa zona antes de comprar. No he tenido que recortarla ni quitarla.",
    "fullBody": "La funda se abre lo suficiente por abajo para conectar el accesorio que uso con mi celular. Había comprobado las fotos de esa zona antes de comprar. No he tenido que recortarla ni quitarla.",
    "experienceDate": "May 10, 2023",
    "country": "Canada",
    "language": "es"
  },
  {
    "name": "Claudia Rossetti (Sample)",
    "date": "May 8, 2023",
    "rating": 5,
    "initials": "CR",
    "avatarType": "yellow",
    "body": "Il panno passa sul vetro protettivo senza impigliarsi negli angoli, finalmente riesco a pulire lo schermo con una passata.",
    "fullBody": "Il panno passa sul vetro protettivo senza impigliarsi negli angoli, finalmente riesco a pulire lo schermo con una passata.",
    "experienceDate": "May 7, 2023",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Bettina Kramer (Sample)",
    "date": "May 5, 2023",
    "rating": 5,
    "initials": "BK",
    "avatarType": "pink",
    "body": "Ich hatte Sorge, dass die Verpackung schwer aufzubekommen wäre. Die Tablethülle ließ sich ohne Schere und ohne Gezerr herausnehmen. Direkt ausprobiert und zufrieden.",
    "fullBody": "Ich hatte Sorge, dass die Verpackung schwer aufzubekommen wäre. Die Tablethülle ließ sich ohne Schere und ohne Gezerr herausnehmen. Direkt ausprobiert und zufrieden.",
    "experienceDate": "May 4, 2023",
    "country": "United States",
    "language": "de"
  },
  {
    "name": "Carlijn Timmer (Sample)",
    "date": "May 2, 2023",
    "rating": 4,
    "initials": "CT",
    "avatarType": "purple",
    "body": "Mooie tablethoes, alleen het elastiek zit nog wat strak als ik hem dichtdoe. Eenmaal dicht blijft alles netjes op zijn plek. Verder tevreden over de afwerking.",
    "fullBody": "Mooie tablethoes, alleen het elastiek zit nog wat strak als ik hem dichtdoe. Eenmaal dicht blijft alles netjes op zijn plek. Verder tevreden over de afwerking.",
    "experienceDate": "May 1, 2023",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "غسان ط. (Sample)",
    "date": "Apr 30, 2023",
    "rating": 5,
    "initials": "غط",
    "avatarType": "teal",
    "body": "اشتريت حزام المعصم لأنني أخرج الهاتف كثيراً لالتقاط الصور أثناء المشي. الحلقة مريحة ولا تضغط على يدي، ويمكن فكها عندما لا أحتاجها.",
    "fullBody": "اشتريت حزام المعصم لأنني أخرج الهاتف كثيراً لالتقاط الصور أثناء المشي. الحلقة مريحة ولا تضغط على يدي، ويمكن فكها عندما لا أحتاجها.",
    "experienceDate": "Apr 29, 2023",
    "country": "Germany",
    "language": "ar"
  },
  {
    "name": "Cédric H. (Sample)",
    "date": "Apr 27, 2023",
    "rating": 5,
    "initials": "CH",
    "avatarType": "slate",
    "body": "J’ai deux téléphones presque identiques, un personnel et un pour le travail. Cette coque a un relief que je reconnais sans regarder. Je prends enfin le bon du premier coup.",
    "fullBody": "J’ai deux téléphones presque identiques, un personnel et un pour le travail. Cette coque a un relief que je reconnais sans regarder. Je prends enfin le bon du premier coup.",
    "experienceDate": "Apr 26, 2023",
    "country": "France",
    "language": "fr"
  },
  {
    "name": "Lorena Duarte (Sample)",
    "date": "Apr 24, 2023",
    "rating": 5,
    "initials": "LD",
    "avatarType": "teal",
    "body": "Uso el soporte para grabarme practicando guitarra. Puedo poner el celular de lado y revisar el encuadre antes de sentarme. Ya no necesito pedirle a alguien que lo sostenga.",
    "fullBody": "Uso el soporte para grabarme practicando guitarra. Puedo poner el celular de lado y revisar el encuadre antes de sentarme. Ya no necesito pedirle a alguien que lo sostenga.",
    "experienceDate": "Apr 23, 2023",
    "country": "United States",
    "language": "es"
  },
  {
    "name": "Patrizia Colombo (Sample)",
    "date": "Apr 21, 2023",
    "rating": 5,
    "initials": "PC",
    "avatarType": "yellow",
    "body": "Il supporto per il telefono si apre anche con le mie mani poco pazienti, senza minuscoli gancetti da sbloccare.",
    "fullBody": "Il supporto per il telefono si apre anche con le mie mani poco pazienti, senza minuscoli gancetti da sbloccare.",
    "experienceDate": "Apr 20, 2023",
    "country": "Canada",
    "language": "it"
  },
  {
    "name": "Dominik Brunner (Sample)",
    "date": "Apr 18, 2023",
    "rating": 5,
    "initials": "DB",
    "avatarType": "blue",
    "body": "Die Kartenhülle lässt sich einfach drehen und neu ausrichten, wenn ich sie schräg angesetzt habe. Sitzt danach wieder sauber auf meiner Hülle. Im Alltag sehr angenehm.",
    "fullBody": "Die Kartenhülle lässt sich einfach drehen und neu ausrichten, wenn ich sie schräg angesetzt habe. Sitzt danach wieder sauber auf meiner Hülle. Im Alltag sehr angenehm.",
    "experienceDate": "Apr 17, 2023",
    "country": "Switzerland",
    "language": "de"
  },
  {
    "name": "Lisanne Koster (Sample)",
    "date": "Apr 16, 2023",
    "rating": 5,
    "initials": "LK",
    "avatarType": "yellow",
    "body": "Het hoesje heeft geen uitstekende rand bij de oplaadpoort die tegen mijn pink drukt, en dat voel ik meteen.",
    "fullBody": "Het hoesje heeft geen uitstekende rand bij de oplaadpoort die tegen mijn pink drukt, en dat voel ik meteen.",
    "experienceDate": "Apr 15, 2023",
    "country": "Netherlands",
    "language": "nl"
  },
  {
    "name": "Emilio Fajardo (Sample)",
    "date": "Apr 13, 2023",
    "rating": 5,
    "initials": "EF",
    "avatarType": "pink",
    "body": "Compré el lápiz para resolver crucigramas en la tableta. Es más preciso que mi dedo para seleccionar las casillas pequeñas. Lo estoy usando más de lo que esperaba.",
    "fullBody": "Compré el lápiz para resolver crucigramas en la tableta. Es más preciso que mi dedo para seleccionar las casillas pequeñas. Lo estoy usando más de lo que esperaba.",
    "experienceDate": "Apr 12, 2023",
    "country": "United States",
    "language": "es"
  },
  {
    "name": "Cristina Fiori (Sample)",
    "date": "Apr 10, 2023",
    "rating": 5,
    "initials": "CF",
    "avatarType": "purple",
    "body": "Avevo chiesto se la cover coprisse un piccolo graffio sul bordo del telefono. Mi hanno mandato un chiarimento sulla zona lasciata scoperta. Risposta precisa, senza promettermi cose che...",
    "fullBody": "Avevo chiesto se la cover coprisse un piccolo graffio sul bordo del telefono. Mi hanno mandato un chiarimento sulla zona lasciata scoperta. Risposta precisa, senza promettermi cose che non potevano sapere.",
    "experienceDate": "Apr 9, 2023",
    "country": "Italy",
    "language": "it"
  },
  {
    "name": "Rike Krüger (Sample)",
    "date": "Apr 7, 2023",
    "rating": 5,
    "initials": "RK",
    "avatarType": "yellow",
    "body": "Die Hülle liegt flach genug, dass mein Handy beim Tippen auf dem Küchentisch nicht ständig über Eck kippelt. Das hat mich vorher richtig genervt.",
    "fullBody": "Die Hülle liegt flach genug, dass mein Handy beim Tippen auf dem Küchentisch nicht ständig über Eck kippelt. Das hat mich vorher richtig genervt.",
    "experienceDate": "Apr 6, 2023",
    "country": "Germany",
    "language": "de"
  },
  {
    "name": "Maarten Hooft (Sample)",
    "date": "Apr 4, 2023",
    "rating": 5,
    "initials": "MH",
    "avatarType": "blue",
    "body": "Het beschermglas sluit mooi aan rond de opening bovenaan, zonder een donker stukje van mijn scherm te bedekken.",
    "fullBody": "Het beschermglas sluit mooi aan rond de opening bovenaan, zonder een donker stukje van mijn scherm te bedekken.",
    "experienceDate": "Apr 3, 2023",
    "country": "United States",
    "language": "nl"
  }
];
reviews.push(...additionalInternationalReviews);

// One display order keeps the international/UK mix consistent through star filters.
function buildInternationalReviewOrder(source, preferredReviews = []){
  const languageOrder = ['ar', 'fr', 'es', 'it', 'de', 'nl'];
  const preferred = new Set(preferredReviews);
  const international = [...preferredReviews, ...source.filter(review => !preferred.has(review))]
    .filter(review => review.country && review.country !== 'United Kingdom');
  const byRating = new Map([1, 2, 3, 4, 5].map(rating => [
    rating, international.filter(review => review.rating === rating)
  ]));
  const languagePositions = new Map();
  const ordered = [];
  const used = new Set();

  function takeInternational(rating){
    const queue = byRating.get(rating);
    const start = languagePositions.get(rating) || 0;
    for (let offset = 0; offset < languageOrder.length; offset += 1) {
      const languageIndex = (start + offset) % languageOrder.length;
      const index = queue.findIndex(review => review.language === languageOrder[languageIndex]);
      if (index !== -1) {
        languagePositions.set(rating, (languageIndex + 1) % languageOrder.length);
        return queue.splice(index, 1)[0];
      }
    }
    return queue.shift();
  }

  source.forEach(review => {
    if ((review.country || 'United Kingdom') !== 'United Kingdom') return;
    if ((byRating.get(review.rating)?.length || 0) < 2) return;
    const group = [takeInternational(review.rating), takeInternational(review.rating), review];
    ordered.push(...group);
    group.forEach(item => used.add(item));
  });

  return ordered.concat(source.filter(review => !used.has(review)));
}

const orderedReviews = buildInternationalReviewOrder(reviews, additionalInternationalReviews);

// Rolling dates are fictional exam fixtures; the stored review records stay intact.
const sampleReviewDateIndexes = new WeakMap(orderedReviews.map((review, index) => [review, index]));
const sampleReviewDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short', day: 'numeric', year: 'numeric'
});

function getSampleReviewDates(review, now = new Date()){
  const index = sampleReviewDateIndexes.get(review) ?? 0;
  const offsets = [0, 3, 6, 9, 12];
  const daysAgo = Math.floor(index / offsets.length) * 14 + offsets[index % offsets.length];
  const posted = new Date(now);
  posted.setHours(12, 0, 0, 0);
  posted.setDate(posted.getDate() - daysAgo);
  const experience = new Date(posted);
  experience.setDate(experience.getDate() - 1);
  const postedLabel = daysAgo === 0 ? 'Today'
    : daysAgo < 7 ? `${daysAgo} days ago`
    : sampleReviewDateFormatter.format(posted);

  return {
    index,
    date: `${postedLabel} (Sample date)`,
    experienceDate: `${sampleReviewDateFormatter.format(experience)} (Sample date)`
  };
}

function clamp(num, min, max){ return Math.max(min, Math.min(max, num)); }

function starsImage(rating, extraClass = ''){
  const safe = Number(rating) || 0;
  const file = safe <= 1 ? 'stars-1.svg' : safe === 2 ? 'stars-2.svg' : safe === 3 ? 'stars-3.svg' : safe < 4.5 ? 'stars-4.svg' : safe < 5 ? 'stars-4.5.svg' : 'stars-5.svg';
  const label = safe <= 1 ? '1 star rating' : safe === 2 ? '2 star rating' : safe === 3 ? '3 star rating' : safe < 4.5 ? '4 star rating' : safe < 5 ? '4.5 star rating' : '5 star rating';
  return `<img class="stars-img ${extraClass}" src="assets/${file}" alt="${label}" />`;
}

function ratingBoxes(rating){
  // Top TrustScore area: use the real star SVG assets provided for the school project.
  return starsImage(Number(rating) >= 4.5 ? 4.5 : Number(rating), 'score-stars-img');
}

function starBoxes(rating){
  // Individual review cards: matching assets for all five star ratings.
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
    useful:'<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M7.94.94A1.5 1.5 0 0 1 10.5 2a20.774 20.774 0 0 1-.384 4H14.5A1.5 1.5 0 0 1 16 7.5v.066l-1.845 6.9-.094.095A1.5 1.5 0 0 1 13 15H9c-.32 0-.685-.078-1.038-.174-.357-.097-.743-.226-1.112-.349l-.008-.003c-.378-.126-.74-.246-1.067-.335C5.44 14.047 5.18 14 5 14v.941l-5 .625V6h5v.788c.913-.4 1.524-1.357 1.926-2.418A10.169 10.169 0 0 0 7.5 1.973 1.5 1.5 0 0 1 7.94.939ZM8 2l.498.045v.006l-.002.013a4.507 4.507 0 0 1-.026.217 11.166 11.166 0 0 1-.609 2.443C7.396 5.951 6.541 7.404 5 7.851V13c.32 0 .685.078 1.038.174.357.097.743.226 1.112.349l.008.003c.378.126.74.246 1.067.335.335.092.594.139.775.139h4a.5.5 0 0 0 .265-.076l1.732-6.479A.5.5 0 0 0 14.5 7H8.874l.138-.61c.326-1.44.49-2.913.488-4.39a.5.5 0 0 0-1 0v.023l-.002.022L8 2ZM4 7H1v7.434l3-.375V7Zm-1.5 5.75a.25.25 0 1 0 0-.5.25.25 0 0 0 0 .5Zm-.75-.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z"></path></svg>',
    share:'<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M13 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-3 2a3 3 0 1 1 .583 1.778L5.867 7.115a3 3 0 0 1 0 1.77l4.716 2.337a3 3 0 1 1-.45.893L5.417 9.778a3 3 0 1 1 0-3.556l4.716-2.337A3.002 3.002 0 0 1 10 3ZM1 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"></path></svg>',
    flag:'<svg><path fill-rule="evenodd" clip-rule="evenodd" d="M3 .25V0H2v16h1V9.25h11.957l-4.5-4.5 4.5-4.5H3Zm0 1v7h9.543l-3.5-3.5 3.5-3.5H3Z"></path></svg>'
  };
  return icons[type] || '';
}

function previewCard(review){
  const sampleDates = getSampleReviewDates(review);
  const languageAttributes = review.language ? ` lang="${review.language}" dir="auto"` : '';
  return `
    <article class="preview-card">
      <div class="reviewer-row">
        ${avatarMarkup(review)}
        <div>
          <strong${languageAttributes}>${review.name}</strong>
          <span data-sample-date="${sampleDates.index}">${sampleDates.date}</span>
        </div>
      </div>
      <div class="preview-stars">${starBoxes(review.rating)}</div>
      <p${languageAttributes}>${review.body} <a href="#" class="see-more">See more</a></p>
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
  const sampleDates = getSampleReviewDates(review);
  const languageAttributes = review.language ? ` lang="${review.language}" dir="auto"` : '';
  return `
    <article class="full-review" data-rating="${review.rating}" data-text="${(review.name + ' ' + review.fullBody).toLowerCase()}">
      <div class="reviewer-row">
        ${avatarMarkup(review)}
        <div>
          <strong${languageAttributes}>${review.name}</strong>
          <span class="meta">${review.country || 'United Kingdom'} • ${reviewCount}</span>
        </div>
        <span class="meta" style="margin-left:auto;color:#666" data-sample-date="${sampleDates.index}">${sampleDates.date}</span>
      </div>
      <div class="full-stars">${starBoxes(review.rating)}</div>
      <p class="review-body"${languageAttributes}>${review.fullBody}</p>
      <div class="date-exp" data-sample-experience-date="${sampleDates.index}">Date of experience: ${sampleDates.experienceDate}</div>
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

  return orderedReviews.filter(review => {
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

previewReviews.innerHTML = orderedReviews.slice(0, 4).map(previewCard).join('');
renderRatingBoxes();
renderReviews();

// Update only timestamp text at midnight or when returning to a sleeping tab.
(() => {
  let displayedDay = new Date().toDateString();
  let refreshTimer;

  function refreshDateLabels(){
    const now = new Date();
    const today = now.toDateString();
    if (today === displayedDay) return;
    displayedDay = today;

    document.querySelectorAll('[data-sample-date]').forEach(element => {
      const review = orderedReviews[Number(element.dataset.sampleDate)];
      if (review) element.textContent = getSampleReviewDates(review, now).date;
    });
    document.querySelectorAll('[data-sample-experience-date]').forEach(element => {
      const review = orderedReviews[Number(element.dataset.sampleExperienceDate)];
      if (review) element.textContent = `Date of experience: ${getSampleReviewDates(review, now).experienceDate}`;
    });
  }

  function scheduleNextMidnight(){
    window.clearTimeout(refreshTimer);
    const now = new Date();
    const nextMidnight = new Date(now);
    nextMidnight.setHours(24, 0, 0, 100);
    refreshTimer = window.setTimeout(() => {
      refreshDateLabels();
      scheduleNextMidnight();
    }, nextMidnight.getTime() - now.getTime());
  }

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      refreshDateLabels();
      scheduleNextMidnight();
    }
  });
  scheduleNextMidnight();
})();

keywordSearch.addEventListener('input', resetAndRenderReviews);
filterInputs.forEach(input => input.addEventListener('change', resetAndRenderReviews));

// Restore the missing 2/3-star fill colours without changing bar sizes or CSS files.
(() => {
  const colours = { 2: '#ff8622', 3: '#ffce00' };
  const desktop = window.matchMedia('(min-width: 901px)');

  document.querySelectorAll('.score-bars .bar-row').forEach(row => {
    const rating = parseInt(row.querySelector('span')?.textContent, 10);
    const bar = row.querySelector('i b');
    if (colours[rating] && bar) {
      bar.style.setProperty('background', colours[rating], 'important');
    }
  });

  const inputs = filterInputs.filter(input => colours[input.value]);
  function updateFilterBarColours(){
    inputs.forEach(input => {
      const bar = input.closest('.filter-row')?.querySelector('i b');
      if (!bar) return;
      if (input.checked || !desktop.matches) {
        bar.style.setProperty('background', colours[input.value], 'important');
      } else {
        bar.style.removeProperty('background');
      }
    });
  }

  inputs.forEach(input => input.addEventListener('change', updateFilterBarColours));
  if (desktop.addEventListener) desktop.addEventListener('change', updateFilterBarColours);
  else desktop.addListener(updateFilterBarColours);
  updateFilterBarColours();
})();

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


// ===== iPro profile: hide black header on scroll, show Summary/About/Reviews tabs, anchor links =====
(() => {
  const header = document.querySelector('.site-header');
  const tabs = document.querySelector('.tabs-bar');
  const links = Array.from(document.querySelectorAll('.tabs-links a'));
  const topTarget = document.getElementById('top') || document.querySelector('main') || document.body;
  const targets = [
    { id: 'top', el: topTarget },
    { id: 'about', el: document.getElementById('about') },
    { id: 'allreviews', el: document.getElementById('allreviews') }
  ].filter(item => item.el);

  function currentOffset(){
    return window.matchMedia('(max-width: 900px)').matches ? 82 : 88;
  }

  function setActive(id){
    links.forEach(link => {
      const href = link.getAttribute('href') || '';
      link.classList.toggle('active', href === `#${id}`);
    });
  }

  function updateProfileBars(){
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    const showTabs = y > 140;

    if(header) header.classList.toggle('profile-header-hidden', showTabs);
    if(tabs) tabs.classList.toggle('profile-tabs-visible', showTabs);

    let active = 'top';
    const offset = currentOffset() + 20;
    for (const item of targets) {
      const top = item.id === 'top' ? 0 : item.el.getBoundingClientRect().top + window.scrollY;
      if (y + offset >= top) active = item.id;
    }
    setActive(active);
  }

  links.forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href') || '';
      if(!href.startsWith('#')) return;
      const id = href.slice(1);
      const target = id === 'top' ? topTarget : document.getElementById(id);
      if(!target) return;

      event.preventDefault();
      const top = id === 'top'
        ? 0
        : Math.max(0, target.getBoundingClientRect().top + window.scrollY - currentOffset());

      window.scrollTo({ top, behavior: 'smooth' });
      setActive(id);
    });
  });

  updateProfileBars();
  window.addEventListener('scroll', updateProfileBars, { passive: true });
  window.addEventListener('resize', updateProfileBars);
})();

// ===== v12 review page header interactions: same behaviour as homepage =====
(() => {
  const body = document.body;
  const searchShells = Array.from(document.querySelectorAll('.search-shell'));
  const resolveIproQuery = (value = '') => /\bipro\b|iprostore/i.test(value.trim());

  function closeSearches(){
    searchShells.forEach(shell => shell.classList.remove('is-active'));
  }
  function openSearch(shell){
    searchShells.forEach(item => item.classList.toggle('is-active', item === shell));
  }

  searchShells.forEach(shell => {
    const input = shell.querySelector('input');
    const actionBtn = shell.querySelector('button');
    shell.addEventListener('mouseenter', () => openSearch(shell));
    shell.addEventListener('focusin', () => openSearch(shell));
    shell.addEventListener('mouseleave', () => {
      if (!shell.contains(document.activeElement)) closeSearches();
    });
    if(input){
      input.addEventListener('input', () => openSearch(shell));
      input.addEventListener('keydown', e => {
        if(e.key === 'Enter'){
          e.preventDefault();
          if(resolveIproQuery(input.value)) window.location.href = 'iprostore.html';
          else openSearch(shell);
        }
        if(e.key === 'Escape'){
          input.blur();
          closeSearches();
        }
      });
    }
    if(actionBtn){
      actionBtn.addEventListener('click', e => {
        e.preventDefault();
        if(input && resolveIproQuery(input.value)) window.location.href = 'iprostore.html';
        else openSearch(shell);
      });
    }
  });

  document.addEventListener('click', e => {
    if(!e.target.closest('.search-shell')) closeSearches();
    const disabledSuggestion = e.target.closest('.suggestion-disabled');
    if(disabledSuggestion){ e.preventDefault(); return; }
    const targetSuggestion = e.target.closest('.search-target');
    if(targetSuggestion && targetSuggestion.dataset.target){
      e.preventDefault();
      window.location.href = targetSuggestion.dataset.target;
    }
  });

  const menuBtn = document.querySelector('.mobile-menu');
  const menuOverlay = document.querySelector('.mobile-menu-overlay');
  const searchTrigger = document.querySelector('.mobile-search-trigger');
  const searchOverlay = document.querySelector('.mobile-search-overlay');
  const searchClose = document.querySelector('.mobile-search-close');
  const searchInput = document.querySelector('.mobile-search-input');
  const notificationTriggers = document.querySelectorAll('.js-notification-trigger, .bell, a[aria-label="Notifications"], button[aria-label="Notifications"]');
  const notifOverlay = document.querySelector('.notif-overlay');
  const notifClose = document.querySelector('.notif-close');
  const loading = document.querySelector('.tp-loading');

  function closeMobileMenu(){ body.classList.remove('mobile-menu-open'); }
  function openMobileMenu(){ body.classList.remove('mobile-search-open','notifications-open'); body.classList.add('mobile-menu-open'); }
  function toggleMobileMenu(){ body.classList.contains('mobile-menu-open') ? closeMobileMenu() : openMobileMenu(); }
  function closeMobileSearch(){ body.classList.remove('mobile-search-open'); }
  function openMobileSearch(){ body.classList.remove('mobile-menu-open','notifications-open'); body.classList.add('mobile-search-open'); setTimeout(() => searchInput && searchInput.focus(), 40); }
  function closeNotifications(){ body.classList.remove('notifications-open'); }
  function openNotifications(){ body.classList.remove('mobile-menu-open','mobile-search-open'); body.classList.add('notifications-open'); }
  function hideLoading(){ if(loading) loading.classList.remove('is-visible'); clearTimeout(window.__tpProfileLoadingTimer); }
  function showLoading(options = {}){
    if(!loading) return;
    const { thenNavigate = null, persistent = false } = options;
    loading.classList.add('is-visible');
    clearTimeout(window.__tpProfileLoadingTimer);
    if(persistent) return;
    window.__tpProfileLoadingTimer = setTimeout(() => {
      loading.classList.remove('is-visible');
      if(typeof thenNavigate === 'function') thenNavigate();
    }, 850);
  }

  menuBtn && menuBtn.addEventListener('click', e => { e.preventDefault(); toggleMobileMenu(); });
  menuOverlay && menuOverlay.addEventListener('click', closeMobileMenu);
  searchTrigger && searchTrigger.addEventListener('click', e => { e.preventDefault(); openMobileSearch(); });
  searchClose && searchClose.addEventListener('click', e => { e.preventDefault(); closeMobileSearch(); });
  searchOverlay && searchOverlay.addEventListener('click', e => { if(e.target === searchOverlay) closeMobileSearch(); });
  searchInput && searchInput.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
      e.preventDefault();
      if(resolveIproQuery(searchInput.value)) window.location.href = 'iprostore.html';
    }
  });

  notificationTriggers.forEach(el => {
    el.classList.add('js-notification-trigger');
    el.addEventListener('click', e => { e.preventDefault(); openNotifications(); });
  });
  notifOverlay && notifOverlay.addEventListener('click', closeNotifications);
  notifClose && notifClose.addEventListener('click', e => { e.preventDefault(); closeNotifications(); });

  document.addEventListener('keydown', e => {
    if(e.key === 'Escape'){
      closeMobileMenu();
      closeMobileSearch();
      closeNotifications();
      hideLoading();
    }
  });

  document.addEventListener('click', e => {
    const clickable = e.target.closest('button, a');
    if(!clickable) return;
    if(clickable.closest('.tabs-bar')) return;
    if(clickable.closest('.search-suggestions')) return;
    if(clickable.closest('.search-shell')) return;
    if(clickable.closest('.mobile-search-overlay .search-target')) return;
    if(clickable.matches('.mobile-search-trigger, .mobile-search-close, .mobile-search-icon, .mobile-menu, .notif-close')) return;
    if(clickable.closest('.tp-loading')) return;
    if(clickable.closest('.notif-panel')) return;
    if(clickable.classList.contains('js-notification-trigger')) return;

    // Footer links behave exactly like the homepage unused links: endless Verifying popup.
    if(clickable.closest('.site-footer')){
      e.preventDefault();
      showLoading({ persistent: true });
      return;
    }

    const href = clickable.tagName === 'A' ? (clickable.getAttribute('href') || '').trim() : '';
    const target = clickable.tagName === 'A' ? clickable.getAttribute('target') : null;
    if(!href || href === '#' || href.startsWith('#') || href.startsWith('javascript:')) return;
    e.preventDefault();
    showLoading({ thenNavigate: () => {
      if(target === '_blank') window.open(href, '_blank', 'noopener');
      else window.location.href = href;
    }});
  });
})();


// Final integrity accordion toggle
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.integrity-card .accordion-toggle').forEach((btn) => {
    const card = btn.closest('.integrity-card');
    if (!card || btn.dataset.boundAccordion === 'true') return;
    btn.dataset.boundAccordion = 'true';
    btn.addEventListener('click', () => {
      const open = card.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
});
