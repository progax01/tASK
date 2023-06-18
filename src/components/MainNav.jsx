import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Col, Container, Row, Navbar } from "react-bootstrap";

const MainNav = () => {
	return (
		<Container fluid>
			<Row>
				<Col xs={2}>
					<div className="d-flex justify-content-center align-items-center py-2">
						<img
							alt=""
							src="/images/Logo.png"
							width="80"
							className="d-inline-block align-top bg-white"
						/>
					</div>
					<Sidebar />
				</Col>
				<Col>
					<Row>
						<Navbar
							style={{
								backgroundColor: "#1C4584",
							}}
							className="p-0"
						>
							<div
								style={{
									height: "80px",
								color:"white",
								justifyContent:"center"
								

								}}
							>
								<h2 ></h2>
							</div>
						</Navbar>
					</Row>
					<Outlet />
				</Col>
			</Row>
		</Container>
	);
};

export default MainNav;
