let users = [
  {
    id: 0,
    firstName: "Murat",
    lastName: "OKUR",
    userName: "m",
    userPassword: "s",
    proflieImagePath: "images/08.png",
    isActive: true,
  },
  {
    id: 1,
    firstName: "Mahir",
    lastName: "KURŞUN",
    userName: "m",
    userPassword: "k",
    proflieImagePath: "images/03.png",
    isActive: true,
  },
  {
    id: 2,
    firstName: "Fatih",
    lastName: "OKUR",
    userName: "f",
    userPassword: "o",
    proflieImagePath: "images/016.png",
    isActive: true,
  },
  {
    id: 3,
    firstName: "Yıldız",
    lastName: "Deniz",
    userName: "y",
    userPassword: "d",
    proflieImagePath: "images/012.png",
    isActive: true,
  },
];

let userData = [
  {
    id: 0,
    contact: {
      phone: ["+90 942 640 32 16"],
      mail: ["muratokur3@icloud.com", "okur3326@gmail.com"],
      web: ["muratokur.com.tr"],
    },
    languages: [
      "Kürtçe( anadil)",
      "Türkçe (Profesyonel",
      "İngilizce",
      "Fransızca",
      "farsça",
    ],
    skills: ["JavaScript", "React", "Node.js", ".net", "MsSQL"],
    references: [
      {
        fullName: "Fatih KAYA",
        head: "SEO Uzmanı",
        contact: [
          "+490 542 690 43 56",
          "selamunaleykum.com.tr",
          "fatihmıkaya@gmail.com",
        ],
      },
      {
        fullName: "Ahmet KAYA",
        head: "CEO",
        contact: [
          "+490 542 690 43 56",
          "aleykumselam.com.tr",
          "iletisim@gmail.com",
        ],
      },
    ],
    experience: [
      {
        year: "2018",
        head: "FULLSTACK DEVELOPER",
        detail:
          "Microservisler ve veri tabanı yapıları. ile birden çokServis bağlantısı hakkında",
      },
      {
        year: "2012",
        head: "SOFTWARE DEVELOPER",
        detail:
          "Microservisler ve veri tabanı yapıları. ile birden çokServis bağlantısı hakkında",
      },
    ],
    schoolEducation: [
      {
        year: "2020",
        head: "YAZILIM MÜHENDİSLİĞİ",
        detail: "İSANS / İSTANBUL TEKNİK ÜNİVERSİTESİ",
      },
      {
        year: "2014",
        head: "BİLGİSAYAR PROGRAMCILIGI",
        detail: "ÖN LİSANS / MANİSA CEELAL BAYAR ÜNİVERSİTESİ",
      },
    ],
    certificates: [
      {
        year: "2023",
        head: "FRONT-END DEVELOPER",
        detail: "BİR MİLYON İSTİHDAM",
      },
      {
        year: "2022",
        head: "ASP.NET E-TİCARET SİTESİ",
        detail: "İSANS / İSTANBUL TEKNİK ÜNİVERSİTESİ",
      },
      {
        year: "2019",
        head: "PHP YÜKSEK DİLİ ÖĞRENİMİ",
        detail: "UDEMY",
      },
    ],
    socialAccount: {
      gitHub: "https://github.com/muratokur3",
      linkedin: "https://www.linkedin.com/in/murat-okur/",
      twitter: "https://twitter.com/muratsokur3",
    },
    userId: 0,
  },
  {
    id: 1,
    contact: {
      phone: ["+901234567890", "+908765432109"],
      mail: ["ornek1@example.com", "ornek1@gmail.com"],
      web: ["ornek1web.com", "ornekweb1.net"],
    },
    languages: ["Türkçe", "İngilizce", "Almanca"],
    skills: ["Python", "Django", "SQL", "HTML/CSS", "Java"],
    references: [
      {
        fullName: "Ahmet Demir",
        head: "Proje Yöneticisi",
        contact: ["+490 123 456 789", "ahmet.demir@example.com"],
      },
    ],
    experience: [
      {
        year: "2020",
        head: "FULL STACK GELİŞTİRİCİ",
        detail:
          "Web uygulamaları geliştirmek için modern teknolojileri kullanma becerisi.",
      },
      {
        year: "2016",
        head: "YAZILIM GELİŞTİRİCİ",
        detail: "Mikrohizmetler ve veritabanı yapıları ile ilgili deneyim.",
      },
    ],
    schoolEducation: [
      {
        year: "2020",
        head: "YAZILIM GELİŞTİRME TEKNİKERLİĞİ",
        detail: "Ön Lisans / Anadolu Üniversitesi",
      },
      {
        year: "2014",
        head: "BİLGİSAYAR MÜHENDİSLİĞİ",
        detail: "Lisans / İstanbul Teknik Üniversitesi",
      },
    ],
    certificates: [
      {
        year: "2021",
        head: "VERİ TABANI YÖNETİMİ",
        detail: "Coursera",
      },
      {
        year: "2018",
        head: "DJANGO WEB GELİŞTİRME",
        detail: "Udemy",
      },
    ],
    socialAccount: {
      gitHub: "https://github.com/mahirkursun",
      linkedin: "https://www.linkedin.com/in/mahirkursun/",
      twitter: "https://twitter.com/mahirkursun",
    },
    userId: 1,
  },
  {
    id: 2,
    contact: {
      phone: ["+902223344556", "+901112233445"],
      mail: ["ornek2@example.com", "ornek2@gmail.com"],
      web: ["ornek2web.com", "ornekweb2.net"],
    },
    languages: ["Türkçe", "İngilizce", "Fransızca"],
    skills: ["C#", ".NET Core", "SQL Server", "HTML/CSS", "Angular"],
    references: [
      {
        fullName: "Ayşe Yılmaz",
        head: "Proje Yöneticisi",
        contact: ["+490 987 654 321", "ayse.yilmaz@example.com"],
      },
      {
        fullName: "Ahmet KAYA",
        head: "CEO",
        contact: [
          "+490 542 690 43 56",
          "aleykumselam.com.tr",
          "iletisim@gmail.com",
        ],
      },
    ],
    experience: [
      {
        year: "2021",
        head: "FULL STACK GELİŞTİRİCİ",
        detail: "Çeşitli web projelerinde tam yığın geliştirme deneyimi.",
      },
      {
        year: "2015",
        head: "YAZILIM MÜHENDİSİ",
        detail: "Mobil uygulama geliştirme konusundaki tecrübeler.",
      },
    ],
    schoolEducation: [
      {
        year: "2019",
        head: "YAZILIM PROGRAMCILIĞI",
        detail: "Ön Lisans / İstanbul Üniversitesi",
      },
      {
        year: "2013",
        head: "BİLGİSAYAR MÜHENDİSLİĞİ",
        detail: "Lisans / Boğaziçi Üniversitesi",
      },
    ],
    certificates: [
      {
        year: "2020",
        head: "MOBİL UYGULAMA TASARIMI",
        detail: "Coursera",
      },
      {
        year: "2017",
        head: ".NET CORE MVC GELİŞTİRME",
        detail: "Udemy",
      },
    ],
    socialAccount: {
      gitHub: "https://github.com/muratokur3",
      linkedin: "https://www.linkedin.com/in/murat-okur/",
      twitter: "https://twitter.com/muratsokur3",
    },
    userId: 2,
  },
  {
    id: 3,
    contact: {
      phone: ["+902223344556", "+901112233445"],
      mail: ["ornek2@example.com", "ornek2@gmail.com"],
      web: ["ornek2web.com", "ornekweb2.net"],
    },
    languages: ["Türkçe", "İngilizce", "Fransızca"],
    skills: ["C#", ".NET Core", "SQL Server", "HTML/CSS", "Angular"],
    references: [
      {
        fullName: "Ayşe Yılmaz",
        head: "Proje Yöneticisi",
        contact: ["+490 987 654 321", "ayse.yilmaz@example.com"],
      },
      {
        fullName: "Ahmet KAYA",
        head: "CEO",
        contact: [
          "+490 542 690 43 56",
          "aleykumselam.com.tr",
          "iletisim@gmail.com",
        ],
      },
    ],
    experience: [
      {
        year: "2021",
        head: "FULL STACK GELİŞTİRİCİ",
        detail: "Çeşitli web projelerinde tam yığın geliştirme deneyimi.",
      },
      {
        year: "2015",
        head: "YAZILIM MÜHENDİSİ",
        detail: "Mobil uygulama geliştirme konusundaki tecrübeler.",
      },
    ],
    schoolEducation: [
      {
        year: "2019",
        head: "YAZILIM PROGRAMCILIĞI",
        detail: "Ön Lisans / İstanbul Üniversitesi",
      },
      {
        year: "2013",
        head: "BİLGİSAYAR MÜHENDİSLİĞİ",
        detail: "Lisans / Boğaziçi Üniversitesi",
      },
    ],
    certificates: [
      {
        year: "2020",
        head: "MOBİL UYGULAMA TASARIMI",
        detail: "Coursera",
      },
      {
        year: "2017",
        head: ".NET CORE MVC GELİŞTİRME",
        detail: "Udemy",
      },
    ],
    socialAccount: {
      gitHub: "https://github.com/muratokur3",
      linkedin: "https://www.linkedin.com/in/murat-okur/",
      twitter: "https://twitter.com/muratsokur3",
    },
    userId: 3,
  },
];

