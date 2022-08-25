const AlDataSource = require("../models/alDataSource");
const AlDataSourceNew = require("../models/alDataSourceNew");
const AlTest = require("../models/alTest");
const FilterCopy = require("../models/filterCopy");
const Japan = require("../models/japan");
const PsfTest = require("../models/psfTestSurvey");
const UsersToAssign = require("../models/userstoassign");
const DataSource = require("../models/dataSource");
const CreateQuestion = require("../models/createQuestion");
const QuestionList = require("../models/questionList");
const Sheet = require("../models/sheet");
const SubmitMaySurvey = require("../models/submitMaySurvey");
const AssignData = require("../models/assignData");
const SurveyMay = require("../models/SurveyMay");
const User = require("../models/user");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const multer = require("multer");
const csv = require("csvtojson");
var path = require("path");
const CreateSurvey = require("../models/createSurvey");
const user = require("../models/user");
//AL DATA SOURCE
exports.AlDataSource = async (req, res) => {
  try {
    // Create
    var alDataSource = await new AlDataSource({
      name: req.body.name,
      email: req.body.email,
      order_id: req.body.order_id,
      ticket_no: req.body.ticket_no,
      mobile: req.body.mobile,
    });

    await alDataSource.save(alDataSource);
    return res.status(200).json("Added Successfully!");
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred.",
    });
  }
};

// Retrieve Total Documents from AL DATA SOURCE
exports.getAlDataSource = async (req, res) => {
  try {
    var data = await AlDataSource.find().count();
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//AL DATA SOURCE NEW
exports.AlDataSourceNew = async (req, res) => {
  try {
    // Create
    var alDataSourceNew = await new AlDataSourceNew({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      ticket_no: req.body.ticket_no,
      order_id: req.body.order_id,
      address: req.body.address,
    });

    await alDataSourceNew.save(alDataSourceNew);
    return res.status(200).json("Added Successfully!");
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred.",
    });
  }
};

// Retrieve Total Documents from AL DATA SOURCE NEW
exports.getAlDataSourceNew = async (req, res) => {
  try {
    var data = await AlDataSourceNew.find().count();
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//AL TEST
exports.AlTest = async (req, res) => {
  try {
    // Create
    var alTest = await new AlTest({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      order_id: req.body.order_id,
      dateorequest: req.body.dateorequest,
      ticket_no: req.body.ticket_no,
    });

    await alTest.save(alTest);
    return res.status(200).json("Added Successfully!");
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred.",
    });
  }
};

// Retrieve Total Documents from AL Test
exports.getAlTest = async (req, res) => {
  try {
    var data = await AlTest.find().count();
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};
//PSF TEST SURVEY
exports.PsfTestSurvey = async (req, res) => {
  try {
    // Create
    var psfTest = await new PsfTest({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      ticket_no: req.body.ticket_no,
      registration_no: req.body.registration_no,
      company_name: req.body.company_name,
    });

    await psfTest.save(psfTest);
    return res.status(200).json("Added Successfully!");
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred.",
    });
  }
};

// Retrieve Total Documents from PSF Test Survey
exports.getPsfTestSurvey = async (req, res) => {
  try {
    var data = await PsfTest.find().count();
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//JAPAN
exports.Japan = async (req, res) => {
  try {
    // Create
    var japan = await new Japan({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      ticket_no: req.body.ticket_no,
      vehicle_no: req.body.vehicle_no,
      state: req.body.state,
      city: req.body.city,
      company: req.body.company,
    });

    await japan.save(japan);
    return res.status(200).json("Added Successfully!");
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred.",
    });
  }
};

// Retrieve Total Documents from JAPAN
exports.getJapan = async (req, res) => {
  try {
    var data = await Japan.find().count();
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//Users
exports.UsersToAssign = async (req, res) => {
  try {
    // Create
    var usersToAssign = await new UsersToAssign({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
      usertype: req.body.usertype,
    });

    await usersToAssign.save(usersToAssign);
    return res.status(200).json("Added Successfully!");
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred.",
    });
  }
};

