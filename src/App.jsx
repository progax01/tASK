import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { links } from "./components/Sidebar";
import MainNav from "./components/MainNav";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainNav />}>
						{links.map((i) => {
							return i.subLinks ? (
								<Route path={i.link} key={i.icon} element={i.element}>
									{i.subLinks.map((j) => (
										<Route path={j.link} key={j.link} element={j.element} />
									))}
								</Route>
							) : (
								<Route path={i.link} key={i.icon} element={i.element} />
							);
						})}
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
