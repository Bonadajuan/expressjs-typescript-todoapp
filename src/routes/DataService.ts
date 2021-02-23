import dotenv from "dotenv";
import { Client } from "pg";
import * as BO from "../BO";

export class DataService {
    static async getTodos(): Promise<BO.Todo[]> {
        dotenv.config();
        const client = new Client();
        try {
            await client.connect();
            const sql = "SELECT id, title, isDone FROM TODO";
            const results = await client.query(sql);
//            return results.rows;
            const toReturn: BO.Todo[] = [];
            results.rows.forEach(row => {
                toReturn.push(new BO.Todo(row));
            })
            return toReturn;
        } catch (err) {
            throw err;
        } finally {
            await client.end();
        }

        // colocar los datos sin db
        // const toReturn = [{
        //     "id": 1,
        //     "title": "Integrate Vue.js",
        //     "isDone": true
        // }, {
        //     "id": 2,
        //     "title": "Refactor this later",
        //     "isDone": true
        // }, {
        //     "id": 3,
        //     "title": "Write an API",
        //     "isDone": true
        // }, {
        //     "id": 4,
        //     "title": "Get data from a database",
        //     "isDone": false
        // }];
        // return toReturn;

    }
}