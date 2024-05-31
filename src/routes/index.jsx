import { AllShoes } from "../pages/AllShoes";
import { AthleticShoes } from "../pages/AthleticShoes/AthleticShoes";
import { Registr } from "../pages/Authorisation/Registr";
import { Cart } from "../pages/Cart/Cart";
import { HighTopsShoes } from "../pages/HighTops/HighTops";
import { Shoe } from "../pages/Shoe/Shoe";
import { SlipOnsShoes } from "../pages/Slip-Ons/SlipOns";
import { SportShoes } from "../pages/SportShoes/SportShoes";

export const routes = [
  { id: "1-page", path: "/All-Shoes", element: <AllShoes /> },
  { id: "Shoe-page", path: "/Shoe/:id", element: <Shoe /> },
  { id: "Sport-Shoe-page", path: "/SportShoes", element: <SportShoes /> },
  { id: "Athletic-Shoe-page", path: "/AthleticShoes", element: <AthleticShoes /> },
  { id: "SlipOns-page", path: "/SlipOnsShoes", element: <SlipOnsShoes /> },
  { id: "HighTopsShoes-page", path: "/HighTopsShoes", element: <HighTopsShoes /> },
  { id: "Cart-page", path: "/Cart", element: <Cart /> },
  { id: "Registr", path: "/registaration", element: <Registr /> },
];
