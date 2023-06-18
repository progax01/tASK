import { Container, Row, Col, Form } from "react-bootstrap";
import React from "react";
import { Modal, Button } from "react-bootstrap";

const data = [
	{
		id: 1,
		selected: false,
		date: "",
		shift:"",
		totalcw:"",
		actualcw:"",
		site:"",
	
	},
	{
		id: 1,
		selected: false,
		date: "",
		shift:"",
		totalcw:"",
		actualcw:"",
		site:"",
	
	},

	{
		id: 1,
		selected: false,
		date: "",
		shift:"",
		totalcw:"",
		actualcw:"",
		site:"",
	
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

const DailyCWRequirement = () => {
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
							<th> Date</th>
							<th>Shift</th>
							<th>Total CW Reduired</th>
							<th>Department</th>
							<th>Member</th>
							<th>Canteen Rule</th>
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
									<td>{value.shift}</td>

									<td>{value.totalcw}</td>
									<td>{value.actualcw}</td>
									<td>{value.site}</td>
									<td></td>

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

export default DailyCWRequirement;
