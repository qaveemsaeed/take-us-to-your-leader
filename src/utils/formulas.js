export const pathFromBezierCurve = (cubicBezierCurve) => {
    const {
        initailAxia, initialControlPoint, endingControlPoint, endingAxis,
    } = cubicBezierCurve;
    return `
        M ${initailAxia.x} ${initailAxia.y}
        c ${initialControlPoint.x} ${initialControlPoint.y}
        ${endingControlPoint.x} ${endingControlPoint.y}
        ${endingAxis.x} ${endingAxis.y}
    `
}