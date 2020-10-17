import express from 'express';
import { getRepository } from 'typeorm';
import Orphanages from './models/Orphanages';

import './database/connection';

const app = express();
app.use(express.json());

app.post('/orphanages', async (req, res) => {
   const { name, latitude, longitude, about, instructions, opening_hours, open_on_weekends } = req.body;

   const orphanagesRepository = getRepository(Orphanages);
   const orphanage = orphanagesRepository.create({
      name, latitude, longitude, about, instructions, opening_hours, open_on_weekends
   });

   await orphanagesRepository.save(orphanage);
   return res.json();
});


app.listen(3333);