const NGROK = `${window.location.hostname}`;
console.log('192.168.10.12', NGROK);

// metadatos

const locations = window.location.href
const dates = new Date().getTime()
const dateInt = new Date(dates).toLocaleDateString()
const device = navigator.userAgent
let deviceType;
if (/iPhone|iPad|iPod/.test(device)) {
    deviceType = 'iOS';
} else if (/Android/.test(device)) {
    deviceType = 'Android';
} else if (/windows/){
    deviceType = 'Windows';
} else {
    deviceType = 'Other'
}
const time = new Date().getTime()
const timeStarted = new Date(time).toLocaleTimeString()
console.log(timeStarted);

// DOM

const inputName = document.getElementById('Name')
const inputEmail = document.getElementById('Email')
const inputPhone = document.getElementById('Phone')
const inputDate = document.getElementById('DoB')
const form = document.getElementById('form')
const checkbox = document.getElementById('checkbox')
const btn = document.getElementById('enviar')

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        btn.removeAttribute('disabled')
    } else {
        btn.setAttribute('disabled', true)
    }
})

form.addEventListener('submit', (e) => {

    if (!checkbox.checked) {
        e.preventDefault()
        alert('Checkbox plis')
    } else {
        let newUser = { name: inputName.value, email: inputEmail.value, phone: inputPhone.value, dob: inputDate.value }
        postUser(newUser)

        const SendTime = new Date().getTime()
        const IntDuration = SendTime - time
        const DurationSec = IntDuration / 1000

        let otherData = { locations: locations, date: dateInt, device: deviceType, TimeIntStarted: timeStarted, IntDuration : DurationSec }
        postData(otherData)

        console.log('enviado');
    }

})


async function postUser(user) {

    const data = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }

    await fetch('/user-data', data)

}


async function postData(datas) {

    const data2 = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datas)
    }

    await fetch('/meta-data', data2)

}

