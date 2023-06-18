import { Container, Row, Col } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
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
								<p>Employees</p>
								<p
									style={{
										fontSize: "16px",
									}}
								>
									80
								</p>
							</div>
						</div>
						<div className="imgcls">
							<img src="/images/ic2.png"></img>
							<div>
								<p>Visitors</p>
								<p
									style={{
										fontSize: "16px",
									}}
								>
									10
								</p>
							</div>
						</div>
						<div className="imgcls">
							<img src="/images/ic3.png"></img>
							<div>
								<p>Workers</p>
								<p
									style={{
										fontSize: "16px",
									}}
								>
									351 (340 Unique)
								</p>
							</div>
						</div>
						<div className="imgcls">
							<img src="/images/ic4.png"></img>
							<div>
								<p>People Inside</p>
								<p
									style={{
										fontSize: "16px",
									}}
								>
									23453
								</p>
							</div>
						</div>
						<div className="imgcls">
							<img src="/images/ic5.png"></img>
							<div>
								<p>Total Left</p>
								<p
									style={{
										fontSize: "16px",
									}}
								>
									80
								</p>
							</div>
						</div>
						<div className="imgcls">
							<img src="/images/ic1.png"></img>
							<div>
								<p>Canteen</p>
								<p
									style={{
										fontSize: "16px",
									}}
								>
									Qty:136 | Amount:3422
								</p>
							</div>
						</div>
					</div>
				</Col>

				<Col xs={9}>
					<Row className="section-heading">Visitor</Row>
					<Row>
						<Col>
							<Calendar />
						</Col>
						<Col>
							<div>
								<p>
									<strong>Previously Inside Count - 0 </strong>
								</p>
								<h6>Today’s Visitor</h6>
								<p>No Visitors</p>
								<h6>Today’s Multi Day Visitor</h6>
								<p>No Multi Day Visitors</p>
							</div>
						</Col>

						<Col className="rowbox">
							<p>
								<strong> Status Wise Visitor List </strong>
							</p>
						</Col>
					</Row>
					<Row className="section-heading">Contract Worker</Row>
					<Row>
						<Col className="rowbox">
							<Calendar />
						</Col>
						<Col className="rowbox">
							<p>
								<strong>Previously Inside Count - 2016 </strong>
							</p>
							<h6>Today’s Worker(s)</h6>
							<div>
								<ProgressBar
									completed={60}
									labelAlignment="left"
									customLabel={"Pass issued 329"}
									height="40px"
									bgColor="orange"
									animateOnRender={true}
									isLabelVisible={true}
								/>
								<br></br>
								<ProgressBar
									completed={46}
									labelAlignment="left"
									customLabel={"Inside 46"}
									height="40px"
									bgColor="green"
									animateOnRender={true}
									isLabelVisible={true}
								/>
								<br></br>
								<ProgressBar
									completed={76}
									labelAlignment="left"
									customLabel={"Card Submitted 200"}
									height="40px"
									bgColor="red"
									animateOnRender={true}
									isLabelVisible={true}
								/>
								<br></br>
							</div>
						</Col>

						<Col className="rowbox">
							<h6>
								<strong>Inside</strong>
							</h6>
						</Col>
					</Row>
				</Col>
			</Row>

			<Container>
				<Row>
					<Col>
						<Row className="row-heading">Material </Row>
						<Row
							className="boxrow"
							style={{ marginRight: "1rem", marginBottom: "1rem" }}
						>
							<h6>Today’s RGP / NRGPToday’s RGP / NRGP</h6>
							<p>No Materials</p>
						</Row>
						<Row
							className="boxrow"
							style={{ marginRight: "1rem", marginBottom: "1rem" }}
						>
							<h6>Status Wise List</h6>
							<p>No Materials</p>
						</Row>
						<Row
							className="boxrow"
							style={{ marginRight: "1rem", marginBottom: "1rem" }}
						>
							<h6>Pending Returnable Outward</h6>
							<p>No Materials</p>
						</Row>
					</Col>

					<Col>
						<Row className="row-heading"> Canteen Menu </Row>
						<Row className="boxrow" style={{ marginBottom: "1rem" }}>
							<h6>Next Menu</h6>
							<p>Rojalin Hospitlity Service</p>
							<p>Biscuit / toast, butter milk/chas...</p>
						</Row>
						<Row className="boxrow" style={{ height: "416px" }}>
							<Col>
								<Row>
									<h6>Canteen Wastage (kg)</h6>
								</Row>
								<Row>
									<Col className="boxsubrow">
										<p> Weekly Food Wastage (kg)</p>
										<img
											src="/images/ic1.png"
											style={{
												height: "20px",
												position: "absolute",
												bottom: "10px",
												right: "10px",
											}}
										></img>
									</Col>
								</Row>
								<Row>
									<Col className="boxsubrow">
										<p> Monthly Food Wastage (kg)</p>
									</Col>
								</Row>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Home;
