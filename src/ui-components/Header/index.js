import { useRef } from "react";
import { TbLogout } from "react-icons/tb";
import styles from "./Header.module.css";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Link from "next/link";
/*

Dropdown Menu Guideline and Instructions
Dropdown Menu props are
    label: string
    CustomMenu: React Component
    dropdownContainerStyle: style object
    children: React Component

    Note: label or CustomMenu only one can be used at a time
    CustomMenu has higher priority if CustomMenu has passed as
    props then label wont work but if CustomMenu has not given
    then label will be visible


*/

const MenuList = ({ href = "", Icon = null, text = "" }) => {
  return (
    <li>
      <Link href={href} className={styles["link"]}>
        {Icon && <Icon />}
        <span>{text}</span>
      </Link>
    </li>
  );
};

const Header = ({ toggleSidebarMenu }) => {
  return (
    <section className={styles.container}>
      <div className={styles["left-items"]}>
        <ul>
          <li>
            <button
              className={styles["close-sidemenu"]}
              onClick={toggleSidebarMenu}
            >
              <HiOutlineMenuAlt1 />
            </button>
          </li>
        
        </ul>
      </div>
      <ul className={styles["sidebar-footer"]}>
      <h3>Artcolony Admin Dashboard</h3>
          
      </ul>
    </section>
  );
};

export default Header;
