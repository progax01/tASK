import { Container, Row, Col, Form } from "react-bootstrap";
import React from "react";
import { Modal, Button } from "react-bootstrap";

const data = [
	{
		id: 1,
		selected: false,
		worker: "Vasant Naik - 224455",
		contractor:"Lorem ipsum dolor sit amet consectetur.",
		accesscard: 123456789,
		issuedate: "30/05/2023",
		validfrom: "31/05/23",
	},
	{
		id: 1,
		selected: false,
		worker: "Vasant Naik - 224455",
		contractor:"Lorem ipsum dolor sit amet consectetur.",
		accesscard: 123456789,
		issuedate: "30/05/2023",
		validfrom: "31/05/23",
	},
	{
		id: 1,
		selected: false,
		worker: "Vasant Naik - 224455",
		contractor:"Lorem ipsum dolor sit amet consectetur.",
		accesscard: 123456789,
		issuedate: "30/05/2023",
		validfrom: "31/05/23",
	},
	{
		id: 1,
		selected: false,
		worker: "Vasant Naik - 224455",
		contractor:"Lorem ipsum dolor sit amet consectetur.",
		accesscard: 123456789,
		issuedate: "30/05/2023",
		validfrom: "31/05/23",
	},
	{
		id: 1,
		selected: false,
		worker: "Vasant Naik - 224455",
		contractor:"Lorem ipsum dolor sit amet consectetur.",
		accesscard: 123456789,
		issuedate: "30/05/2023",
		validfrom: "31/05/23",
	},
	{
		id: 1,
		selected: false,
		worker: "Vasant Naik - 224455",
		contractor:"Lorem ipsum dolor sit amet consectetur.",
		accesscard: 123456789,
		issuedate: "30/05/2023",
		validfrom: "31/05/23",
	},
	{
		id: 1,
		selected: false,
		worker: "Vasant Naik - 224455",
		contractor:"Lorem ipsum dolor sit amet consectetur.",
		accesscard: 123456789,
		issuedate: "30/05/2023",
		validfrom: "31/05/23",
	},
	{
		id: 1,
		selected: false,
		worker: "Vasant Naik - 224455",
		contractor:"Lorem ipsum dolor sit amet consectetur.",
		accesscard: 123456789,
		issuedate: "30/05/2023",
		validfrom: "31/05/23",
	},
	{
		id: 1,
		selected: false,
		worker: "Vasant Naik - 224455",
		contractor:"Lorem ipsum dolor sit amet consectetur.",
		accesscard: 123456789,
		issuedate: "30/05/2023",
		validfrom: "31/05/23",
	},
	{
		id: 1,
		selected: false,
		worker: "Vasant Naik - 224455",
		contractor:"Lorem ipsum dolor sit amet consectetur.",
		accesscard: 123456789,
		issuedate: "30/05/2023",
		validfrom: "31/05/23",
	},
];

const WorkerCard = () => {
	const [showModal, setShowModal] = React.useState(false);

	return (
		<Container fluid>
			<Row>
				<div className="outer-box">
					<div className="inner-box" >
						+ New
					</div>
				</div>
			</Row>

			<div style={{ marginTop: "2rem" }}>
				<table>
					<thead>
						<tr>
							<th>Action</th>
							<th>Worker</th>
							<th>Contractor</th>
							<th>Access Card No</th>
							<th>Issue Date</th>
							<th>Valid From</th>
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

									<td>{value.worker}</td>
									<td>{value.contractor}</td>
									<td>{value.accesscard}</td>
									<td>{value.issuedate}</td>
									<td>{value.validfrom}</td>

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
						New Menu Definition
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Row style={{ marginBottom: "1.2rem" }}>
							<Col>
								<Form.Label>Menu Name</Form.Label>
								<Form.Control className="formfield" placeholder="Enter " />
							</Col>
							<Col>
								<Form.Label>Menu Item</Form.Label>
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
								<Form.Label>Canteen</Form.Label>
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
								<Form.Label>Menu Items</Form.Label>
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
								<Form.Label>Color Code</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
						</Row>
					</Form>
				</Modal.Body>
				<Modal.Footer style={{ justifyContent: "center", gap: "20px" }}>
					<Button className="formbtn" onClick={() => setShowModal(false)}>
						Save
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

export default WorkerCard;
