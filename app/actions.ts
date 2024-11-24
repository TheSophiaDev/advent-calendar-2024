"use server";

import client from "@/lib/mongodb";

export async function testDatabaseConnection() {
  let isConnected = false;
  try {
    const mongoClient = await client.connect();
    // Send a ping to confirm a successful connection
    await mongoClient.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    ); // because this is a server action, the console.log will be outputted to your terminal not in the browser
    return !isConnected;
  } catch (e) {
    console.error(e);
    return isConnected;
  }
}

export async function readDatasetForDay(day: number): Promise<any | null> {
  // connect to MongoDB
  const mongoClient = await client.connect();
  // get the dataset
  return await mongoClient
    .db("advent-calendar-2024")
    .collection("advent-calendar-2024")
    .findOne({ day: day });
}