let currentUser;
let currentUserData;
let userRegister = false;

const userCvList = document.getElementById("user-cv-list");
const userCv = document.getElementById("user-cv");
const cvLeft = document.getElementById("cv-left");
const cvRight = document.getElementById("cv-right");

const cvImageBox = document.getElementById("cv-image-box");
const cvLeftDetailBox = document.getElementById("cv-left-detail-box");
const cvIletisim = document.getElementById("cv-iletisim");
const cvSosyal = document.getElementById("cv-sosyal");
const cvDiller = document.getElementById("cv-diller");
const cvBeceriler = document.getElementById("cv-beceriler");
const cvReferanslar = document.getElementById("cv-referanslar");

const cvUserName = document.getElementById("cv-user-name");
const userHead = document.getElementById("user-head");
const cvIsDeneyimi = document.getElementById("cv-is-deneyimi");
const cvEgitim = document.getElementById("cv-egitim");
const cvSertifikalar = document.getElementById("cv-sertifikalar");

const userName = document.getElementById("sign-user-name");
const userPassword = document.getElementById("sign-user-password");
const btnProfile = document.getElementById("btn-profile");
const btnSignIn = document.getElementById("sign-login");
const signBox = document.getElementById("sign-box");

const asd = document.getElementById("asd");

const loginImageBox = document.getElementById("login-images-box");
const lognBox = document.getElementById("login-box");
const loginUserfirsName = document.getElementById("login-firstname");
const loginUserLastName = document.getElementById("login-lastname");
const loginUserName = document.getElementById("login-user-name");
const loginUserPassword = document.getElementById("login-user-password");
const loginUserImage = document.getElementById("login-btn-select-image");
// user listing

