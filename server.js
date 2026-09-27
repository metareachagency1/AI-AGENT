// Ahmer AI Agent backend
// Node 18+ recommended.
// Set OPENAI_API_KEY as an environment variable before starting.
//
// npm install
// npm start

const express = require("express");
const OpenAI = require("openai");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/api/agent", async (req,res)=>{
  try{
    const task = String(req.body.task || "").trim();
    if(!task) return res.status(400).json({error:"Task is required."});

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5-mini",
      instructions:
        "You are Ahmer AI Agent. Help the user accomplish tasks. " +
        "Break complex requests into clear steps, be concise, and never claim to have performed an external action unless a connected tool actually performed it.",
      input: task
    });

    res.json({reply: response.output_text || "I could not generate a response."});
  }catch(err){
    console.error(err);
    res.status(500).json({error:"AI service error. Check the server and API key."});
  }
});

const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>console.log(`Ahmer AI Agent running on http://localhost:${PORT}`));
