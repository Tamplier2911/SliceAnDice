import { AsyncStorage } from "react-native";

/**
 * Async function - accepts any arbitrary value, serializes it to JSON,
 * performs locally data persistence. (KEY IS HARDCODED)
 * @function storeData
 * @param {value} any - React component.
 */

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("MultiplexScore", jsonValue);
    console.log("Data saved successfuly!");
  } catch (err) {
    console.log(`Something go terribly rong! ${err.message}`);
  }
};

/**
 * Async function - retreives locally stored pice of data, perform deserialization
 * and returns data as it is. (KEY IS HARDCODED)
 * @function getData
 */

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("MultiplexScore");
    console.log("Data retrieved successfuly!");
    return jsonValue !== null ? JSON.parse(jsonValue) : [];
  } catch (err) {
    console.log(`Something go terribly rong! ${err.message}`);
  }
};
