import { promises as fs } from 'fs';
import * as path from 'path';
import validator from 'validator';

import { customer } from './interfaces';

export class FileReader {

    private customers: customer[];

    constructor(){
        this.customers = [];
    }

    public async readCustomers(filePath: string): Promise<customer[]>{
        
        const data = await fs.readFile(path.resolve(__dirname, filePath), 'utf8');
        const customersLine: string[] = data.split(/\r?\n/);

        customersLine.forEach((line) => {

            const values: string[] = line.split(',');
            const id: string = values[0].split(':')[1].trim();
            const lat: string = values[1].split(':')[1].trim();
            const long: string = values[2].split(':')[1].trim();

            if (!validator.isUUID(id) || !validator.isNumeric(lat) || !validator.isNumeric(long)){
                console.log("*** Warning Invalid Customer data: ", id, lat, long);
            }
            else {
                const customer: customer = {
                    id,
                    lat: parseFloat(lat),
                    long:  parseFloat(long),
                }
    
                this.customers.push(customer)
            }

        });
        return this.customers;
    }
}