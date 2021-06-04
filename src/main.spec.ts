import { Main } from './main';

describe('Main', () => {
    let main: Main;

    beforeEach(() => {
        main = new Main();
    });

    it('main defined', async () => {
        expect(main).toBeInstanceOf(Main);
    });

    it('invite customers', async () => {
        const inviteCustomers = await main.inviteCustomers();
        expect(inviteCustomers).toBeUndefined();
    });
});