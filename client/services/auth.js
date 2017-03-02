const auth = {
    saveToken: (token) => {
        window.localStorage['jwt'] = token;
    },

    getToken: () => {
        return window.localStorage['jwt'];
    },

    logout: () => {
        window.localStorage.removeItem('jwt');
    },

    isLoggedIn: function() {
        const token = this.getToken();
        let payload;

        if(token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            payload = JSON.parse(payload);
            return payload.exp > Date.now() / 1000;
        } else {
            return false;
        }
    },

    currentUser: function() {
        if(this.isLoggedIn()) {
            const token = this.getToken();
            let payload = token.split('.')[1];
            payload = window.atob(payload);
            payload = JSON.parse(payload);

            return {
                username: payload.username,
            };
        }
    }
};

export default auth;