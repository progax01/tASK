import { Accordion } from "react-bootstrap";
import Home from "./Home";
import Configure from "../routes/Configure";
import Visitor from "./Visitor";
import { NavLink } from "react-router-dom";
import Host from "./Host";
import Master from "../routes/Master";
import VisitorCompany from "./Visitor Company";
import Item from "./Item";
import Contractor from "./Contractor";
import Worker from "./Worker";
import Visitors from "../routes/Visitors";
import Appointment from "./Appointment";
import SingleDayPass from "./SingleDayPass";
import MultiDayPass from "./MultiDayPass";
import Material from "../routes/Master";
import Outward from "./Outward";
import Canteen from "../routes/Canteen";
import Terminal from "./Terminal";
import MenuItems from "./MenuIterms";
import CanteenMenuDefinition from "./CanteenMenuDefinition";
import GuestCoupon from "./GuestCoupon";
import CanteenRegularization from "./CanteenRegularization";
import CanteenRule from "./CanteenRule";
import CanteenIncentive from "./CanteenIncentive";
import FoodBooking from "./FoodBooking";
import ContractWorker from "../routes/ContractWorker";

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
				element: <Visitor />,
			},
			{
				name: "Item",
				link: "/master/item",
				element: <Item />,
			},
			{
				name: "Contractor",
				link: "/master/contractor",
				element: <Contractor />,
			},
			{
				name: "Worker",
				link: "/master/worker",
				element: <Worker />,
			},
		],
	},
	{
		name: "Visitors",
		link: "/visitors",
		icon: "/images/4.png",
		element: <Visitors />,

		subLinks: [
			{
				name: "Appointment",
				link: "/visitors/appointment",
				element: <Appointment />,
			},
			{
				name: "Single Day Pass",
				link: "/visitors/single-day-pass",
				element: <SingleDayPass />,
			},
			{
				name: "Multi Day Pass",
				link: "/visitors/multi-day-pass",
				element: <MultiDayPass />,
			},
			{
				name: "Visitor Registration",
				link: "/visitors/visitor-registration",
				element: <>Visitor Registration</>,
			},
		],
	},

	{
		name: "Material",
		link: "/material",
		icon: "/images/5.png",
		element: <Material />,
		subLinks: [
			{
				name: "Outward",
				link: "/material/outward",
				element: <Outward />,
			},
			{
				name: "Inward Confirmation",
				link: "/material/inward-confirmation",
				element: <>Inward Confirmation</>,
			},
			{
				name: "Short Close Outward",
				link: "/material/short-close-outward",
				element: <>outward</>,
			},
			{
				name: "Short Close Inward",
				link: "/material/short-close-inward",
				element: <>Short Close Inward</>,
			},
			{
				name: "Purchase Order",
				link: "/material/purchase-order",
				element: <>Purchase Order</>,
			},
			{
				name: "Inventory",
				link: "/material/inventory",
				element: <>Inventory</>,
			},
		],
	},

	{
		name: "Canteen",
		link: "/canteen",
		icon: "/images/6.png",
		element: <Canteen />,
		subLinks: [
			{
				name: "Terminal",
				link: "/canteen/terminal",
				element: <Terminal />,
			},
			{
				name: "Menu Items",
				link: "/canteen/menu-items",
				element: <MenuItems />,
			},
			{
				name: "Menu Definition",
				link: "/canteen/menu-definition",
				element: <CanteenMenuDefinition />,
			},
			{
				name: "Canteen Menu Definition",
				link: "/canteen/canteen-menu-definition",
				element: <CanteenMenuDefinition />,
			},
			{
				name: "Guest Coupon",
				link: "/canteen/guest-coupon",
				element: <GuestCoupon />,
			},
			{
				name: "Canteen Regularization",
				link: "/canteen/Canteen-Regularization",
				element: <CanteenRegularization />,
			},
			{
				name: "Canteen Rule",
				link: "/canteen/canteen-rule",
				element: <CanteenRule />,
			},
			{
				name: "Canteen Incentive",
				link: "/canteen/canteen-incentive",
				element: <CanteenIncentive />,
			},
			{
				name: "Food Booking",
				link: "/canteen/food-booking",
				element: <FoodBooking />,
			},
		],
	},
	{
		name: "Contract Worker",
		link: "/contract-worker",
		icon: "/images/7.png",
		element: <ContractWorker />,
		subLinks: [
			{
				name: "Worker Card",
				link: "/contract-worker/worker-card",
				element: <>asdf</>,
			},
			{
				name: "Daily CW Requirment",
				link: "/contract-worker/daily-cw-requirement",
				element: <>jkhg</>
			},
		],
	},

	{
		name: "Control Center",
		link: "/control-center",
		icon: "/images/8.png",
		element: <>jkk</>,
	
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
						<p className="mb-1">{i.name}</p>
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
													? "d-flex gap-3 nav-active  nav-normal"
													: "d-flex gap-3 mb-1 nav-normal"
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
