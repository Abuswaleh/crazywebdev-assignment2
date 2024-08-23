import { HamburgerIcon, SearchIcon, UserIcon } from "../icons/icons";
import styles from "../styles/NavBar.module.css";
const navbarMockData = ["Education", "community", "library", "products"];
const NavBar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.navbarLeft}>
				<span>
					<HamburgerIcon />
				</span>
				<button className={styles.brandIcon}>startups.com</button>
				<span className={styles.userIcon}>
					<UserIcon />
				</span>
			</div>
			<div className={styles.navbarCenter}>
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
				<span>
					<SearchIcon />
				</span>
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
