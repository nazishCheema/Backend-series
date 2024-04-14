const AsyncHandler = (asyncFunction) => {
  async (err, req, res, next) => {
    try {
      await asyncFunction(req, res, next);
    } catch (error) {
      res.status(err.code || 500).json({
        success: false,
        message: err.message,
      });
    }
  };
};
export default AsyncHandler;
