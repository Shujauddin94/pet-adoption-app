import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";
import { Typography, Box } from "@mui/material";

export default function PetDetail() {
  const { documentId } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const loadPet = async () => {
      const res = await api.get(`/pets/${documentId}`);
      setPet(res.data.data);
    };
    loadPet();
  }, [documentId]);

  if (!pet) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">{pet.name}</Typography>
      <Typography>Species: {pet.species}</Typography>
      <Typography>Age: {pet.age}</Typography>
      <Typography>Adopted: {pet.adopted ? "Yes" : "No"}</Typography>
    </Box>
  );
}