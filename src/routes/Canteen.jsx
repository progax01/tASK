import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";

const Canteen = () => {
	const location = useLocation();

	let locations = location.pathname.split("/").splice(1);
	const root = locations.shift().toUpperCase();
	locations = locations[0]
		.split("-")
		.map((i) => i.toUpperCase())
		.join(" ");

	return (
		<Container fluid>
			<Row>
				<Col>
					<h3
						className="mt-3"
						style={{
							borderBottom: "1px solid black",
							color: "#1C4584",
						}}
					>
						{root} / {locations}
					</h3>
				</Col>
			</Row>
			<Row>
				<Col>
					<Outlet />
				</Col>
			</Row>
		</Container>
	);
};

export default Canteen;
