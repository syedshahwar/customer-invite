import { GreatCircle } from './great-circle';

describe('Great Circle', () => {
    let greatCircle: GreatCircle;

    beforeEach(() => {
        greatCircle = new GreatCircle();
    });

    it('Great Circle defined', async () => {
        expect(greatCircle).toBeInstanceOf(GreatCircle); 
    });

    it('customer invited', async () => {
        const isInvited = await greatCircle.isInvited(52.503256, 13.486082);
        expect(isInvited).toEqual(true);
    });

    it('customer not invited', async () => {
        const isInvited = await greatCircle.isInvited(49.91073719, 14.76316796);
        expect(isInvited).toEqual(false);
    });
});