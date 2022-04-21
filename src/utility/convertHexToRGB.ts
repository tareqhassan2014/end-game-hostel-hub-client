export const convertHexToRGB = (hex: string) => {
    // check if it's a rgba
    if (hex.match('rgba')) {
        const triplet = hex.slice(5).split(',').slice(0, -1).join(',');
        return triplet;
    }

    let c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = '0x' + c.join('');

        return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',');
    }
};
