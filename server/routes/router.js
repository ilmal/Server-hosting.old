const router = require("express").Router()

const userRouter = require("./userRoutes/home")
const mcConfRouter = require("./mcConfRoutes")
const k8sRouter = require("./k8sApiRoutes")
const serverRouter = require("./serverRouter")


router.use("/user", userRouter)
router.use("/mcConf", mcConfRouter)
router.use("/server", serverRouter)
router.use("/k8s", k8sRouter)

module.exports = router