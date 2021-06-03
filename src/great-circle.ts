import { Constants } from './constants';

export class GreatCircle {

    private refLat: number;
    private refLong: number; 
    private radiusOfEarth: number;
    private inviteRadius: number;

    constructor(){

        this.refLat = Constants.refLat;
        this.refLong = Constants.refLong;
        this.radiusOfEarth = Constants.radiusOfEarth; 
        this.inviteRadius = Constants.inviteRadius;
    }

    public isInvited(id: string, lat: number, long: number): boolean{
            
        const dLat: number = this.deg2rad(lat-this.refLat); 
        const dLon: number = this.deg2rad(long-this.refLong); 
        const a: number = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(this.deg2rad(this.refLat)) * Math.cos(this.deg2rad(this.refLat)) * 
            Math.sin(dLon/2) * Math.sin(dLon/2); 
        const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d: number = this.radiusOfEarth * c; 

        if (d <= this.inviteRadius)
            return true;

        return false;
    }

    private deg2rad(deg:number): number {
        return deg * (Math.PI/180)
    }
}