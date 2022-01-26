class Github {
    constructor() {
        this.client_id = '0c68abfb1f359103a104';
        this.client_secret = 'af95f3f81542918dfb264bf2c862b449c7866af3';
    }


    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?
         client_id=${this.client_id}&client_secret=${this.client_secret}`);

         const profile = await profileResponse.json();

         return {
            profile
         }
    }


}