function linearGradient(color: string, colorState: string, angle = 195) {
    return `linear-gradient(${angle}deg, ${color}, ${colorState})`;
}

export default linearGradient;
