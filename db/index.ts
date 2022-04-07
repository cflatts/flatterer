import { Schema, model, connect } from "mongoose";

/**
 * INTERFACES
 */

// This is a private message sent from one user to another
interface ICompliment {
    sender: string;
    receiver: string;
    text: string;
    readTime: string;
    sentTime: string;
}

// This is a publically visible message sent from one user to another
interface IFlatter{
    sender: string;
    receiver: string;
    imitations: number;
    sweets: number;
    bs: number;
};

interface IUser {
    permanentName: string;
    nickname: string;
    email: string;
    password: string;
};

/**
 * SCHEMAS
 */
const complimentSchema = new Schema<ICompliment>({
    // FUTURE: change this to the ObjectID
    sender: { type: String, required: true },
    // FUTURE: change this to the ObjectID
    receiver: { type: String, required: true },
}, {
    timestamps: true,
})

const flatterSchema = new Schema<IFlatter>({
    // FUTURE: change this to the ObjectID
    sender: { type: String, required: true },
    // FUTURE: change this to the ObjectID
    receiver: { type: String, required: true },
    imitations: { type: Number, required: true, default: 0 },
    sweets: { type: Number, required: true, default: 0 },
    bs: { type: Number, required: true, default: 0 }
}, {
    timestamps: true,
});

const userSchema = new Schema<IUser>({
    permanentName: { type: String, required: true },
    nickname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true
})

/**
 * MODELS
 */
const Compliment = model<ICompliment>("Compliment", complimentSchema);
const Flatter = model<IFlatter>("Flatter", flatterSchema);
const User = model<IUser>("User", userSchema);

/**
 * CREATE FUNCTIONS
 */
async function createCompliment(comp: ICompliment) {
    const compliment = new Compliment(comp);
    await compliment.save();
}

async function createFlatter(flat: IFlatter) {
    const flatter = new Flatter(flat);
    await flatter.save();
}

async function createUser(u: IUser) {
    const user = new User(u);
    await user.save();
}

/**
 * READ FUNCTIONS
 */

async function findCompliment(comp) {
    await Compliment.findById(comp._id, (err, resp) => {
        console.log("ERROR", err);
        return resp;
    });
};

async function findFlatter(flat) {
    await Flatter.findById(flat._id, (err, resp) => {
        console.log("ERROR", err);
        return resp;
    });
};

async function findUser(u) {
    await User.findById(u._id, (err, resp) => {
        console.log("ERROR", err);
        return resp;
    });
};

/**
 * UPDATE FUNCTIONS
 */

async function updateCompliment(comp) {
    await Compliment.findByIdAndUpdate(comp._id, (err, resp) => {
        console.log("ERROR", err);
        return resp;
    });
};

async function updateFlatter(flat) {
    await Flatter.findByIdAndUpdate(flat._id, (err, resp) => {
        console.log("ERROR", err);
        return resp;
    });
};

async function updateUser(u) {
    await User.findByIdAndUpdate(u._id, (err, resp) => {
        console.log("ERR", err);
        return resp;
    });
};

/**
 * DELETE FUNCTIONS
 */

async function deleteCompliment(comp) {
    await Compliment.findByIdAndDelete(comp._id, (err, resp) => {
        console.log("ERR", err);
        return resp;
    });
};

async function deleteFlatter(flat) {
    await Flatter.findByIdAndDelete(flat._id, (err, resp) => {
        console.log("ERR", err);
        return resp;
    });
};

async function deleteUser(u) {
    await User.findByIdAndDelete(u._id, (err, resp) => {
        console.log("ERR", err);
        return resp;
    });
};

/**
 * INIT FUNCTION
 */
async function run() {
    await connect("mongodb://127.0.0.1:27017/test");
};

run().catch(err => console.log(err));