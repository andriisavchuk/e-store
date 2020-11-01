const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      validate: {
        validator: validator.isEmail,
        message: 'EMAIL_IS_NOT_VALID',
      },
      lowercase: true,
      unique: true,
      require: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    verification: {
      type: String,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    urlGitHub: {
      type: String,
      validate: {
        validator(v) {
          return v === '' ? true : validator.isUrl(v);
        },
        message: 'NOT_A_VALID_URL',
      },
      lowercase: true,
    },
    loginAttempts: {
      type: Number,
      default: 0,
      select: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model('User', UserSchema);
