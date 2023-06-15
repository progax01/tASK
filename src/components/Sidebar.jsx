import { Nav } from "react-bootstrap";
import Home from "./Home";

export const links = [
	{
		name: "Dashboard",
		link: "dashboard",
		icon: "/images/1.png",
		element: <Home />,
	},
	{
		name: "Configure",
		link: "configure",
		icon: "/images/2.png",
		element: <>Hello World</>,
	},
	{
		name: "Master",
		link: "master",
		icon: "/images/3.png",
		element: <>Hello World</>,
	},
	{
		name: "Visitors",
		link: "visitors",
		icon: "/images/4.png",
		element: <>Hello World</>,
	},
	{
		name: "Material",
		link: "material",
		icon: "/images/5.png",
		element: <>Hello World</>,
	},
	{
		name: "Canteen",
		link: "canteen",
		icon: "/images/6.png",
		element: <>Hello World</>,
	},
	{
		name: "Contract Worker",
		link: "contractworker",
		icon: "/images/7.png",
		element: <>Hello World</>,
	},
	{
		name: "Control Center",
		link: "control center",
		icon: "/images/8.png",
		element: <>Hello World</>,
	},
	{
		name: "Utility",
		link: "utility",
		icon: "/images/9.png",
		element: <>Hello World</>,
	},
	{
		name: "Reports",
		link: "reports",
		icon: "./images/10.png",
		element: <>Hello World</>,
	},
];

const Sidebar = () => {
	return (
		<div
			className="pt-4 px-4"
			style={{
				backgroundColor: "#1C45841A",
				height: "100%",
			}}
		>
			{links.map((i) => {
				return (
					<Nav.Link
						key={i.link}
						href={i.link}
						className="d-flex gap-3"
						style={{
							width: "fit-content",
						}}
					>
						<img
							src={i.icon}
							alt={i.name}
							style={{
								height: 22,
								width: 22,
							}}
						/>
						<p>{i.name}</p>
					</Nav.Link>
				);
			})}
		</div>
	);
};

export default Sidebar;