function getUser(id) {
  firstname.value = users[id].firstName;
  lastname.value = users[id].lastName;
  job.value = users[id].job;
  image.value = users[id].proflieImagePath;
  image.src = users[id].proflieImagePath;
  btnAdd.innerText = "Ubdate";
  btnAdd.setAttribute("onClick", `ubdateUser(${id})`);
}

function ubdateUser(id) {
  users[id] = {
    ...users[id],
    firstName: firstname.value,
    lastName: lastname.value,
    job: job.value,
    proflieImagePath: image.value,
  };
  console.log(users);
  window.alert("Kullanıcı Güncellendi.");
  usersListing(users);
  cleanInput();
}

function cleanInput() {
  firstname.value = "";
  lastname.value = "";
  job.value = "";
  image.src = "/images/user.png";
  btnAdd.innerText = "Create User";
  btnAdd.setAttribute("onClick", `createUser()`);
}

function deletedUser(id) {
  users.map((user) => {
    if (user.id == id) {
      user.isActive = false;
    }
  });

  usersListing(users);
  cleanInput();
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function usersListing() {
  showUserCv(users[0], userData[0]);
  userCv.style.display = "none";
  userCvList.style.display = "flex";
  signBox.style.display = "none";
  lognBox.style.display = "none";
  userCvList.innerHTML = "";

  users.forEach((user) => {
    let userCard = document.createElement("div");
    userCard.classList = "user-card";
    userCard.setAttribute("id", user.id);
    userCard.setAttribute(
      "onclick",
      `showUserCv(users[${user.id}],userData[${user.id}])`
    );

    userCard.style.backgroundColor = getRandomColor();
    userCvList.appendChild(userCard);

    let userCardMain = document.createElement("div");
    userCardMain.classList = "user-card-main";
    userCard.appendChild(userCardMain);

    let userProfileImage = document.createElement("img");
    userProfileImage.classList = "profile-image";
    userProfileImage.setAttribute("src", user.proflieImagePath);
    userCardMain.appendChild(userProfileImage);

    let userDetails = document.createElement("div");
    userDetails.classList = "user-details";
    userDetails.setAttribute("id", user.id);
    userDetails.innerHTML = `<h1>${user.firstName + " " + user.lastName}</h1>`;

    userDetails.innerHTML += `<h6>${userData[user.id].experience[0].head}</h6>`;
    userDetails.innerHTML += `<p>Deneyim: ${
      userData[user.id].experience.length
    }</p>`;
    userDetails.innerHTML += `<p>Okullar: ${
      userData[user.id].schoolEducation.length
    }</p>`;
    userDetails.innerHTML += `<p>Sertifikalar: ${
      userData[user.id].certificates.length
    }</p>`;
    userDetails.innerHTML += `<p>Referanslar: ${
      userData[user.id].references.length
    }</p>`;

    userCardMain.appendChild(userDetails);

    let userCardFooter = document.createElement("div");
    userCardFooter.classList = "user-card-footer";
    userCardFooter.innerHTML += `<a href="${
      userData[user.id].socialAccount.gitHub
    }"><i class="fa-brands fa-github fa-2xl"></i></a>`;
    userCardFooter.innerHTML += `<a href="${
      userData[user.id].socialAccount.linkedin
    }"><i class="fa-brands fa-linkedin fa-2xl" style="color: #002e7a;"></i></a>`;
    userCardFooter.innerHTML += `<a href="${
      userData[user.id].socialAccount.twitter
    }"><i class="fa-brands fa-twitter fa-2xl" style="color: #0061ff;"></i></a>`;

    userCard.appendChild(userCardFooter);
  });
}

const searchUser = () => {
  userCvList.innerHTML = "";
  let searchText = document.getElementById("search-input").value;
  let searchList = users.filter((user) => {
    if (
      user.firstName.includes(searchText) ||
      user.lastName.includes(searchText)
    ) {
      return true;
    }
  });
  console.log(searchList);
  usersListing(searchList);
};
usersListing();
// profile

function showUserCv(userCurrent, userCurrentData) {
  userCvList.style.display = "none";
  userCv.style.display = "flex";
  cvIletisim.innerHTML = "";
  userHead.innerHTML = "Last Head";
  cvDiller.innerHTML = "";
  cvBeceriler.innerHTML = "";
  cvReferanslar.innerHTML = "";
  cvIsDeneyimi.innerHTML = "";
  cvEgitim.innerHTML = "";
  cvSertifikalar.innerHTML = "";
// cvSosyal.innerHTML = "";
   function writeCvDetail () {
    // iletişim
    cvImageBox.src = userCurrent.proflieImagePath;
    cvUserName.innerHTML = `${userCurrent.firstName} ${userCurrent.lastName}`;
    userHead.innerHTML = userCurrentData.experience[0].head;

    userCurrentData.contact.phone.forEach((item) => {
      cvIletisim.innerHTML += `<p>${item}</p>`;
    });

    userCurrentData.contact.mail.forEach((item) => {
      cvIletisim.innerHTML += `<a>${item}</a>`;
    });

    userCurrentData.contact.web.forEach((item) => {
      cvIletisim.innerHTML += `<a>${item}</a>`;
    });

    // sosyal media
    // cvSosyal.innerHTML += `<a href="${userCurrentData.socialAccount.gitHub}"><i class="fa-brands fa-github fa-2xl"></i></a>`;
    // cvSosyal.innerHTML += `<a href="${userCurrentData.socialAccount.linkedin}"><i class="fa-brands fa-linkedin fa-2xl" style="color: #002e7a;"></i></a>`;
    // cvSosyal.innerHTML += `<a href="${userCurrentData.socialAccount.twitter}"><i class="fa-brands fa-twitter fa-2xl" style="color: #0061ff;"></i></a>`;

    // diller
    userCurrentData.languages.forEach((item) => {
      cvDiller.innerHTML += `<p>${item}</p>`;
    });

    // beceriler
    userCurrentData.skills.forEach((item) => {
      cvBeceriler.innerHTML += `<p>${item}</p>`;
    });

    // referansalar
    userCurrentData.references.forEach((ref) => {
      let referans = document.createElement("div");
      referans.classList = "referans";
      referans.innerHTML = `<h3>${ref.fullName}</h3> <h5>${ref.head}</h5>`;
      cvReferanslar.appendChild(referans);

      ref.contact.forEach((item) => {
        referans.innerHTML += `<p>${item}</p>`;
      });
    });

    // deneyimler
    userCurrentData.experience.forEach((exper) => {
      let yearDetail = document.createElement("div");
      yearDetail.classList = "year-detail";
      cvIsDeneyimi.appendChild(yearDetail);

      let year = document.createElement("div");
      year.classList = "year";
      year.innerHTML = exper.year;
      yearDetail.appendChild(year);

      let detail = document.createElement("div");
      detail.classList = "detail";
      detail.innerHTML = `<h3>${exper.head}</h3> <br> <p>${exper.detail}</p>`;
      yearDetail.appendChild(detail);
    });

    // eğitimler
    userCurrentData.schoolEducation.forEach((school) => {
      let yearDetail = document.createElement("div");
      yearDetail.classList = "year-detail";
      cvEgitim.appendChild(yearDetail);

      let year = document.createElement("div");
      year.classList = "year";
      year.innerHTML = school.year;
      yearDetail.appendChild(year);

      let detail = document.createElement("div");
      detail.classList = "detail";
      detail.innerHTML = `<h3>${school.head}</h3> <br> <p>${school.detail}</p>`;
      yearDetail.appendChild(detail);
    });

    // seertifikalar
    userCurrentData.certificates.forEach((school) => {
      let yearDetail = document.createElement("div");
      yearDetail.classList = "year-detail";
      cvSertifikalar.appendChild(yearDetail);

      let year = document.createElement("div");
      year.classList = "year";
      year.innerHTML = school.year;
      yearDetail.appendChild(year);

      let detail = document.createElement("div");
      detail.classList = "detail";
      detail.innerHTML = `<h3>${school.head}</h3> <br> <p>${school.detail}</p>`;
      yearDetail.appendChild(detail);
    });
  };
  
  // if (userRegister) {
  //   writeCvDetail()

  //   cvIletisim.innerHTML += `<button class="icon-edit"><i class="fa-solid fa-pen-to-square fa-lg" style="color: gray;"></i></button>`;
  //   cvSertifikalar.innerHTML += `<button class="icon-edit"><i class="fa-solid fa-pen-to-square fa-lg" style="color: gray;"></i></button>`;
  //   cvIsDeneyimi.innerHTML += `<button class="icon-edit"><i class="fa-solid fa-pen-to-square fa-lg" style="color: gray;"></i></button>`;
  //   cvReferanslar.innerHTML += `<button class="icon-edit"><i class="fa-solid fa-pen-to-square fa-lg" style="color: gray;"></i></button>`;
  //   cvBeceriler.innerHTML += `<button class="icon-edit"><i class="fa-solid fa-pen-to-square fa-lg" style="color: gray;"></i></button>`;
  //   cvDiller.innerHTML += `<button class="icon-edit"><i class="fa-solid fa-pen-to-square fa-lg" style="color: gray;"></i></button>`;
  //   cvEgitim.innerHTML += `<button class="icon-edit"><i class="fa-solid fa-pen-to-square fa-lg" style="color: gray;"></i></button>`;
  // }
  
    writeCvDetail()
  
 
}

const signIn = () => {
  if (signBox.style.display == "none") {
    lognBox.style.display = "none";
    signBox.style.display = "flex";
  } else {
    signBox.style.display = "none";
  }
};

const authenticate = () => {
  if (
    users.find((user) => {
      if (
        user.isActive == true &&
        user.userName === userName.value &&
        user.userPassword === userPassword.value
      ) {
        currentUser = user;
        return true;
      }
    })
  ) {
    currentUserData = userData.find((detail) => {
      if (detail.userId === currentUser.id) {
        return detail;
      }
    });
    signBox.style.display = "none";
    btnProfile.style.display = "flex";
    btnSignIn.style.display = "none";
    btnProfile.innerHTML = `<button onclick="showUserCv(currentUser,currentUserData)">${currentUser.firstName} ${currentUser.lastName}</button><i onclick="outAccount()" class="fa-solid fa-power-off fa-lg">`;
    showUserCv(currentUser, currentUserData);
    userRegister = true;
    userName.value = "";
    userPassword.value = "";
  } else alert("hesap yok");
};

function outAccount() {
  if (confirm("Çışış yapılsın mı?")) {
    btnProfile.innerHTML = "";
    btnProfile.style.display = "none";
    btnSignIn.style.display = "flex";
    userCv.style.display = "none";
    userCvList.style.display = "flex";
    currentUser = [];
    currentUserData = [];
    userRegister = false;
    alert("çıkış yapıldı");
  }
}
// log in

const logIn = () => {
  if (lognBox.style.display == "none") {
    signBox.style.display = "none";
    lognBox.style.display = "flex";
  } else {
    lognBox.style.display = "none";
  }
};

function createUser() {
  if (
    loginUserfirsName.value != "" &&
    loginUserLastName.value != "" &&
    loginUserName.value != "" &&
    loginUserPassword.value != ""
  ) {
    if (checkUserRegistration()) {
      alert("Bu kullanici adı kullanılıyor");
    } else {
      users.push({
        id: users.length,
        firstName: loginUserfirsName.value,
        lastName: loginUserLastName.value,
        userName: loginUserName.value,
        userPassword: loginUserPassword.value,
        proflieImagePath: loginUserImage.src,
        isActive: true,
      });
      userData.push({
        id: users.length,
        contact: {
          phone: [],
          mail: [],
          web: [],
        },
        languages: [],
        skills: [],
        references: [
          {
            fullName: "",
            head: "",
            contact: [],
          },
        ],
        experience: [
          {
            year: "",
            head: "",
            detail: "",
          },
        ],
        schoolEducation: [
          {
            year: "",
            head: "",
            detail: "",
          },
        ],
        certificates: [
          {
            year: "",
            head: "",
            detail: "",
          },
        ],
        socialAccount: {
          gitHub: "",
          linkedin: "",
          twitter: "",
        },
        userId: users.length,
      });
      alert("Kullanıcı eklendi.");
      loginUserfirsName.value = "";
      loginUserLastName.value = "";
      loginUserName.value = "";
      loginUserPassword.value = "";
      loginUserImage.src = "./images/user.png";
      usersListing();
    }
  } else {
    alert("Boş girilemez.");
  }
}

function checkUserRegistration() {
  var isUserRegistered = false;
  users.forEach((user) => {
    if (user.loginUserName === loginUserName.value) {
      isUserRegistered = true;
    }
  });
  return isUserRegistered;
}

const openImageSelectBox = () => {
  loginImageBox.style.visibility == "hidden"
    ? (loginImageBox.style.visibility = "visible")
    : (loginImageBox.style.visibility = "hidden");
};

const selectImage = (selectted) => {
  loginUserImage.setAttribute("value", selectted.name);
  loginImageBox.style.visibility = "hidden";
  loginUserImage.src = selectted.name;
  loginUserImage.value = selectted.name;
};
