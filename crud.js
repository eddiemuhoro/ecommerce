export const createOne = (model) => (req, res) => {

  try {
    const doc = model.create(req.body);
    if (!doc) {
      throw new Error("Document has not been created");
    }

    res.status(200).send({ message: "Document has been created" });
  } catch (e) {
    res, status(500).send({ message: e.message });
  }
};

export const getOne = (model) => (req, res) => {
  try {
    const doc = model.findById(req.params.id).exec();
    if (!doc) {
      throw new Error("Document has not been created");
    }

    res.status(200).send({ data: doc });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

export const getMany = (model) => async(req, res) => {
  try {
    const docs = await model.find().exec();

    if (!docs) {
      throw new Error("Document has not been created");
    }
    res.status(200).send( docs );
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

export const updateOne = (model) => async(req, res) => {
  try {
    const update = await model.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    if (!update) {
      throw new Error("Document has not been updated");
    }
    res.status(200).send({ data: update });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

export const deleteOne = (model) => async(req, res) => {
  try {
    const deleted = await model.findOneAndDelete({ _id: req.params.id });
    if (!deleted) {
      throw new Error("Document has not been updated");
    }
    res.status(200).send({ data: deleted });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

export const crudController = (model) => ({
  getOne: getOne(model),
  getMany: getMany(model),
  createOne: createOne(model),
  updateOne: updateOne(model),
  deleteOne: deleteOne(model),
});
