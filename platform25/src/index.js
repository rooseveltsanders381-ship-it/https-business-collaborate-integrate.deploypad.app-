import express from "express";
import { createClient } from "@supabase/supabase-js";

const app = express();
const port = process.env.PORT || 3000;

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

let supabase = null;
if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

// Middleware
app.use(express.json());

// Health check endpoint
app.get("/", (req, res) => {
  res.json({
    status: "platform25 running ✅",
    supabaseConnected: supabase !== null
  });
});

// Supabase connection test endpoint
app.get("/health/db", async (req, res) => {
  if (!supabase) {
    return res.status(503).json({ 
      error: "Supabase not configured - missing SUPABASE_URL or SUPABASE_KEY" 
    });
  }
  
  try {
    const { data, error } = await supabase
      .from("information_schema.tables")
      .select("table_name")
      .limit(1);
    
    if (error) throw error;
    res.json({ status: "database connected ✅", tables_accessible: true });
  } catch (err) {
    res.status(503).json({ 
      error: "Database connection failed",
      message: err.message 
    });
  }
});

// Example: Query endpoint (replace with your actual table)
app.get("/api/data", async (req, res) => {
  if (!supabase) {
    return res.status(503).json({ error: "Supabase not configured" });
  }
  
  try {
    // Replace 'your_table' with actual table name
    const { data, error } = await supabase
      .from("your_table")
      .select("*")
      .limit(10);
    
    if (error) throw error;
    res.json({ data, count: data?.length || 0 });
  } catch (err) {
    res.status(500).json({ 
      error: "Failed to fetch data",
      message: err.message 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ 
    error: "Internal server error",
    message: err.message 
  });
});

app.listen(port, () => {
  console.log(`platform25 running on port ${port}`);
  if (supabase) {
    console.log("Supabase client initialized");
  } else {
    console.warn("Warning: Supabase not configured (SUPABASE_URL or SUPABASE_KEY missing)");
  }
});
