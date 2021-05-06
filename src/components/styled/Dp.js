// MDPI 기준 1dp = 1px;
const mdpi = 160;

// 1em 기준 16px 기준;
const rem = 16;

// 360, 760
const Dp = (value) => {
    if(typeof(value) != 'number'){
        const a = [];
        for (const el of value) {
            a.push((el * (mdpi / 160)) / rem + 'rem ');
        }
        return a;
    }else{
        value = (value * (mdpi / 160) / rem + 'rem');
        return value;    
    }
}

export default Dp;
