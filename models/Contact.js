import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        mail: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        }

    }
)

export default mongoose.model("Contact", contactSchema);