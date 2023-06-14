import { Schema, models, model } from "mongoose";

const ProfileSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    VendorName: {
        type: String,
        required: [true, "Vendor Name is required"]
    },

    BankAccountNo: {
        type: Number,
        required: [true, "Bank Account No. is required"]
    },

    BankName: {
        type: String,
        required: [true, "Bank Name is required"]
    },

    adl1: {
        type: String,
        required: [true, "Address line 1 is required"]
    },

    adl2: {
        type: String,
        required: [true, "Address line 2 is required"]
    },

    city: {
        type: String,
        required: [true, "City is required"]
    },

    country: {
        type: String,
        required: [true, "Country is required"]
    },

    zipCode: {
        type: String,
        required: [true, "Zip Code is required"]
    }
})

const VendorProfile = models.Profile || model('Profile', ProfileSchema);

export default VendorProfile;