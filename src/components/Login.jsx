import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function InsuranceForm() {
  return (
    <div className="container mt-4">
      <Form>
        <div className="d-flex gap-4">
          <Form.Group className="mb-3 flex-grow-1" controlId="formPolicyName">
            <Form.Label>Insurance Policy Name</Form.Label>
            <Form.Control
              as="input"
              list="policy_name"
              placeholder="Select your policy name"
              name="policy_name"
            />
            <datalist id="policy_name">
              <option value="Life Insurance" />
              <option value="Health Insurance" />
              <option value="Car Insurance" />
              <option value="Travel Insurance" />
              <option value="Home Insurance" />
            </datalist>
          </Form.Group>

          <Form.Group
            className="mb-3 flex-grow-1"
            controlId="formInsuranceType"
          >
            <Form.Label>Insurance Type</Form.Label>
            <Form.Control
              as="input"
              list="insurance_type"
              placeholder="Select your insurance type"
              name="insurance_type"
            />
            <datalist id="insurance_type">
              <option value="Comprehensive" />
              <option value="Third Party" />
              <option value="Individual" />
              <option value="Group" />
              <option value="Critical Illness" />
            </datalist>
          </Form.Group>
        </div>
        <div className="d-flex gap-4">
          <Form.Group
            className="mb-3 flex-grow-1"
            controlId="formInsuranceType"
          >
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="input"
              list="category"
              placeholder="Select your category"
              name="category"
            />
            <datalist id="category">
              <option value="Comprehensive" />
              <option value="Third Party" />
              <option value="Individual" />
              <option value="Group" />
              <option value="Critical Illness" />
            </datalist>
          </Form.Group>

          <Form.Group className="mb-3 flex-grow-1" controlId="formBasicEmail">
            <Form.Label>Premium Amount</Form.Label>
            <Form.Control type="text" name="premium_Amount" readOnly />
          </Form.Group>
        </div>
        <div className="d-flex gap-4">
          <Form.Group className="mb-3 flex-grow-1" controlId="formBasicEmail">
            <Form.Label>Duration</Form.Label>
            <Form.Control type="text" name="duration" readOnly />
          </Form.Group>

          <Form.Group className="mb-3 flex-grow-1" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" name="phone" />
          </Form.Group>
        </div>

        <h2>Nominee Information</h2>

        <div className="d-flex gap-4">
          <Form.Group className="mb-3 flex-grow-1" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="nominee_name" />
          </Form.Group>

          <Form.Group className="mb-3 flex-grow-1" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" name="phone_nominee" />
          </Form.Group>
        </div>
        <div className="d-flex gap-4">
          <Form.Group className="mb-3 flex-grow-1" controlId="formBasicEmail">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control type="date" name="date_of_birth" />
          </Form.Group>

          <Form.Group
            className="mb-3 flex-grow-1"
            controlId="formInsuranceType"
          >
            <Form.Label>Id Type</Form.Label>
            <Form.Control
              as="input"
              list="id_type"
              placeholder="Select your id_type"
              name="id_type"
            />
            <datalist id="id_type">
              <option value="Comprehensive" />
              <option value="Third Party" />
              <option value="Individual" />
              <option value="Group" />
              <option value="Critical Illness" />
            </datalist>
          </Form.Group>
        </div>
        <div className="d-flex gap-4">
          <Form.Group className="mb-3 flex-grow-1" controlId="formBasicEmail">
            <Form.Label>Main ID Number</Form.Label>
            <Form.Control type="text" name="main_id_number" />
          </Form.Group>

          <Form.Group
            className="mb-3 flex-grow-1"
            controlId="formInsuranceType"
          >
            <Form.Label>Relation</Form.Label>
            <Form.Control
              as="input"
              list="realation"
              placeholder="Select your realation"
              name="realation"
            />
            <datalist id="realation">
              <option value="Comprehensive" />
              <option value="Third Party" />
              <option value="Individual" />
              <option value="Group" />
              <option value="Critical Illness" />
            </datalist>
          </Form.Group>
        </div>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default InsuranceForm;
