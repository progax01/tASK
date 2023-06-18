import { Container, Row, Col, Form } from "react-bootstrap";
import React from "react";
import { Modal, Button } from "react-bootstrap";

const data = [
	{
		id: 1,
		selected: false,
		docno: 1234567890,
		date: "12/03/20323",
		carriedby: "Lorem ipsum dolor",
		outwardtype: "Lorem ipsum dolor",
		status: "Lorem ipsum dolor",
	},
	{
		id: 1,
		selected: false,
		docno: 1234567890,
		date: "12/03/20323",
		carriedby: "Lorem ipsum dolor",
		outwardtype: "Lorem ipsum dolor",
		status: "Lorem ipsum dolor",
	},
	{
		id: 1,
		selected: false,
		docno: 1234567890,
		date: "12/03/20323",
		carriedby: "Lorem ipsum dolor",
		outwardtype: "Lorem ipsum dolor",
		status: "Lorem ipsum dolor",
	},
	{
		id: 1,
		selected: false,
		docno: 1234567890,
		date: "12/03/20323",
		carriedby: "Lorem ipsum dolor",
		outwardtype: "Lorem ipsum dolor",
		status: "Lorem ipsum dolor",
	},
	{
		id: 1,
		selected: false,
		docno: 1234567890,
		date: "12/03/20323",
		carriedby: "Lorem ipsum dolor",
		outwardtype: "Lorem ipsum dolor",
		status: "Lorem ipsum dolor",
	},
	{
		id: 1,
		selected: false,
		docno: 1234567890,
		date: "12/03/20323",
		carriedby: "Lorem ipsum dolor",
		outwardtype: "Lorem ipsum dolor",
		status: "Lorem ipsum dolor",
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

const Outward = () => {
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
							<th>Document No.</th>
							<th>Date</th>

							<th>Carried By</th>
							<th>Outward Type</th>
							<th>Status</th>
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

									<td>{value.docno}</td>
									<td>{value.date}</td>

									<td>{value.carriedby}</td>
									<td>{value.outwardtype}</td>
									<td>{value.status}</td>
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
					<Modal.Title style={{ textAlign: "center" }}>New Outward</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Row style={{ marginBottom: "1.2rem" }}>
							<Col>
								<Form.Label>Date</Form.Label>
								<Form.Control className="formfield" placeholder="Enter " />
							</Col>
							<Col>
								<Form.Label>Requested By</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<Form.Label>Outward Type</Form.Label>
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
								<Form.Label>Documemnt No</Form.Label>
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
								<Form.Label>Carried</Form.Label>
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
								<Form.Label>Mobile No</Form.Label>
								<Form.Control className="formfield" placeholder="1234567890" />
							</Col>
						</Row>
					</Form>
					<div style={{ marginTop: "2rem" }}>
						<table>
							<thead>
								<tr>
									<th>Seq</th>
									<th>Description</th>
									<th>Code</th>
									<th>Qty</th>
									<th>Unit</th>
									<th>Rate</th>
									<th>Amount</th>
									<th>Serial/Batch No.</th>
									<th>Remark</th>
									<th>More details</th>
								</tr>
							</thead>
							<tbody>
								{/* {data.map((value, key) => {
							return (
								<tr key={key}>
									<td className="d-flex gap-2 h-100">
										<input type="checkbox" id="" />
										<img src="/images/edit.png" width={15} height={10} />
									</td> */}
								<tr>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</div>
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

export default Outward;
