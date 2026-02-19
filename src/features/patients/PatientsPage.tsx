import type { Patient } from "./patient.types";
import useFetch from "../../hooks/useFetch";

const PatientsPage = () => {
  const {
    data: patients,
    error,
    loading,
  } = useFetch<Patient[]>("http://localhost:3001/patients");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h4>Patients Page</h4>
      {patients?.map((person) => {
        return <li key={person.id}>{person.name}</li>;
      })}
    </div>
  );
};

export default PatientsPage;
