import { adminMenu, userMenu } from "../../lib/sidebar_links";



const Sidebar = ({role}: {role: string}) => {
const menu = role === "admin" ? adminMenu  : userMenu;


  return (
    <div className="bg-violet-800">
     {menu.map((item) => (<div key={item.path}>{item.label}</div>
      ))}
    </div>
  )
}

export default Sidebar
