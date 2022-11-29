const { readdir } = require("fs/promises");
const { Router } = require("express");
const { constants } = require("../utils");

const { featuresDir } = constants;

const getResources = async (req, res) => {
  const features = await readdir(featuresDir);
  const fullUrl = `${req.protocol}://${req.get("host")}${req.baseUrl}`;

  const resources = features.reduce(
    (accumulator, feature) => ({
      ...accumulator,
      [feature]: `${fullUrl}/${feature}`,
    }),
    {}
  );

  res.json(resources);
};

const router = Router();

router.get("/", getResources);

module.exports = router;
