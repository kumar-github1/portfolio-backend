import Skill from "../models/Skill.js";

export const getSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.status(200).json(skills);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};

export const createSkills = async (req, res) => {
    try {
        const skill = new Skill({
            name: req.body.name,
            description: req.body.description,
            icon: req.body.icon
        })

        const newSkill = await skill.save();
        res.status(201).json(newSkill);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}