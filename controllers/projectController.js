import Project from '../models/Project.js';

// Get all projects
export const getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new project
export const createProject = async (req, res) => {
    try {
        const project = new Project({
            title: req.body.title,
            description: req.body.description,
            tech: req.body.tech,
            github: req.body.github,
            demo: req.body.demo
        });

        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};