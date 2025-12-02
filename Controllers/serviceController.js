import Service from "../Models/serviceModel.js"


// Creating a Service

export const createService = async (req, res) => {
  try {
    const newService = new Service(req.body); //req.body and assign in a single line.
    await newService.save();
    res
      .status(200)
      .json({ message: "Service Added Successfully", data: newService });
  } catch (error) {
    res
      .status(503)
      .json({ message: "Cannot Add the Service, Error in create Service" });
  }
};


//Get Services

export const getService = async (req, res) => {
  try {
    const getServices = await Service.find();
    res
      .status(200)
      .json({ message: "Service Retrieved Successfully", data: getServices });
  } catch (error) {
    res.status(503).json({
      message: "Cannot Retrieve Service, Error in get all Service",
    });
  }
};

//Update Service

export const updateService = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const { name,description, price } = req.body;
    const result = await Service.findByIdAndUpdate(
      { _id: serviceId },
      { name,description, price },
      { new: true }
    );
    if (!result) {
      return res.status(404).json({ message: "service Not Found" });
    }
    res
      .status(200)
      .json({ message: "service Updated Successfully", data: result });
  } catch (error) {
    res.status(503).json({
      message: "Cannot Update the service, Error in Update service",
    });
  }
};

// Delete service

export const deleteService = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const result = await Service.findByIdAndDelete({ _id: serviceId });
    if (!result) {
      return res.status(404).json({ message: "service Not Found" });
    }
    const prod = await Service.find();
    res
      .status(200)
      .json({ message: "Pservice Deleted Successfully", data: result });
  } catch (error) {
    res.status(503).json({
      message: "Cannot delete the service, Error in delete service",
    });
  }
};