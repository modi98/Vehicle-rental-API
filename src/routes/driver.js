const express = require('express');
const bodymen = require('bodymen');
const { schema } = require('../models/driver');
const router = express.Router();
const { age, first_name, last_name, driver_license } = schema.tree;
const { getAllDrivers, getDriver, createDriver, updateDriver, assignVehicle, endRental } = require('../controllers/driver');

/**
 * @api {get} /drivers
 * @apiDescription Gets all drivers
 */
router.get('/',
  getAllDrivers
);

/**
 * @api {get} /drivers/:id
 * @apiDescription Gets driver by id
 */
router.get('/:id',
  getDriver
);

/**
 * @api {get} /drivers/:driverId/vehicles/:vehicleId
 * @apiDescription Assigns selected vehicle to driver (starts rent)
 */
router.get('/:driverId/vehicles/:vehicleId',
  assignVehicle
);

/**
 * @api {get} /drivers/:driverId/endRental
 * @apiDescription Removes assigned vehicle to user and adds it to previous rentals
 */
router.get('/:driverId/endRental',
  endRental
);

/**
 * @api {post} /drivers
 * @param {Number} age
 * @param {String} first_name
 * @param {String} last_name
 * @param {String} driver_license
 * @apiDescription Creates new driver
 */
router.post('/',
  bodymen.middleware({ age, first_name, last_name, driver_license }),
  createDriver
);

/**
 * @api {put} /drivers/:id
 * @param {Number} age
 * @param {String} first_name
 * @param {String} last_name
 * @param {String} driver_license
 * @apiDescription Updates driver by id
 */
router.put('/:id',
  bodymen.middleware({ age, first_name, last_name, driver_license }),
  updateDriver
);

module.exports = router;
