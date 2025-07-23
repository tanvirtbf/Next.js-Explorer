import mongoose, { Schema } from 'mongoose'

const Session = mongoose.models.Session || mongoose.model("Session", {
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

export default Session