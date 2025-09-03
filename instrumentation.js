import { connectIt } from "./src/app/db/db";

export async function register() {
  await connectIt();
  console.log("✅ MongoDB connected in instrumentation hook");
}
