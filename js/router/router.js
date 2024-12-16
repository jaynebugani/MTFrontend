function setRouter() {
    const path = window.location.pathname;

    switch (path) {
        case "/register.html":

        case "/index.html":

        case "/forget-password.html":

                case "/reset-password.html":

        case "/forget-password.html":
                if (localStorage.getItem("token")) {
                    window.location.pathname = "/dashboard.html";
                }
                break;    

        case "/dashboard.html":
        case "/budget.html":
        case "/expenses.html":
        case "/summary.html":
            if (localStorage.getItem("token") == null) {
                window.location.pathname = "/index.html";
            }
            break;
         

        default:
            break;
    }
}

const url = "https://88f4-216-247-48-13.ngrok-free.app/moneytracker-backend/public";

export { setRouter, url };

