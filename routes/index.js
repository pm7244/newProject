const express = require("express")
const cmsRoutes = require("./subRoutes/cmsApi")
const webRoutes = require("./subRoutes/webApi")
const authRoutes = require("./subRoutes/authApi")
const router = express.Router()

router.use("/api",cmsRoutes)
router.use("/cms(*)",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","cms","cms.html"))
})
router.use(webRoutes)
router.use("/auth", authRoutes);
router.use("*", (req, res) => {
  res.render("404");
});
module.exports = router