import GlobalLoader from "./GlobalLoader";
import Profile from "./profile/Profile";

const Header = () => {
	return (
		<header>
			<GlobalLoader />
			<Profile />
		</header>
	);
};

export default Header;
