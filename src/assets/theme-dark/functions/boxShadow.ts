import pxToRem from './pxToRem';
import rgba from './rgba';

function boxShadow(
    offset: number[] = [],
    radius: number[] = [],
    color: string,
    opacity: number,
    inset = ''
) {
    const [x, y] = offset;
    const [blur, spread] = radius;

    return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(
        spread
    )} ${rgba(color, opacity)}`;
}

export default boxShadow;
