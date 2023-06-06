import Manager from "../schema/managerSchema.js";

export const addManager = async (req, res) => {
  const manager = req.body;
  const newManager = new Manager(manager);

  try {
    await newManager.save();
    res.status(201).json(newManager);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getManagers = async (req, res) => {
  try {
    const Managers = await Manager.find({});
    res.status(200).json(Managers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getManager = async (req, res) => {
  try {
    const matchedManager = await Manager.findById(req.params.id);
    // console.log(req.params.id);
    res.status(200).json(matchedManager);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const editManager = async (req, res) => {
  let manager = req.body;
  const editManager = new Manager(manager);
  try {
    await Manager.findByIdAndUpdate({ _id: req.params.id }, manager);
    res.status(201).json(editManager);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteManager = async (req, res) => {
  try {
    await Manager.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: `User Deleted Successfully` });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const searchManager = async (req, res) => {
  const  username  = req.body.username;
  console.log("Hello", username);
  try {
    const manager = await Manager.findOne({ username });
    
    if (manager) {
      res.status(200).json([manager]);
    } else {
      res.status(404).json({ message: "Manager not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
