let getCapture = () => {
    let str = "0123456789abcdefghijklmnopqrstuvwxyz";
    let str2 = "";
    for (let i = 0; i < 4; i++) {
        let randomNum = parseInt(Math.random() * (str.length - 1));
        str2 += str.charAt(randomNum);
    }
    return str2;
}

export default { getCapture };