import { Container, Row, Col, Form } from "react-bootstrap";
import React from "react";
import { Modal, Button } from "react-bootstrap";

const data = [
	{
		id: 1,
		selected: false,
		hostid: 234,
		hostname: "Abhijeet Ravindra Powe",
		department: "Technical",
		role: "Staff",
		emailid: "abhijeet@gmail.com",
		mobileno: 9876543210,
	},
	{
		id: 2,
		selected: false,
		hostid: 234,
		hostname: "Abhijeet Ravindra Powe",
		department: "Technical",
		role: "Staff",
		emailid: "abhijeet@gmail.com",
		mobileno: 9876543210,
	},
	{
		id: 3,
		selected: false,
		hostid: 234,
		hostname: "Abhijeet Ravindra Powe",
		department: "Technical",
		role: "Staff",
		emailid: "abhijeet@gmail.com",
		mobileno: 9876543210,
	},
	{
		id: 4,
		selected: false,
		hostid: 234,
		hostname: "Abhijeet Ravindra Powe",
		department: "Technical",
		role: "Staff",
		emailid: "abhijeet@gmail.com",
		mobileno: 9876543210,
	},
	{
		id: 5,
		selected: false,
		hostid: 234,
		hostname: "Abhijeet Ravindra Powe",
		department: "Technical",
		role: "Staff",
		emailid: "abhijeet@gmail.com",
		mobileno: 9876543210,
	},
	{
		id: 6,
		selected: false,
		hostid: 234,
		hostname: "Abhijeet Ravindra Powe",
		department: "Technical",
		role: "Staff",
		emailid: "abhijeet@gmail.com",
		mobileno: 9876543210,
	},
	{
		id: 6,
		selected: false,
		hostid: 234,
		hostname: "Abhijeet Ravindra Powe",
		department: "Technical",
		role: "Staff",
		emailid: "abhijeet@gmail.com",
		mobileno: 9876543210,
	},
	{
		id: 7,
		selected: false,
		hostid: 234,
		hostname: "Abhijeet Ravindra Powe",
		department: "Technical",
		role: "Staff",
		emailid: "abhijeet@gmail.com",
		mobileno: 9876543210,
	},
	{
		id: 8,
		selected: false,
		hostid: 234,
		hostname: "Abhijeet Ravindra Powe",
		department: "Technical",
		role: "Staff",
		emailid: "abhijeet@gmail.com",
		mobileno: 9876543210,
	},
];

const Host = () => {
	const [showModal, setShowModal] = React.useState(false);

	return (
		<Container fluid>
			<Row>
				<div className="outer-box">
					<div className="inner-box" onClick={() => setShowModal(true)}>
						+ New
					</div>
					<div className="inner-box">Inactive</div>
				</div>
			</Row>

			<div style={{ marginTop: "2rem" }}>
				<table>
					<thead>
						<tr>
							<th>Action</th>
							<th>Host ID</th>
							<th>Host Name</th>
							<th>Department</th>
							<th>Role</th>
							<th>Email ID</th>
							<th>Mobile No.</th>
						</tr>
					</thead>
					<tbody>
						{data.map((value, key) => {
							return (
								<tr key={key}>
									<td className="d-flex gap-1 h-100">
										<input type="checkbox" id="" />
										<img src="/images/edit.png" width={10} height={10} />
										<img src="/images/sync.png" width={10} height={10} />
										<img src="/images/print.png" width={10} height={10} />
									</td>
									<td>{value.hostid}</td>
									<td>{value.hostname}</td>
									<td>{value.department}</td>
									<td>{value.role}</td>
									<td>{value.emailid}</td>
									<td>{value.mobileno}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<Modal
				dialogClassName="mymodal"
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
								<Form.Label>Host Name</Form.Label>
								<Form.Control className="formfield" placeholder="Enter Name" />
							</Col>
							<Col>
								<Form.Label>Host ID</Form.Label>
								<Form.Control className="formfield" placeholder="Host ID" />
							</Col>
							<Col>
								<Form.Label>Email ID</Form.Label>
								<Form.Control className="formfield" placeholder="Email ID" />
							</Col>
						</Row>
						<Row style={{ marginBottom: ".8rem" }}>
							<Col>
								<Form.Label>Password</Form.Label>
								<Form.Control className="formfield" placeholder="Password" />
							</Col>
							<Col>
								<Form.Label>Confirm Password</Form.Label>
								<Form.Control
									className="formfield"
									placeholder="Re-enter Password"
								/>
							</Col>
							<Col>
								<Form.Label>Mobile No.</Form.Label>
								<Form.Control className="formfield" placeholder="Mobile no" />
							</Col>
						</Row>
						<Row style={{ marginBottom: ".8rem" }}>
							<Col>
								<Form.Label>Department</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="formfield"
								>
									<option>Select</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Col>
							<Col>
								<Form.Label>Role</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="formfield"
								>
									<option>Select</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Col>
							<Col>
								<Form.Label>Vehicle Type</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="formfield"
								>
									<option>Select</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Col>
						</Row>
						<Row style={{ marginBottom: ".8rem" }}>
							<Col>
								<Form.Label>Period</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="formfield"
								>
									<option>1 Year</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Col>
							<Col>
								<Form.Label>Valid from</Form.Label>
								<Form.Control className="formfield" placeholder="06/06/2023" />
							</Col>
							<Col>
								<Form.Label>Valid to</Form.Label>
								<Form.Control className="formfield" placeholder="06/06/2023" />
							</Col>
							<Col>
								<Form.Label>National ID</Form.Label>
								<Form.Control className="formfield" placeholder="National ID" />
							</Col>
						</Row>
						<Row style={{ marginBottom: ".8rem" }}>
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
							<Col>
								<Form.Label>Access card No</Form.Label>
								<Form.Control className="formfield" placeholder="123456789" />
							</Col>
							<Col>
								<Form.Label>Pass template</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
						</Row>
						<Row style={{ marginBottom: ".8rem" }}>
							<Col>
								<Form.Label>Roaster Schedule</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="formfield"
								>
									<option>Select</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Col>
							<Col>
								<Form.Label>Attendance Policy</Form.Label>
								<Form.Select
									aria-label="Default select example"
									className="formfield"
								>
									<option>Select</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Col>
							<Col>
								<Form.Label>License No.</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
						</Row>
						<Row style={{ marginBottom: ".8rem" }}>
							<Col>
								<Form.Label>License Expiry Date</Form.Label>
								<Form.Control className="formfield" placeholder="06/06/2025" />
							</Col>
							<Col>
								<Form.Label>Blood Group</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<Form.Label>Site</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
						</Row>
						<Row style={{ marginBottom: ".8rem" }}>
							<Col>
								<Form.Label>Date of Birth</Form.Label>
								<Form.Control className="formfield" placeholder="02/03/1999" />
							</Col>
							<Col>
								<Form.Label>Date of Joining</Form.Label>
								<Form.Control className="formfield" placeholder="02/03/2023" />
							</Col>
							<Col></Col>
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

export default Host;
