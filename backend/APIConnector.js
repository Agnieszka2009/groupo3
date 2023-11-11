import express from 'express';
import axios from 'axios';
const app = express();
const port = 3005;

app.use(express.json());

app.get('/',  (req, res) => {
  
  // const calendlyURL = 'https://calendly.com/borkowska-agnieszka2';
  const calendlyURL = 'https://calendly.com/event_types/user/me';
  res.redirect(calendlyURL);

  
});

app.listen(port, () => {
  console.log(`Servidor de proxy escuchando en el puerto ${port}`);
});
