const Driver = require('../models/driver');

async function getById (id, res) {
  try {
    let entity = await Driver.findById(id);
    if (entity) {
      return entity;
    }
    res.status(204).json({ message: `There isn't a driver with the id: ${id}` }).end();
  } catch (err) {
    res.status(500).json({ message: err.message }).end();
  }
}

async function getAllDrivers (req, res) {
  try {
    let query = {};
    query[req.query.filter] = req.query.value;
    let drivers = await Driver.find(query);
    drivers = drivers.map((driver) => driver.view());
    res.json({ data: drivers });
  } catch (err) {
    res.status(500).json({ message: err.message }).end();
  }
}

async function getDriver (req, res) {
  try {
    res.json(await getById(req.params.id, res));
  } catch (err) {
    res.status(500).json({ message: err.message }).end();
  }
}

async function createDriver (req, res) {
  try {
    const driver = new Driver(req.body);
    await driver.save();
    res.status(201).json(driver);
  } catch (err) {
    res.status(500).json({ message: err.message }).end();
  }
}

async function updateDriver (req, res) {
  try {
    let driver = await getById(req.params.id, res);
    await Object.assign(driver, req.body).save();
    res.json(driver);
  } catch (err) {
    res.status(500).json({ message: err.message }).end();
  }
}

module.exports = { getAllDrivers, getDriver, createDriver, updateDriver }