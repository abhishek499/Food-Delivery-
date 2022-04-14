import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [restaurant, setRestaurant] = useState([
    {
      name: "Veg Crisp Burger",
      image_url:
        "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      detail:
        "Too Hot to handle, veg crispy burger is served you with the best crisp possible melts as soon as it enters in your mouth",
      price: "₹ 150",
      key: 1,
      type: "veg",
    },
    {
      name: "Cheese Burger",
      image_url:
        "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__480.jpg",
      detail:
        "Too Hot to handle, veg crispy burger is served you with the best crisp possible melts as soon as it enters in your mouth",
      price: "₹ 200",
      key: 2,
      type: "veg",
    },
    {
      name: "Chinese Noodles",
      image_url:
        "https://images.pexels.com/photos/2098135/pexels-photo-2098135.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      detail:
        "Too Hot to handle, veg crispy burger is served you with the best crisp possible melts as soon as it enters in your mouth",
      price: "₹ 350",
      key: 3,
      type: "veg",
    },
    {
      name: "India's Grill",
      image_url:
        "https://b.zmtcdn.com/data/pictures/chains/0/18798800/e390c1d8f4df7d86b3787fe98ecd4427.jpg?fit=around|300:273&crop=300:273;*,*",
      detail:
        "Too Hot to handle, veg crispy burger is served you with the best crisp possible melts as soon as it enters in your mouth",
      price: "₹ 450",
      key: 4,
      type: "non-veg",
    },
    {
      name: "Momos",
      image_url:
        "https://b.zmtcdn.com/data/pictures/chains/3/18689923/fe92135685160e19b3a464a788876e45.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      detail:
        "Too Hot to handle, veg crispy burger is served you with the best crisp possible melts as soon as it enters in your mouth",
      price: "₹ 350",
      key: 5,
      type: "veg",
    },
  ]);
  const [order, setOrder] = useState([{}]);
  return (
    <DataContext.Provider value={{ restaurant, order, setOrder }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
