const KEY = "59c92ddf04067cfd77ad9ac4";
const URL = "https://js20170727quiz-9acd.restdb.io/rest/messages";

export default class Message {
    constructor() {}

    fetch(done) {
        let xhr = new XMLHttpRequest();

        xhr.open("GET", URL);

        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState === 4) {
                try {
                    let data = JSON.parse(xhr.responseText);
                    done(data);
                } catch (err) {
                    console.error(err);
                }
            }
        });

        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("x-apikey", KEY);
        xhr.setRequestHeader("cache-control", "no-cache");

        xhr.send();
    }

    addMessage(user, text, done) {
        let xhr = new XMLHttpRequest();

        xhr.open("POST", URL);

        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState === 4) {
                try {
                    console.log("sent");
                } catch (err) {
                    console.error(err);
                }
            }
        });

        xhr.setRequestHeader("content-type", "application/json");
        xhr.setRequestHeader("x-apikey", KEY);
        xhr.setRequestHeader("cache-control", "no-cache");

        xhr.send(
            JSON.stringify({
                author: user,
                message: text
            })
        );
    }

    start(done) {
        setInterval(() => {
            this.fetch(done);
        }, 3000);
    }
}
