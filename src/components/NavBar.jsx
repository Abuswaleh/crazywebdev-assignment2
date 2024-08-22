import { HamburgerIcon, SearchIcon } from "../icons/HamburgerIcon";
import styles from "../styles/NavBar.module.css";
const navbarMockData = [
	"Education",
	"community",
	"library",
	"products",
	"about",
];
const NavBar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.navbarLeft}>
				<HamburgerIcon />
				<button className={styles.brandIcon}>startups.com</button>
			</div>
			<div className={styles.navbarCentr}>
				{navbarMockData.map((el, i) => (
					<a href="/" className={styles.navlink} key={i}>
						{el}
					</a>
				))}
			</div>
			<div className={styles.navbarRight}>
				<a href="/" className={styles.navlink}>
					About
				</a>
				<span className={styles.divider}></span>
				<SearchIcon />
				<span className={styles.divider}></span>
				<a href="#" className={styles.signin}>
					Sign In
				</a>
				<a href="#" className={styles.signup}>
					Sign Up
				</a>
			</div>
		</div>
	);
};

export default NavBar;
