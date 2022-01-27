const names = ['Gerardo', 'Hizan', 'Iker', 'Jhon', 'Jane', 'Sebastian', 'Alex', 'Heather', 'Jen', 'Meriel', 'María', 'Mario', 'Katharine', 'Florence', 'Christie', 'Pearlie', 'Huey', 'Patrice', 'Precious', 'Albina', 'Leyton', 'Avis', 'Ford', 'Kevan', 'Nick', 'Elroy', 'Grey', 'Jimi', 'Denny', 'Atanasio', 'Gale', 'Doyle', 'Wynona'];
const surnames = ['Jiménez', 'Lizana', 'García', 'Valverde', 'Doe', 'Lisette', 'Freeman', 'Rupert', 'Symphony', 'Tracy', 'Dewayne', 'Mafalda', 'Luisa', 'Laila', 'Eustace', 'Lisette', 'Albino', 'Albina', 'Leyton', 'Diane', 'Sadie', 'Nicholas', 'Blake', 'Judith', 'Krystina', 'Jepson', 'Jepson', 'Hanson', 'Plank', 'Read', 'Hurst'];
const mailcompanies = ['gmail.com', 'mail.com', 'outlook.com', 'yahoo.com', 'icloud.com', 'yandex.ru']

// * main fakefaker object
export const fakefaker = {
    completeName: () => {
        return names[Math.floor(Math.random() * names.length)] + surnames[Math.floor(Math.random() * surnames.length)]
    },
    name: () => {
        return names[Math.floor(Math.random() * names.length)];
    },
    surName: () => {
        return surnames[Math.floor(Math.random() * surnames.length)];
    },
    emailCompany: () => {
        return mailcompanies[Math.floor(Math.random() * mailcompanies.length)];
    },
    email: (name, surName) => {
        name = name ?? fakefaker.name();
        surName = surName ?? fakefaker.surName();
        let mailcompany = fakefaker.emailCompany();
        let email = `${name.toLocaleLowerCase()}.${surName.toLocaleLowerCase().substring(0, 3)}@${mailcompany}`
        return email;
    },
    password: () => {
        var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._=+-[]{}",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    }
}

export function $(selector) {
    const self = {
        element:document.querySelector(selector),
        html: () => self.element,
    }
}