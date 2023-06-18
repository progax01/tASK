import { Container, Row, Col, Form } from "react-bootstrap";
import React from "react";
import { Modal, Button } from "react-bootstrap";

const data = [
	{
		id: 1,
		selected: false,
		itemname: "34mm x 21 mtr wir rope steel with femish ",
		itemcode: "",
		unit: "MTR",
		description: "",
		inventoryitem: "No",
	},
	{
		id: 2,
		selected: false,
		itemname: "34mm x 21 mtr wir rope steel with femish ",
		itemcode: "",
		unit: "MTR",
		description: "",
		inventoryitem: "No",
	},
	{
		id: 3,
		selected: false,
		itemname: "34mm x 21 mtr wir rope steel with femish ",
		itemcode: "",
		unit: "MTR",
		description: "",
		inventoryitem: "No",
	},
	{
		id: 4,
		selected: false,
		itemname: "34mm x 21 mtr wir rope steel with femish ",
		itemcode: "",
		unit: "MTR",
		description: "",
		inventoryitem: "No",
	},
	{
		id: 5,
		selected: false,
		itemname: "34mm x 21 mtr wir rope steel with femish ",
		itemcode: "",
		unit: "MTR",
		description: "",
		inventoryitem: "No",
	},
	{
		id: 6,
		selected: false,
		itemname: "34mm x 21 mtr wir rope steel with femish ",
		itemcode: "",
		unit: "MTR",
		description: "",
		inventoryitem: "No",
	},
	{
		id: 6,
		selected: false,
		itemname: "34mm x 21 mtr wir rope steel with femish ",
		itemcode: "",
		unit: "MTR",
		description: "",
		inventoryitem: "No",
	},
	{
		id: 7,
		selected: false,
		itemname: "34mm x 21 mtr wir rope steel with femish ",
		itemcode: "",
		unit: "MTR",
		description: "",
		inventoryitem: "No",
	},
	{
		id: 8,
		selected: false,
		itemname: "34mm x 21 mtr wir rope steel with femish ",
		itemcode: "",
		unit: "MTR",
		description: "",
		inventoryitem: "No",
	},
];

const Item = () => {
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
							<th>Item Name</th>
							<th>Item Code</th>
							<th>Unit</th>
							<th>Description</th>
							<th>Email ID</th>
							<th>Inventory Item</th>
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

									<td>{value.itemname}</td>
									<td>{value.itemcode}</td>
									<td>{value.unit}</td>
									<td>{value.description}</td>
									<td>{value.inventoryitem}</td>
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
						New Item
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
					<Row style={{ marginBottom: "1.2rem" }}>
							<Col>
								<Form.Label>Item Name</Form.Label>
								<Form.Control className="formfield" placeholder="Enter " />
							</Col>
							<Col>
								<Form.Label>Item Code</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
							<Col>
								<Form.Label>Description</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
						</Row>
						<Row style={{ marginBottom: "1.2rem" }}>
							<Col>
								<Form.Label>Unit</Form.Label>
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
								<Form.Label>Item Rate</Form.Label>
								<Form.Control className="formfield" placeholder="Enter Name" />
							</Col>
							<Col>
								<Form.Label>Serial No</Form.Label>
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
								<Form.Label>Batch No</Form.Label>
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
								<Form.Label>Inventory Item</Form.Label>
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

export default Item;
