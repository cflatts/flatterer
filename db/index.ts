import { Schema, model, connect } from "mongoose";

interface ICompliment {
    sender: string;
    receiver: string;
}

const complimentSchema = new Schema<ICompliment>({
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
}, {
    // This sets the time as Unix time
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
});

const Compliment = model<ICompliment>("Compliment", complimentSchema);

run().catch(err => console.log(err));

async function run() {
    await connect("mongodb://127.0.0.1:27017/test");

    const compliment = new Compliment({
        sender: "sender",
        receiver: "receiver",
    });
    await compliment.save();

    console.log(compliment);
};