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

console.log("Playground");
let rootCategoriesCopy = [];

// for (let eachRootCategory in rootCategories) {
//   const rootCategory = rootCategories[eachRootCategory];
//   rootCategoriesCopy.name = rootCategory.name;
//   rootCategoriesCopy.description = rootCategory.description;

//   for (let i in categories) {
//     const eachCategory = categories[i];
//     // console.log(
//     //   "Matching Id" +
//     //     String(eachCategory._id["$oid"]) +
//     //     ", with " +
//     //     eachCategory.rootCategoryId["$oid"] +
//     //     "Result : " +
//     //     String(rootCategory._id["$oid"]) ===
//     //     String(eachCategory.rootCategoryId["$oid"])
//     // );
//     if (
//       String(rootCategory._id["$oid"]) ===
//       String(eachCategory.rootCategoryId["$oid"])
//     ) {
//       rootCategoriesCopy.categories.push(eachCategory);
//       continue;
//     } else continue;
//   }
// }
let copyrct = [];
let copyct = {};
for (let i in rootCategories) {
  const eachRootCategory = rootCategories[i];
  let eachcopyct ={}

  eachcopyct["name"] = eachRootCategory.name;
  copyct["description"] = eachRootCategory.description;
  copyct["catArray"] = [];

  //   let ctarry = [];
  for (let j in categories) {
    //copyct["catArray"] = ctarry;
    const eachCategory = categories[j];
    if (eachRootCategory._id.$oid === eachCategory.rootCategoryId.$oid) {
      console.log(
        "Both are Equal" +
          eachRootCategory._id.$oid +
          "===" +
          eachCategory.rootCategoryId +
          " Root Cat Name : " +
          eachRootCategory.name +
          " Child Cat Name : " +
          eachCategory.name
      );
      copyct["catArray"].push(eachCategory);
      //   copyct.push(eachCategory);
    }
  }
}
console.log(copyct);
