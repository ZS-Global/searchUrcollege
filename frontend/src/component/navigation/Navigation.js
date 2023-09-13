import { useEffect, useState } from "react";
import NavigationList from "./NavigationList";
import "./Navigation.css";
import {FaUniversity} from 'react-icons/fa';
import {
  featuredNavigation,
  webNavigation,
  mobileNavigation,
  designNavigation,
  contentNavigation,
  quickLinksData
} from "./data";

export default function Navigation() {
  const [selected, setSelected] = useState("MBA");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "MBA",
      title: "MBA",
    },
    {
      id: "B.TECH",
      title: "B.TECH",
    },
    {
      id: "MEDICAL",
      title: "MEDICAL",
    },
    {
      id: "DESIGN",
      title: "DESIGN",
    },
    {
      id: "MORE",
      title: "MORE",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "MBA":
        setData(quickLinksData);
        break;
      case "B.TECH":
        setData(webNavigation);
        break;
      case "MEDICAL":
        setData(mobileNavigation);
        break;
      case "DESIGN":
        setData(designNavigation);
        break;
      case "MORE":
        setData(contentNavigation);
        break;
      default:
        setData(featuredNavigation);
    }
  }, [selected]);

  return (
    <div className="navigation" id="navigation">
      {/* <h1>Navigation</h1> */}
      <ul>
        {list.map((item) => (
          <NavigationList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <hr className="hline"/>

      {/* <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div> */}
      <div className="container-nav">
      {quickLinksData.map((category, index) => (
        <div key={category.id} className="category-nav">
          <div className="icon">{category.icon}</div>
          <h2>{category.title}</h2>
          <p>{category.description}</p>
        </div>
    ))}
  </div>
    </div>
  );
}
