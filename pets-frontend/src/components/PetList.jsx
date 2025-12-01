import { useState, useEffect } from "react";
import { api } from "../api";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Modal,
} from "@mui/material";
import PetForm from "./PetForm.jsx";

export default function PetList() {
  const [pets, setPets] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editPet, setEditPet] = useState(null);

  const loadPets = async () => {
    const res = await api.get("/pets");
    setPets(res.data.data);
  };

  useEffect(() => {
    loadPets();
  }, []);

  const handleDelete = async (documentId) => {
    if (confirm("Are you sure you want to delete this pet?")) {
      await api.delete(`/pets/${documentId}`);
      loadPets();
    }
  };

  const handleEdit = (pet) => {
    setEditPet(pet);
    setModalOpen(true);
  };

  const handleAdd = () => {
    setEditPet(null);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Pet List
      </Typography>

      <Button variant="contained" color="primary" onClick={handleAdd} sx={{ mb: 3 }}>
        Add New Pet
      </Button>

      <Grid container spacing={2}>
        {pets.map((pet) => (
          <Grid item xs={12} sm={6} md={4} key={pet.documentId}>
            <Card>
              <CardContent>
                <Typography variant="h6">{pet.name}</Typography>
                <Typography>Species: {pet.species}</Typography>
                <Typography>Age: {pet.age}</Typography>
                <Typography>Adopted: {pet.adopted ? "Yes" : "No"}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => handleEdit(pet)}>
                  Edit
                </Button>
                <Button size="small" color="error" onClick={() => handleDelete(pet.documentId)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal open={modalOpen} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
          }}
        >
          <PetForm
            pet={editPet}
            onClose={() => {
              handleClose();
              loadPets();
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
}