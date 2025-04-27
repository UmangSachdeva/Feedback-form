import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        feedbackText: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            enum: ['suggestion', 'bug', 'feature', 'question', 'other'],
            default: 'Other',
        },
    },
    {
        timestamps: true, // adds createdAt and updatedAt
    }
);

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
