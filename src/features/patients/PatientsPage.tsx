import { useState, useEffect } from "react";
import type { Patient } from "./patient.types";

const PatientsPage = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>("");

  const fetchPatientsFromUrl = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:3001/patients");
      if (!res.ok) throw new Error(`API fetch failed. ${res.status}`);

      const data = await res.json();
      setPatients(data);
    } catch (err) {
      const message =
        err instanceof Error ? `${err.message}` : "Unknown error.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatientsFromUrl();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h4>Patients Page</h4>
      {patients.map((person) => {
        return <li key={person.id}>{person.name}</li>;
      })}
    </div>
  );
};

export default PatientsPage;
