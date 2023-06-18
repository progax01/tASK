import { Accordion } from "react-bootstrap";
import Home from "./Home";
import Configure from "../routes/Configure";
import Visitors from "./Visitors";
import { NavLink } from "react-router-dom";
import Host from "./Host";
import Master from "../routes/Master";
import VisitorCompany from "./Visitor Company";
import Item from "./Item";
import Contractor from "./Contractor";
import Worker from "./Worker";

export const links = [
	{
		name: "Dashboard",
		link: "/dashboard",
		icon: "/images/1.png",
		element: <Home />,
	},
	{
		name: "Configure",
		link: "/configure",
		icon: "/images/2.png",
		element: <Configure />,

		subLinks: [
			{
				name: "License Parameter",
				link: "/configure/license-parameter",
				element: <>License Parameter</>,
			},
			{
				name: "Application Parameter",
				link: "/configure/application-parameter",
				element: <>Application Parameter</>,
			},
			{
				name: "Category",
				link: "/configure/category",
				element: <>category</>,
			},
			{
				name: "Role",
				link: "/configure/role",
				element: <>role</>,
			},
			{
				name: "Material IO Workflow",
				link: "/configure/material_io_worklow",
				element: <>Material IO Workflow</>,
			},
			{
				name: "Voucher Series",
				link: "/configure/voucher_series",
				element: <>voucher</>,
			},
			{
				name: "User Defined Fields",
				link: "/configure/user_define_feild",
				element: <>User define fields</>,
			},
		],
	},
	{
		name: "Master",
		link: "/master",
		icon: "/images/3.png",
		element: <Master />,

		subLinks: [
			{
				name: "Host",
				link: "/master/host",
				element: <Host />,
			},
			{
				name: "Visitor Company",
				link: "/master/visitor-company",
				element: <VisitorCompany />,
			},
			{
				name: "Visitor",
				link: "/master/visitor",
				element: <Visitors />,
			},
			{
				name: "Item",
				link: "/master/item",
				element: <Item />,
			},
			{
				name: "Contractor",
				link: "/master/contractor",
				element: <Contractor/>,
			},
			{
				name: "Worker",
				link: "/master/worker",
				element: <Worker/>,
			},
		],
	},
	{
		name: "Visitors",
		link: "/visitors",
		icon: "/images/4.png",
		element: <Visitors />,
	},
	{
		name: "Material",
		link: "/material",
		icon: "/images/5.png",
		element: <>Hello World</>,
	},
	{
		name: "Canteen",
		link: "/canteen",
		icon: "/images/6.png",
		element: <>Hello World</>,
	},
	{
		name: "Contract Worker",
		link: "/contractworker",
		icon: "/images/7.png",
		element: <>Hello World</>,
	},
	{
		name: "Control Center",
		link: "/control center",
		icon: "/images/8.png",
		element: <>Hello World</>,
	},
	{
		name: "Utility",
		link: "/utility",
		icon: "/images/9.png",
		element: <>Hello World</>,
	},
	{
		name: "Reports",
		link: "/reports",
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
				return !i?.subLinks ? (
					<NavLink
						key={i.link}
						to={i.link}
						className={({ isActive }) =>
							isActive
								? "d-flex gap-3 nav-active mb-3  nav-normal"
								: "d-flex gap-3 mb-3 nav-normal"
						}
					>
						<img
							src={i.icon}
							alt={i.name}
							style={{
								height: 22,
								width: 22,
							}}
						/>
						<p className="mb-0">{i.name}</p>
					</NavLink>
				) : (
					<Accordion className="mb-3" key={i.link}>
						<Accordion.Item>
							<Accordion.Header className="mb-2">
								<img
									src={i.icon}
									alt={i.name}
									style={{
										height: 22,
										width: 22,
									}}
								/>
								<p className="m-0">{i.name}</p>
							</Accordion.Header>
							<Accordion.Body>
								{i.subLinks.map((s) => {
									return (
										<NavLink
											key={s.name}
											to={s.link}
											className={({ isActive }) =>
												isActive
													? "d-flex gap-3 nav-active mb-3  nav-normal"
													: "d-flex gap-3 mb-3 nav-normal"
											}
										>
											<p className="mb-1 fs-small">{s.name}</p>
										</NavLink>
									);
								})}
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				);
			})}
		</div>
	);
};

export default Sidebar;
