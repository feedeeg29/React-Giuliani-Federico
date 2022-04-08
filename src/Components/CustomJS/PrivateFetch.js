let PromiseIsOk = true;

    const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (PromiseIsOk) {
                resolve(task);
            } else {
                reject(new Error('Error'));
            }
        }, time);
    });
}
export default customFetch;