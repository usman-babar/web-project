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


// export const editManager = async (req, res) => {
//   let manager = req.body;
//   const editManager = new Manager(manager);
//   try {
//     // await Manager.findByIdAndUpdate({ _id: req.params.id }, editManager);
//     await Manager.updateOne({ _id: req.params._id }, { $set: editManager }, { omitUndefined: true, upsert: false });
//     res.status(201).json(editManager);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };

export const editManager = async (req, res) => {
  let manager = req.body;
  console.log(req.body);
  try {
    const updatedManager = await Manager.findOneAndUpdate({ _id: req.params.id }, manager, { new: true });
    res.status(200).json(updatedManager);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};




export const deleteManager = async (req, res) => {
  let manager = req.body;
  const editManager = new Manager(manager);

  try {
    await Manager.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: `User Deleted Successfully` });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};