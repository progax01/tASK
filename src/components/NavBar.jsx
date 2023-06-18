import { Navbar, Container } from "react-bootstrap";

const NavBar = () => {
	return (
		<Navbar
			style={{
				backgroundColor: "#1C4584",
			}}
			className="p-0"
		>
			<Container fluid className="p-0">
				<Navbar.Brand>
					<img
						alt=""
						src="/images/Logo.png"
						width="120"
						className="d-inline-block align-top bg-white"
					/>
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
};

export default NavBar;
