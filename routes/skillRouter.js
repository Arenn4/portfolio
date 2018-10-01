const express = require('express');
const skillRouter = express.Router();
const skills = require('../models/skills')

//GET SKILLS
skillRouter.route('/')
    .get((req, res) => {
        skills.find((err, skill) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(skill)
        })
    })

module.exports = skillRouter