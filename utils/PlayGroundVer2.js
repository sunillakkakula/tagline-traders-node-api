const rootCategories = [
  {
    _id: {
      $oid: "600ddecffc37ec23c85d7823",
    },
    name: "Staples",
    description: "Staples",
    createdAt: {
      $date: "2021-01-24T20:55:43.681Z",
    },
    updatedAt: {
      $date: "2021-01-24T20:55:43.681Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600ddef7fc37ec23c85d7824",
    },
    name: "Snacks - Beverages",
    description: "Snacks - Beverages",
    createdAt: {
      $date: "2021-01-24T20:56:23.672Z",
    },
    updatedAt: {
      $date: "2021-01-24T21:02:00.467Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600ddf07fc37ec23c85d7825",
    },
    name: "Packaged Food",
    description: "Packaged Food",
    createdAt: {
      $date: "2021-01-24T20:56:39.004Z",
    },
    updatedAt: {
      $date: "2021-01-24T20:56:39.004Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600ddf17fc37ec23c85d7826",
    },
    name: "Personal & Baby Care",
    description: "Personal & Baby Care ",
    createdAt: {
      $date: "2021-01-24T20:56:55.907Z",
    },
    updatedAt: {
      $date: "2021-01-24T20:56:55.907Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600ddf2cfc37ec23c85d7827",
    },
    name: "Household Care",
    description: "Household Care",
    createdAt: {
      $date: "2021-01-24T20:57:16.951Z",
    },
    updatedAt: {
      $date: "2021-01-24T20:57:16.951Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600ddf3bfc37ec23c85d7828",
    },
    name: "Dairy & Eggs",
    description: "Dairy & Eggs",
    createdAt: {
      $date: "2021-01-24T20:57:31.746Z",
    },
    updatedAt: {
      $date: "2021-01-24T20:57:31.746Z",
    },
    __v: 0,
  },
];
const categories = [
  {
    _id: {
      $oid: "600de426e6ad373aac4f1599",
    },
    name: "Dals & Pulses",
    description: "Dals & Pulses",
    rootCategoryId: {
      $oid: "600ddecffc37ec23c85d7823",
    },
    createdAt: {
      $date: "2021-01-24T21:18:30.905Z",
    },
    updatedAt: {
      $date: "2021-01-24T21:23:48.443Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df1bb24f4d639b8449054",
    },
    name: "Ghee & Oils",
    description: "Ghee & Oils",
    rootCategoryId: {
      $oid: "600ddecffc37ec23c85d7823",
    },
    createdAt: {
      $date: "2021-01-24T22:16:27.170Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:16:27.170Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df1d624f4d639b8449055",
    },
    name: "Atta & Flours",
    description: "Atta & Flours",
    rootCategoryId: {
      $oid: "600ddecffc37ec23c85d7823",
    },
    createdAt: {
      $date: "2021-01-24T22:16:54.041Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:16:54.041Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df1e724f4d639b8449056",
    },
    name: "Masalas & Spices",
    description: "Masalas & Spices",
    rootCategoryId: {
      $oid: "600ddecffc37ec23c85d7823",
    },
    createdAt: {
      $date: "2021-01-24T22:17:11.514Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:17:11.514Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df1f924f4d639b8449057",
    },
    name: "Rice & Rice Products",
    description: "Rice & Rice Products",
    rootCategoryId: {
      $oid: "600ddecffc37ec23c85d7823",
    },
    createdAt: {
      $date: "2021-01-24T22:17:29.404Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:17:29.404Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df21624f4d639b8449058",
    },
    name: "Dry Fruits ,Nuts & Seeds",
    description: "Dry Fruits ,Nuts & Seeds",
    rootCategoryId: {
      $oid: "600ddecffc37ec23c85d7823",
    },
    createdAt: {
      $date: "2021-01-24T22:17:58.610Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:17:58.610Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df22d24f4d639b8449059",
    },
    name: "Sugar,Jaggery & Salt",
    description: "Sugar,Jaggery & Salt",
    rootCategoryId: {
      $oid: "600ddecffc37ec23c85d7823",
    },
    createdAt: {
      $date: "2021-01-24T22:18:21.848Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:18:21.848Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df26a24f4d639b844905a",
    },
    name: "Biscuits",
    description: "Biscuits",
    rootCategoryId: {
      $oid: "600ddef7fc37ec23c85d7824",
    },
    createdAt: {
      $date: "2021-01-24T22:19:22.774Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:19:22.774Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df27f24f4d639b844905b",
    },
    name: "Chips ,Namkeen & Snacks",
    description: "Chips ,Namkeen & Snacks",
    rootCategoryId: {
      $oid: "600ddef7fc37ec23c85d7824",
    },
    createdAt: {
      $date: "2021-01-24T22:19:43.791Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:19:43.791Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df28d24f4d639b844905c",
    },
    name: "Tea",
    description: "Tea",
    rootCategoryId: {
      $oid: "600ddef7fc37ec23c85d7824",
    },
    createdAt: {
      $date: "2021-01-24T22:19:57.675Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:19:57.675Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df29824f4d639b844905d",
    },
    name: "Coffee",
    description: "Coffee",
    rootCategoryId: {
      $oid: "600ddef7fc37ec23c85d7824",
    },
    createdAt: {
      $date: "2021-01-24T22:20:08.220Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:20:08.220Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df2a224f4d639b844905e",
    },
    name: "Juices",
    description: "Juices",
    rootCategoryId: {
      $oid: "600ddef7fc37ec23c85d7824",
    },
    createdAt: {
      $date: "2021-01-24T22:20:18.018Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:20:18.018Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df2af24f4d639b844905f",
    },
    name: "Health Drink Mix",
    description: "Health Drink Mix",
    rootCategoryId: {
      $oid: "600ddef7fc37ec23c85d7824",
    },
    createdAt: {
      $date: "2021-01-24T22:20:31.238Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:20:31.238Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df2c024f4d639b8449060",
    },
    name: "Soft Drinks",
    description: "Soft Drinks",
    rootCategoryId: {
      $oid: "600ddef7fc37ec23c85d7824",
    },
    createdAt: {
      $date: "2021-01-24T22:20:48.204Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:20:48.204Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df2fa24f4d639b8449061",
    },
    name: "Instant Drink Mixes, Squash & Syrups",
    description: "Instant Drink Mixes, Squash & Syrups",
    rootCategoryId: {
      $oid: "600ddef7fc37ec23c85d7824",
    },
    createdAt: {
      $date: "2021-01-24T22:21:46.549Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:21:46.549Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df3aa24f4d639b8449062",
    },
    name: "Water",
    description: "Water",
    rootCategoryId: {
      $oid: "600ddef7fc37ec23c85d7824",
    },
    createdAt: {
      $date: "2021-01-24T22:24:42.067Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:24:42.067Z",
    },
    __v: 0,
  },
];

