import { Container, Row, Col, Form } from "react-bootstrap";
import React from "react";
import { Modal, Button } from "react-bootstrap";

const data = [
	{
		id: 1,
		selected: false,
		hostname: "Abhijeet Ravindra Power",
		city: "Mumbai",
		state: "Maharashtra",
		country: "Inida",
		mobileno: 9876543210,
	},
	{
		id: 2,
		selected: false,
		hostname: "Abhijeet Ravindra Power",
		city: "Mumbai",
		state: "Maharashtra",
		country: "Inida",
		mobileno: 9876543210,
	},
	{
		id: 3,
		selected: false,
		hostname: "Abhijeet Ravindra Power",
		city: "Mumbai",
		state: "Maharashtra",
		country: "Inida",
		mobileno: 9876543210,
	},
	{
		id: 4,
		selected: false,
		hostname: "Abhijeet Ravindra Power",
		city: "Mumbai",
		state: "Maharashtra",
		country: "Inida",
		mobileno: 9876543210,
	},
	{
		id: 5,
		selected: false,
		hostname: "Abhijeet Ravindra Power",
		city: "Mumbai",
		state: "Maharashtra",
		country: "Inida",
		mobileno: 9876543210,
	},
	{
		id: 6,
		selected: false,
		hostname: "Abhijeet Ravindra Power",
		city: "Mumbai",
		state: "Maharashtra",
		country: "Inida",
		mobileno: 9876543210,
	},
	{
		id: 6,
		selected: false,
		hostname: "Abhijeet Ravindra Power",
		city: "Mumbai",
		state: "Maharashtra",
		country: "Inida",
		mobileno: 9876543210,
	},
	{
		id: 7,
		selected: false,
		hostname: "Abhijeet Ravindra Power",
		city: "Mumbai",
		state: "Maharashtra",
		country: "Inida",
		mobileno: 9876543210,
	},
	{
		id: 8,
		selected: false,
		hostid: 234,
		hostname: "Abhijeet Ravindra Power",
		city: "Mumbai",
		state: "Maharashtra",
		country: "Inida",
		mobileno: 9876543210,
	},
];

const VisitorCompany = () => {
	const [showModal, setShowModal] = React.useState(false);

	return (
		<Container fluid>
			<Row>
				<div className="outer-box">
					<div className="inner-box" onClick={() => setShowModal(true)}>
						+ New
					</div>
					<div className="inner-box">Delete</div>

					<div className="inner-box">+ New Company</div>
				</div>
			</Row>

			<div style={{ marginTop: "2rem" }}>
				<table>
					<thead>
						<tr>
							<th>Action</th>
							<th>Host Name</th>
							<th>City</th>
							<th>State</th>
							<th>Country</th>
							<th>Mobile No.</th>
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

									<td>{value.hostname}</td>
									<td>{value.city}</td>
									<td>{value.state}</td>
									<td>{value.country}</td>
									<td>{value.mobileno}</td>
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
					<Modal.Title>New Host</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Row style={{ marginBottom: ".8rem" }}>
							<Col>
								<Form.Label>Name</Form.Label>
								<Form.Control className="formfield" placeholder="Enter Name" />
							</Col>
							<Col>
								<Form.Label>City</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="formfield"
								>
									<option>Select City</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Col>
							<Col>
								<Form.Label>Country</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="formfield"
								>
									<option>Select City</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Col>
						</Row>
						<Row style={{ marginBottom: ".8rem" }}>
							<Col>
								<Form.Label>Company Name</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<Form.Label>State</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="formfield"
								>
									<option>Select State</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Col>
							<Col>
								<Form.Label>Black Listed</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="formfield"
								>
									<option>Select City</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Col>
						</Row>
					</Form>
				</Modal.Body>
				<Modal.Footer style={{  justifyContent:"center",gap:"20px"}}>
					<Button variant="contained" className="clsbtn" onClick={() => setShowModal(false)}>
						Go
					</Button>
					<Button
						variant="contained"
						className="clsbtn"
						onClick={() => setShowModal(false)}	>
						Clear
					</Button>
					<Button variant="contained" className="clsbtn" onClick={() => setShowModal(false)}>
						Excel
					</Button>
					<Button variant="contained" className="clsbtn" onClick={() => setShowModal(false)}>
						PDF
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
};

export default VisitorCompany;
