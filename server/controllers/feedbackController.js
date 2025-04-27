import Feedback from "../models/feedback.js";


// POST /feedback
export const createFeedback = async (req, res) => {
    try {
        const { userName, email, feedbackText, category } = req.body;

        if (!userName || !email || !feedbackText) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const feedback = new Feedback({
            userName,
            email,
            feedbackText,
            category,
        });

        const savedFeedback = await feedback.save();
        res.status(201).json(savedFeedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET /feedback
export const getAllFeedback = async (req, res) => {
    try {
        const { category, userName, sortBy = 'createdAt', order = 'desc', page = '1',
            limit = '10', } = req.query;

        const filter = {};

        console.log(req.query)

        if (category) {
            filter.category = category;
        }
        if (userName) {

            filter['$or'] = [
                { "userName": { $regex: new RegExp(userName, 'i') } },
                { "feedbackText": { $regex: new RegExp(userName, 'i') } },
                { "name": { $regex: new RegExp(userName, 'i') } },
            ]

        }

        const pageNumber = parseInt(page);
        const limitNumber = parseInt(limit);
        const skip = (pageNumber - 1) * limitNumber;


        const feedbacks = await Feedback.find(filter)
            .sort({ [sortBy]: order === 'asc' ? 1 : -1 }).skip(skip)
            .limit(limitNumber);

        const totalCount = await Feedback.countDocuments(filter);

        // Analytics: feedback count grouped by category
        const categoryCounts = await Feedback.aggregate([
            { $match: filter },
            { $group: { _id: '$category', count: { $sum: 1 } } },
        ]);

        res.status(200).json({ feedbacks, totalCount, categoryCounts });
    } catch (error) {

        res.status(500).json({ message: 'Server error' });
    }
};
