"use strict";

import cardComponent from "../components/cardComponent.js";
import proFileComponent from "../components/userComponent.js";
let renderProfile = document.querySelector("#renderProfile");
let render = document.querySelector("#render");
const base_URL = "http://127.0.0.1:3000/data/";

async function getData(endpoint) {
  try {
    const response = await fetch(`${base_URL}${endpoint}.json`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const products = await getData("products");

products.map((product) => {
  render.innerHTML += cardComponent(product);
});

const users = await getData("users");
users.map((user) => {
  renderProfile.innerHTML += proFileComponent(user);
});