// Retrieve Total Documents from UsersToBeAssign
exports.getUsersToAssign = async (req, res) => {
  try {
    var data = await UsersToAssign.find();
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

// Retrieve Total Documents from Japan
exports.getFilterDataJapan = async (req, res) => {
  try {
    var data = await Japan.find();
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

// Retrieve Total Documents from AL test
exports.getFilterDataAlTest = async (req, res) => {
  try {
    var data = await AlTest.find();
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};
// Retrieve Total Documents from AL data source
exports.getFilterDataAlDataSource = async (req, res) => {
  try {
    var data = await AlDataSource.find();
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};
// Retrieve Total Documents from AL data source new
exports.getFilterDataAlDataSourceNew = async (req, res) => {
  try {
    var data = await AlDataSourceNew.find();
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};
// Retrieve Total Documents from Psf test survey
exports.getFilterDataPsfTest = async (req, res) => {
  try {
    var data = await PsfTest.find();
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//Retrieve The percentage of Documents from JAPAN
exports.getJapanPer = async (req, res) => {
  try {
    var prcnt = req.body.prcnt;
    var data = await Japan.find().count();
    var data1 = (data / 100) * prcnt;
    var name = req.body.name;
    var email = req.body.email;
    var ticket_no = req.body.ticket_no;
    var vehicle_no = req.body.vehicle_no;
    var company = req.body.company;
    var state = req.body.state;
    var city = req.body.city;
    var mobile = req.body.mobile;
    if (data1 < 1) {
      return res.status(200).json("0");
    } else if (data1 > 0) {
      var data2 = await Japan.find({
        $or: [
          { name: { $in: name } },
          { email: { $in: email } },
          { ticket_no: { $in: ticket_no } },
          { vehicle_no: { $in: vehicle_no } },
          { company: { $in: company } },
          { state: { $in: state } },
          { city: { $in: city } },
          { mobile: { $in: mobile } },
        ],
      }).limit(data1);
      //Truncating the collection before saving it to the database
      await FilterCopy.deleteMany({});
      for (let i = 0; i < data2.length; i++) {
        var filterCopy = await new FilterCopy({
          name: data2[i]["name"],
          email: data2[i]["email"],
          mobile: data2[i]["mobile"],
          ticket_no: data2[i]["ticket_no"],
          vehicle_no: data2[i]["vehicle_no"],
          state: data2[i]["state"],
          city: data2[i]["city"],
          company: data2[i]["company"],
        });

        await filterCopy.save(filterCopy);
      }
      return res.status(200).json(data2);
    }
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//To find range of data from database
exports.getRangeJapan = async (req, res) => {
  try {
    var min = req.body.min;
    var max = req.body.max;
    var name = req.body.name;
    var email = req.body.email;
    var ticket_no = req.body.ticket_no;
    var vehicle_no = req.body.vehicle_no;
    var company = req.body.company;
    var state = req.body.state;
    var city = req.body.city;
    var mobile = req.body.mobile;
    var data = await FilterCopy.find({
      $or: [
        { name: { $in: name } },
        { email: { $in: email } },
        { ticket_no: { $in: ticket_no } },
        { vehicle_no: { $in: vehicle_no } },
        { company: { $in: company } },
        { state: { $in: state } },
        { city: { $in: city } },
        { mobile: { $in: mobile } },
      ],
    })
      .skip(min)
      .limit(max);

    //Truncating the collection before saving it to the database
    await FilterCopy.deleteMany({});
    for (let i = 0; i < data.length; i++) {
      var filterCopy = await new FilterCopy({
        name: data[i]["name"],
        email: data[i]["email"],
        mobile: data[i]["mobile"],
        ticket_no: data[i]["ticket_no"],
        vehicle_no: data[i]["vehicle_no"],
        state: data[i]["state"],
        city: data[i]["city"],
        company: data[i]["company"],
      });
      await filterCopy.save(filterCopy);
    }
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//To find like data from database
exports.getLikeJapan = async (req, res) => {
  try {
    var name = req.body.name;
    var email = req.body.email;
    var data = await FilterCopy.find({
      $or: [{ name: { $regex: `${name}` } }, { email: { $regex: `${email}` } }],
    });

    //Truncating the collection before saving it to the database
    await FilterCopy.deleteMany({});
    for (let i = 0; i < data.length; i++) {
      var filterCopy = await new FilterCopy({
        name: data[i]["name"],
        email: data[i]["email"],
        mobile: data[i]["mobile"],
        ticket_no: data[i]["ticket_no"],
        vehicle_no: data[i]["vehicle_no"],
        state: data[i]["state"],
        city: data[i]["city"],
        company: data[i]["company"],
      });
      await filterCopy.save(filterCopy);
    }
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//Get Equal Data from Japan
// Retrieve Total Documents from Japan
exports.getEqualDataJapan = async (req, res) => {
  try {
    var data = await FilterCopy.find();
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//Get AL DATA SOURCE Percentage
exports.getAlDataPer = async (req, res) => {
  try {
    var prcnt = req.body.prcnt;
    var data = await AlDataSource.find().count();
    var data1 = (data / 100) * prcnt;
    var name = req.body.name;
    var order_id = req.body.order_id;
    var email = req.body.email;
    var ticket_no = req.body.ticket_no;
    var mobile = req.body.mobile;
    if (data1 < 1) {
      return res.status(200).json("0");
    } else if (data1 > 0) {
      var data2 = await AlDataSource.find({
        $or: [
          { name: { $in: name } },
          { email: { $in: email } },
          { ticket_no: { $in: ticket_no } },
          { order_id: { $in: order_id } },
          { mobile: { $in: mobile } },
        ],
      }).limit(data1);

      //Truncating the collection before saving it to the database
      await FilterCopy.deleteMany({});
      for (let i = 0; i < data2.length; i++) {
        var filterCopy = await new FilterCopy({
          name: data2[i]["name"],
          email: data2[i]["email"],
          mobile: data2[i]["mobile"],
          ticket_no: data2[i]["ticket_no"],
          order_id: data2[i]["order_id"],
        });
        await filterCopy.save(filterCopy);
      }
      return res.status(200).json(data2);
    }
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//To find range of data from database AL DATA SOURCE
exports.getRangeAlDataSource = async (req, res) => {
  try {
    var min = req.body.min;
    var max = req.body.max;
    var name = req.body.name;
    var order_id = req.body.order_id;
    var email = req.body.email;
    var ticket_no = req.body.ticket_no;
    var mobile = req.body.mobile;
    var data = await FilterCopy.find({
      $or: [
        { name: { $in: name } },
        { email: { $in: email } },
        { ticket_no: { $in: ticket_no } },
        { order_id: { $in: order_id } },
        { mobile: { $in: mobile } },
      ],
    })
      .skip(min)
      .limit(max);

    //Truncating the collection before saving it to the database
    await FilterCopy.deleteMany({});
    for (let i = 0; i < data.length; i++) {
      var filterCopy = await new FilterCopy({
        name: data[i]["name"],
        email: data[i]["email"],
        mobile: data[i]["mobile"],
        ticket_no: data[i]["ticket_no"],
        order_id: data[i]["order_id"],
      });
      await filterCopy.save(filterCopy);
    }
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//To find like data from database AL DATA SOURCE
exports.getLikeAlDataSource = async (req, res) => {
  try {
    var name = req.body.name;
    var email = req.body.email;
    var data = await FilterCopy.find({
      $or: [{ name: { $regex: name } }, { email: { $regex: email } }],
    });

    //Truncating the collection before saving it to the database
    await FilterCopy.deleteMany({});
    for (let i = 0; i < data.length; i++) {
      var filterCopy = await new FilterCopy({
        name: data[i]["name"],
        email: data[i]["email"],
        mobile: data[i]["mobile"],
        ticket_no: data[i]["ticket_no"],
        order_id: data[i]["order_id"],
      });
      await filterCopy.save(filterCopy);
    }
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//Get AL DATA SOURCE NEW Percentage
exports.getAlDataNewPer = async (req, res) => {
  try {
    var prcnt = req.body.prcnt;
    var data = await AlDataSourceNew.find().count();
    var data1 = (data / 100) * prcnt;
    var name = req.body.name;
    var order_id = req.body.order_id;
    var email = req.body.email;
    var address = req.body.address;
    var ticket_no = req.body.ticket_no;
    var mobile = req.body.mobile;
    if (data1 < 1) {
      return res.status(200).json("0");
    } else if (data1 > 0) {
      var data2 = await AlDataSourceNew.find({
        $or: [
          { name: { $in: name } },
          { email: { $in: email } },
          { ticket_no: { $in: ticket_no } },
          { order_id: { $in: order_id } },
          { mobile: { $in: mobile } },
          { address: { $in: address } },
        ],
      }).limit(data1);

      //Truncating the collection before saving it to the database
      await FilterCopy.deleteMany({});
      for (let i = 0; i < data2.length; i++) {
        var filterCopy = await new FilterCopy({
          name: data2[i]["name"],
          email: data2[i]["email"],
          mobile: data2[i]["mobile"],
          ticket_no: data2[i]["ticket_no"],
          order_id: data2[i]["order_id"],
          address: data2[i]["address"],
        });
        await filterCopy.save(filterCopy);
      }
      return res.status(200).json(data2);
    }
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//To find range of data from database AL DATA SOURCE NEW
exports.getRangeAlDataSourceNew = async (req, res) => {
  try {
    var min = req.body.min;
    var max = req.body.max;
    var name = req.body.name;
    var order_id = req.body.order_id;
    var email = req.body.email;
    var address = req.body.address;
    var ticket_no = req.body.ticket_no;
    var mobile = req.body.mobile;
    var data = await FilterCopy.find({
      $or: [
        { name: { $in: name } },
        { email: { $in: email } },
        { ticket_no: { $in: ticket_no } },
        { order_id: { $in: order_id } },
        { mobile: { $in: mobile } },
        { address: { $in: address } },
      ],
    })
      .skip(min)
      .limit(max);

    //Truncating the collection before saving it to the database
    await FilterCopy.deleteMany({});
    for (let i = 0; i < data.length; i++) {
      var filterCopy = await new FilterCopy({
        name: data[i]["name"],
        email: data[i]["email"],
        mobile: data[i]["mobile"],
        ticket_no: data[i]["ticket_no"],
        order_id: data[i]["order_id"],
        address: data[i]["address"],
      });
      await filterCopy.save(filterCopy);
    }
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//To find like data from database AL DATA SOURCE NEW
exports.getLikeAlDataSourceNew = async (req, res) => {
  try {
    var name = req.body.name;
    var email = req.body.email;
    var data = await FilterCopy.find({
      $or: [{ name: { $regex: name } }, { email: { $regex: email } }],
    });

    //Truncating the collection before saving it to the database
    await FilterCopy.deleteMany({});
    for (let i = 0; i < data.length; i++) {
      var filterCopy = await new FilterCopy({
        name: data[i]["name"],
        email: data[i]["email"],
        mobile: data[i]["mobile"],
        ticket_no: data[i]["ticket_no"],
        order_id: data[i]["order_id"],
        address: data[i]["address"],
      });
      await filterCopy.save(filterCopy);
    }
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//Get AL TEST Percentage
exports.getAlTestPer = async (req, res) => {
  try {
    var prcnt = req.body.prcnt;
    var data = await AlTest.find().count();
    var data1 = (data / 100) * prcnt;
    var name = req.body.name;
    var order_id = req.body.order_id;
    var email = req.body.email;
    var dateorequest = req.body.dateorequest;
    var ticket_no = req.body.ticket_no;
    var mobile = req.body.mobile;
    if (data1 < 1) {
      return res.status(200).json("0");
    } else if (data1 > 0) {
      var data2 = await AlTest.find({
        $or: [
          { name: { $in: name } },
          { email: { $in: email } },
          { ticket_no: { $in: ticket_no } },
          { order_id: { $in: order_id } },
          { mobile: { $in: mobile } },
          { dateorequest: { $in: dateorequest } },
        ],
      }).limit(data1);

      //Truncating the collection before saving it to the database
      await FilterCopy.deleteMany({});
      for (let i = 0; i < data2.length; i++) {
        var filterCopy = await new FilterCopy({
          name: data2[i]["name"],
          email: data2[i]["email"],
          mobile: data2[i]["mobile"],
          ticket_no: data2[i]["ticket_no"],
          order_id: data2[i]["order_id"],
          dateorequest: data2[i]["dateorequest"],
        });
        await filterCopy.save(filterCopy);
      }
      return res.status(200).json(data2);
    }
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//To find range of data from database AL Test
exports.getRangeAlTest = async (req, res) => {
  try {
    var min = req.body.min;
    var max = req.body.max;
    var name = req.body.name;
    var order_id = req.body.order_id;
    var email = req.body.email;
    var dateorequest = req.body.dateorequest;
    var ticket_no = req.body.ticket_no;
    var mobile = req.body.mobile;
    var data = await FilterCopy.find({
      $or: [
        { name: { $in: name } },
        { email: { $in: email } },
        { ticket_no: { $in: ticket_no } },
        { order_id: { $in: order_id } },
        { mobile: { $in: mobile } },
        { dateorequest: { $in: dateorequest } },
      ],
    })
      .skip(min)
      .limit(max);
    //Truncating the collection before saving it to the database
    await FilterCopy.deleteMany({});
    for (let i = 0; i < data.length; i++) {
      var filterCopy = await new FilterCopy({
        name: data[i]["name"],
        email: data[i]["email"],
        mobile: data[i]["mobile"],
        ticket_no: data[i]["ticket_no"],
        order_id: data[i]["order_id"],
        dateorequest: data[i]["dateorequest"],
      });
      await filterCopy.save(filterCopy);
    }
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//To find like data from database AL Test
exports.getLikeAlTest = async (req, res) => {
  try {
    var name = req.body.name;
    var email = req.body.email;
    var data = await FilterCopy.find({
      $or: [{ name: { $regex: name } }, { email: { $regex: email } }],
    });
    //Truncating the collection before saving it to the database
    await FilterCopy.deleteMany({});
    for (let i = 0; i < data.length; i++) {
      var filterCopy = await new FilterCopy({
        name: data[i]["name"],
        email: data[i]["email"],
        mobile: data[i]["mobile"],
        ticket_no: data[i]["ticket_no"],
        order_id: data[i]["order_id"],
        dateorequest: data[i]["dateorequest"],
      });
      await filterCopy.save(filterCopy);
    }
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//Get PSF TEST Percentage
exports.getPsfTestPer = async (req, res) => {
  try {
    var prcnt = req.body.prcnt;
    var data = await PsfTest.find().count();
    var data1 = (data / 100) * prcnt;
    var name = req.body.name;
    var company_name = req.body.company_name;
    var email = req.body.email;
    var registration_no = req.body.registration_no;
    var ticket_no = req.body.ticket_no;
    var mobile = req.body.mobile;
    if (data1 < 1) {
      return res.status(200).json("0");
    } else if (data1 > 0) {
      var data2 = await PsfTest.find({
        $or: [
          { name: { $in: name } },
          { email: { $in: email } },
          { ticket_no: { $in: ticket_no } },
          { company_name: { $in: company_name } },
          { mobile: { $in: mobile } },
          { registration_no: { $in: registration_no } },
        ],
      }).limit(data1);

      //Truncating the collection before saving it to the database
      await FilterCopy.deleteMany({});
      for (let i = 0; i < data2.length; i++) {
        var filterCopy = await new FilterCopy({
          name: data2[i]["name"],
          email: data2[i]["email"],
          mobile: data2[i]["mobile"],
          ticket_no: data2[i]["ticket_no"],
          registration_no: data2[i]["registration_no"],
          company_name: data2[i]["company_name"],
        });
        await filterCopy.save(filterCopy);
      }
      return res.status(200).json(data2);
    }
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//To find range of data from database PSF Test
exports.getRangePsfTest = async (req, res) => {
  try {
    var min = req.body.min;
    var max = req.body.max;
    var name = req.body.name;
    var company_name = req.body.company_name;
    var email = req.body.email;
    var registration_no = req.body.registration_no;
    var ticket_no = req.body.ticket_no;
    var mobile = req.body.mobile;
    var data = await FilterCopy.find({
      $or: [
        { name: { $in: name } },
        { email: { $in: email } },
        { ticket_no: { $in: ticket_no } },
        { registration_no: { $in: registration_no } },
        { mobile: { $in: mobile } },
        { company_name: { $in: company_name } },
      ],
    })
      .skip(min)
      .limit(max);
    //Truncating the collection before saving it to the database
    await FilterCopy.deleteMany({});
    for (let i = 0; i < data.length; i++) {
      var filterCopy = await new FilterCopy({
        name: data[i]["name"],
        email: data[i]["email"],
        mobile: data[i]["mobile"],
        ticket_no: data[i]["ticket_no"],
        registration_no: data[i]["registration_no"],
        company_name: data[i]["company_name"],
      });
      await filterCopy.save(filterCopy);
    }
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//To find like data from database PSF Test
exports.getLikePsfTest = async (req, res) => {
  try {
    var name = req.body.name;
    var email = req.body.email;
    var data = await FilterCopy.find({
      $or: [{ name: { $regex: name } }, { email: { $regex: email } }],
    });
    //Truncating the collection before saving it to the database
    await FilterCopy.deleteMany({});
    for (let i = 0; i < data.length; i++) {
      var filterCopy = await new FilterCopy({
        name: data[i]["name"],
        email: data[i]["email"],
        mobile: data[i]["mobile"],
        ticket_no: data[i]["ticket_no"],
        registration_no: data[i]["registration_no"],
        company_name: data[i]["company_name"],
      });
      await filterCopy.save(filterCopy);
    }
    return res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//Submiting and assigning the data to the users
exports.submitSurvey = async (req, res) => {
  try {
    // Create
    var submitSurveyt = await new Survey({
      name: req.body.name,
      email: req.body.email,
      order_id: req.body.order_id,
      ticket_no: req.body.ticket_no,
      mobile: req.body.mobile,
      registration_no: req.body.registration_no,
      state: req.body.state,
      city: req.body.city,
      company: req.body.company,
      company_name: req.body.company_name,
      dateorequest: req.body.dateorequest,
      address: req.body.address,
      vehicle_no: req.body.vehicle_no,
      agentId: req.body.agentId,
    });

    await submitSurveyt.save(submitSurveyt);
    return res.status(200).json("Added Successfully!");
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred.",
    });
  }
};

//Submiting and assigning the data to the users
exports.DataSource = async (req, res) => {
  // Create
  var datasource = await new DataSource({
    name: req.body.name,
  });

  await datasource.save((err, success) => {
    if (success) {
      return res.status(200).json({
        message: "Data Source added successfully!",
      });
    } else if (err.code == 11000) {
      console.log("error", err);
      return res.status(422).json({
        error: "Data Source is already taken",
      });
    } else {
      return res.status(500).json({
        error: "Error occured please try again",
      });
    }
  });
};

exports.getCollection = async (req, res) => {
  try {
    var name = req.body.name;
    var data = await DataSource.find({ name });
    return res.status(200).json(data);
  } catch (err) {
    return res.json("ERROR");
  }
};

exports.getDataSource = async (req, res) => {
  try {
    var data = await DataSource.find({});
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.dynamicCollection = async (req, res) => {
  try {
    var stuff = {
      names: req.body.names,
      mobile: req.body.mobile,
      email: req.body.email,
      test: req.body.test,
    }; // Define info.
    var Model = createModelForName(req.body.name); // Create the model.
    var model = Model(stuff); // Create a model instance.
    model.save(function (err) {
      // Save
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json("success");
    });
    var datasource = await new DataSource({
      name: req.body.name,
    });
    await datasource.save(datasource);
  } catch (err) {
    return res.json(err);
  }
};

var establishedModels = {};
function createModelForName(name) {
  if (!(name in establishedModels)) {
    // var test = req.body.test;
    var Any = new Schema({
      name: String,
      mobile: String,
      email: String,
      test: {},
    });
    establishedModels[name] = mongoose.model(name, Any);
  }
  return establishedModels[name];
}

exports.testt = async (req, res) => {
  try {
    var name = req.body.name;
    if (!(name in establishedModels)) {
      return res.status(200).json("available");
    } else {
      return res.status(422).json("Unavailable");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

//Data upload
// -> Multer Upload Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

exports.upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "text/csv") {
      cb(null, true);
    } else {
      cb(null, false);
      req.formaterror = "Only .csv format allowed";
      return cb(null, "Only .csv allowed");
    }
  },
});

//Upload aldata source new
exports.uploaddataAlDataNew = (req, res) => {
  if (req.formaterror) {
    return res.status(500).send({
      success: false,
      message: `Only CSV files are allowed`,
      chk: "2",
    });
  }
  var i = 1;
  csv()
    .fromFile(req.file.path)

    .then((jsonObj) => {
      // console.log(jsonObj);
      var arrayToInsert = [];
      jsonObj.map(async (element) => {
        var temp = {
          created_at: element.created_at,
          dispositionid: element.dispositionid,
          email: element.email,
          id: element.id,
          mobile: element.mobile,
        };
        arrayToInsert.push(temp);
        i++;
      });

      AlDataSourceNew.insertMany(arrayToInsert, (err, result) => {
        if (result) {
          return res.status(200).json({
            SUCCESS: "data uploaded",
            chk: "0",
          });
        } else {
          return res.status(400).json({
            error: "error",
            chk: "0",
          });
        }
      });
    });
};

//Upload Psf test
exports.uploaddataPsfTest = (req, res) => {
  if (req.formaterror) {
    return res.status(500).send({
      success: false,
      message: `Only CSV files are allowed`,
      chk: "2",
    });
  }
  var i = 1;
  csv()
    .fromFile(req.file.path)

    .then((jsonObj) => {
      // console.log(jsonObj);
      var arrayToInsert = [];
      jsonObj.map(async (element) => {
        var temp = {
          created_at: element.created_at,
          dispositionid: element.dispositionid,
          email: element.email,
          id: element.id,
          mobile: element.mobile,
        };
        arrayToInsert.push(temp);
        i++;
      });

      PsfTest.insertMany(arrayToInsert, (err, result) => {
        if (result) {
          return res.status(200).json({
            SUCCESS: "data uploaded",
            chk: "0",
          });
        } else if (err.code == 11000) {
          return res.status(422).json({
            error: `Email already exists at row ${i}`,
            chk: "1",
          });
        } else {
          return res.status(400).json({
            error: "error",
          });
        }
      });
    });
};

//Upload Al data source
exports.uploaddataAlDataSource = (req, res) => {
  if (req.formaterror) {
    return res.status(500).send({
      success: false,
      message: `Only CSV files are allowed`,
      chk: "2",
    });
  }
  console.log("dfg");
  var i = 1;

  csv()
    .fromFile(req.file.path)

    .then((jsonObj) => {
      // console.log(jsonObj);
      var arrayToInsert = [];
      jsonObj.map(async (element) => {
        var temp = {
          dispositionid: element.dispositionid,
          email: element.email,
          id: element.id,
          mobile: element.mobile,
        };
        arrayToInsert.push(temp);
        i++;
      });

      AlDataSource.insertMany(arrayToInsert, (err, result) => {
        if (result) {
          return res.status(200).json({
            SUCCESS: "data uploaded",
            chk: "0",
          });
        } else if (err.code == 11000) {
          return res.status(422).json({
            error: `Email already exists at row ${i}`,
            chk: "1",
          });
        } else {
          return res.status(400).json({
            error: "error",
          });
        }
      });
    });
};

//Upload Japan
exports.uploaddataJapan = (req, res) => {
  if (req.formaterror) {
    return res.status(500).send({
      success: false,
      message: `Only CSV files are allowed`,
      chk: "2",
    });
  }
  var i = 1;
  csv()
    .fromFile(req.file.path)

    .then((jsonObj) => {
      // console.log(jsonObj);
      var arrayToInsert = [];
      jsonObj.map(async (element) => {
        var temp = {
          dispositionid: element.dispositionid,
          email: element.email,
          id: element.id,
          mobile: element.mobile,
          created_at: element.created_at,
        };
        arrayToInsert.push(temp);
        i++;
      });

      Japan.insertMany(arrayToInsert, (err, result) => {
        console.log(err);
        if (result) {
          return res.status(200).json({
            SUCCESS: "data uploaded",
            chk: "0",
          });
        } else {
          return res.status(400).json({
            error: "error",
            chk: "1",
          });
        }
      });
    });
};

//Upload Al test
exports.uploaddataAlTest = (req, res) => {
  if (req.formaterror) {
    return res.status(500).send({
      success: false,
      message: `Only CSV files are allowed`,
      chk: "2",
    });
  }
  var i = 1;
  csv()
    .fromFile(req.file.path)

    .then((jsonObj) => {
      // console.log(jsonObj);
      var arrayToInsert = [];
      jsonObj.map(async (element) => {
        var temp = {
          dispositionid: element.dispositionid,
          email: element.email,
          id: element.id,
          mobile: element.mobile,
          dateorequest: element.dateorequest,
        };
        arrayToInsert.push(temp);
        i++;
      });

      AlTest.insertMany(arrayToInsert, (err, result) => {
        if (result) {
          return res.status(200).json({
            SUCCESS: "data uploaded",
            chk: "0",
          });
        } else {
          return res.status(400).json({
            error: "error",
            chk: "1",
          });
        }
      });
    });
};

//Create Question
exports.CreateQuestion = async (req, res) => {
  try {
    // Create

    var createquestion = await new CreateQuestion({
      questionbankname: req.body.questionbankname,
      questiontype: req.body.questiontype,
      question: req.body.question,
    });

    await createquestion.save(createquestion);
    var quest = await new QuestionList({
      questionbankname: req.body.questionbankname,
    });
    await quest.save(quest);
    return res.status(200).json("Added Successfully!");
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred.",
    });
  }
};

//Create Survey
exports.CreateSurvey = async (req, res) => {
  try {
    // Create
    var createsurvey = await new CreateSurvey({
      questionbucket: req.body.questionbucket,
      templatename: req.body.templatename,
      selectedquestion: req.body.selectedquestion,
      openingscript: req.body.openingscript,
      closingscript: req.body.closingscript,
      startdate: req.body.startdate,
      enddate: req.body.enddate,
      status: req.body.status,
      channel: req.body.channel,
    });

    await createsurvey.save(createsurvey);
    return res.status(200).json("Added Successfully!");
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred.",
    });
  }
};

//Get survey details
exports.surveyList = async (req, res) => {
  try {
    var data = await CreateSurvey.find();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};

//Get template name
exports.getTemplate = async (req, res) => {
  try {
    var templatename = req.body.templatename;
    var data = await CreateSurvey.find({ templatename });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json("error");
  }
};

//Get Question bank list
exports.getQuestionBankList = async (req, res) => {
  try {
    var data = await QuestionList.find({});
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json("error");
  }
};

//Check Question bank name
exports.checkQuestionBankList = async (req, res) => {
  try {
    var questionbankname = req.body.questionbankname;
    var data = await QuestionList.find({ questionbankname });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json("error");
  }
};

//Assigning data to users
exports.assignData = async (req, res) => {
  try {
    var assigningData = [];
    // var data = await Japan.find().count();
    var data1 = await User.find().count();
    assigningData = req.body.assigningData;
    var userid = req.body.userid;
    var data = assigningData.length;
    // console.log(data4);
    var total = Math.floor(data / data1);
    var finalData = {};
    k = 0;
    for (var i = 0, l = 0; i < userid.length; i++) {
      finalData[userid[i]] = [];
      k = k + total;
      for (var j = l; j < k; j++) {
        finalData[userid[i]].push(assigningData[j]);
      }
      l = l + total;
    }
    while (k < assigningData.length) {
      finalData[userid[0]].push(assigningData[k]);
      k++;
    }
    // console.log("finalData....................", finalData);
    await AssignData.deleteMany({});
    var total = Math.floor(data / data1);
    var x = finalData;
    var joindata = [];
    Object.keys(x).forEach(function (key) {
      // console.log("Key : " + key + ", Value : ");
      var data = x[key];
      joindata.push({ userid: key, assigningData: x[key] });
      // for (var i = 0; i < data.length; i++) {
      //   // console.log("data[i]...", data[i]);
      //   joindata.push({ userid: key, japanid: data[i] });
      // }
    });
    AssignData.insertMany(joindata, (err, result) => {
      if (result) {
        return res.status(200).json({
          SUCCESS: "added",
          chk: "0",
        });
      } else {
        return res.status(400).json({
          error: "error",
          chk: "0",
        });
      }
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};

//sheet data details
exports.sheetDetails = async (req, res) => {
  try {
    var sheet = await new Sheet({
      surveyname: req.body.surveyname,
      startdate: req.body.startdate,
      enddate: req.body.enddate,
      totalrecord: req.body.totalrecord,
      status: req.body.status,
      surveycompleted: req.body.surveycompleted,
    });

    await sheet.save(sheet);
    return res.status(200).json("Added Successfully!");
  } catch (err) {
    return res.status(500).json(err);
  }
};

//sheet data get
exports.getSheetDetails = async (req, res) => {
  try {
    var data = await Sheet.find();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};

//Retrive  survey details of customers by ID
exports.findOneSurvey = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = await Sheet.findById(userId);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//Sheet Survey May create
exports.sheetSurveyMay = async (req, res) => {
  try {
    var surveymay = await new SurveyMay({
      ticketnumber: req.body.ticketnumber,
      employeename: req.body.employeename,
      phone: req.body.phone,
      city: req.body.city,
      company: req.body.company,
      email: req.body.email,
      id: req.body.id,
      dispositionid: req.body.dispositionid,
      status: req.body.status,
    });

    await surveymay.save(surveymay);
    return res.status(200).json("Added Successfully!");
  } catch (err) {
    return res.status(500).json(err);
  }
};

//Get details of survey may create
exports.getDetailsofSheetSurveyMay = async (req, res) => {
  try {
    var data = await SurveyMay.find();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};

//Retrive  survey details of customers by ID
exports.findOneSurveyMay = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = await SurveyMay.findById(userId);
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving data.",
    });
  }
};

//Sheet Survey May submit
exports.sheetSurveyMaySubmit = async (req, res) => {
  try {
    var temp = await new SubmitMaySurvey({
      openingscript: req.body.openingscript,
      closingscript: req.body.closingscript,
      question1: req.body.question1,
      question2: req.body.question2,
      reason: req.body.reason,
      reasonsubdisposition: req.body.reasonsubdisposition,
      remarks: req.body.remarks,
      disposition: req.body.disposition,
      subdisposition: req.body.subdisposition,
    });

    await temp.save(temp);
    return res.status(200).json("Added Successfully!");
  } catch (err) {
    return res.status(500).json(err);
  }
};

//Assigning data to users Manually
exports.assignDataManual = async (req, res) => {
  try {
    var dataJapan = req.body.dataJapan;
    var dataUsers = await User.find();
    var assigningData = req.body.assignDataUsers;
    var finalData = {};
    k = 0;
    Object.keys(assigningData).forEach(function (key) {
      var user = dataUsers.filter((it) => it.name == key);
      user = user[0];
      finalData[user] = [];
      for (var j = k; j < k + parseInt(assigningData[key]); j++) {
        finalData[user].push(dataJapan[j]);
      }
      k = k + parseInt(assigningData[key]);
    });

    await AssignData.deleteMany({});

    var x = finalData;
    var joindata = [];
    Object.keys(x).forEach(function (key) {
      joindata.push({ userid: key, assigningData: x[key] });
    });
    AssignData.insertMany(joindata, (err, result) => {
      if (result) {
        return res.status(200).json({
          SUCCESS: "added",
          chk: "0",
        });
      } else {
        return res.status(400).json({
          error: "error",
          chk: "0",
        });
      }
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Delete an agent with the specified id in the request
exports.DeleteAgent = (req, res) => {
  const id = req.params.id;
  Sheet.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`,
        });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};
