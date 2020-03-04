const Vehicle = require('../models/vehicle');

async function getAvailable (req, res) {
  try {
    let vehicles = await Vehicle.aggregate([
      {
        $group: {
          _id: {
            model: '$model',
            year: '$year'
          },
          vehicles_available: { $sum: 1 }
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

module.exports = { getAvailable, createVehicle };