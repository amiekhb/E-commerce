import { model, Schema } from "mongoose";

interface IUser {
  _id: Schema.Types.ObjectId;
  firstname: String;
  lastname: String;
  email: String;
  password: String;
  phoneNumber: String;
  role: String;
  profilde_img: String;
  address: String;
  created_at: Date;
  updated_at: Date;
}

const userSchema = new Schema<IUser>({
  firstname: {
    type: String,
    required: [true, "Hereglegchiin neree zaaval oruulna uu"],
  },
  lastname: {
    type: String,
    required: [true, "Hereglegchiin ovogoo zaaval oruulna uu"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Hereglegchiin mail haygaa zaaval oruulna uu"],
  },
  password: {
    type: String,
    minlength: [8, "Hamgiin bagadaa 8 temdegt oruulna uu"],
    required: [true, "Hereglegchiin nuuts ugee zaaval oruulna uu"],
  },
  phoneNumber: {
    typr: String,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },

  profilde_img: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const User = model("User", userSchema);

export default User;
