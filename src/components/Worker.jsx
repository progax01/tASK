import { Container, Row, Col, Form, Accordion } from "react-bootstrap";
import React from "react";
import { Modal, Button } from "react-bootstrap";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";

const data = [
	{
		workercode: 123456,
		workername: "Ahamad Shirgonkar",
		mobile: 123456789,
		dob: 20 / 11 / 1980,
		workertyp: "Engineer",
	},
	{
		workercode: 123456,
		workername: "Ahamad Shirgonkar",
		mobile: 123456789,
		dob: 20 / 11 / 1980,
		workertyp: "Engineer",
	},
	{
		workercode: 123456,
		workername: "Ahamad Shirgonkar",
		mobile: 123456789,
		dob: 20 / 11 / 1980,
		workertyp: "Engineer",
	},
	{
		workercode: 123456,
		workername: "Ahamad Shirgonkar",
		mobile: 123456789,
		dob: 20 / 11 / 1980,
		workertyp: "Engineer",
	},
	{
		workercode: 123456,
		workername: "Ahamad Shirgonkar",
		mobile: 123456789,
		dob: 20 / 11 / 1980,
		workertyp: "Engineer",
	},
	{
		workercode: 123456,
		workername: "Ahamad Shirgonkar",
		mobile: 123456789,
		dob: 20 / 11 / 1980,
		workertyp: "Engineer",
	},
	{
		workercode: 123456,
		workername: "Ahamad Shirgonkar",
		mobile: 123456789,
		dob: 20 / 11 / 1980,
		workertyp: "Engineer",
	},
	{
		workercode: 123456,
		workername: "Ahamad Shirgonkar",
		mobile: 123456789,
		dob: 20 / 11 / 1980,
		workertyp: "Engineer",
	},
];

const Worker = () => {
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
							<th>Worker Code</th>
							<th>Worker Name</th>
							<th>Mobile No</th>
							<th>Date of Birth</th>
							<th>Worker Type</th>
						</tr>
					</thead>
					<tbody>
						{data.map((value, key) => {
							return (
								<tr key={key}>
									<td className="d-flex gap-1 h-100">
										<input type="checkbox" id="" />
										<img src="/images/edit.png" width={15} height={15} />
									</td>
									<td>{value.workercode}</td>
									<td>{value.workername}</td>
									<td>{value.mobile}</td>
									<td>{value.dob}</td>
									<td>{value.workertyp}</td>
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
					<Modal.Title>New Worker</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form className="p-3">
						<Row style={{ marginBottom: "1.2rem" }}>
							<Col>
								<Form.Label>Worker Code</Form.Label>
								<Form.Control className="formfield" placeholder="123456" />
							</Col>
							<Col>
								<Form.Label>Blood Group</Form.Label>
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
								<div className="m-3">
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
								<div className="m-3">
									<Form.Label></Form.Label>
									<button className=" formbtn">
										<Form.Control className="d-none" type="file" />
										Upload
									</button>
									<Form.Label className="mx-3">Choose file </Form.Label>
								</div>
							</Col>
							<Col>
								<Form.Label>Worker Name</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<Form.Label>Worker Type</Form.Label>
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
						<Row style={{ marginBottom: "1.2rem" }}>
						<Col>
								<Form.Label>Father Name</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<Form.Label>Contractor</Form.Label>
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
								<Form.Label>Gender</Form.Label>
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
						<Row style={{ marginBottom: "1.2rem" }}>
						
							<Col>
								<Form.Label>Mobile</Form.Label>
								<Form.Control className="formfield" placeholder="1234567890" />
							</Col>
							<Col>
								<Form.Label>Birth Date</Form.Label>
								<Form.Control className="formfield" placeholder="06/06/1983" />
							</Col>
							<Col>
								<Form.Label>Emergency Contact No.</Form.Label>
								<Form.Control className="formfield" placeholder="123654890" />
							</Col>
						</Row>
						<Row style={{ marginBottom: "1.2rem" }}>
							<Col>
								<Form.Label>National ID</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<Form.Label>Identity Mark</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<Form.Label>Vehical No.</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
						</Row>
						<Row style={{ marginBottom: "1.2rem" }}>
							<Col>
								<Form.Label>License No</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<Form.Label>License Expiry Date </Form.Label>
								<Form.Control className="formfield" placeholder="02/03/2025" />
							</Col>
							<div className="otr mt-5" >
							<h6>Local Address</h6>
							</div>
							<div className="otr mt-3" >
							<h6>Permanament Address</h6>
							</div>
							<div className="otr mt-3" >
							<h6>Qualification</h6>
							</div>
							<div className="otr mt-3" >
							<h6>Experience</h6>
							</div>
							<div className="otr mt-3" >
							<h6>Documents</h6>
							</div>
							
							
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

export default Worker;
