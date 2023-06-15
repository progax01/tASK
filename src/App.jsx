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
							return (
								<Route
									path={i.link}
									name={i.name}
									key={i.icon}
									element={i.element}
								/>
							);
						})}
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
