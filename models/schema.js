const { Schema, model, models } = require("mongoose");

const achievementsSchema = new Schema(
  {
    _id: {
      // github username
      type: String,
      required: true,
    },
    achievementsList: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.achievements || model("achievements", achievementsSchema);
