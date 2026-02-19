import { useState } from "react";
import styled from "styled-components";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";

const Wrap = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const DashboardPage = () => {
  const [name, setName] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <Wrap>
      <Modal open={openModal} title={name} onClose={() => setOpenModal(false)}>
        <h4>Modal has been opened!</h4>
      </Modal>

      <Card>
        <h1 style={{ marginTop: 0 }}>Medical Dashboard</h1>
        <p style={{ color: "rgba(231, 238, 252, 0.75)" }}>
          This is just a quick UI kit check.
        </p>

        <label>
          Patient name
          <div style={{ marginTop: 8 }} />
          <Input
            placeholder="Enter name here..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <Row>
          <Button
            variant="primary"
            onClick={() => alert(`Hello, ${name || "friend"}!`)}
          >
            Save
          </Button>
          <Button variant="secondary" onClick={() => setName("")}>
            Clear
          </Button>
          <Button variant="danger" onClick={() => alert("Delete action!")}>
            Delete
          </Button>

          <Button variant="primary" onClick={() => setOpenModal(true)}>
            OPEN MODAL
          </Button>
        </Row>
      </Card>
    </Wrap>
  );
};

export default DashboardPage;
