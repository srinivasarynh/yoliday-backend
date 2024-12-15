const catchAsync = require('../utils/catchAsync');
const data = require('../dev-data/data.json');


exports.getProfile = catchAsync(async (req, res, next) => {

    res.status(200).json({
        status: 'success',
        data: {
          data
        }
    });
});