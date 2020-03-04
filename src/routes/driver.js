const express = require('express');
const bodymen = require('bodymen');
const { schema } = require('../models/driver');
const router = express.Router();
const { age, first_name, last_name, driver_license } = schema.tree;
const { getAllDrivers, getDriver, createDriver, updateDriver } = require('../controllers/driver');

/**
 * @api {get} /drivers
 */
router.get('/',
  getAllDrivers
);

/**
 * @api {get} /drivers/:id
 */
router.get('/:id',
  getDriver
);

/**
 * @api {post} /drivers
 * @param {Number} age
 * @param {String} first_name
 * @param {String} last_name
 * @param {String} driver_license
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
 */
router.put('/:id',
  updateDriver
);

module.exports = router;
