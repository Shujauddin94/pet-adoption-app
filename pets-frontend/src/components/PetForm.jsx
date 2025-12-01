import { useState } from "react";
import { api } from "../api";
import { TextField, Button, FormControlLabel, Checkbox, Stack } from "@mui/material";

export default function PetForm({ pet, onClose }) {
  const [name, setName] = useState(pet?.name || "");
  const [species, setSpecies] = useState(pet?.species || "");
  const [age, setAge] = useState(pet?.age || "");
  const [adopted, setAdopted] = useState(pet?.adopted || false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { data: { name, species, age: Number(age), adopted } };

    if (pet) {
      // Edit
      await api.put(`/pets/${pet.documentId}`, payload);
    } else {
      // Add
      await api.post("/pets", payload);
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Species"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          required
        />
        <TextField
          label="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <FormControlLabel
          control={<Checkbox checked={adopted} onChange={(e) => setAdopted(e.target.checked)} />}
          label="Adopted"
        />
        <Button type="submit" variant="contained" color="primary">
          {pet ? "Update Pet" : "Add Pet"}
        </Button>
      </Stack>
    </form>
  );
}