function alertFunction() {
    alert('Done Send Your Details')
}
function reviewFunction() {
    alert('Thanks For Your Review')
}
// change lang
function changeLang(type) {
    // nav 
    let homeLink = document.getElementById('homeLink')
    let aboutLink = document.getElementById('aboutLink')
    let imagesLink = document.getElementById('imagesLink')
    let serviceLink = document.getElementById('serviceLink')
    let WarningLink = document.getElementById('WarningLink')
    let bookLink = document.getElementById('bookLink')
    let reviewLink = document.getElementById('reviewLink')
    let mapLink = document.getElementById('mapLink')
    let languageLink = document.getElementById('languageLink')
    // banner
    let headerOfBanner = document.getElementById('headerOfBanner')
    // about
    let aboutHeader = document.getElementById('aboutHeader')
    let aboutContent = document.getElementById('aboutContent')
    // images
    let imagesHeader = document.getElementById('imagesHeader')
    // service
    let serviceHeader = document.getElementById('serviceHeader')
    // service one
    let serviceHeaderOne = document.getElementById('serviceHeaderOne')
    let serviceContentOne = document.getElementById('serviceContentOne')
    // service two
    let serviceHeaderTwo = document.getElementById('serviceHeaderTwo')
    let serviceContentTwo = document.getElementById('serviceContentTwo')
    // service Three
    let serviceHeaderThree = document.getElementById('serviceHeaderThree')
    let serviceContentThree = document.getElementById('serviceContentThree')
    // service Four
    let serviceHeaderFour = document.getElementById('serviceHeaderFour')
    let serviceContentFour = document.getElementById('serviceContentFour')
    // service Five
    let serviceHeaderFive = document.getElementById('serviceHeaderFive')
    let serviceContentFive = document.getElementById('serviceContentFive')
    // warnings
    let warningsHeader = document.getElementById('warningsHeader')
    let warningsContect = document.getElementById('warningsContect')
    // book
    let bookHeader = document.getElementById('bookHeader')
    let phoneNumber = document.getElementById('phoneNumber')
    let email = document.getElementById('email')
    let roomCount = document.getElementById('roomCount')
    let personCount = document.getElementById('personCount')
    let bookSubmit = document.getElementById('bookSubmit')
    let bookByWhatsapp = document.getElementById('bookByWhatsapp')
    let bookByPhone = document.getElementById('bookByPhone')
    // reviews
    let reviewHeader = document.getElementById('reviewHeader')
    let reviewHeaderContentLeft = document.getElementById('reviewHeaderContentLeft')
    let message = document.getElementById('message')
    let sendSubmit = document.getElementById('sendSubmit')
    let reviewHeaderContentRight = document.getElementById('reviewHeaderContentRight')









    if(type === "en"){
        // nav
        homeLink.innerHTML = "Home"
        aboutLink.innerHTML = "about us"
        imagesLink.innerHTML = "Hotel Images"
        serviceLink.innerHTML = "Services"
        WarningLink.innerHTML = "Warnings"
        bookLink.innerHTML = "book"
        reviewLink.innerHTML = "review"
        mapLink.innerHTML = "map"
        languageLink.innerHTML = "language"
        // banner
        headerOfBanner.innerHTML = 'Welcome in <br> <em>The most beautiful palaces</em>'
        // about
        aboutHeader.innerHTML = '<em>About Us</em>'
        aboutContent.innerHTML = 'The most beautiful palaces for furnished apartments is The best choice to have fun and relax The excellent services and warm hospitality of Nozol Al ShakreenO Hotel will make your stay an unforgettable experience. The hotel offers an opportunity to enjoy a wide range of services, including family room, Wi-Fi in public areas, elevator, car park, The rooms are carefully equipped to include the best amenities, hair dryer, in room safe, coffee/tea maker, satellite TV in all rooms. The wide range of services in the hotel to ensure your comfort leave you plenty of options to spend your time during your stay. Nozol Al Shakreen Hotel is a smart choice for travelers to Madinah, as it provides a relaxing and relaxing stay.'
        // images
        imagesHeader.innerHTML = 'Hotel Images'
        // service
        serviceHeader.innerHTML = "services"
        // service one
        serviceHeaderOne.innerHTML = "Solve the problem as soon as possible"
        serviceContentOne.innerHTML = "The hotel security system depends on receiving the problem and solving it as soon as possible"
        // service two
        serviceHeaderTwo.innerHTML = "enjoy"
        serviceContentTwo.innerHTML = 'Ensures that you enjoy the hotel and complete freedom inside the hotel'
        // service Three
        serviceHeaderThree.innerHTML = "Provide services"
        serviceContentThree.innerHTML = "The hotel provides service very quickly"
        // service Four
        serviceHeaderFour.innerHTML = "Special Needs Care"
        serviceContentFour.innerHTML = "We provide them with all the services that guarantee them complete comfort through the hotel services"
        // service Five
        serviceHeaderFive.innerHTML = "car park"
        serviceContentFive.innerHTML = "The hotel has a fully secured car park to keep guests' cars"
        // warnings
        warningsHeader.innerHTML = 'Warnings'
        warningsContect.innerHTML = 'No smoking inside the hotel'
        // book
        bookHeader.innerHTML = "book"
        phoneNumber.innerHTML = "Your Number"
        email.innerHTML = "Email Address"
        roomCount.innerHTML = "Number Of Rooms"
        personCount.innerHTML = "Number Of People"
        bookSubmit.innerHTML = "Submit"
        bookByWhatsapp.innerHTML = "Book By Whatsapp"
        bookByPhone.innerHTML = "Book By Phone"
        // reviews
        reviewHeader.innerHTML = "review us"
        reviewHeaderContentLeft.innerHTML = "Write Your Review"
        message.placeholder = "Enter Your Review..."
        reviewHeaderContentRight.innerHTML = "Customers Reviews"
        sendSubmit.innerHTML = "Submit"

    }else{
        // nav
        homeLink.innerHTML = "الرئيسيه"
        aboutLink.innerHTML = "وصف الفندق"
        imagesLink.innerHTML = "صور الفندق"
        serviceLink.innerHTML = "الخدامات"
        WarningLink.innerHTML = "التحذيرات"
        bookLink.innerHTML = "الحجز"
        reviewLink.innerHTML = "مراجعتنا"
        mapLink.innerHTML = "الخريطه"
        languageLink.innerHTML = "اللغه  "
        // banner
        headerOfBanner.innerHTML = 'مرحبا بك في <br> <em>أروع القصور</em>'
        //about
        aboutHeader.innerHTML = '<em>وصف الفندق</em>'
        aboutContent.innerHTML = 'أجمل القصور للشقق المفروشة هو الخيار الأفضل للاستمتاع والاسترخاء. الخدمات الممتازة وكرم الضيافة سيجعل إقامتك تجربة لا تُنسى. يوفر الفندق فرصة للاستمتاع بمجموعة واسعة من الخدمات ، بما في ذلك غرفة عائلية ، واي فاي في المناطق العامة ، مصعد ، موقف سيارات ، الغرف مجهزة بعناية لتشمل أفضل وسائل الراحة ، مجفف شعر ، خزنة داخل الغرفة ، قهوة / شاي صانع ، قنوات فضائية في جميع الغرف. توفر لك المجموعة الواسعة من الخدمات في الفندق لضمان راحتك الكثير من الخيارات لقضاء وقتك أثناء إقامتك. فندق نزل الشكرين هو خيار ذكي للمسافرين إلى المدينة المنورة ، حيث يوفر إقامة مريحة وهادئة.'
        // images
        imagesHeader.innerHTML = 'صور الفندق'
        // service
        serviceHeader.innerHTML = "الخدامات"
        // service one
        serviceHeaderOne.innerHTML = 'حل المشكلة في أسرع وقت ممكن'
        serviceContentOne.innerHTML = "يعتمد نظام أمن الفندق على استقبال المشكلة وحلها في أسرع وقت ممكن"
        // service two
        serviceHeaderTwo.innerHTML = "الاستمتاع"
        serviceContentTwo.innerHTML = 'يضمن لك الاستمتاع بالفندق والحرية الكاملة داخل الفندق        '
        // service Three
        serviceHeaderThree.innerHTML = "تقديم الخدمات"
        serviceContentThree.innerHTML = "الفندق يقدم الخدمات في اسرع وقت"
        // service Four
        serviceHeaderFour.innerHTML = 'رعاية ذوي الاحتياجات الخاصة'
        serviceContentFour.innerHTML = 'نقدم لهم جميع الخدمات التي تضمن لهم الراحة التامة من خلال الخدمات الفندقية '
        // service Five
        serviceHeaderFive.innerHTML = "موقف للسيارات"
        serviceContentFive.innerHTML = "يوجد بالفندق موقف للسيارات مؤمن بالكامل للحفاظ علي السيارات التابعه للضيوف"
        // warnings
        warningsHeader.innerHTML = 'تحذير'
        warningsContect.innerHTML = "ممنوع التدخين داخل الفندق"
        // book
        bookHeader.innerHTML = "الحجز"
        phoneNumber.innerHTML = "رقم التليفون"
        email.innerHTML = "عنوان البريد الالكتروني"
        roomCount.innerHTML = "عدد الغرف"
        personCount.innerHTML = "عدد الاشخاص"
        bookSubmit.innerHTML = "حجز"
        bookByWhatsapp.innerHTML = "الحجز من خلال الواتساب"
        bookByPhone.innerHTML = "الحجز من خلال رقم الهاتف"
        // reviews
        reviewHeader.innerHTML = "راجعنا"
        reviewHeaderContentLeft.innerHTML = "اكتب مراجعتك"
        message.placeholder = "...اكتب رايك"
        reviewHeaderContentRight.innerHTML = "مراجعات العملاء"
        sendSubmit.innerHTML = "ارسال"







    }
}