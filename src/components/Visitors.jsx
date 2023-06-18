import { Container, Row, Col, Form } from "react-bootstrap";
import React from "react";
import { Modal, Button } from "react-bootstrap";

const data = [
	{
		id: 1,
		selected: false,
		visitorname: "Aadil Shaikh",
		visitorphone: 9876543210,
		dob: "11/09/1996",
		emailid: "awrsvalver@gmail.com",
		visitorcompany: "Inida Machine tools & Hardware",
	},
	{
		id: 2,
		selected: false,
		visitorname: "Aadil Shaikh",
		visitorphone: 9876543210,
		dob: "11/09/1996",
		emailid: "awrsvalver@gmail.com",
		visitorcompany: "Inida Machine tools & Hardware",
	},
	{
		id: 3,
		selected: false,
		visitorname: "Aadil Shaikh",
		visitorphone: 9876543210,
		dob: "11/09/1996",
		emailid: "awrsvalver@gmail.com",
		visitorcompany: "Inida Machine tools & Hardware",
	},
	{
		id: 4,
		selected: false,
		visitorname: "Aadil Shaikh",
		visitorphone: 9876543210,
		dob: "11/09/1996",
		emailid: "awrsvalver@gmail.com",
		visitorcompany: "Inida Machine tools & Hardware",
	},
	{
		id: 5,
		selected: false,
		visitorname: "Aadil Shaikh",
		visitorphone: 9876543210,
		dob: "11/09/1996",
		emailid: "awrsvalver@gmail.com",
		visitorcompany: "Inida Machine tools & Hardware",
	},
	{
		id: 6,
		selected: false,
		visitorname: "Aadil Shaikh",
		visitorphone: 9876543210,
		dob: "11/09/1996",
		emailid: "awrsvalver@gmail.com",
		visitorcompany: "Inida Machine tools & Hardware",
	},
	{
		id: 6,
		selected: false,
		visitorname: "Aadil Shaikh",
		visitorphone: 9876543210,
		dob: "11/09/1996",
		emailid: "awrsvalver@gmail.com",
		visitorcompany: "Inida Machine tools & Hardware",
	},
	{
		id: 7,
		selected: false,
		visitorname: "Aadil Shaikh",
		visitorphone: 9876543210,
		dob: "11/09/1996",
		emailid: "awrsvalver@gmail.com",
		visitorcompany: "Inida Machine tools & Hardware",
	},
	{
		id: 8,
		selected: false,
		visitorname: "Aadil Shaikh",
		visitorphone: 9876543210,
		dob: "11/09/1996",
		emailid: "awrsvalver@gmail.com",
		visitorcompany: "Inida Machine tools & Hardware",
	},
];

const Visitors = () => {
	const [showModal, setShowModal] = React.useState(false);

	return (
		<Container fluid>
			<Row>
				<div className="outer-box">
					<div className="inner-box" onClick={() => setShowModal(true)}>
						+ New
					</div>
					<div className="inner-box">Delete</div>
				</div>
			</Row>

			<div style={{ marginTop: "2rem" }}>
				<table>
					<thead>
						<tr>
							<th>Action</th>
							<th>Visitor Name</th>
							<th>Visitor Phone</th>
							<th>Date of Birth</th>
							<th>Email ID</th>
							<th>Visitor Company</th>
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

									<td>{value.visitorname}</td>
									<td>{value.visitorphone}</td>
									<td>{value.dob}</td>
									<td>{value.emailid}</td>
									<td>{value.visitorcompany}</td>
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
					<Modal.Title style={{ textAlign: "center" }}>
						New Representative
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Row style={{ marginBottom: "1.2rem" }}>
							<Col>
								<Form.Label>Visitor Company</Form.Label>
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
								<Form.Label>Visitor Type</Form.Label>
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
								<Form.Label>Visitor Name</Form.Label>
								<Form.Control className="formfield" placeholder="Enter Name" />
							</Col>
						</Row>
						<Row style={{ marginBottom: "1.2rem" }}>
							<Col>
								<div className="m-2">
									<Form.Label></Form.Label>
									<button className=" formbtn">
										<Form.Control className="d-none" type="file" />
										Upload Photo
									</button>
									<Form.Label className="mx-3">Choose file </Form.Label>
								</div>
							</Col>
							<Col>
								<Form.Label>Visitor Phone</Form.Label>
								<Form.Control className="formfield" placeholder="123456789" />
							</Col>
							<Col>
								<Form.Label>Email ID</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
						</Row>
						<Row style={{ marginBottom: "1.2rem" }}>
							<Col>
								<Form.Label>Visitor No.</Form.Label>
								<Form.Control className="formfield" placeholder="Enter No." />
							</Col>
							<Col>
								<Form.Label>License No.</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<Form.Label>License Expiry date</Form.Label>
								<Form.Control className="formfield" placeholder="11/12/2024" />
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
						Cancle
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
};

export default Visitors;
