import { Observable, fromEvent } from 'rxjs';

function greeter(person: string) {
    return 'Hello, ' + person;
}

function setUpEvent() {
    // const button = fromEvent(document.getElementById('button1'), 'click');
    // button.subscribe(() => console.log('button clicked'));
}
var user = 'Jane User';

document.body.innerHTML = greeter(user);
