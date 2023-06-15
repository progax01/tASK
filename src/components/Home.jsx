import { Container, Row, Col } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Home = () => {
	return (
		<Container fluid>
			<Row>
				<Col>
					<h3
						className="mt-3"
						style={{
							borderBottom: "1px solid black",
						}}
					>
						Dashboard
					</h3>
				</Col>
			</Row>
			<Row>
				<Col xs={3}>
					<div
						style={{
							backgroundColor: "#1C45841A",
						}}
					>
						<div className="imgcls">
							<img src="/images/ic1.png"></img>
							<div>
								<p>Employee</p>
								<p
									style={{
										fontSize: "18px",
									}}
								>
									80
								</p>
							</div>
						</div>
						<div>2</div>
						<div>3</div>
						<div>4</div>
						<div>5</div>
						<div>6</div>
						<div>7</div>
					</div>
				</Col>

				<Col xs={9}>
					<Row className="section-heading">Visitor</Row>
					<Row>
						<Col>
							<Calendar />
						</Col>
						<Col>2</Col>
						<Col>3</Col>
					</Row>
					<Row className="section-heading">Contract Worker</Row>
					<Row>
						<Col>
							<Calendar />
						</Col>
						<Col>2</Col>
						<Col>3</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
