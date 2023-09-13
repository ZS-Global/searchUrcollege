import "./NavigationList.css";

export default function NavigationList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "navigationList active" : "navigationList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
