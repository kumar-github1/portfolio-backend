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
};

export const updateSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSkill = await Skill.findByIdAndUpdate(
            id,
            {
                name: req.body.name,
                description: req.body.description,
                icon: req.body.icon
            },
            { new: true }
        );

        if (!updatedSkill) {
            return res.status(404).json({ message: 'Skill not found' });
        }

        res.status(200).json(updatedSkill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSkill = await Skill.findByIdAndDelete(id);

        if (!deletedSkill) {
            return res.status(404).json({ message: 'Skill not found' });
        }

        res.status(200).json({ message: 'Skill deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};