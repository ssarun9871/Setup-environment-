const app = require('express')();
require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` });

app.listen(8000, () => {
    console.log("environment ====>> ", process.env.environment);
});
