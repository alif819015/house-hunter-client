const houseSchema = new mongoose.Schema({
  name: String,
  address: String,
  city: String,
  bedrooms: Number,
  bathrooms: Number,
  roomSize: String,
  picture: String, 
  availabilityDate: Date,
  rentPerMonth: Number,
  phoneNumber: String,
  description: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
});
const House = mongoose.model("House", houseSchema);
