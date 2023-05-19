const express = require("express");
const router = express.Router();
const Event = require("../models/Events");

// Create event
router.post("/", async (req, res) => {
  try {
    const eventData = req.body;
    const event = await Event.create(eventData);
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// get one event
// Assuming you have set up your Express server and connected to your MongoDB database

router.get("/:id", async (req, res) => {
  try {
    const eventId = req.params.id;

    // Retrieve the event data from your MongoDB database based on the eventId
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

// Read events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update event
router.put("/:id", async (req, res) => {
  try {
    const eventId = req.params.id;
    const eventData = req.body;
    const event = await Event.findByIdAndUpdate(eventId, eventData, {
      new: true,
    });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete event
router.delete("/:id", async (req, res) => {
  try {
    const eventId = req.params.id;
    await Event.findByIdAndDelete(eventId);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports.EventRouter = router;
