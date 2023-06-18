import { Container, Row, Col, Form } from "react-bootstrap";
import React from "react";
import { Modal, Button } from "react-bootstrap";

const data = [
	{
		id: 1,
		selected: false,
		date: "12/03/20323",
		passno: "9999",
		host: "Lorem ipsum dolor",
		visittype: "Lorem ipsum dolor",
		visitorstatus: "Lorem ipsum dolor",
	},
	{
		id: 1,
		selected: false,
		date: "12/03/20323",
		passno: "9999",
		host: "Lorem ipsum dolor",
		visittype: "Lorem ipsum dolor",
		visitorstatus: "Lorem ipsum dolor",
	},
	{
		id: 1,
		selected: false,
		date: "12/03/20323",
		passno: "9999",
		host: "Lorem ipsum dolor",
		visittype: "Lorem ipsum dolor",
		visitorstatus: "Lorem ipsum dolor",
	},
	{
		id: 1,
		selected: false,
		date: "12/03/20323",
		passno: "9999",
		host: "Lorem ipsum dolor",
		visittype: "Lorem ipsum dolor",
		visitorstatus: "Lorem ipsum dolor",
	},
	{
		id: 1,
		selected: false,
		date: "12/03/20323",
		passno: "9999",
		host: "Lorem ipsum dolor",
		visittype: "Lorem ipsum dolor",
		visitorstatus: "Lorem ipsum dolor",
	},
	{
		id: 1,
		selected: false,
		date: "12/03/20323",
		passno: "9999",
		host: "Lorem ipsum dolor",
		visittype: "Lorem ipsum dolor",
		visitorstatus: "Lorem ipsum dolor",
	},
	{
		id: 1,
		selected: false,
		date: "12/03/20323",
		passno: "9999",
		host: "Lorem ipsum dolor",
		visittype: "Lorem ipsum dolor",
		visitorstatus: "Lorem ipsum dolor",
	},
	{
		id: 1,
		selected: false,
		date: "12/03/20323",
		passno: "9999",
		host: "Lorem ipsum dolor",
		visittype: "Lorem ipsum dolor",
		visitorstatus: "Lorem ipsum dolor",
	},
	{
		id: 1,
		selected: false,
	},
	{
		id: 1,
		selected: false,
	},
	{
		id: 1,
		selected: false,
	},
];

const MultiDayPass = () => {
	const [showModal, setShowModal] = React.useState(false);

	return (
		<Container fluid>
			<Row>
				<div className="outer-box">
					<div className="inner-box" onClick={() => setShowModal(true)}>
						+ New
					</div>
				</div>
			</Row>

			<div style={{ marginTop: "2rem" }}>
				<table>
					<thead>
						<tr>
							<th>Action</th>
							<th>Date</th>
							<th>Pass No</th>

							<th>Host</th>
							<th>Visit Type</th>
							<th>Visitor Status</th>
						</tr>
					</thead>
					<tbody>
						{data.map((value, key) => {
							return (
								<tr key={key}>
									<td className="d-flex gap-2 h-100">
										<input type="checkbox" id="" />
										<img src="/images/edit.png" width={15} height={10} />
									</td>

									<td>{value.date}</td>
									<td>{value.passno}</td>

									<td>{value.host}</td>
									<td>{value.visittype}</td>
									<td>{value.visitorstatus}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<Modal
				contentClassName="mymodal"
				show={showModal}
				onHide={() => setShowModal(false)}
			>
				<Modal.Header>
					<Modal.Title style={{ textAlign: "center" }}>New Item</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Row style={{ marginBottom: "1.2rem" }}>
							<Col>
								<Form.Label>Department</Form.Label>
								<Form.Control className="formfield" placeholder="Enter " />
							</Col>
							<Col>
								<Form.Label>Date</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<div className="m-4">
									<Form.Label></Form.Label>
									<button className=" formbtn">
										<Form.Control className="d-none" type="file" />
										Upload
									</button>
									<Form.Label className="mx-3">Choose file </Form.Label>
								</div>
							</Col>
						</Row>
						<Row style={{ marginBottom: "1.2rem" }}>
							<Col>
								<Form.Label>Host</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="formfield"
								>
									<option>Select </option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Col>
							<Col>
								<Form.Label>Time</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<Form.Label>Company</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="formfield"
								>
									<option>Select </option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Col>
						</Row>
						<Row style={{ marginBottom: "1.2rem" }}>
							<Col>
								<Form.Label> Duration hh:mm</Form.Label>
								<Form.Control className="formfield" placeholder="00:00" />
							</Col>
							<Col>
								<Form.Label>Visitor</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="formfield"
								>
									<option>Select </option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Col>

							<Col>
								<Form.Label>Meeting Location</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="formfield"
								>
									<option>Select </option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Col>
						</Row>
						<Row style={{ marginBottom: "1.2rem" }}>
							<Col>
								<Form.Label> Name</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<Form.Label> Serial No.</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<Form.Label>Visit type</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="formfield"
								>
									<option>Select </option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Col>
						</Row>
						<Row style={{ marginBottom: "1.2rem" }}>
							<Col>
								<Form.Label> Remark</Form.Label>
								<Form.Control
									className="formfield"
									type="textbox"
									placeholder="Describe"
								/>
							</Col>
							<Col>
								<Form.Label> ID Type</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<Form.Label> ID Number</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
						</Row>
					</Form>
				</Modal.Body>
				<Modal.Footer style={{ justifyContent: "center", gap: "20px" }}>
					<Button className="formbtn" onClick={() => setShowModal(false)}>
						Submit
					</Button>
					<Button
						variant="contained"
						className="clsbtn"
						onClick={() => setShowModal(false)}
					>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
};

export default MultiDayPass;
