import { GreatCircle } from './great-circle';
import { Constants } from './constants';

describe('Great Circle', () => {
    let greatCircle: GreatCircle;

    beforeEach(() => {
        greatCircle = new GreatCircle();
    });

    it('main defined', async () => {
        expect(greatCircle).toBeInstanceOf(GreatCircle); 
    });

    it('invite customers', async () => {
        const isInvited = await greatCircle.isInvited(Constants.refLat, Constants.refLong);
        expect(isInvited).toBeDefined();
    });
});