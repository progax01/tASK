import { Container, Row, Col, Form } from "react-bootstrap";
import React from "react";
import { Modal, Button } from "react-bootstrap";

const data = [
	{
		id: 1,
		selected: false,

		contractor: "A.S. Moloobhoy private limited ",
		blacklist: "No",
	},
	{
		id: 2,
		selected: false,
		contractor: "A.S. Moloobhoy private limited ",
		blacklist: "No",
	},
	{
		id: 3,
		selected: false,
		contractor: "A.S. Moloobhoy private limited ",
		blacklist: "No",
	},
	{
		id: 4,
		selected: false,
		contractor: "A.S. Moloobhoy private limited ",
		blacklist: "No",
	},
	{
		id: 5,
		selected: false,
		contractor: "A.S. Moloobhoy private limited ",
		blacklist: "No",
	},
	{
		id: 6,
		selected: false,
		contractor: "A.S. Moloobhoy private limited ",
		blacklist: "No",
	},
	{
		id: 6,
		selected: false,
		contractor: "A.S. Moloobhoy private limited ",
		blacklist: "No",
	},
	{
		id: 7,
		selected: false,
		contractor: "A.S. Moloobhoy private limited ",
		blacklist: "No",
	},
	{
		id: 8,
		selected: false,
		contractor: "A.S. Moloobhoy private limited ",
		blacklist: "No",
	},
];

const Contractor = () => {
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
							<th>Contractor Name</th>
							<th>Blacklisted</th>
						</tr>
					</thead>
					<tbody>
						{data.map((value, key) => {
							return (
								<tr key={key}>
									<td className="d-flex gap-1 h-100">
										<input type="checkbox" id="" />
										<img src="/images/edit.png" width={10} height={10} />
									</td>
									<td>{value.contractor}</td>
									<td>{value.blacklist}</td>
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
					<Modal.Title style={{ textAlign: "center" }}>
						New Contractor
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Row style={{ marginBottom: "1.2rem" }}>
							<Col>
								<Form.Label>Contractor name</Form.Label>
								<Form.Control className="formfield" placeholder="Enter Name" />
							</Col>
							<Col>
								<Form.Label>Q&A subsidy (%)</Form.Label>
								<Form.Control className="formfield" placeholder="00.00" />
							</Col>
							<Col></Col>
						</Row>
						<h5 style={{ textAlign: "center", padding: "1rem" }}>
							Contractor Address
						</h5>
						<Row style={{ marginBottom: ".8rem" }}>
							<Col>
								<Form.Label>Contact Person Name</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<Form.Label>Address</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<Form.Label>Mobile No</Form.Label>
								<Form.Control className="formfield" placeholder="Mobile no" />
							</Col>
						</Row>
						<Row style={{ marginBottom: "1.2rem" }}>
							<Col>
								<Form.Label>Country</Form.Label>
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
								<Form.Label>City</Form.Label>
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
								<Form.Label>Pin Code</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
						</Row>

						<Row style={{ marginBottom: ".8rem" }}>
							<Col>
								<Form.Label>State</Form.Label>
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
								<div className="m-4">
									<Form.Label></Form.Label>
									<button className=" formbtn">
										<Form.Control className="d-none" type="file" />
										Upload
									</button>
									<Form.Label className="mx-4">Choose file </Form.Label>
								</div>
							</Col>

							<Col className="mt-4 m-11">
								<Button variant="contained" className="clsbtn d-flx">
									Add
								</Button>
							</Col>
						</Row>
						<h5 style={{ textAlign: "center", padding: "1rem" }}>
							Contractor Document
						</h5>
						<Row style={{ marginBottom: "1.2rem" }}>
							<Col>
								<Form.Label>Document Name</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<Form.Label>Document Type</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<div className="m-4">
									<Form.Label></Form.Label>
									<button className=" formbtn">
										<Form.Control className="d-none" type="file" />
										Upload
									</button>
									<Form.Label className="mx-4">Choose file </Form.Label>
								</div>
							</Col>
						</Row>
						<h5 style={{ textAlign: "center", padding: "1rem" }}>
							User Defined Fields
						</h5>
						<Row style={{ marginBottom: "1.2rem" }}>
							<Col>
								<Form.Label>Contractor Insurance Validity</Form.Label>
								<Form.Control className="formfield" placeholder="06/06/2025" />
							</Col>
							<Col>
								<Form.Label>Remaining Day</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<Form.Label>From Date</Form.Label>
								<Form.Control className="formfield" placeholder="06/06/2025" />
							</Col>
							<Col>
								<Form.Label>TO Date</Form.Label>
								<Form.Control className="formfield" placeholder="06/06/2025" />
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

export default Contractor;
