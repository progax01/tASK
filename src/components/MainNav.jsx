import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import { Col, Container, Row } from "react-bootstrap";

const MainNav = () => {
	return (
		<>
			<NavBar />
			<Container fluid>
				<Row>
					<Col xs={2}>
						<Sidebar />
					</Col>
					<Col>
						<Outlet />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default MainNav;
