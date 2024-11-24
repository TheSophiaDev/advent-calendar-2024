export const isValidMonth = (month: number): boolean => {
    const today = new Date().getMonth() + 1;
    return process.env.DEBUG === "true" ? true : today === month;
}

export const isValidDay = (day: number): boolean => {
    const today = new Date().getDate();
    return process.env.DEBUG === "true" ? true : today >= day;
}
