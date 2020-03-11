import { ItemDisplayInfo } from "../display_info_classes";

const firebase = require("firebase/app");
require("firebase/firestore");
require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyBieeBUM3PJxoksSykchA9pSeHk-joeINg",
  authDomain: "madein-50021.firebaseapp.com",
  databaseURL: "https://madein-50021.firebaseio.com",
  projectId: "madein-50021",
  storageBucket: "madein-50021.appspot.com",
  messagingSenderId: "894053691577",
  appId: "1:894053691577:web:6cd1c46407a0d4a53aab68",
  measurementId: "G-MX7X034QZZ"
};

firebase.initializeApp(firebaseConfig);

//firestore
const db = firebase.firestore();
const itemsRef = db.collection("items");

//storage bucket
const storage = firebase.storage();
const storageRef = firebase.storage().ref();
const imagesRef = storageRef.child("images/");

async function getAllItems() {
  let items = [];
  await itemsRef
    .get()
    .then(snapshot => {
      return snapshot.forEach(item => {
        items.push({
          key: item.id,
          text: item.data().text,
          manufacturer: item.data().manufacturer,
          category: item.data().category,
          region: item.data().region,
          url: item.data().url
        });
      });
    })
    .catch(err => {
      console.log(err);
      console.log(`Error has occured ${err}`);
    });

  //format incoming firestore data and return to client
  return items.map(item => {
    return new ItemDisplayInfo(
      item.key,
      item.text,
      item.manufacturer,
      item.region,
      item.category,
      item.url
    );
  });
}

async function getImageByUrl(itemUrl) {
  try {
    const image = storage.refFromURL(itemUrl);
    return image.getDownloadURL();
  } catch (err) {
    console.log(err);
  }
}

async function addItem(itemObject, imageFile) {
  const metadata = {
    contentType: "image/jpeg"
  };

  try {
    const image = await storageRef
      .child("images/" + imageFile.name)
      .put(imageFile, metadata);

    const downloadUrl = await image.ref.getDownloadURL();

    itemObject.url = downloadUrl;

    await itemsRef.add(Object.assign({}, itemObject));

    console.log("Item and Image successfully added into db");
  } catch (err) {
    console.log("Error has occured");
    console.log(err);
  }
}

export default {
  getAllItems: getAllItems,
  addItem: addItem,
  getImageByUrl: getImageByUrl
};
