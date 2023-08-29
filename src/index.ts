import {app} from "./setting";
import {runDb} from "./db/db";

const port = 3000//process.env.PORT//

const startApp = async () => {
    await runDb()
    app.listen(port, () => {
        console.log(`Example app listening on port: ${port}`)
    })
}
startApp()