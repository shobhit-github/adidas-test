import {DataSource} from "typeorm";
import ormConfig from '../../ormConfig.json';
import * as ent from "../entities";



/* Database Connection
-------------------------- */

const otherDbConfigs: any = {
    entities: [ent.Users, ent.Albums, ent.Images],
}

const dataSourceConnection = new DataSource({ ...ormConfig.Database, ...otherDbConfigs});

dataSourceConnection
    .initialize()
    .then(() => {
        console.log("✅  Connection to Database is successful")
    })
    .catch((error) => {
        console.error('Unable to Connected to Database Error :: ' + error)
    });


export {dataSourceConnection as dataSource}
