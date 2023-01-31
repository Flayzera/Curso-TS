import { Negotiation } from "./models/NegotiationModel";
const negotiation = new Negotiation(new Date(), 10, 100);
console.log(negotiation.volume);
