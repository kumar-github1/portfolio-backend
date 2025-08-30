import Contact from '../models/Contact.js'

export const getContact = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (err) {
        res.status(500).json({ message: err })
    }
}

export const createContact = async (req, res) => {
    try {
        const contact = new Contact({
            name: req.body.name,
            phone: req.body.phone,
            mail: req.body.mail,
            description: req.body.description
        });
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (err) {
        res.status(400).json({ message: err })
    }
}