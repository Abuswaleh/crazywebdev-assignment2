import styles from "../styles/Home.module.css";
function Home() {
	return (
		<div className={styles.home}>
			<h1 className={styles.header}>Online Startup Accelerator</h1>
			<p className={styles.text}>
				Grow your startup like crazy without giving up a penny of
				equity.
			</p>
			<div className={styles.bannerContainer}>
				<img
					src="https://dq2uhp934kg74.cloudfront.net/production/20240813-1017/img/538a4912e09dd3ccaa7af3dbe6177114/how-it-works-w-labels.png"
					alt="banner"
				/>
			</div>
		</div>
	);
}

export default Home;
