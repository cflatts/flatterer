import { Schema, model, connect } from "mongoose";

// This is a private message sent from one user to another
interface ICompliment {
    sender: string;
    receiver: string;
    text: string;
    readTime: string;
    sentTime: string;
}

// This is a publically visible message sent from one user to another
interface IFlatter {
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

const Compliment = model<ICompliment>("Compliment", complimentSchema);
const Flatter = model<IFlatter>("Flatter", flatterSchema);
const User = model<IUser>("User", userSchema);

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

async function run() {
    await connect("mongodb://127.0.0.1:27017/test");
};

run().catch(err => console.log(err));