export class Constants {
    static casesColor = "#69b2f8";
    static hospColor = "#fec85e";
    static deathsColor = "#C12626";
    static pinkColor = "#f77eb9";
    static greenColor = "#41B3A3";
}

export const formatNum = (value: string | number) => {
    let num = parseInt(value.toString());
    let numArray = [];
    while(num > 1000) {
        let remain = num % 1000;
        let remainStr = "";
        if(remain < 10) {
            remainStr = `00${remain}`;
        } else if(remain < 100) {
            remainStr = `0${remain}`;
        } else {
            remainStr = remain.toString();
        }
        numArray.push(remainStr);
        num = Math.floor(num / 1000);
    }
    numArray.push(num.toString());

    return numArray.reverse().join();
}