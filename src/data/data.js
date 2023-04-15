const links = [
  {
    text: "Characters",
    url: "#",
    current: false,
  },
  {
    text: "Comics",
    url: "#",
    current: true,
  },
  {
    text: "Movies",
    url: "#",
    current: false,
  },
  {
    text: "Tv",
    url: "#",
    current: false,
  },
  {
    text: "Games",
    url: "#",
    current: false,
  },
  {
    text: "Collectibles",
    url: "#",
    current: false,
  },
  {
    text: "Videos",
    url: "#",
    current: false,
  },
  {
    text: "Fans",
    url: "#",
    current: false,
  },
  {
    text: "News",
    url: "#",
    current: false,
  },
  {
    text: "Shop",
    url: "#",
    current: false,
  },
];
const products = [
  {
    src: '../../public/images/buy-comics-digital-comics.png',
    titolo: "Digital Comics",
  },
  {
    src: "../../public/images/buy-comics-merchandise.png",
    titolo: "Dc Merchandise",
  },
  {
    src: "../../public/images/buy-comics-subscriptions.png",
    titolo: "Subscription",
  },
  {
    src: "../../public/images/buy-comics-shop-locator.png",
    titolo: "Comic shop locator",
  },
  {
    src: "../../public/images/buy-dc-power-visa.svg",
    titolo: "Dc power visa",
  }
];
const menu = [
  {
    title: 'dc comics',
    links: [
      {
        text: "Characters",
        url: "#",
      },
      {
        text: "Comics",
        url: "#",
      },
      {
        text: "Movies",
        url: "#",
      },
      {
        text: "TV",
        url: "#",
      },
      {
        text: "Games",
        url: "#",
      },
      {
        text: "Videos",
        url: "#",
      },
      {
        text: "News",
        url: "#",
      },
    ]
  },
  {
    title: 'dc',
    links: [
      {
        text: "Terms Of Use",
        url: "#",
      },
      {
        text: "Provacy policy(New)",
        url: "#",
      },
      {
        text: "Ad Choices",
        url: "#",
      },
      {
        text: "Advertising",
        url: "#",
      },
      {
        text: "Jobs",
        url: "#",
      },
      {
        text: "Subscriptions",
        url: "#",
      },
      {
        text: "Talent Workshops",
        url: "#",
      },
      {
        text: "CPSC Certificates",
        url: "#",
      },
      {
        text: "Ratings",
        url: "#",
      },
      {
        text: "Shop Help",
        url: "#",
      },
      {
        text: "Contact Us",
        url: "#",
      },
    ]
  },
  {
    title: 'sites',
    links: [
      {
        text: "DC",
        url: "#",
      },
      {
        text: "MAD Magazine",
        url: "#",
      },
      {
        text: "DC Kids",
        url: "#",
      },
      {
        text: "DC Universe",
        url: "#",
      },
      {
        text: "DC Power Visa",
        url: "#",
      }
    ]
  },
  {
    title: 'shop',
    links: [
      {
        text: "Shop DC",
        url: "#",
      },
      {
        text: "Shop DC Collectibles",
        url: "#",
      }

    ]
  },

];
const contacts = [
  {
    src: "../../public/images/footer-facebook.png",
    titolo: "Facebook",
  },
  {
    src: "../../public/images/footer-twitter.png",
    titolo: "Twitter",
  },
  {
    src: "../../public/images/footer-youtube.png",
    titolo: "Youtube",
  },
  {
    src: "../../public/images/footer-pinterest.png",
    titolo: "Pinterest",
  },
  {
    src: "../../public/images/footer-periscope.png",
    titolo: "Periscope",
  },
];
const thumbnails = [
  {
    "thumb": "https://www.coverbrowser.com/image/action-comics/1-1.jpg",
    "price": "$19.99",
    "series": "Action Comics",
    "type": "comic book"
  },
  {
    "thumb": "https://www.panini.it/media/catalog/product/cache/a5b5dd3adfe0d321084804c738f29601/M/1/M1BLLA015ISBN_0.jpg",
    "price": "$3.99",
    "series": "American Vampire 1976",
    "type": "comic book"
  },
  {
    "thumb": "https://media.wired.com/photos/593384dad80dd005b42b2817/master/w_2560%2Cc_limit/Aquaman-16.jpg",
    "price": "$16.99",
    "series": "Aquaman",
    "type": "graphic novel"
  },
  {
    "thumb": "https://d29xot63vimef3.cloudfront.net/image/batgirl/1-1.jpg",
    "price": "$2.99",
    "series": "Batgirl",
    "type": "comic book"
  },
  {
    "thumb": "https://static.posters.cz/image/750/locandine-film-in-plexiglass-batman-prowl-comic-cover-i69653.jpg",
    "price": "$3.99",
    "series": "Batman",
    "type": "comic book"
  },
  {
    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/5/50/Batman_Beyond_v.1_1.jpg/revision/latest?cb=20080809201655",
    "price": "$2.99",
    "series": "Batman Beyond",
    "type": "comic book"
  },
  {
    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/0/0d/Batman_Superman_Vol_1_1.jpg/revision/latest/scale-to-width-down/1200?cb=20130627211607",
    "price": "$3.99",
    "series": "Batman/Superman",
    "type": "comic book"
  },
  {
    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/c/cf/Batman_Superman_Annual_Vol_2_1.jpg/revision/latest?cb=20200929145132",
    "price": "$4.99",
    "series": "Batman/Superman Annual",
    "type": "comic book"
  },
  {
    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/5/54/Batman_The_Joker_War_Zone_Vol_1_1.jpg/revision/latest?cb=20200929124651",
    "price": "$5.99",
    "series": "Batman: The Joker War Zone",
    "type": "comic book"
  },
  {
    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/6/64/Batman_Three_Jokers_Collected.jpg/revision/latest?cb=20201123054610",
    "price": "$6.99",
    "series": "Batman: Three Jokers",
    "type": "comic book"
  },
  {
    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/f/f8/Batman_White_Knight_Presents_Harley_Quinn_Vol_1_1.jpg/revision/latest?cb=20201124094800",
    "price": "$4.99",
    "series": "Batman: White Knight Presents: Harley Quinn",
    "type": "comic book"
  },
  {
    "thumb": "https://static.wikia.nocookie.net/marvel_dc/images/c/c8/Catwoman_Vol_2_1.jpg/revision/latest?cb=20160303223223",
    "price": "$16.99",
    "series": "Catwoman",
    "type": "graphic novel"
  }
];
export {links, products, menu, contacts, thumbnails};