// const filteredRootCat = rootCategories.filter(
//   (e) => e._id.$oid === "600ddecffc37ec23c85d7823"
// );
// console.log(filteredRootCat);
const filteredCat = [];
for (let i in rootCategories) {
  for (let j in categories) {
    rootCategories[i];
    // console.log(categories[j]);
  }
}
var attendance = [
  ["09-30-2019", "00_Infants", 22],
  ["09-30-2019", "01_Ones", 38],
  ["09-30-2019", "02_Twos", 40],
  ["09-30-2019", "03_Threes", 42],
  ["09-30-2019", "04_Fours", 19],
  ["10-01-2019", "00_Infants", 27],
  ["10-01-2019", "01_Ones", 42],
  ["10-01-2019", "02_Twos", 51],
];

var expenses = [
  ["09-30-2019", "00_Infants", "584.56"],
  ["09-30-2019", "01_Ones", "701.51"],
  ["09-30-2019", "02_Twos", "614.02"],
  ["09-30-2019", "03_Threes", "442.50"],
  ["09-30-2019", "04_Fours", "166.65"],
  ["09-30-2019", "06_Floater", "141.37"],
  ["09-30-2019", "07_Office", "246.91"],
  ["09-30-2019", "08_Administration", "0.00"],
  ["09-30-2019", "09_Director", "0.00"],
  ["09-30-2019", "12_Kitchen", "0.00"],
  ["10-01-2019", "00_Infants", "760.37"],
  ["10-01-2019", "01_Ones", "756.48"],
  ["10-01-2019", "02_Twos", "640.23"],
  ["10-01-2019", "03_Threes", "552.66"],
];

var result = rootCategories.map((item) => {
  let category = categories.find((eachCat) => {
    // console.log(
    //   "eachCat.rootCategoryId.  : " +
    //     eachCat.rootCategoryId.$oid +
    //     " , item._id.$oid : " +
    //     item._id.$oid
    // );
    eachCat.rootCategoryId.$oid === item._id.$oid;
  });

  if (category) {
    return [...item, item["category"]];
  } else {
    return [...item, item{"category"}];
  }
});

console.log(result);
// console.log(tmp_list);
