import { FileReader } from './file-reader';
import { GreatCircle } from './great-circle';
import { customer } from './interfaces';
import { Constants } from './constants';

export class Main {

  private customers: customer[];
  private invitedCustomerIds: string[];
  
  constructor(){
    this.customers = [];
    this.invitedCustomerIds = [];
  }

  public async inviteCustomers(){
    
    const fileReader: FileReader = new FileReader();
    this.customers = await fileReader.readCustomers(Constants.filePath);

    const greatCricle: GreatCircle = new GreatCircle();
    this.customers.forEach(customer =>{
        const isInvited: boolean = greatCricle.isInvited(customer.id, customer.lat, customer.long);
        if (isInvited)
          this.invitedCustomerIds.push(customer.id);
    });

    this.invitedCustomerIds = this.invitedCustomerIds.sort();
    console.log("Invited Customers", this.invitedCustomerIds);
    return;
  }

}

const main: Main = new Main();
main.inviteCustomers();