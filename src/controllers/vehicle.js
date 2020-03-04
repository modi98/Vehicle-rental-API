const Vehicle = require('../models/vehicle');

async function getById (id, res) {
  try {
    let entity = await Vehicle.findById(id);
    if (entity) {
      return entity;
    }
    res.status(204).json({ message: `There isn't a vehicle with the id: ${id}` }).end();
  } catch (err) {
    res.status(500).json({ message: err.message }).end();
  }
}

async function getAvailable (req, res) {
  try {
    let vehicles = await Vehicle.aggregate([
      {
        $match: { status: 'available' }
      },
      {
        $group: {
          _id: {
            model: '$model',
            year: '$year'
          },
          vehicles_available: { $push: { model: '$model', year: '$year', id: '$_id' } }
        }
      },
      {
        $project: {
          model: '$_id.model',
          year: '$_id.year',
          vehicles_available: 1
        }
      }
    ]);
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function createVehicle (req, res) {
  try {
    let vehicle = new Vehicle(req.body);
    res.status(201).json(await vehicle.save());
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { getAvailable, createVehicle, getById };