import {
	Route,
	Switch,
	useLocation,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./component/Themes";
import GlobalStyle from "./globalStyles";
import Main from "./component/Main";
import AboutPage from "./component/AboutPage";
import MySkillsPage from "./component/MySkillsPage";
import WorkPage from "./component/WorkPage";
import BlogPage from "./component/BlogPage";
import MyCertifications from "./component/MyCertifications";
import MyResume from "./component/MyResume";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";

function App() {
	const location = useLocation();

	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={lightTheme}>
        <SoundBar />
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.pathname}>
						<Route
							exact
							path="/"
							component={Main}
						/>
						<Route
							exact
							path="/about"
							component={AboutPage}
						/>
						<Route
							exact
							path="/projects"
							component={BlogPage}
						/>
						<Route
							exact
							path="/work"
							component={WorkPage}
						/>
						<Route
							exact
							path="/skills"
							component={MySkillsPage}
						/>
						<Route
							exact
							path="/certifications"
							component={MyCertifications}
						/>
						<Route
							exact
							path="/resume"
							component={MyResume}
						/>
					</Switch>
				</AnimatePresence>
			</ThemeProvider>
		</>
	);
}

export default App;
