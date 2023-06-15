import { Navbar, Container } from "react-bootstrap";

const NavBar = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container fluid>
					<Navbar.Brand href="#home">
						<img
							alt=""
							src="/img/logo.svg"
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{" "}
						React Bootstrap
					</Navbar.Brand>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
