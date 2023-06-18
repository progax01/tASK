import { Container, Row, Col, Form } from "react-bootstrap";
import React from "react";
import { Modal, Button } from "react-bootstrap";

const data = [
	{
		id: 1,
		selected: false,
		rulename: "Employess ",
		canteen: "Rojalin Hositlity Services",
	},
	{
		id: 1,
		selected: false,
		rulename: "Employess ",
		canteen: "Rojalin Hositlity Services",
	},
	{
		id: 1,
		selected: false,
		rulename: "Employess ",
		canteen: "Rojalin Hositlity Services",
	},
	{
		id: 1,
		selected: false,
		rulename: "Employess ",
		canteen: "Rojalin Hositlity Services",
	},
	{
		id: 1,
		selected: false,
		rulename: "Employess ",
		canteen: "Rojalin Hositlity Services",
	},
	{
		id: 1,
		selected: false,
		rulename: "Employess ",
		canteen: "Rojalin Hositlity Services",
	},
	{
		id:1,
	},
	{
		id:1,
	},
];

const CanteenRule = () => {
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
							<th>Rule Name</th>
							<th>Canteen</th>
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

									<td>{value.rulename}</td>
									<td>{value.canteen}</td>
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
						Canteen Rule
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Row style={{ marginBottom: "1.2rem" }}>
						<Col>
								<Form.Label>Rule Name</Form.Label>
								<Form.Control className="formfield" placeholder="Enter" />
							</Col>
						
							<Col>
								<Form.Label>Blood Group</Form.Label>
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
						
							<div className="otr mt-5" >
							<h6>Canteen Rule</h6>
							</div>
							<div className="otr mt-3" >
							<h6>Staff</h6>
							</div>
							<div className="otr mt-3" >
							<h6>Worker</h6>
							</div>
						
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

export default CanteenRule;
