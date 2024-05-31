const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    privlage: {
      type: String,
      required: true,
      default: "User",
    },
    mobile: {
      type: String,
      required: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamp: true,
  }
);

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

// Method to delete expired tokens from the user's tokens array
userSchema.methods.deleteExpiredTokens = async function () {
  const user = this;
  const currentTime = new Date().getTime();

  // Filter out expired tokens
  user.tokens = user.tokens.filter((tokenObj) => {
    const decodedToken = jwt.decode(tokenObj.token);
    return decodedToken.exp * 1000 >= currentTime;
  });

  // Save the updated user document
  await user.save();
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "08101555");

  // Check if token already exists
  const existingToken = user.tokens.find(
    (tokenObj) => tokenObj.token === token
  );
  if (existingToken) {
    return existingToken.token;
  }
  // Delete expired tokens
  await user.deleteExpiredTokens();
  // Add the new token
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// Method to find user by username and password
userSchema.statics.findByCredentials = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("Unable to login");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login");
  }
  return user;
};

// Middleware to hash password before saving
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});
const User = mongoose.model("User", userSchema);
module.exports = User;
