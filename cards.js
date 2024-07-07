document.addEventListener("DOMContentLoaded", function () {
  let cardsInformations = [
    {
      id: 1,
      image: "./images/allProducts/01/qantel.webp",
      image1: "./images/allProducts/01/qantel1.jpg",
      prices: 45,
      price: "45 AZN",
      categoria: "Hobbi və asudə",
      kind: "İdman və asudə",
      description: "Qantellər",
      aboutProduct:
        "Qantel, kantel kantell, kanteller, kanetller, ucuz qantel, ucuzlu kantel, ucuz qantel, ucuzlu kanteller, ucuz qantel 50 kilo, 50 alia qantel,Qantel qiymati qantel qiymetleri, bakida qantel qiymatlari, bakida qantel satisi",
      salerName: "Emin",
      phoneNumber: "055 555 55 55",
      dates: "04.11.2020",
      date: "11.04.2020",
    },
    {
      id: 2,
      image: "./images/allProducts/02/wheel01.jpg",
      image1: "./images/allProducts/02/wheel02.jpg",
      prices: 75,
      price: "75 AZN",
      categoria: "Nəqliyyat",
      kind: "Ehtiyyat hissələri",
      description: "Təkərlər",
      aboutProduct:
        "Birkartla 6 aya qoder, Tamkartla 12 aya qader faizsiz va ilkin ödenissiz taksitle alde ede bilersiniz.Balans montaj xidmeti mövcuddur (4 adad = 15/20 AZN)",
      salerName: "Tahir",
      phoneNumber: "055 555 55 55",
      dates: "04.14.2020",
      date: "14.04.2020",
    },
    {
      id: 3,
      image: "./images/allProducts/03/aqrotexnika01.jpeg",
      image1: "./images/allProducts/03/aqrotexnika02.webp",
      prices: 17000,
      price: "17000 AZN",
      categoria: "Nəqliyyat",
      kind: "Aqrotexnika",
      description: "Traktorlar",
      aboutProduct:
        "Yeni model yto traktorlar...Çatdirilma hediyye!!!!Güzestli satis qiymati va alava xerclar daxil.Traktorlar müasir avadanliqlarla va kondisionerla tachiz olunub.Zemanet müddati-18 ay va ya 1500 m/saat najd va lizing yolu ila satis (24/36/48ay)Servis xidmati ve her cüra ehtiyyat hissleride mövcuddur.",
      salerName: "Taleh",
      phoneNumber: "055 555 55 55",
      dates: "04.14.2020",
      date: "14.04.2020",
    },
    {
      id: 4,
      image: "./images/allProducts/04/bmw01.jpg",
      image1: "./images/allProducts/04/bmw02.jpg",
      image2: "./images/allProducts/04/bmw03.jpg",
      prices: 30000,
      price: "30000 AZN",
      categoria: "Nəqliyyat",
      kind: "Avtomobillər",
      description: "Bmw f30",
      aboutProduct: "2013, 115.000km, real alıcılar zəng etsin.",
      salerName: "Sahib",
      phoneNumber: "055 555 55 55",
      dates: "04.14.2020",
      date: "14.04.2020",
    },
    {
      id: 5,
      image: "./images/allProducts/06/yamaha01.jpg",
      image1: "./images/allProducts/06/yamaha02.jpeg",
      prices: 7800,
      price: "7800 AZN",
      categoria: "Nəqliyyat",
      kind: "Su nəqliyyatı",
      description: "Yamaha XL 700",
      aboutProduct:
        "Yamaha700 Modelin en uzun versiyasidi 3 neferlik tam Tam islek veziyyetdedi Butun senetleri gaydasindadi",
      salerName: "Allahverdi",
      phoneNumber: "055 555 55 55",
      dates: "04.22.2020",
      date: "22.04.2020",
    },
    {
      id: 6,
      image: "./images/allProducts/07/moto01.png",
      image1: "./images/allProducts/07/moto02.png",
      prices: 1750,
      price: "1750 AZN",
      categoria: "Nəqliyyat",
      kind: "Motosikletlər və mopedlər",
      description: "Motosiklet Kavaki AK150-12",
      aboutProduct:
        "Har hansi bir sualiniz üçün telefon nömrasine yazin ve ya zeng edin!",
      salerName: "Xudaverdi",
      phoneNumber: "055 555 55 55",
      dates: "04.28.2020",
      date: "28.04.2020",
    },
    {
      id: 7,
      image: "./images/allProducts/08/mercedes01.jpg",
      image1: "./images/allProducts/08/mercedes02.jpg",
      prices: 105000,
      price: "105 000 AZN",
      categoria: "Nəqliyyat",
      kind: "Yük maşınları və qoşqular",
      description: "Mercedes Axor 1843",
      aboutProduct:
        "Retarder uzun rama. ideal veziyyetdedir tekerler tezedir Azerbaycanda az islenib. Bir nece cur Sementavozlar var. Daf Man Mersedes. kime maraqli olsa secib razilasmaq olar",
      salerName: "Nazim",
      phoneNumber: "055 555 55 55",
      dates: "05.02.2020",
      date: "02.05.2020",
    },
    {
      id: 8,
      image: "./images/allProducts/09/bus01.jpg",
      image1: "./images/allProducts/09/bus02.jpg",
      prices: 145000,
      price: "145 000 AZN",
      categoria: "Nəqliyyat",
      kind: "Avtobuslar",
      description: "Hyundai County",
      aboutProduct:
        "istehsalçi ölke va zavod: Canubi Koreya / Hyundai Motor Company",
      salerName: "Nadir",
      phoneNumber: "055 555 55 55",
      dates: "05.11.2020",
      date: "11.05.2020",
    },
    {
      id: 9,
      image: "./images/allProducts/10/phone01.jpg",
      image1: "./images/allProducts/10/phone02.webp",
      prices: 2900,
      price: "2900 AZN",
      categoria: "Elektronika",
      kind: "Telefonlar",
      description: "Iphone 14 Pro Max",
      aboutProduct: "Kredit var",
      salerName: "Namiz",
      phoneNumber: "055 555 55 55",
      dates: "05.15.2020",
      date: "15.05.2020",
    },
    {
      id: 10,
      image: "./images/allProducts/11/ps501.webp",
      image1: "./images/allProducts/11/ps502.webp",
      prices: 1200,
      price: "1200 AZN",
      categoria: "Elektronika",
      kind: "Oyunlar,Pultlar və Proqramlar",
      description: "Plastation 5",
      aboutProduct: "Daxili kredit var",
      salerName: "Cəlal",
      phoneNumber: "055 555 55 55",
      dates: "05.19.2020",
      date: "19.05.2020",
    },
    {
      id: 11,
      image: "./images/allProducts/12/tv01.jpg",
      image1: "./images/allProducts/12/tv02.jpg",
      prices: 2600,
      price: "2600 AZN",
      categoria: "Elektronika",
      kind: "Televizorlar və Aksessuarlar",
      description: "Smart TV LG 4K",
      aboutProduct: "Kredit yoxdur",
      salerName: "Karim",
      phoneNumber: "055 555 55 55",
      dates: "05.24.2020",
      date: "24.05.2020",
    },
    {
      id: 12,
      image: "./images/allProducts/13/foto01.webp",
      image1: "./images/allProducts/13/foto02.avif",
      prices: 5200,
      price: "5200 AZN",
      categoria: "Elektronika",
      kind: "Fototexnika",
      description: "SONY DSC-HX400 20 MP",
      aboutProduct: "Zəmanət var",
      salerName: "Tural",
      phoneNumber: "055 555 55 55",
      dates: "05.31.2020",
      date: "31.05.2020",
    },
    {
      id: 13,
      image: "./images/allProducts/05/car01.jpg",
      image1: "./images/allProducts/05/car02.webp",
      prices: 90000,
      price: "90 000 AZN",
      categoria: "Nəqliyyat",
      kind: "Tikinti texnikası",
      description: "Frontal yükləyici",
      aboutProduct: "Ətraflı məlumat üçün əlaqə saxlayın.",
      salerName: "Rasim",
      phoneNumber: "055 555 55 55",
      dates: "07.02.2020",
      date: "02.07.2020",
    },
    {
      id: 14,
      image: "./images/allProducts/14/computer01.jpeg",
      image1: "./images/allProducts/14/computer.webp",
      prices: 1000,
      price: "1000 AZN",
      categoria: "Elektronika",
      kind: "Masaüstü komputerlər",
      description: "HP2000",
      aboutProduct: "Ətraflı məlumat üçün əlaqə saxlayın.",
      salerName: "Rasim",
      phoneNumber: "055 555 55 55",
      dates: "07.02.2020",
      date: "02.07.2020",
    },
    {
      id: 15,
      image: "./images/allProducts/15/macbook01.jpg",
      image1: "./images/allProducts/15/macbook02.webp",
      prices: 3400,
      price: "3400 AZN",
      categoria: "Elektronika",
      kind: "Noutbuklar və Netbuklar",
      description: "Macbook 14 Pro",
      aboutProduct: "Ətraflı məlumat üçün əlaqə saxlayın.",
      salerName: "Alim",
      phoneNumber: "055 555 55 55",
      dates: "07.13.2020",
      date: "13.07.2020",
    },
    {
      id: 16,
      image: "./images/allProducts/16/audio01.jpg",
      image1: "./images/allProducts/16/audio02.webp",
      prices: 150,
      price: "150 AZN",
      categoria: "Elektronika",
      kind: "Audio və Video",
      description: "Mikrofon",
      aboutProduct: "Ətraflı məlumat üçün əlaqə saxlayın.",
      salerName: "Zaur",
      phoneNumber: "055 555 55 55",
      dates: "07.16.2020",
      date: "16.07.2020",
    },
    {
      id: 17,
      image: "./images/allProducts/17/simkart01.png",
      image1: "./images/allProducts/17/simkart02.jpg",
      prices: 50,
      price: "50 AZN",
      categoria: "Elektronika",
      kind: "Nömrələr və SİM-kartlar",
      description: "Sim kartlar",
      aboutProduct: "Istənilən nar nömrələr mövcuddur",
      salerName: "Aslan",
      phoneNumber: "055 555 55 55",
      dates: "07.21.2020",
      date: "21.07.2020",
    },
    {
      id: 18,
      image: "./images/allProducts/18/watch01.jpg",
      image1: "./images/allProducts/18/watch02.jpeg",
      prices: 2500,
      price: "2500 AZN",
      categoria: "Elektronika",
      kind: "Smart saatlar və qolbaqlar",
      description: "Apple Watch Ultra 49mm",
      aboutProduct: "Ətraflı məlumat üçün əlaqə saxlayın.",
      salerName: "Arif",
      phoneNumber: "055 555 55 55",
      dates: "08.01.2020",
      date: "01.08.2020",
    },
    {
      id: 19,
      image: "./images/allProducts/19/planset01.jpg",
      image1: "./images/allProducts/19/planset02.jpg",
      prices: 2000,
      price: "2000 AZN",
      categoria: "Elektronika",
      kind: "Planşetlər və Elektron kitablar",
      description: "Samsung Galaxy S9+ 64GB",
      aboutProduct: "Ətraflı məlumat üçün əlaqə saxlayın.",
      salerName: "Azad",
      phoneNumber: "055 555 55 55",
      dates: "08.11.2020",
      date: "11.08.2020",
    },
    {
      id: 20,
      image: "./images/allProducts/20/monitor01.jpg",
      image1: "./images/allProducts/20/monitpr02.webp",
      prices: 2100,
      price: "2100 AZN",
      categoria: "Elektronika",
      kind: "Komponentlər və minotorlar",
      description: "UltraWide LCD Monitor 27inch",
      aboutProduct: "Ətraflı məlumat üçün əlaqə saxlayın.",
      salerName: "Afiq",
      phoneNumber: "055 555 55 55",
      dates: "08.11.2020",
      date: "11.08.2020",
    },
    {
      id: 21,
      image: "./images/allProducts/21/mouse01.jpg",
      image1: "./images/allProducts/21/mouse02.webp",
      prices: 100,
      price: "100 AZN",
      categoria: "Elektronika",
      kind: "Komputer aksessuarları",
      description: "Macross Aula F805",
      aboutProduct: "Ətraflı məlumat üçün əlaqə saxlayın.",
      salerName: "Araz",
      phoneNumber: "055 555 55 55",
      dates: "08.14.2020",
      date: "14.08.2020",
    },
    {
      id: 22,
      image: "./images/allProducts/22/mebel01.jpg",
      image1: "./images/allProducts/22/mebel02.jpg",
      prices: 4000,
      price: "4000 AZN",
      categoria: "Ev və bağ üçün",
      kind: "Mebellər",
      description: "Istikbal",
      aboutProduct: "Ətraflı məlumat üçün əlaqə saxlayın.",
      salerName: "Azim",
      phoneNumber: "055 555 55 55",
      dates: "08.22.2020",
      date: "22.08.2020",
    },
    {
      id: 23,
      image: "./images/allProducts/23/dibcek01.jpeg",
      image1: "./images/allProducts/23/dibcek02.jpg",
      prices: 40,
      price: "40 AZN",
      categoria: "Ev və bağ üçün",
      kind: "Bitkilər",
      description: "Dibçək",
      aboutProduct: "Ətraflı məlumat üçün əlaqə saxlayın.",
      salerName: "Azər",
      phoneNumber: "055 555 55 55",
      dates: "08.28.2020",
      date: "28.08.2020",
    },
    {
      id: 24,
      image: "./images/allProducts/24/desmal01.webp",
      image1: "./images/allProducts/24/desmal02.jpg",
      prices: 100,
      price: "100 AZN",
      categoria: "Ev və bağ üçün",
      kind: "Ev tekstili",
      description: "Dəsmallar",
      aboutProduct: "Ətraflı məlumat üçün əlaqə saxlayın.",
      salerName: "Famil",
      phoneNumber: "055 555 55 55",
      dates: "11.21.2020",
      date: "21.11.2020",
    },
    {
      id: 25,
      image: "./images/allProducts/25/torpaq01.webp",
      image1: "./images/allProducts/25/torpaq02.jpeg",
      prices: 1000,
      price: "1000 AZN",
      categoria: "Daşınmaz əmlak",
      kind: "Torpaq",
      description: "15 sot torpaq",
      aboutProduct: "Ətraflı məlumat üçün əlaqə saxlayın.",
      salerName: "Fazil",
      phoneNumber: "055 555 55 55",
      dates: "10.20.2020",
      date: "20.10.2020",
    },
  ];
  cardsInformations.sort((a, b) => {
    let d1 = new Date(a.dates);
    let d2 = new Date(b.dates);
    return d2 - d1;
  });

  // ------------------------cards--------------------
  const cardsElement = document.querySelector(".cards-element");
  const paginationControls = document.getElementById("pagination-controls");

  let isCrashedCardClicked = false;
  const recordsPerPage = 20;
  const numberOfPages = Math.ceil(cardsInformations.length / recordsPerPage);

  function renderCards(page) {
    const startIndex = (page - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const itemsToShow = cardsInformations.slice(startIndex, endIndex);

    cardsElement.innerHTML = "";

    // ------------------------------------
    itemsToShow.forEach((card) => {
      const cardElement = document.createElement("li");
      cardElement.innerHTML = `
        <div class="card-image">
          <img data=${card.id}  src="${card.image}" alt="image ${card.id}" />
        </div>
        <div class="card-text">
          <h3>${card.price}</h3>
          <p>${card.description}</p>
          <span class="card-date">${card.date}</span>
        </div>
      `;
      cardsElement.appendChild(cardElement);
      // ---------------------cards-click------------
      cardElement.addEventListener("click", (e) => {
        localStorage.setItem(`cardInfo-${card.id}`, JSON.stringify(card));
        const url = new URL(window.location.href);
        url.pathname = "product.html";
        url.searchParams.set("id", card.id);
        window.open(url.toString(), "_blank");
      });
    });
  }

  function renderPagination(currentPage) {
    paginationControls.innerHTML = "";

    for (let i = 1; i <= numberOfPages; i++) {
      const pageLink = document.createElement("button");
      pageLink.textContent = i;
      pageLink.className = "page-number";
      if (i === currentPage) {
        pageLink.style.backgroundColor = "black";
      }
      pageLink.addEventListener("click", () => {
        renderCards(i);
        renderPagination(i);
      });
      paginationControls.appendChild(pageLink);
    }
  }

  renderCards(1);
  renderPagination(1);

  // ---------------refresh-page---------------
  const logoImage = document.querySelector(".logo-element-in-mobile img");
  logoImage.addEventListener("click", () => {
    location.reload();
  });
  const logoMobile = document.querySelector(".logo-mobile img");
  logoMobile.addEventListener("click", () => {
    hamburgerClosed.style.display = "none";
    document.body.style.overflow = "unset";
  });
  // ------------------------select--------------------
  const category = [
    "Hamısı",
    "Nəqliyyat",
    "Elektronika",
    "Ehtiyyat hissələri",
    "Ev və bağ üçün",
    "Daşınmaz əmlak",
    "Xidmətlər və biznes",
    "Şəxsi əşyalar",
    "Hobbi və asudə",
    "Uşaq aləmi",
    "Heyvanlar",
    "İş elanları",
  ];
  const kinds = [
    "Hamısı",
    {
      id: 1,
      marka: "Nəqliyyat",
      model: [
        "Ehtiyyat hissələri",
        "Qeydiyyat nişanları",
        "Aqrotexnika",
        "Avtomobillər",
        "Tikinti texnikası",
        "Su nəqliyyatı",
        "Motosikletlər və mopedlər",
        "Yük maşınları və qoşqular",
        "Avtobuslar",
      ],
    },
    {
      id: 2,
      marka: "Elektronika",
      model: [
        "Telefonlar",
        "Oyunlar,Pultlar və Proqramlar",
        "Televizorlar və Aksessuarlar",
        "Fototexnika",
        "Masaüstü komputerlər",
        "Noutbuklar və Netbuklar",
        "Audio və Video",
        "Nömrələr və SİM-kartlar",
        "Smart saatlar və qolbaqlar",
        "Planşetlər və Elektron kitablar",
        "Komponentlər və minotorlar",
        "Komputer aksessuarları",
        "Şəbəkə və server avadanlığı",
      ],
    },
    {
      id: 3,
      marka: "Ehtiyyat hissələri",
      model: [
        "Ehtiyyat hissələri",
        "Audio və video texnika",
        "Videoqeydiyyatçılar",
        "GPS naviqatorlar",
        "Aksessuarlar",
        "Avto kosmetika və kimya",
        "Diaqnostika cihazları",
        "Siqnalizasiyalar",
        "Şinlər,disklər və təkərlər",
        "Avtomobillər üçün alətlər",
      ],
    },
    {
      id: 4,
      marka: "Ev və bağ üçün",
      model: [
        "Mebellər",
        "Qab-qacaq və mətbəx ləvazimatları",
        "Ev ə bağ üçün işıqlandırma",
        "Bitkilər",
        "Məişət exnikası",
        "Dekor və interyer",
        "Ev tekstili",
        "Ev təsərrüfatı malları",
        "Təmir və tikinti",
        "Bağ və bostan",
        "Xalçalar və aksessuarlar",
      ],
    },
    {
      id: 5,
      marka: "Daşınmaz əmlak",
      model: [
        "Mənzillər",
        "Obyektlər və ofislər",
        "Villalar,bağ evləri",
        "Qarajlar",
        "Torpaq",
        "Xaricdə əmlak",
      ],
    },
    {
      id: 6,
      marka: "Xidmətlər və biznes",
      model: [
        "Biznes üçün avadanlıq",
        "Texnika təmiri",
        "Təlim,hazırlıq kursları",
        "Logistika",
        "Avtoservis və diaqnostika",
        "Musiqi, əyləncə və tədbirlər",
        "Foto və video çəkiliş xidmətləri",
        "Təmir tikinti",
      ],
    },
    {
      id: 7,
      marka: "Şəxsi əşyalar",
      model: [
        "Geyim və ayaqqabılar",
        "Aksessuarlar",
        "Sağlamlıq və gözəllik",
        "Elektron siqaretlər",
        "İtmiş əşyalar",
      ],
    },
    {
      id: 8,
      marka: "Hobbi və asudə",
      model: [
        "İdman və asudə",
        "Kolleksiyalar",
        "Tanışlıq",
        "Velosipedlər",
        "Kitab və jurnallar",
        "Biletlər və səyahət",
      ],
    },
    {
      id: 9,
      marka: "Uşaq aləmi",
      model: [
        "Oyuncaqlar",
        "Hamam gigiyena",
        "Uşaq mebeli",
        "Avtomobil oturacaqları",
        "Uşaq tekstil",
        "Uşaq geyimi",
      ],
    },
    {
      id: 10,
      marka: "Heyvanlar",
      model: [
        "Quşlar",
        "Pişiklər",
        "İtlər",
        "Dovşanlar",
        "Atlar",
        "Akvarium və balıqlar",
      ],
    },
    {
      id: 11,
      marka: "İş elanları",
      model: ["Vakansiyalar", "İş axtarıram"],
    },
  ];

  const categoryElement = document.querySelector("#product");
  const kindsElement = document.querySelector("#room");

  const populateSelect = (element, options) => {
    element.innerHTML = "";
    options.forEach((option) => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      element.appendChild(opt);
    });
  };

  populateSelect(categoryElement, category);
  populateSelect(kindsElement, kinds);

  kindsElement.disabled = true;

  categoryElement.addEventListener("change", () => {
    if (categoryElement.value === "Hamısı") {
      kindsElement.disabled = true;
      kindsElement.value = "Hamısı";
    } else {
      kindsElement.disabled = false;
    }
  });

  function updateKinds() {
    const selectedCategory = categoryElement.value;
    kindsElement.innerHTML = "";

    const defaultOption = document.createElement("option");
    defaultOption.value = "Hamısı";
    defaultOption.textContent = "Hamısı";
    kindsElement.appendChild(defaultOption);

    const selectedKind = kinds.find((kind) => kind.marka === selectedCategory);
    if (selectedKind) {
      selectedKind.model.forEach((mod) => {
        const option = document.createElement("option");
        option.value = mod;
        option.textContent = mod;
        kindsElement.appendChild(option);
      });
    }
  }

  categoryElement.addEventListener("change", updateKinds);

  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const priceMin =
      parseInt(document.querySelector("#priceMin").value, 10) || 0;
    const priceMax =
      parseInt(document.querySelector("#priceMax").value, 10) ||
      Number.MAX_SAFE_INTEGER;
    const selectedproduct = categoryElement.value;
    const selectedRoom = kindsElement.value;

    const filteredCards = cardsInformations.filter((card) => {
      const cardPrice = parseInt(card.price, 10);
      return (
        cardPrice >= priceMin &&
        cardPrice <= priceMax &&
        (selectedproduct === "Hamısı" || card.categoria === selectedproduct) &&
        (selectedRoom === "Hamısı" || card.kind === selectedRoom)
      );
    });

    const selectedContainer = document.querySelector(".selected-container");
    const cardsElement = document.querySelector(".cards-element");
    selectedContainer.innerHTML = "";

    if (filteredCards.length > 0) {
      filteredCards.forEach((card) => {
        const selectedLi = document.createElement("li");
        selectedLi.innerHTML = `
        <div class="card-image">
          <img src="${card.image}" alt="image ${card.id}" />
        </div>
        <div class="card-text">
          <h3>${card.price}</h3>
          <p>${card.description}</p>
          <span class="card-date">${card.date}</span>
        </div>
      `;
        selectedLi.addEventListener("click", () => {
          localStorage.setItem(`cardInfo-${card.id}`, JSON.stringify(card));
          const url = new URL(window.location.href);
          url.pathname = "product.html";
          url.searchParams.set("id", card.id);
          window.open(url.toString(), "_blank");
        });
        selectedContainer.appendChild(selectedLi);
      });
      cardsElement.style.display = "none";
      selectedContainer.style.display = "flex";
    } else {
      cardsElement.style.display = "flex";
      selectedContainer.style.display = "none";
    }
  });
});
// ---------------------login-----------------
const main = document.querySelector("main");
const filters = document.querySelector(".product-sale");
filters.style.display = "none";
document.querySelector(".login").addEventListener("click", () => {
  if ((filters.style.display = "none")) {
    filters.style.display = "flex";
    document.querySelector(".cards-container").style.display = "none";
    document.getElementById("pagination-controls").style.display = "none";
    document.querySelector(".input-elements").style.display = "none";
    document.querySelector(".filter-elements").style.backgroundColor = "white";
    main.style.height = "80vh";
  } else {
    filters.style.display = "none";
    document.querySelector(".cards-container").style.display = "flex";
    document.getElementById("pagination-controls").style.display = "flex";
    document.querySelector(".input-elements").style.display = "flex";
    document.querySelector(".filter-elements").style.backgroundColor = "yellow";
  }
});
document.querySelector(".back-button").addEventListener("click", (e) => {
  e.preventDefault();
  filters.style.display = "none";
  document.querySelector(".cards-container").style.display = "flex";
  document.getElementById("pagination-controls").style.display = "flex";
  document.querySelector(".input-elements").style.display = "flex";
  main.style.height = "unset";
  if (innerWidth < 1024) {
    document.querySelector(".filter-elements").style.backgroundColor = "black";
  } else {
    document.querySelector(".filter-elements").style.backgroundColor = "yellow";
  }
});

document.querySelector(".login-in-mobile").addEventListener("click", () => {
  if ((filters.style.display = "none")) {
    filters.style.display = "flex";
    document.querySelector(".cards-container").style.display = "none";
    document.getElementById("pagination-controls").style.display = "none";
    document.querySelector(".input-elements").style.display = "none";
    document.querySelector(".filter-elements").style.backgroundColor = "white";
    main.style.height = "120vh";
  } else {
    filters.style.display = "none";
    document.querySelector(".cards-container").style.display = "flex";
    document.getElementById("pagination-controls").style.display = "flex";
    document.querySelector(".input-elements").style.display = "flex";
    document.querySelector(".filter-elements").style.backgroundColor = "black";
  }
});
