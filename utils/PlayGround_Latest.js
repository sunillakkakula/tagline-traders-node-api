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
];
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
];

const subCategories = [
  {
    _id: {
      $oid: "600df5acef2c1249a07c1b72",
    },
    name: "Toor Dal",
    description: "Toor Dal",
    categoryId: {
      $oid: "600de426e6ad373aac4f1599",
    },
    createdAt: {
      $date: "2021-01-24T22:33:16.366Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:33:16.366Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df5c2ef2c1249a07c1b73",
    },
    name: "Urad Dal",
    description: "Urad Dal",
    categoryId: {
      $oid: "600de426e6ad373aac4f1599",
    },
    createdAt: {
      $date: "2021-01-24T22:33:38.270Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:33:38.270Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df5ceef2c1249a07c1b74",
    },
    name: "Moong Dal",
    description: "Moong Dal",
    categoryId: {
      $oid: "600de426e6ad373aac4f1599",
    },
    createdAt: {
      $date: "2021-01-24T22:33:50.001Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:33:50.001Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df5d9ef2c1249a07c1b75",
    },
    name: "Chana Dal",
    description: "Chana Dal",
    categoryId: {
      $oid: "600de426e6ad373aac4f1599",
    },
    createdAt: {
      $date: "2021-01-24T22:34:01.446Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:34:01.446Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df5e8ef2c1249a07c1b76",
    },
    name: "Other Pulses",
    description: "Other Pulses",
    categoryId: {
      $oid: "600de426e6ad373aac4f1599",
    },
    createdAt: {
      $date: "2021-01-24T22:34:16.961Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:34:16.961Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df5f9ef2c1249a07c1b77",
    },
    name: "Soya Chunks",
    description: "Soya Chunks",
    categoryId: {
      $oid: "600de426e6ad373aac4f1599",
    },
    createdAt: {
      $date: "2021-01-24T22:34:33.096Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:34:33.096Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df65eef2c1249a07c1b78",
    },
    name: "Blended Oil",
    description: "Blended Oil",
    categoryId: {
      $oid: "600df1bb24f4d639b8449054",
    },
    createdAt: {
      $date: "2021-01-24T22:36:14.424Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:36:14.424Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df66eef2c1249a07c1b79",
    },
    name: "Ghee",
    description: "Ghee",
    categoryId: {
      $oid: "600df1bb24f4d639b8449054",
    },
    createdAt: {
      $date: "2021-01-24T22:36:30.756Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:36:30.756Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df67def2c1249a07c1b7a",
    },
    name: "Sunflower Oil",
    description: "Sunflower Oil",
    categoryId: {
      $oid: "600df1bb24f4d639b8449054",
    },
    createdAt: {
      $date: "2021-01-24T22:36:45.437Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:36:45.437Z",
    },
    __v: 0,
  },
  {
    _id: {
      $oid: "600df694ef2c1249a07c1b7b",
    },
    name: "Rice Bran",
    description: "Rice Bran",
    categoryId: {
      $oid: "600df1bb24f4d639b8449054",
    },
    createdAt: {
      $date: "2021-01-24T22:37:08.784Z",
    },
    updatedAt: {
      $date: "2021-01-24T22:37:08.784Z",
    },
    __v: 0,
  },
];

let transformedRootCategories = [];

for (let i in rootCategories) {
  let tranformedRootCategory = {};
  let eachRootCategory = rootCategories[i];
  let tranformedCategories = [];
  let transformedCategoriesSL = []; // SECOND LEVEL CODE
  for (let i in categories) {
    let tranformedCategorySL = {};
    let tranformedSubCategoriesSL = [];
    let transformedCategoriesSL = [];
    let eachCategory = categories[i];
    if (eachRootCategory._id.$oid === eachCategory.rootCategoryId.$oid) {
      /**
       *  NOW U R IN EACH CATEGORY
       */
      for (let i in subCategories) {
        let tranformedCategorySL = {};
        let tranformedSubCategoriesSL = [];
        let transformedCategoriesSL = [];
        let eachSubCategory = subCategories[i];
        if (eachCategory._id.$oid === eachSubCategory.categoryId.$oid) {
          tranformedSubCategoriesSL.push(eachSubCategory);
        }
      }
      tranformedCategorySL.name = eachRootCategory.name;
      tranformedCategorySL.description = eachRootCategory.description;
      tranformedCategorySL.subcategories = tranformedSubCategoriesSL;
      transformedCategoriesSL.push(tranformedCategorySL);
      tranformedCategories.push(eachCategory);
    }
  }
  tranformedRootCategory.name = eachRootCategory.name;
  tranformedRootCategory.description = eachRootCategory.description;
  tranformedRootCategory.categories = tranformedCategories;
  transformedRootCategories.push(tranformedRootCategory);
}
console.log(
  "transformedRootCategories : " + JSON.stringify(transformedRootCategories)
);
